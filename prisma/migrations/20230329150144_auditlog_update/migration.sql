/*
  Warnings:

  - You are about to drop the column `event_data` on the `auditlog` table. All the data in the column will be lost.
  - You are about to drop the column `event_type` on the `auditlog` table. All the data in the column will be lost.
  - You are about to drop the column `ip_address` on the `auditlog` table. All the data in the column will be lost.
  - Added the required column `event` to the `AuditLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `auditlog` DROP COLUMN `event_data`,
    DROP COLUMN `event_type`,
    DROP COLUMN `ip_address`,
    ADD COLUMN `event` VARCHAR(191) NOT NULL;
