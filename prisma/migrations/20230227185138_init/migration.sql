/*
  Warnings:

  - You are about to drop the column `price` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `usersId` on the `sales` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `sales` DROP FOREIGN KEY `Sales_usersId_fkey`;

-- AlterTable
ALTER TABLE `item` DROP COLUMN `price`;

-- AlterTable
ALTER TABLE `sales` DROP COLUMN `usersId`,
    ADD COLUMN `userId` INTEGER NOT NULL DEFAULT 1000000000,
    MODIFY `total` DOUBLE NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE `Sales` ADD CONSTRAINT `Sales_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
