-- CreateTable
CREATE TABLE `Permissions` (
    `permissionCode` VARCHAR(191) NOT NULL,
    `permissionName` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Permissions_permissionCode_key`(`permissionCode`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
