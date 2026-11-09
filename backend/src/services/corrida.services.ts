import { ResultadoPiloto, UltimaCorrida, RespostaUltimaCorrida } from "../types/corrida.types.js";
import { respostaUltimaCorridaSchema } from "../schemas/corrida.schema.js";
import { ErroAplicacao } from "../errors/ErroAplicacao.js";

export async function buscarUltimaCorrida(temporada: number): Promise<RespostaUltimaCorrida> {

    const url = `https://api.jolpi.ca/ergast/f1/${temporada}/last/results.json`;

    let resposta: Response;

    try {
        resposta = await fetch(url, {
            signal: AbortSignal.timeout(10000)
        });

    } catch (erro) {
        // Captura falhas de conexão ou timeout da requisição.
        console.error("Falha de comunicação com a Jolpica:", erro);

        throw new ErroAplicacao(
            502,
            "Não foi possível conectar à API Jolpica."
        );
    }

    if (!resposta.ok) {
        throw new ErroAplicacao(
            502,
            `A API Jolpica retornou HTTP ${resposta.status}.`
        );
    }

    let dados: unknown

    try {
        dados = await resposta.json()
    } catch {
        throw new ErroAplicacao(
            502,
            `A Jolpica retornou um JSON inválido.`
        );
    }

    const resultado = respostaUltimaCorridaSchema.safeParse(dados);

    if (!resultado.success) {
        // Impede o processamento de dados com estrutura inesperada.
        throw new ErroAplicacao(
            502,
            "A Jolpica retornou dados em um formato inesperado."
        );
    }

    const dadosJolpica = resultado.data;

    const lista = dadosJolpica.MRData.RaceTable.Races[0];

    if (!lista) {
        // Retorna 404 quando não existe corrida com resultados da temporada.
        throw new ErroAplicacao(
            404,
            `Nenhuma corrida com resultados disponível para ${temporada}.`
        );
    }

    const resultados: ResultadoPiloto[] = lista.Results.map((piloto) => ({
        idPiloto: piloto.Driver.driverId,
        posicao: Number(piloto.position),
        nome: `${piloto.Driver.givenName} ${piloto.Driver.familyName}`,
        tempo: piloto.Time?.time ?? null
    }));

    const ultimaCorrida: UltimaCorrida = {
        nome: lista.raceName,
        idCircuito: lista.Circuit.circuitId,
        circuito: lista.Circuit.circuitName,
        data: lista.date,
        resultados
    }

    return {
        temporada: Number(dadosJolpica.MRData.RaceTable.season),
        rodada: Number(lista.round),
        corrida: ultimaCorrida
    }
}