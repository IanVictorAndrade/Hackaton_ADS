-- CreateTable
CREATE TABLE "curso" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "nivel" TEXT NOT NULL,

    CONSTRAINT "curso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professor" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "matricula" INTEGER NOT NULL,
    "coordenador" BOOLEAN NOT NULL,

    CONSTRAINT "professor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "professor_preference" (
    "id" TEXT NOT NULL,
    "professorId" TEXT NOT NULL,
    "disciplinaId" TEXT,
    "area" TEXT,
    "periodo" TEXT,
    "nivelEnsino" TEXT,

    CONSTRAINT "professor_preference_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dicipline" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "carga_horaria" INTEGER NOT NULL,
    "turno" TEXT NOT NULL,
    "cursoId" TEXT NOT NULL,

    CONSTRAINT "dicipline_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "login_admin" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "professorId" TEXT,

    CONSTRAINT "login_admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DisciplineProfessor" (
    "disciplineId" TEXT NOT NULL,
    "professorId" TEXT NOT NULL,

    CONSTRAINT "DisciplineProfessor_pkey" PRIMARY KEY ("disciplineId","professorId")
);

-- CreateIndex
CREATE UNIQUE INDEX "professor_email_key" ON "professor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "professor_matricula_key" ON "professor"("matricula");

-- AddForeignKey
ALTER TABLE "professor_preference" ADD CONSTRAINT "professor_preference_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "professor_preference" ADD CONSTRAINT "professor_preference_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "dicipline"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "dicipline" ADD CONSTRAINT "dicipline_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "curso"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "login_admin" ADD CONSTRAINT "login_admin_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professor"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisciplineProfessor" ADD CONSTRAINT "DisciplineProfessor_disciplineId_fkey" FOREIGN KEY ("disciplineId") REFERENCES "dicipline"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DisciplineProfessor" ADD CONSTRAINT "DisciplineProfessor_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
