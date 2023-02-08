-- AlterTable
ALTER TABLE `users` ADD COLUMN `role` ENUM('store_owner', 'supplier', 'employee', 'client') NOT NULL DEFAULT 'store_owner';
