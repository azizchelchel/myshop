-- AlterTable
ALTER TABLE `users` MODIFY `personType` ENUM('store_owner', 'employee', 'supplier', 'client') NOT NULL DEFAULT 'store_owner';

-- CreateTable
CREATE TABLE `Permissions` (
    `permissioName` VARCHAR(191) NOT NULL,
    `permissionCode` VARCHAR(191) NOT NULL,
    `usersId` INTEGER NULL,

    UNIQUE INDEX `Permissions_permissionCode_key`(`permissionCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Permissions` ADD CONSTRAINT `Permissions_usersId_fkey` FOREIGN KEY (`usersId`) REFERENCES `Users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
