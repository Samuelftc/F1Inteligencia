import type { Request, Response } from "express";
import { buscarUltimaCorrida } from "../services/corrida.services.js";
import { ErroAplicacao } from "../errors/ErroAplicacao.js";

export async function obterUltimaCorrida(req: Request, res: Response): Promise<void> {
    const temporada = Number(req.params.temporada);

    if (
        !Number.isInteger(temporada) ||
        temporada < 1950 ||
        temporada > new Date().getFullYear()
    ) {
        throw new ErroAplicacao(400, "Temporada inválida.");
    }

    const corrida = await buscarUltimaCorrida(temporada);

    res.status(200).json(corrida);
}