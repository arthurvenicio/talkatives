-- AlterTable
ALTER TABLE "Teacher" ADD COLUMN     "signatureId" TEXT;

-- CreateTable
CREATE TABLE "Signature" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "price" REAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Signature_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "paymentMethod" VARCHAR(255) NOT NULL,
    "gateway" VARCHAR(255) NOT NULL,
    "barcode" VARCHAR(100),
    "pdfUrl" VARCHAR(3000),
    "qrCodeUrl" VARCHAR(3000),
    "creditCardLinkUrl" VARCHAR(3000),
    "totalMount" REAL NOT NULL,
    "discount" REAL NOT NULL,
    "status" VARCHAR(100) NOT NULL,
    "signatureId" TEXT NOT NULL,
    "teacherId" TEXT NOT NULL,
    "paidAt" TIMESTAMP,
    "expireAt" TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Teacher" ADD CONSTRAINT "Teacher_signatureId_fkey" FOREIGN KEY ("signatureId") REFERENCES "Signature"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_signatureId_fkey" FOREIGN KEY ("signatureId") REFERENCES "Signature"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "Teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
