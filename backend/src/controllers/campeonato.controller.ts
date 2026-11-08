
import type { Request, Response } from "express";
import { buscarClassificacaoPilotos, buscarClassificacaoConstrutores } from "../services/campeonato.services.js";

/**
 * Recebe a requisição HTTP para consultar
 * a classificação de pilotos de uma temporada.
 */
export async function obterClassificacaoPilotos(req: Request, res: Response): Promise<void> {
    try {
        // Obtém o ano informado na URL.
        const temporada = Number(req.params.temporada);

        // Valida se o ano informado é válido.
        if (
            !Number.isInteger(temporada) ||
            temporada < 1950 ||
            temporada > new Date().getFullYear()
        ) {
            res.status(400).json({
                erro: "Temporada inválida."
            });
            return;
        }

        // Chama o Service responsável pela consulta.
        const classificacao = await buscarClassificacaoPilotos(temporada);

        // Retorna os dados transformados ao cliente.
        res.status(200).json(classificacao);
    } catch (erro) {
        console.error("Erro ao consultar campeonato:", erro);

        res.status(500).json({
            erro: "Não foi possível consultar a classificação."
        });
    }
}


export async function obterClassificacaoConstrutores(req: Request, res: Response): Promise<void> {
    try {
        const temporada = Number(req.params.temporada);

        if (
            !Number.isInteger(temporada) ||
            temporada < 1950 ||
            temporada > new Date().getFullYear()
        ) {
            res.status(400).json({
                erro: "Temporada inválida."
            });
            return;
        }

        const classificacao = await buscarClassificacaoConstrutores(temporada);

        res.status(200).json(classificacao);
    } catch (erro) {
        console.error("Erro ao consultar campeonato:", erro);

        res.status(500).json({
            erro: "Não foi possível consultar a classificação."
        });
    }
}