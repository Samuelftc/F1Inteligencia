export interface ResultadoPilotoApi {
    idPiloto: string,
    posicao: number,
    nome: string,
    tempo: string | null
}

export interface UltimaCorridaApi {
    nome: string,
    idCircuito: string,
    circuito: string,
    pais: string,
    data: string,
    resultados: ResultadoPilotoApi[]
}

export interface MelhorVoltaApi {
    idPiloto: string,
    piloto: string,
    equipe: string,
    tempo: string,
    volta: number,
}

export interface RespostaUltimaCorridaApi {
    temporada: number,
    rodada: number,
    corrida: UltimaCorridaApi
}

export interface RespostaMelhorVoltaApi {
    temporada: number;
    rodada: number;
    melhorVolta: MelhorVoltaApi;
}