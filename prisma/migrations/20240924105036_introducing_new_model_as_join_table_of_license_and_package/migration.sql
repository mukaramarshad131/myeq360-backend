/*
  Warnings:

  - You are about to drop the `Liscense` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LiscenseProfileRelation` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_LiscenseToPackages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Liscense" DROP CONSTRAINT "Liscense_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "LiscenseProfileRelation" DROP CONSTRAINT "LiscenseProfileRelation_liscenseId_fkey";

-- DropForeignKey
ALTER TABLE "LiscenseProfileRelation" DROP CONSTRAINT "LiscenseProfileRelation_profileId_fkey";

-- DropForeignKey
ALTER TABLE "_LiscenseToPackages" DROP CONSTRAINT "_LiscenseToPackages_A_fkey";

-- DropForeignKey
ALTER TABLE "_LiscenseToPackages" DROP CONSTRAINT "_LiscenseToPackages_B_fkey";

-- DropTable
DROP TABLE "Liscense";

-- DropTable
DROP TABLE "LiscenseProfileRelation";

-- DropTable
DROP TABLE "_LiscenseToPackages";

-- CreateTable
CREATE TABLE "License" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "title" TEXT NOT NULL,
    "des" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "oldPrice" INTEGER NOT NULL,
    "disc" INTEGER,
    "image" TEXT,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "License_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PackageLicense" (
    "packageId" INTEGER NOT NULL,
    "liscenseId" INTEGER NOT NULL,
    "qty" INTEGER NOT NULL,

    CONSTRAINT "PackageLicense_pkey" PRIMARY KEY ("packageId","liscenseId")
);

-- CreateTable
CREATE TABLE "LicenseProfileRelation" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "qty" INTEGER NOT NULL,
    "expire_at" TIMESTAMP(3),
    "profileId" INTEGER NOT NULL,
    "LicenseId" INTEGER NOT NULL,

    CONSTRAINT "LicenseProfileRelation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LicenseProfileRelation_profileId_LicenseId_key" ON "LicenseProfileRelation"("profileId", "LicenseId");

-- AddForeignKey
ALTER TABLE "License" ADD CONSTRAINT "License_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackageLicense" ADD CONSTRAINT "PackageLicense_packageId_fkey" FOREIGN KEY ("packageId") REFERENCES "Packages"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PackageLicense" ADD CONSTRAINT "PackageLicense_liscenseId_fkey" FOREIGN KEY ("liscenseId") REFERENCES "License"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicenseProfileRelation" ADD CONSTRAINT "LicenseProfileRelation_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LicenseProfileRelation" ADD CONSTRAINT "LicenseProfileRelation_LicenseId_fkey" FOREIGN KEY ("LicenseId") REFERENCES "License"("id") ON DELETE CASCADE ON UPDATE CASCADE;
