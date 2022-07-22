-- AlterTable
ALTER TABLE "connections" ALTER COLUMN "userId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "messages" ALTER COLUMN "userId" DROP NOT NULL;
