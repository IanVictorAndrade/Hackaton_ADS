import { prisma } from "../../config/prismaClient";

export class DeleteProfessorUseCase {
  async delete(id: string) {
    const professorIdNotExist = await prisma.professor.findUnique({
      where: {
        id,
      },
    });

    if (!professorIdNotExist) {
      throw new Error("professor não encontrado").message;
    }

    const deletarProfessor = await prisma.professor.delete({
      where: {
        id,
      },
    });

    return deletarProfessor;
  }
}
