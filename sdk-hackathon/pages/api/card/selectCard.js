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
    const cardNo = res.cardNo;

    // 세션 기본값 설정
    const newData = DBSession;
    newData.turnNo++;
    newData.cards = { connect: newData.cards };
    const arr = [1, 2, 3];

    if (arr.some(cardNo)) {
        await prisma.session.update({
        where: { userId: DBUser.id },
        data: newData,
        });
        res.send(200);
    }
    else {
        res.send(400);
  } 
  
}else {
    res.send({
      error: 'You must be sign in to view the protected content on this page.',
    });
  }
};
