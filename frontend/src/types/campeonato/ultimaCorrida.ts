export interface ResultadoPiloto {
    id: string;
    posicao: number;
    nome: string;
    foto: string;
    tempo: string;
}

export interface UltimaCorrida {
    nome: string;
    circuito: string;
    data: string;
    bandeira: string;
    resultados: ResultadoPiloto[];
    voltaRapida?: VoltaRapida | undefined;
}

export interface VoltaRapida {
    piloto: string;
    equipe: string;
    foto: string;
    tempo: string;
    volta: number;
    composto: string;
}