/*
  Warnings:

  - A unique constraint covering the columns `[question]` on the table `question` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Assessment" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,
    "userAge" INTEGER NOT NULL,
    "userLanguage" TEXT NOT NULL,
    "userMaritalStatus" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "status" BOOLEAN NOT NULL,
    "assessment" JSONB NOT NULL,
    "result" JSONB NOT NULL,

    CONSTRAINT "Assessment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "question_question_key" ON "question"("question");

-- AddForeignKey
ALTER TABLE "Assessment" ADD CONSTRAINT "Assessment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
