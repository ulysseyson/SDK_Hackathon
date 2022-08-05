import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    const { user } = session;
    const DBUser = await prisma.user.findFirst({ where: { name: user.id } });
    const DBSession = await prisma.session.findFirst({
      where: { userId: DBUser.id },
      include: { cards: true },
    });

    // 세션 기본값 설정
    const newData = DBSession;

    if (newData.turnNo === null) newData.turnNo = 1;
    if (newData.isPlaying === null) newData.isPlaying = false;
    if (newData.cards === null) newData.cards = [];

    await prisma.session.updateMany({ where: { userId: DBUser.id }, data: newData });
    res.send({
      turnNo: newData.turnNo,
      isPlaying: newData.isPlaying,
    });
  } else {
    res.send({
      error: 'You must be sign in to view the protected content on this page.',
    });
  }
};
