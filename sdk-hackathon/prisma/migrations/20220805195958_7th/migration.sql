-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_postPid_fkey";

-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "sessionId" TEXT;

-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "turnNo" INTEGER;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_postPid_fkey" FOREIGN KEY ("postPid") REFERENCES "Post"("pid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("id") ON DELETE CASCADE ON UPDATE CASCADE;
