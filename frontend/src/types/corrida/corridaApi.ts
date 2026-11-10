interface SessaoCorridaApi {
    date: string;
    time?: string;
}

export interface CorridaApi {
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
        primeiroTreino?: SessaoCorridaApi;
        segundoTreino?: SessaoCorridaApi;
        terceiroTreino?: SessaoCorridaApi;
        classificacao?: SessaoCorridaApi;
        sprint?: SessaoCorridaApi;
        classificacaoSprint?: SessaoCorridaApi;
    };
}

export interface RespostaCorridaApi {
    temporada: number;
    corridas: CorridaApi[];
}