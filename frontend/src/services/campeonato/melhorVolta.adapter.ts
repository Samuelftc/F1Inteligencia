import type { MelhorVoltaApi } from "../../types/campeonato/ultimaCorridaApi";
import type { MelhorVolta } from "../../types/campeonato/ultimaCorrida";

import { imagensPilotos } from "../../data/imagensPilotos";

export function adaptarMelhorVolta(volta: MelhorVoltaApi): MelhorVolta {
    return {
        piloto: volta.piloto,
        foto: imagensPilotos[volta.idPiloto] ?? "",
        equipe: volta.equipe,
        tempo: volta.tempo,
        volta: volta.volta
    }
}