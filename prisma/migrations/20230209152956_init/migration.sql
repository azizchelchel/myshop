/*
  Warnings:

  - A unique constraint covering the columns `[forme]` on the table `drug` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `drug_forme_key` ON `drug`(`forme`);
