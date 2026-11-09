export interface ResultadoPiloto {
    idPiloto: string,
    posicao: number,
    nome: string,
    tempo: string | null
}

export interface UltimaCorrida {
    nome: string,
    idCircuito: string,
    circuito: string,
    pais: string,
    data: string,
    resultados: ResultadoPiloto[]
}

export interface RespostaUltimaCorrida {
    temporada: number,
    rodada: number,
    corrida: UltimaCorrida
}

export interface RespostaJolpicaUltimaCorrida {
    MRData: {
        RaceTable: {
            season: string,
            Races: {
                round: string,
                raceName: string,
                Circuit: {
                    circuitId: string,
                    circuitName: string,
                },
                date: string,
                Results: {
                    position: string,
                    Driver: {
                        driverId: string,
                        givenName: string,
                        familyName: string,
                    },
                    Time?: {
                        time: string
                    }
                }[],
            }[],
        },
    },
}