import type { UltimaCorridaApi } from "../../types/campeonato/ultimaCorridaApi";
import type { UltimaCorrida } from "../../types/campeonato/ultimaCorrida";

import { imagensPais } from "../../data/imagensPais";
import { imagensPilotos } from "../../data/imagensPilotos";

export function adaptarUltimaCorrida(corrida: UltimaCorridaApi): UltimaCorrida {
    return { 
        nome: corrida.nome,
        circuito: corrida.circuito,
        data: corrida.data,
        bandeira: imagensPais[corrida.pais] ?? "",
        resultados: corrida.resultados.map((piloto) => ({
            id: piloto.idPiloto,
            posicao: piloto.posicao,
            foto: imagensPilotos[piloto.idPiloto] ?? "",
            nome: piloto.nome,
            tempo: piloto.tempo ?? "-"
        }))
    }
}