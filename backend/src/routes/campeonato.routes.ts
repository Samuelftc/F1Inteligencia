
import { Router } from "express";
import { obterClassificacaoPilotos, obterClassificacaoConstrutores } from "../controllers/campeonato.controller.js";

const router = Router();

// Define o endpoint para consultar a classificação
// de pilotos de uma temporada específica.
router.get("/:temporada/pilotos", obterClassificacaoPilotos);
router.get("/:temporada/construtores", obterClassificacaoConstrutores);

export default router;