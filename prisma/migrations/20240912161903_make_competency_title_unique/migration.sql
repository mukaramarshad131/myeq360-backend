/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `competency` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "competency_title_key" ON "competency"("title");
