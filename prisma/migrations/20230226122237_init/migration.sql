/*
  Warnings:

  - You are about to drop the `sales` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `sales` DROP FOREIGN KEY `Sales_drugId_fkey`;

-- DropForeignKey
ALTER TABLE `sales` DROP FOREIGN KEY `Sales_userId_fkey`;

-- DropTable
DROP TABLE `sales`;
