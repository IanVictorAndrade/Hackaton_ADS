-- CreateTable
CREATE TABLE "professor" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "matricula" INTEGER NOT NULL,
    "coordenador" BOOLEAN NOT NULL,
    "adminId" TEXT,

    CONSTRAINT "professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "login_admin" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "login_admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "professor_email_key" ON "professor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "professor_matricula_key" ON "professor"("matricula");

-- AddForeignKey
ALTER TABLE "professor" ADD CONSTRAINT "professor_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "login_admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
