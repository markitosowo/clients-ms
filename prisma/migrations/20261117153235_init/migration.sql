-- CreateTable
CREATE TABLE "Tienda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" REAL NOT NULL,
    "phone" TEXT,
    "addres" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateIndex
CREATE UNIQUE INDEX "Tienda_email_key" ON "Tienda"("email");
