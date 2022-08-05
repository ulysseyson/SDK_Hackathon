import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    const { user } = session;
    const DBSession = await prisma.session.findFirst({
      where: { id: user.id },
    });
    res.send({
      session: DBSession,
    });
  } else {
    res.send({
      error: 'You must be sign in to view the protected content on this page.',
    });
  }
};
