/*
  Warnings:

  - You are about to drop the column `drugPrice` on the `drug` table. All the data in the column will be lost.
  - You are about to drop the column `productPrice` on the `item` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `sales` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `drug` DROP COLUMN `drugPrice`,
    ADD COLUMN `price` INTEGER NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `item` DROP COLUMN `productPrice`,
    ADD COLUMN `drugPrice` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `totalItem` DOUBLE NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `sales` DROP COLUMN `total`,
    ADD COLUMN `totalSale` DOUBLE NULL DEFAULT 0;
