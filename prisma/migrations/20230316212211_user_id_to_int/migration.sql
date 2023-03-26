/*
  Warnings:

  - The primary key for the `userverifications` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `userId` on the `userverifications` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `userverifications` DROP PRIMARY KEY,
    MODIFY `userId` INTEGER NOT NULL,
    ADD PRIMARY KEY (`userId`);
