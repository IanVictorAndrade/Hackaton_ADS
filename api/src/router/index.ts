import { Router } from "express";
import { LoginAdminController } from "../controllers/admin/loginAdmin.controller";

const router = Router();

const adminLogin = new LoginAdminController();

router.post("/api/adimin/login", adminLogin.handlelogin);

export { router };
