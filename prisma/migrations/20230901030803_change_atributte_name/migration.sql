/*
  Warnings:

  - You are about to drop the column `signAt` on the `Teacher` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "signAt",
ADD COLUMN     "signedAt" TIMESTAMP;
