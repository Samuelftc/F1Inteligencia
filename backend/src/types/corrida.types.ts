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

export interface MelhorVolta {
    idPiloto: string,
    piloto: string,
    equipe: string,
    tempo: string,
    volta: number,
}

export interface RespostaMelhorVolta {
    temporada: number;
    rodada: number;
    melhorVolta: MelhorVolta;
}

export interface RespostaJolpicaCorrida {
    MRData: {
        RaceTable: {
            season: string;
            Races: {
                round: string;
                raceName: string;
                Circuit: {
                    circuitId: string;
                    circuitName: string;
                    Location: {
                        country: string;
                    };
                };
                date: string;
                Results: {
                    position: string;
                    Driver: {
                        driverId: string;
                        givenName: string;
                        familyName: string;
                    };
                    Constructor: {
                        name: string;
                    };
                    Time?: {
                        time: string;
                    };
                    FastestLap?: {
                        rank: string;
                        lap: string;
                        Time: {
                            time: string;
                        };
                    };
                }[];
            }[];
        };
    };
}