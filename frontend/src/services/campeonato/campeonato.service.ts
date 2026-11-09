
import type { ClassificacaoPilotoApi, ClassificacaoConstrutorApi, RespostaCampeonatoApi } from "../../types/campeonato/campeonatoApi";

// Consulta a classificação de pilotos de uma temporada no backend.
export async function buscarClassificacaoPilotos(temporada: number): Promise<RespostaCampeonatoApi<ClassificacaoPilotoApi>> {

    const resposta = await fetch(
        `/api/campeonatos/${temporada}/pilotos`
    );

    // Interrompe o processamento quando o backend retorna um erro HTTP.
    if (!resposta.ok) {
        throw new Error(
            `Erro ao buscar classificação de pilotos: ${resposta.status}`
        );
    }

    // Converte o JSON recebido para o contrato esperado pelo frontend.
    const dados: RespostaCampeonatoApi<ClassificacaoPilotoApi> = await resposta.json();

    return dados;
}


// Consulta a classificação de construtores de uma temporada no backend.
export async function buscarClassificacaoConstrutores(temporada: number): Promise<RespostaCampeonatoApi<ClassificacaoConstrutorApi>> {

    const resposta = await fetch(
        `/api/campeonatos/${temporada}/construtores`
    );

    if (!resposta.ok) {
        throw new Error(
            `Erro ao buscar classificação de construtores: ${resposta.status}`
        );
    }

    const dados: RespostaCampeonatoApi<ClassificacaoConstrutorApi> = await resposta.json();

    return dados;
}
