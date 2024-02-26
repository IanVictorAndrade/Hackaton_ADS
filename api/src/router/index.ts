import { Router } from "express";
import { LoginAdminController } from "../controllers/admin/loginAdmin.controller";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateProfessorController } from "../controllers/admin/createProfessor.controller";
import { ListarProfessorController } from "../controllers/admin/listarProfessor.controller";

const router = Router();

const adminLogin = new LoginAdminController();
const professor = new CreateProfessorController();
const listarProfessor = new ListarProfessorController();

router.post("/api/adimin/login", adminLogin.handlelogin);
router.post("/api/adimin/create", ensureAuthenticated, professor.handle);
router.get("/api/adimin/list", ensureAuthenticated, listarProfessor.handle);

export { router };
