import { Request, Response } from "express";
import { CreateProfessorUseCase } from "../../usecases/admin/createProfessor.usecase";
import { IProfessor } from "../../@types/CreateProfessor.interface";

export class CreateProfessorController {
  async handle(request: Request, response: Response) {
    const { ...data } = request.body as IProfessor;
    const { adminId } = request.params;

    const usecase = new CreateProfessorUseCase();

    try {
      const professor = await usecase.create(data, adminId);
      return response.status(201).json(professor);
    } catch (err) {
      return response.status(401).json(err);
    }
  }
}
