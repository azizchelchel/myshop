/*
  Warnings:

  - The primary key for the `sales` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `sales` table. All the data in the column will be lost.
  - You are about to drop the column `usersId` on the `sales` table. All the data in the column will be lost.
  - You are about to drop the `drugsale` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `drugId` to the `Sales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `drugsale` DROP FOREIGN KEY `drugSale_drugId_fkey`;

-- DropForeignKey
ALTER TABLE `drugsale` DROP FOREIGN KEY `drugSale_saleId_fkey`;

-- DropForeignKey
ALTER TABLE `sales` DROP FOREIGN KEY `Sales_usersId_fkey`;

-- AlterTable
ALTER TABLE `sales` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    DROP COLUMN `usersId`,
    ADD COLUMN `drugId` INTEGER NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`drugId`, `userId`);

-- DropTable
DROP TABLE `drugsale`;

-- AddForeignKey
ALTER TABLE `Sales` ADD CONSTRAINT `Sales_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Sales` ADD CONSTRAINT `Sales_drugId_fkey` FOREIGN KEY (`drugId`) REFERENCES `Drug`(`drug_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
