import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  if (session) {
    const { user } = session;
    const DBUser = await prisma.user.findFirst({ where: { name: user.id } });

    const postId = req.query.pid;
    let isnum = /^\d+$/.test(postId);
    if (!isnum) {
      res.send({
        error: 'Invalid postId',
      });
    }
    const DBPost = await prisma.post.findFirst({
      where: { id: parseInt(postId) },
      include: { likedBy: true },
    });
    if (!DBPost) {
      res.send({
        error: 'Post not found.',
      });
    }

    console.log(DBPost);
    const likedUserIds = DBPost.likedBy.map(user => user.userId);
    if (likedUserIds.includes(DBUser.id)) {
      res.send('You already liked this post');
    }

    const newData = {};
    likedUserIds.push(DBUser.id);
    newData.likedBy = likedUserIds.map(userId => {
      return { userId: userId, postId: parseInt(postId) };
    });

    newData.likedBy = { connectOrCreate: { create: newData.likedBy } };

    // Add the user to the post and update
    await prisma.post.update({
      where: { id: parseInt(postId) },
      data: {
        likedBy: {
          connectOrCreate: {
            create: {
              userId: DBUser.id,
            },
            where: {
              postId_userId: {
                userId: DBUser.id,
                postId: parseInt(postId),
              },
            },
          },
        },
        star: DBPost.star + 1,
      },
    });

    res.send({
      msg: 'success',
    });
  } else {
    res.send({
      error: 'You must be sign in to view the protected content on this page.',
    });
  }
};
