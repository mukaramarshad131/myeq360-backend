/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `assignTo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "assignTo_title_key" ON "assignTo"("title");
