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
    });

    const cards = [];

    const newData = {
      isPlaying: true,
      turnNo: DBSession.turnNo,
      cards: DBSession.cards,
    };

    var i = 0;

    const allCards = await prisma.Card.findMany({});
    const allCardsIds = allCards.map(card => card.cID);
    const cardCIDMin = allCardsIds[0];
    const cardCIDMax = allCardsIds[allCardsIds.length - 1];
    const cardRes = [];
    while (i < 3) {
      var cardNo = rand(cardCIDMin, cardCIDMax);
      var card = await prisma.Card.findFirst({ where: { cID: cardNo } });
      card.sessionId = DBUser.id;
      cards.push(card.cID);
      cardRes.push({ cardNum: i, card: { desc: card.desc, url: card.url } });
      i++;
    }
    newData.turnNo += 1;
    newData.cards = cards.map(card => {
      return { cID: card };
    });

    newData.cards = { connect: newData.cards };

    await prisma.session.update({
      where: { userId: DBUser.id },
      data: newData,
    });

    res.send({
      turnNo: newData.turnNo,
      cards: cardRes,
    });
    console.log('done!');
  } else {
    res.send({
      error: 'You must be sign in to view the protected content on this page.',
    });
  }
};

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
