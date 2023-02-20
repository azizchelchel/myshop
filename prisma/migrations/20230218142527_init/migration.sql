-- CreateTable
CREATE TABLE `usersPermissionsLink` (
    `userId` INTEGER NOT NULL,
    `permissionCode` VARCHAR(191) NOT NULL,
    `assignedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `assignedBy` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`userId`, `permissionCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `usersPermissionsLink` ADD CONSTRAINT `usersPermissionsLink_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `Users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usersPermissionsLink` ADD CONSTRAINT `usersPermissionsLink_permissionCode_fkey` FOREIGN KEY (`permissionCode`) REFERENCES `Permissions`(`permissionCode`) ON DELETE RESTRICT ON UPDATE CASCADE;
