-- CreateTable
CREATE TABLE "Settings" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "chat" BOOLEAN NOT NULL,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Settings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Settings_username_key" ON "Settings"("username");
