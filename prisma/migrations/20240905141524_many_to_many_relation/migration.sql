/*
  Warnings:

  - You are about to drop the column `userId` on the `roles` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "roles" DROP CONSTRAINT "roles_userId_fkey";

-- AlterTable
ALTER TABLE "roles" DROP COLUMN "userId";

-- CreateTable
CREATE TABLE "_userRoles" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_userRoles_AB_unique" ON "_userRoles"("A", "B");

-- CreateIndex
CREATE INDEX "_userRoles_B_index" ON "_userRoles"("B");

-- AddForeignKey
ALTER TABLE "_userRoles" ADD CONSTRAINT "_userRoles_A_fkey" FOREIGN KEY ("A") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_userRoles" ADD CONSTRAINT "_userRoles_B_fkey" FOREIGN KEY ("B") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
