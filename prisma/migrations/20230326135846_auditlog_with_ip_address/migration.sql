/*
  Warnings:

  - You are about to drop the column `createdAt` on the `auditlog` table. All the data in the column will be lost.
  - You are about to drop the column `event` on the `auditlog` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `auditlog` table. All the data in the column will be lost.
  - Added the required column `event_type` to the `AuditLog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timestamp` to the `AuditLog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `AuditLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `auditlog` DROP COLUMN `createdAt`,
    DROP COLUMN `event`,
    DROP COLUMN `userId`,
    ADD COLUMN `event_data` VARCHAR(191) NULL,
    ADD COLUMN `event_type` VARCHAR(191) NOT NULL,
    ADD COLUMN `ip_address` VARCHAR(191) NULL,
    ADD COLUMN `timestamp` DATETIME(3) NOT NULL,
    ADD COLUMN `user_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `AuditLog` ADD CONSTRAINT `AuditLog_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
