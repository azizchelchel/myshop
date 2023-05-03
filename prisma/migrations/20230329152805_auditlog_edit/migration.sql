/*
  Warnings:

  - You are about to drop the column `timestamp` on the `auditlog` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `auditlog` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `auditlog` DROP FOREIGN KEY `AuditLog_user_id_fkey`;

-- AlterTable
ALTER TABLE `auditlog` DROP COLUMN `timestamp`,
    DROP COLUMN `user_id`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `AuditLog` ADD CONSTRAINT `AuditLog_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
