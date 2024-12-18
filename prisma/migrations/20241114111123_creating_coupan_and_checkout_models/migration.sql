/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `License` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Packages` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "CheckOutDetail" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "userId" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "fName" TEXT NOT NULL,
    "Lname" TEXT NOT NULL,
    "companyName" TEXT,
    "country" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "note" TEXT,
    "items" JSONB NOT NULL,
    "amount" INTEGER NOT NULL,
    "coupanId" INTEGER NOT NULL,

    CONSTRAINT "CheckOutDetail_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Coupan" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "title" TEXT NOT NULL,
    "createdBy" INTEGER NOT NULL,
    "referralId" INTEGER NOT NULL,

    CONSTRAINT "Coupan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "License_title_key" ON "License"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Packages_title_key" ON "Packages"("title");

-- AddForeignKey
ALTER TABLE "CheckOutDetail" ADD CONSTRAINT "CheckOutDetail_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CheckOutDetail" ADD CONSTRAINT "CheckOutDetail_coupanId_fkey" FOREIGN KEY ("coupanId") REFERENCES "Coupan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coupan" ADD CONSTRAINT "Coupan_createdBy_fkey" FOREIGN KEY ("createdBy") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coupan" ADD CONSTRAINT "Coupan_referralId_fkey" FOREIGN KEY ("referralId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
