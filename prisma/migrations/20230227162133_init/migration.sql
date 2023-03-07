/*
  Warnings:

  - You are about to drop the column `name` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `drugId` on the `sales` table. All the data in the column will be lost.
  - You are about to drop the column `quantity` on the `sales` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `sales` table. All the data in the column will be lost.
  - You are about to drop the `sale` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[itemId]` on the table `Item` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `drugId` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `Item_saleId_fkey`;

-- DropForeignKey
ALTER TABLE `sales` DROP FOREIGN KEY `Sales_drugId_fkey`;

-- DropForeignKey
ALTER TABLE `sales` DROP FOREIGN KEY `Sales_userId_fkey`;

-- AlterTable
ALTER TABLE `item` DROP COLUMN `name`,
    ADD COLUMN `drugId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `sales` DROP COLUMN `drugId`,
    DROP COLUMN `quantity`,
    DROP COLUMN `userId`,
    ADD COLUMN `total` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `usersId` INTEGER NULL;

-- DropTable
DROP TABLE `sale`;

-- CreateIndex
CREATE UNIQUE INDEX `Item_itemId_key` ON `Item`(`itemId`);

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_drugId_fkey` FOREIGN KEY (`drugId`) REFERENCES `Drug`(`drug_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_saleId_fkey` FOREIGN KEY (`saleId`) REFERENCES `Sales`(`saleId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sales` ADD CONSTRAINT `Sales_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
