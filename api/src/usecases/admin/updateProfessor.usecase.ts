import { IProfessor } from "../../@types/CreateProfessor.interface";
import { prisma } from "../../config/prismaClient";

export class UpdateProfessorUseCase {
  async update(id: string, data: IProfessor) {
    const professorIdNotExist = await prisma.professor.findUnique({
      where: {
        id,
      },
    });

    if (!professorIdNotExist) {
      throw new Error("professor não encontrado").message;
    }

    const updateProfessor = await prisma.professor.update({
      where: {
        id,
      },
      data: {
        ...data,
      },
    });

    if (!updateProfessor) {
      throw new Error("Professor não existe!");
    }

    return updateProfessor;
  }
}
