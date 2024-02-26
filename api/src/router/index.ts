import { Router } from "express";
import { LoginAdminController } from "../controllers/admin/loginAdmin.controller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated.middleware";
import { CreateProfessorController } from "../controllers/admin/createProfessor.controller";
import { ListarProfessorController } from "../controllers/admin/listarProfessor.controller";
import { DeleteProfessorController } from "../controllers/admin/deleteProfessor.controller";
import { UpdateProfessorController } from "../controllers/admin/updateProfessor.controller";

const router = Router();

const adminLogin = new LoginAdminController();
const professor = new CreateProfessorController();
const listarProfessor = new ListarProfessorController();
const deletarProfessor = new DeleteProfessorController();
const editarProfessor = new UpdateProfessorController();

router.post("/api/adimin/login", adminLogin.handlelogin);
router.post("/api/adimin/create", ensureAuthenticated, professor.handle);
router.get("/api/adimin/list", ensureAuthenticated, listarProfessor.handle);
router.delete(
  "/api/adimin/delete/:id",
  ensureAuthenticated,
  deletarProfessor.handle
);
router.put("/api/adimin/edit/:id", ensureAuthenticated, editarProfessor.handle);

export { router };
