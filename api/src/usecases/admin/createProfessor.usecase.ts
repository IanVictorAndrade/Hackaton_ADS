import { IProfessor } from "../../@types/CreateProfessor.interface";
import { prisma } from "../../config/prismaClient";

export class CreateProfessorUseCase {
  async create(data: IProfessor, adminId: string) {
    const createdProfessor = await prisma.professor.create({
      data: {
        ...data,
        adminId,
      },
      include: {
        admin: true,
      },
    });

    return createdProfessor;
  }
}
