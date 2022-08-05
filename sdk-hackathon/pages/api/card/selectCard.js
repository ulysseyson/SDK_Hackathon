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
    const cardNoStr = req.query.cardNo;

    const arr = ['1', '2', '3'];
    if (arr.indexOf(cardNoStr) == -1) {
      res.send(400);
      return;
    }
    const cardNo = parseInt(cardNoStr);

    const newData = { turnNo: DBSession.turnNo, cards: DBSession.cards };
    newData.turnNo++;
    newData.cards = {
      connect: newData.cards.map(card => {
        return { cid: card.cID };
      }),
    };

    console.log(newData.cards);

    await prisma.session.update({
      where: { userId: DBUser.id },
      data: newData,
    });

    res.send({
      msg: 'done',
    });
  } else {
    res.send({
      error: 'You must be sign in to view the protected content on this page.',
    });
  }
};
