-- CreateTable
CREATE TABLE `drug` (
    `forme` VARCHAR(191) NOT NULL,
    `libelle` VARCHAR(191) NOT NULL,
    `libelle_court` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`forme`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
