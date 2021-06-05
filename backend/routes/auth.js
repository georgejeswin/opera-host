import express from "express";
import { authController, currentUserController } from "../controllers/auth.js";

const router = express.Router();

//middlewar
import { authCheck } from "../middlewares/auth.js";

//router
router.post("/create-or-update-user", authCheck, authController);
router.post("/current-user", authCheck, currentUserController);

export default router;
