import type { RespostaUltimaCorridaApi } from "../../types/campeonato/ultimaCorridaApi";

export async function buscarUltimaCorrida(temporada: number): Promise<RespostaUltimaCorridaApi> {
    const resposta = await fetch(`/api/corridas/${temporada}/ultima`);

    // Interrompe o processamento quando o backend retorna um erro HTTP.
    if (!resposta.ok) {
        throw new Error(
            `Erro ao buscar ultima corrida: ${resposta.status}`
        );
    }

    const dados: RespostaUltimaCorridaApi = await resposta.json();

    return dados;
}