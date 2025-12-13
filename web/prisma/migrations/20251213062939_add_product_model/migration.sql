-- CreateTable
CREATE TABLE "Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" INTEGER NOT NULL,
    "currency" TEXT NOT NULL DEFAULT 'usd',
    "image" TEXT,
    "provider" TEXT NOT NULL DEFAULT 'internal',
    "externalId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
