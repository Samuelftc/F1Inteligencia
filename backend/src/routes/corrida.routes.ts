import { Router } from "express";
import { obterMelhorVolta, obterUltimaCorrida } from "../controllers/corrida.controller.js";

const router = Router();

router.get("/:temporada/ultima", obterUltimaCorrida);
router.get("/:temporada/ultima/melhor-volta", obterMelhorVolta);

export default router;