import { Request, Response } from "express";
import { UpdateProfessorUseCase } from "../../usecases/admin/updateProfessor.usecase";

export class UpdateProfessorController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const data = request.body;

    const usecase = new UpdateProfessorUseCase();

    try {
      const updatedProfessor = await usecase.update(id, data);
      response.status(200).json("professor editado com sucesso");
      return updatedProfessor;
    } catch (err) {
      return response.status(401).json(err);
    }
  }
}
