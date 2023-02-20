/*
  Warnings:

  - You are about to drop the `permissions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `userspermissionslink` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `permissions` DROP FOREIGN KEY `Permissions_usersId_fkey`;

-- DropForeignKey
ALTER TABLE `userspermissionslink` DROP FOREIGN KEY `usersPermissionsLink_permissionCode_fkey`;

-- DropForeignKey
ALTER TABLE `userspermissionslink` DROP FOREIGN KEY `usersPermissionsLink_userId_fkey`;

-- AlterTable
ALTER TABLE `users` ADD COLUMN `permissions` JSON NULL;

-- DropTable
DROP TABLE `permissions`;

-- DropTable
DROP TABLE `userspermissionslink`;
