/*
  Warnings:

  - Added the required column `rank` to the `question` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "question" ADD COLUMN     "rank" TEXT NOT NULL;
