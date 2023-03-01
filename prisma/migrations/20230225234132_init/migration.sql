/*
  Warnings:

  - You are about to drop the column `drugId` on the `sales` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `sales` table. All the data in the column will be lost.
  - Added the required column `usersId` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `sales` DROP FOREIGN KEY `Sales_drugId_fkey`;

-- DropForeignKey
ALTER TABLE `sales` DROP FOREIGN KEY `Sales_userId_fkey`;

-- AlterTable
ALTER TABLE `drug` ADD COLUMN `drugPrice` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `sales` DROP COLUMN `drugId`,
    DROP COLUMN `userId`,
    ADD COLUMN `usersId` INTEGER NOT NULL;

-- CreateTable
CREATE TABLE `drugSale` (
    `saleId` INTEGER NOT NULL,
    `drugId` INTEGER NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`saleId`, `drugId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Sales` ADD CONSTRAINT `Sales_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `drugSale` ADD CONSTRAINT `drugSale_saleId_fkey` FOREIGN KEY (`saleId`) REFERENCES `Sales`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `drugSale` ADD CONSTRAINT `drugSale_drugId_fkey` FOREIGN KEY (`drugId`) REFERENCES `Drug`(`drug_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
