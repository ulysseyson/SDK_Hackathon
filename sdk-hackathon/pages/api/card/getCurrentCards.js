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

    console.log(session);
    
    const newData = DBSession;
    const cards = []

    if (!newData.isPlaying){
        newData.isPlaying = true;
    }
    var i = 0
        while(i < 3) {
            var cardNo = rand(1, 1000);
            var card = await prisma.Card.findFirst({ where: {cID: cardNo}});
            card.sessionId = DBUser.id;
            cards.push(card.cID);
            i++;
        }
        newData.turnNo += 1;
        newData.cards = cards;
        newData.cards = { connect: newData.cards };

        await prisma.session.update({ 
            where: { userId: DBUser.id }, 
            data: newData 
        });
        
        res.send({
            turnNo: newData.turnNo,
            cards: newData.cards
        });
    console.log("done!")
  } else {
    res.send({
      error: 'You must be sign in to view the protected content on this page.',
    });
  }
};

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }