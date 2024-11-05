/*
  Warnings:

  - You are about to drop the column `questionId` on the `options` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "options" DROP CONSTRAINT "options_questionId_fkey";

-- AlterTable
ALTER TABLE "options" DROP COLUMN "questionId";

-- CreateTable
CREATE TABLE "_OptionsToQuestion" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OptionsToQuestion_AB_unique" ON "_OptionsToQuestion"("A", "B");

-- CreateIndex
CREATE INDEX "_OptionsToQuestion_B_index" ON "_OptionsToQuestion"("B");

-- AddForeignKey
ALTER TABLE "_OptionsToQuestion" ADD CONSTRAINT "_OptionsToQuestion_A_fkey" FOREIGN KEY ("A") REFERENCES "options"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OptionsToQuestion" ADD CONSTRAINT "_OptionsToQuestion_B_fkey" FOREIGN KEY ("B") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE CASCADE;
