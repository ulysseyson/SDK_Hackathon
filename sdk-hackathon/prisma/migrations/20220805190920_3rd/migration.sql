/*
  Warnings:

  - You are about to drop the column `userId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[github]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_sid_fkey";

-- DropIndex
DROP INDEX "User_userId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "userId";

-- CreateIndex
CREATE UNIQUE INDEX "User_github_key" ON "User"("github");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_sid_fkey" FOREIGN KEY ("sid") REFERENCES "User"("github") ON DELETE CASCADE ON UPDATE CASCADE;
