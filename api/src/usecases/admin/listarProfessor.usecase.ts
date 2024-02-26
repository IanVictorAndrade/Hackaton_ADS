import { prisma } from "../../config/prismaClient";

export class ListarProfessorUseCase {
  async list() {
    const listarProfessores = await prisma.professor.findMany();

    if (!listarProfessores.length) {
      throw new Error("Nenhum usuario encontrado").message;
    }

    return listarProfessores;
  }
}
