/*
  Warnings:

  - You are about to drop the column `userId` on the `connections` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `messages` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "connections" DROP CONSTRAINT "connections_userId_fkey";

-- DropForeignKey
ALTER TABLE "messages" DROP CONSTRAINT "messages_userId_fkey";

-- AlterTable
ALTER TABLE "connections" DROP COLUMN "userId";

-- AlterTable
ALTER TABLE "messages" DROP COLUMN "userId";

-- AddForeignKey
ALTER TABLE "messages" ADD CONSTRAINT "messages_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "connections" ADD CONSTRAINT "connections_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
