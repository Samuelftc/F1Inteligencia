import type { Request, Response } from "express";
import { buscarClassificacaoPilotos, buscarClassificacaoConstrutores } from "../services/campeonato.services.js";
import { validarTemporada } from "../utils/validarTemporada.js";

/**
 * Recebe a requisição HTTP para consultar
 * a classificação de pilotos de uma temporada.
 */
export async function obterClassificacaoPilotos(req: Request, res: Response): Promise<void> {
    // Obtém o ano informado na URL.
    const temporada = Number(req.params.temporada);

    // Valida se a temporada informada é válida.
    validarTemporada(temporada);

    // Consulta a classificação por meio do Service.
    const classificacao = await buscarClassificacaoPilotos(temporada);

    // Retorna os dados ao cliente.
    res.status(200).json(classificacao);
}


/**
 * Recebe a requisição HTTP para consultar
 * a classificação de construtores de uma temporada.
 */
export async function obterClassificacaoConstrutores(req: Request, res: Response): Promise<void> {

    const temporada = Number(req.params.temporada);

    validarTemporada(temporada);

    const classificacao = await buscarClassificacaoConstrutores(temporada);

    res.status(200).json(classificacao);
}