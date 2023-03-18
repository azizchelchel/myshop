/*
  Warnings:

  - You are about to alter the column `price` on the `drug` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `drug` MODIFY `price` DOUBLE NOT NULL DEFAULT 0;
