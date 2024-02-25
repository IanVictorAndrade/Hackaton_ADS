import { Request, Response } from "express";
import { ILoginAdmin } from "../../@types/LoginAdmin.interface";
import { LoginAdminUseCase } from "../../usecases/admin/loginAdmin.usecase";

export class LoginAdminController {
  async handlelogin(request: Request, response: Response) {
    const { nome, senha } = request.body as ILoginAdmin;

    const adminAuth = new LoginAdminUseCase();

    try {
      const adm = await adminAuth.login({
        nome,
        senha,
      });

      return response.status(201).json(adm);
    } catch (err) {
      return response.status(401).json(err);
    }
  }
}

export { LoginAdminUseCase };
