export interface ResultadoPiloto {
    id: number;
    posicao: number;
    nome: string;
    foto: string;
    tempo: string;
}

export interface VoltaRapida {
    piloto: string;
    equipe: string;
    foto: string;
    tempo: string;
    volta: number;
    composto: string;
}

export interface UltimaCorrida {
    nome: string;
    circuito: string;
    data: string;
    bandeira: string;
    resultados: ResultadoPiloto[];
    voltaRapida: VoltaRapida;
}