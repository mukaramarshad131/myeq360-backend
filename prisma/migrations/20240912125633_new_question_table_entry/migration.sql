-- CreateTable
CREATE TABLE "competency" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "title" TEXT NOT NULL,

    CONSTRAINT "competency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subCompetency" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "title" TEXT NOT NULL,
    "compentencyId" INTEGER NOT NULL,

    CONSTRAINT "subCompetency_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "assignTo" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "title" TEXT NOT NULL,

    CONSTRAINT "assignTo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "options" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "title" TEXT NOT NULL,
    "questionId" INTEGER NOT NULL,

    CONSTRAINT "options_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "question" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "question" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "assignToId" INTEGER NOT NULL,
    "competencyId" INTEGER NOT NULL,
    "subCompetencyID" INTEGER NOT NULL,

    CONSTRAINT "question_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "subCompetency_compentencyId_key" ON "subCompetency"("compentencyId");

-- CreateIndex
CREATE UNIQUE INDEX "question_assignToId_key" ON "question"("assignToId");

-- CreateIndex
CREATE UNIQUE INDEX "question_competencyId_key" ON "question"("competencyId");

-- CreateIndex
CREATE UNIQUE INDEX "question_subCompetencyID_key" ON "question"("subCompetencyID");

-- AddForeignKey
ALTER TABLE "subCompetency" ADD CONSTRAINT "subCompetency_compentencyId_fkey" FOREIGN KEY ("compentencyId") REFERENCES "competency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "options" ADD CONSTRAINT "options_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_assignToId_fkey" FOREIGN KEY ("assignToId") REFERENCES "assignTo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_competencyId_fkey" FOREIGN KEY ("competencyId") REFERENCES "competency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "question" ADD CONSTRAINT "question_subCompetencyID_fkey" FOREIGN KEY ("subCompetencyID") REFERENCES "subCompetency"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
