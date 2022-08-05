-- CreateTable
CREATE TABLE "User" (
    "uid" SERIAL NOT NULL,
    "nickname" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Post" (
    "pid" SERIAL NOT NULL,
    "txt" TEXT NOT NULL,
    "star" INTEGER NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("pid")
);

-- CreateTable
CREATE TABLE "_PostToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PostToUser_AB_unique" ON "_PostToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_PostToUser_B_index" ON "_PostToUser"("B");

-- AddForeignKey
ALTER TABLE "_PostToUser" ADD CONSTRAINT "_PostToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("pid") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToUser" ADD CONSTRAINT "_PostToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
