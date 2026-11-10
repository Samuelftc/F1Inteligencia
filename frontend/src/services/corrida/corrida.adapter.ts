import type { CorridaApi } from "../../types/corrida/corridaApi";
import type { CorridaHome } from "../../types/corrida/corrida";

import { imagensPais } from "../../data/imagensPais";
import { imagensCircuitos } from "../../data/imagensCircuitos";
import { imagensFundoCorridas } from "../../data/imagensFundoCorridas";
import { nomesGrandesPremios } from "../../data/nomesGrandesPremios";
import { nomesCircuitos } from "../../data/nomesCircuitos";

function formatarPeriodoCorrida(inicio: string, fim: string): string {
    const [, mesInicio, diaInicio] = inicio.split("-").map(Number);
    const [, mesFim, diaFim] = fim.split("-").map(Number);

    const meses = [
        "JAN", "FEV", "MAR", "ABR", "MAI", "JUN",
        "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"
    ];

    if (mesInicio === mesFim) {
        return `${diaInicio}-${diaFim} ${meses[mesFim - 1]}`;
    }

    return `${diaInicio} ${meses[mesInicio - 1]} - ${diaFim} ${meses[mesFim - 1]}`;
}

export function adaptarCorridaHome(corridas: CorridaApi[]): CorridaHome[] {
    return corridas.map((corrida) => ({
        ordem: corrida.rodada,
        periodo: formatarPeriodoCorrida(corrida.inicioFimSemana, corrida.data),
        imagemBandeira: imagensPais[corrida.pais] ?? "",
        pais: corrida.pais,
        nomeGrandePremio: nomesGrandesPremios[corrida.nome] ?? corrida.nome.replace(/\s+Grand Prix$/i, ""),
        nomeCircuito: nomesCircuitos[corrida.idCircuito] ?? corrida.circuito,
        pngCircuito: imagensCircuitos[corrida.idCircuito] ?? "",
        imagemFundo: imagensFundoCorridas[corrida.pais] ?? ""
    }));
}