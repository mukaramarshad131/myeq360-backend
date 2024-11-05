-- CreateTable
CREATE TABLE "Packages" (
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

    CONSTRAINT "Packages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Liscense" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "title" TEXT NOT NULL,
    "des" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "oldPrice" INTEGER NOT NULL,
    "disc" INTEGER,
    "image" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "Liscense_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "title" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LiscenseProfileRelation" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),
    "qty" INTEGER NOT NULL,
    "expire_at" TIMESTAMP(3),
    "profileId" INTEGER NOT NULL,
    "liscenseId" INTEGER NOT NULL,

    CONSTRAINT "LiscenseProfileRelation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_LiscenseToPackages" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "LiscenseProfileRelation_profileId_liscenseId_key" ON "LiscenseProfileRelation"("profileId", "liscenseId");

-- CreateIndex
CREATE UNIQUE INDEX "_LiscenseToPackages_AB_unique" ON "_LiscenseToPackages"("A", "B");

-- CreateIndex
CREATE INDEX "_LiscenseToPackages_B_index" ON "_LiscenseToPackages"("B");

-- AddForeignKey
ALTER TABLE "Liscense" ADD CONSTRAINT "Liscense_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiscenseProfileRelation" ADD CONSTRAINT "LiscenseProfileRelation_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "profile"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LiscenseProfileRelation" ADD CONSTRAINT "LiscenseProfileRelation_liscenseId_fkey" FOREIGN KEY ("liscenseId") REFERENCES "Liscense"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LiscenseToPackages" ADD CONSTRAINT "_LiscenseToPackages_A_fkey" FOREIGN KEY ("A") REFERENCES "Liscense"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LiscenseToPackages" ADD CONSTRAINT "_LiscenseToPackages_B_fkey" FOREIGN KEY ("B") REFERENCES "Packages"("id") ON DELETE CASCADE ON UPDATE CASCADE;
