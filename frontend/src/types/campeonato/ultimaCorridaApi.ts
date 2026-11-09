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

export interface RespostaUltimaCorridaApi {
    temporada: number,
    rodada: number,
    corrida: UltimaCorridaApi
}