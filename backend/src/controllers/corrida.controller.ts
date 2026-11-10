import type { Request, Response } from "express";
import { buscarUltimaCorrida, buscarMelhorVolta, buscarCalendarioCorridas } from "../services/corrida.services.js";
import { ErroAplicacao } from "../errors/ErroAplicacao.js";

function validarTemporada(temporada: number): void {
    if (
        !Number.isInteger(temporada) ||
        temporada < 1950 ||
        temporada > new Date().getFullYear()
    ) {
        throw new ErroAplicacao(400, "Temporada inválida.");
    }
}

export async function obterUltimaCorrida(req: Request, res: Response): Promise<void> {
    const temporada = Number(req.params.temporada);

    validarTemporada(temporada);

    const corrida = await buscarUltimaCorrida(temporada);

    res.status(200).json(corrida);
}

export async function obterMelhorVolta(req: Request, res: Response): Promise<void> {
    const temporada = Number(req.params.temporada);

    validarTemporada(temporada);

    const melhorVolta = await buscarMelhorVolta(temporada);

    res.status(200).json(melhorVolta);
}

export async function obterCalendario(req: Request, res: Response): Promise<void> {
    const temporada = Number(req.params.temporada);

    validarTemporada(temporada);

    const calendario = await buscarCalendarioCorridas(temporada);

    res.status(200).json(calendario);
}