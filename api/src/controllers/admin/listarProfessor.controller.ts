import { Request, Response } from "express";
import { ListarProfessorUseCase } from "../../usecases/admin/listarProfessor.usecase";

export class ListarProfessorController {
  async handle(request: Request, response: Response) {
    const usecase = new ListarProfessorUseCase();

    try {
      const result = await usecase.list();
      return response.status(201).json(result);
    } catch (err) {
      return response.status(401).json(err);
    }
  }
}
