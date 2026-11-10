import { Router } from "express";
import { obterCalendario, obterMelhorVolta, obterUltimaCorrida } from "../controllers/corrida.controller.js";

const router = Router();

router.get("/:temporada/ultima", obterUltimaCorrida);
router.get("/:temporada/ultima/melhor-volta", obterMelhorVolta);
router.get("/:temporada", obterCalendario);

export default router;