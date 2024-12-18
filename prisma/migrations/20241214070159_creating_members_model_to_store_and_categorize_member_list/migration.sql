/*
  Warnings:

  - A unique constraint covering the columns `[membersId]` on the table `CheckOutDetail` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "CheckOutDetail" ADD COLUMN     "expire_at" TIMESTAMP(3),
ADD COLUMN     "membersId" INTEGER;

-- CreateTable
CREATE TABLE "CategorizedMembers" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "roleId" INTEGER NOT NULL,
    "membersId" INTEGER NOT NULL,

    CONSTRAINT "CategorizedMembers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Members" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "expire_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Members_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategorizedMembersToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategorizedMembersToUser_AB_unique" ON "_CategorizedMembersToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_CategorizedMembersToUser_B_index" ON "_CategorizedMembersToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "CheckOutDetail_membersId_key" ON "CheckOutDetail"("membersId");

-- AddForeignKey
ALTER TABLE "CheckOutDetail" ADD CONSTRAINT "CheckOutDetail_membersId_fkey" FOREIGN KEY ("membersId") REFERENCES "Members"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategorizedMembers" ADD CONSTRAINT "CategorizedMembers_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CategorizedMembers" ADD CONSTRAINT "CategorizedMembers_membersId_fkey" FOREIGN KEY ("membersId") REFERENCES "Members"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategorizedMembersToUser" ADD CONSTRAINT "_CategorizedMembersToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "CategorizedMembers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategorizedMembersToUser" ADD CONSTRAINT "_CategorizedMembersToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
