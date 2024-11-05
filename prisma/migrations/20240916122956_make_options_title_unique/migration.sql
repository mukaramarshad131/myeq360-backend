/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `options` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "options_title_key" ON "options"("title");
