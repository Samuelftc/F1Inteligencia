 // CORRIDAS
interface SessaoCalendario {
    date: string;
    time?: string | null;
}

export interface CorridaCalendario {
    rodada: number;
    nome: string;
    idCircuito: string;
    circuito: string;
    pais: string;
    localidade: string;
    data: string;
    horario: string | null;
    inicioFimSemana: string;
    sessoes: {
        primeiroTreino?: SessaoCalendario;
        segundoTreino?: SessaoCalendario;
        terceiroTreino?: SessaoCalendario;
        classificacao?: SessaoCalendario;
        sprint?: SessaoCalendario;
        classificacaoSprint?: SessaoCalendario;
    };
}

export interface RespostaCalendario {
    temporada: number;
    corridas: CorridaCalendario[];
}

// pegar os dados das corridas
export interface RespostaJolpicaCalendario {
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
                        locality: string;
                    };
                };
                date: string;
                time?: string;
                FirstPractice?: SessaoCalendario;
                SecondPractice?: SessaoCalendario;
                ThirdPractice?: SessaoCalendario;
                Qualifying?: SessaoCalendario;
                Sprint?: SessaoCalendario;
                SprintQualifying?: SessaoCalendario;
            }[];
        };
    };
}


// ULTIMA CORRIDA
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

// pegar os dados dos resultados das corridas
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
