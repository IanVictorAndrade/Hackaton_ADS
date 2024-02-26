import { Request, Response } from "express";
import { DeleteProfessorUseCase } from "../../usecases/admin/deleteProfessor.usecase";

export class DeleteProfessorController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const usecase = new DeleteProfessorUseCase();

    try {
      const deleteProfessor = await usecase.delete(id);
      response.status(200).json("deletado com sucesso");
      return deleteProfessor;
    } catch (err) {
      return response.status(401).json(err);
    }
  }
}
