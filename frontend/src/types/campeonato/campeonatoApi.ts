export interface ClassificacaoPilotoApi {
    posicao: number;
    idPiloto: string;
    codigo: string | null;
    nome: string;
    nacionalidade: string;
    pontos: number;
    vitorias: number;
    construtores: string[];
}

export interface ClassificacaoConstrutorApi {
    posicao: number;
    idConstrutor: string;
    nome: string;
    nacionalidade: string;
    pontos: number;
    vitorias: number;
}

export interface RespostaCampeonatoApi<T> {
    temporada: number;
    rodada: number;
    classificacao: T[];
}
