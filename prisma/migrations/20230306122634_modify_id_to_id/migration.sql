/*
  Warnings:

  - The primary key for the `drug` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `drug_id` on the `drug` table. All the data in the column will be lost.
  - The primary key for the `item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `itemId` on the `item` table. All the data in the column will be lost.
  - The primary key for the `sales` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `saleId` on the `sales` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Item` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `id` to the `Drug` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `Sales` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `Item_drugId_fkey`;

-- DropForeignKey
ALTER TABLE `item` DROP FOREIGN KEY `Item_saleId_fkey`;

-- DropIndex
DROP INDEX `Item_itemId_key` ON `item`;

-- AlterTable
ALTER TABLE `drug` DROP PRIMARY KEY,
    DROP COLUMN `drug_id`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `item` DROP PRIMARY KEY,
    DROP COLUMN `itemId`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `sales` DROP PRIMARY KEY,
    DROP COLUMN `saleId`,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- CreateIndex
CREATE UNIQUE INDEX `Item_id_key` ON `Item`(`id`);

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_drugId_fkey` FOREIGN KEY (`drugId`) REFERENCES `Drug`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Item` ADD CONSTRAINT `Item_saleId_fkey` FOREIGN KEY (`saleId`) REFERENCES `Sales`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
