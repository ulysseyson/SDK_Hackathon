/*
  Warnings:

  - You are about to drop the column `likedBy` on the `Post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_likedBy_fkey";

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "likedBy";

-- CreateTable
CREATE TABLE "UsersOnPosts" (
    "postId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "likedBy" TEXT NOT NULL,

    CONSTRAINT "UsersOnPosts_pkey" PRIMARY KEY ("postId","userId")
);

-- AddForeignKey
ALTER TABLE "UsersOnPosts" ADD CONSTRAINT "UsersOnPosts_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnPosts" ADD CONSTRAINT "UsersOnPosts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
