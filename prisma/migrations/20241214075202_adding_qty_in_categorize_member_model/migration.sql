/*
  Warnings:

  - Added the required column `qty` to the `CategorizedMembers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CategorizedMembers" ADD COLUMN     "qty" INTEGER NOT NULL;
