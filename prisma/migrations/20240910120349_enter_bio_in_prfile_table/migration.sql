/*
  Warnings:

  - Added the required column `bio` to the `profile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "profile" ADD COLUMN     "bio" TEXT NOT NULL;
