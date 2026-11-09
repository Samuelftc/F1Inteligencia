import { Router } from "express";
import { obterUltimaCorrida } from "../controllers/corrida.controller.js";

const router = Router();

router.get("/:temporada/ultima", obterUltimaCorrida)

export default router;