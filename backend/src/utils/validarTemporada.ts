import { ErroAplicacao } from "../errors/ErroAplicacao.js";

export function validarTemporada(temporada: number): void {
    if (
        !Number.isInteger(temporada) ||
        temporada < 1950 ||
        temporada > new Date().getFullYear()
    ) {
        throw new ErroAplicacao(400, "Temporada inválida.");
    }
}