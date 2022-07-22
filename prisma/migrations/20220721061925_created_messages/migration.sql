-- CreateTable
CREATE TABLE "Connections" (
    "id" TEXT NOT NULL,
    "admin_id" TEXT,
    "user_id" TEXT NOT NULL,
    "socket_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT,

    CONSTRAINT "Connections_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Connections" ADD CONSTRAINT "Connections_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
