import type { RespostaCorridaApi } from "../../types/corrida/corridaApi";

export async function buscarCalendarioCorridas(temporada: number): Promise<RespostaCorridaApi> {

    const resposta = await fetch(`/api/corridas/${temporada}`);

    if (!resposta.ok) {
        throw new Error(
            `Erro ao buscar calendário de corridas: ${resposta.status}`
        );
    }

    const dados: RespostaCorridaApi = await resposta.json();

    return dados;
}