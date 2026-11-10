import type { RespostaMelhorVoltaApi } from "../../types/campeonato/ultimaCorridaApi";

export async function buscarMelhorVolta(temporada: number): Promise<RespostaMelhorVoltaApi> {
    const resposta = await fetch(`/api/corridas/${temporada}/ultima/melhor-volta`);

    // Interrompe o processamento quando o backend retorna um erro HTTP.
    if (!resposta.ok) {
        throw new Error(
            `Erro ao buscar melhor volta: ${resposta.status}`
        );
    }

    const dados: RespostaMelhorVoltaApi = await resposta.json();

    return dados;
}