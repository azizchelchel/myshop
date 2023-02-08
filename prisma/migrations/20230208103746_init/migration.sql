/*
  Warnings:

  - You are about to drop the column `role` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `role`,
    ADD COLUMN `personType` ENUM('store_owner', 'supplier', 'employee', 'client') NOT NULL DEFAULT 'store_owner';
