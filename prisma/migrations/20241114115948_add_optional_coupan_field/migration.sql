-- DropForeignKey
ALTER TABLE "CheckOutDetail" DROP CONSTRAINT "CheckOutDetail_coupanId_fkey";

-- AlterTable
ALTER TABLE "CheckOutDetail" ALTER COLUMN "coupanId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "CheckOutDetail" ADD CONSTRAINT "CheckOutDetail_coupanId_fkey" FOREIGN KEY ("coupanId") REFERENCES "Coupan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
