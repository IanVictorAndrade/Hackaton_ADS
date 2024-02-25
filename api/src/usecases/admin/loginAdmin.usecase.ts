import { ILoginAdmin } from "../../@types/LoginAdmin.interface";
import { prisma } from "../../config/prismaClient";
import { sign } from "jsonwebtoken";

export class LoginAdminUseCase {
  async login({ nome, senha }: ILoginAdmin) {
    const admExist = await prisma.loginAdm.findFirst({
      where: {
        nome,
        senha,
      },
    });

    if (!admExist) {
      throw new Error("Credenciais erradas").message;
    }

    const token = sign(
      {
        user: {
          nome: admExist.nome,
          id: admExist.id,
        },
      },
      process.env.JWT_SECRET,
      {
        subject: admExist.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}
