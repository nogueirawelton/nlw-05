/*
  Warnings:

  - Made the column `userId` on table `connections` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `messages` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "connections" ALTER COLUMN "userId" SET NOT NULL;

-- AlterTable
ALTER TABLE "messages" ALTER COLUMN "userId" SET NOT NULL;
