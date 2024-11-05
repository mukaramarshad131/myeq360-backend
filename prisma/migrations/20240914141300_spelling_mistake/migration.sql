/*
  Warnings:

  - You are about to drop the column `subCompetencyID` on the `question` table. All the data in the column will be lost.
  - You are about to drop the column `compentencyId` on the `subCompetency` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[subCompetencyId]` on the table `question` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `subCompetencyId` to the `question` table without a default value. This is not possible if the table is not empty.
  - Added the required column `competencyId` to the `subCompetency` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "question" DROP CONSTRAINT "question_subCompetencyID_fkey";

-- DropForeignKey
ALTER TABLE "subCompetency" DROP CONSTRAINT "subCompetency_compentencyId_fkey";

-- DropIndex
DROP INDEX "question_subCompetencyID_key";

-- AlterTable
ALTER TABLE "question" DROP COLUMN "subCompetencyID",
ADD COLUMN     "subCompetencyId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "subCompetency" DROP COLUMN "compentencyId",
ADD COLUMN     "competencyId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "question_subCompetencyId_key" ON "question"("subCompetencyId");

-- AddForeignKey
ALTER TABLE "subCompetency" ADD CONSTRAINT "subCompetency_competencyId_fkey" FOREIGN KEY ("competencyId") REFERENCES "competency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_subCompetencyId_fkey" FOREIGN KEY ("subCompetencyId") REFERENCES "subCompetency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
