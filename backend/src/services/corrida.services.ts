import { ResultadoPiloto, UltimaCorrida, RespostaUltimaCorrida, RespostaMelhorVolta, MelhorVolta, RespostaCalendario, CorridaCalendario } from "../types/corrida.types.js";
import { respostaCorridaSchema, respostaCalendarioSchema } from "../schemas/corrida.schema.js";
import { ErroAplicacao } from "../errors/ErroAplicacao.js";

import { obterCache, salvarCache, executarUmaVez } from "../utils/cache.js";

import type { z } from "zod";

type CorridaJolpica = z.infer<
    typeof respostaCorridaSchema
>["MRData"]["RaceTable"]["Races"][number];

interface DadosResultados {
    temporada: number;
    rodada: number;
    lista: CorridaJolpica;
}

// ULTIMA CORRIDA
async function consultarResultadosCorrida(temporada: number): Promise<DadosResultados> {
    // Identifica os resultados da última corrida por temporada.
    const chaveCache = `corridas:resultados-ultima:${temporada}`;

    // Define a validade do cache em 24 horas.
    const tempoVida = 24 * 60 * 60 * 1000;



    // Verifica se os resultados já estão armazenados.
    const dadosCache = obterCache<DadosResultados>(chaveCache);

    if (dadosCache !== null) {
        console.log(`[CACHE HIT] ${chaveCache}`);
        return dadosCache;
    }

    console.log(`[CACHE MISS] ${chaveCache}`);

    // Compartilha a operação caso já exista uma consulta em andamento.
    return executarUmaVez(chaveCache, async () => {

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

        const resultado = respostaCorridaSchema.safeParse(dados);

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

        // Monta os dados validados que serão compartilhados.
        const resultadoFinal = {
            temporada: Number(dadosJolpica.MRData.RaceTable.season),
            rodada: Number(lista.round),
            lista
        };

        // Armazena os resultados validados no cache.
        salvarCache(chaveCache, resultadoFinal, tempoVida);

        return resultadoFinal;

    }); // Fecha executarUmaVez()
}


export async function buscarUltimaCorrida(temporada: number): Promise<RespostaUltimaCorrida> {
    const dados = await consultarResultadosCorrida(temporada);

    const resultados: ResultadoPiloto[] = dados.lista.Results.map((piloto) => ({
        idPiloto: piloto.Driver.driverId,
        posicao: Number(piloto.position),
        nome: `${piloto.Driver.givenName} ${piloto.Driver.familyName}`,
        tempo: piloto.Time?.time ?? null
    }));

    const ultimaCorrida: UltimaCorrida = {
        nome: dados.lista.raceName,
        idCircuito: dados.lista.Circuit.circuitId,
        circuito: dados.lista.Circuit.circuitName,
        pais: dados.lista.Circuit.Location.country,
        data: dados.lista.date,
        resultados
    };

    return {
        temporada: dados.temporada,
        rodada: dados.rodada,
        corrida: ultimaCorrida
    };
}

export async function buscarMelhorVolta(temporada: number): Promise<RespostaMelhorVolta> {
    const dados = await consultarResultadosCorrida(temporada);

    const piloto = dados.lista.Results.find(
        (resultado) => resultado.FastestLap?.rank === "1"
    );

    if (!piloto || !piloto.FastestLap) {
        throw new ErroAplicacao(
            404,
            `Nenhuma melhor volta disponível para ${temporada}.`
        );
    }

    const melhorVolta: MelhorVolta = {
        idPiloto: piloto.Driver.driverId,
        piloto: `${piloto.Driver.givenName} ${piloto.Driver.familyName}`,
        equipe: piloto.Constructor.name,
        tempo: piloto.FastestLap.Time.time,
        volta: Number(piloto.FastestLap.lap),
    };

    return {
        temporada: dados.temporada,
        rodada: dados.rodada,
        melhorVolta
    };
}

// CORRIDAS
export async function buscarCalendarioCorridas(temporada: number): Promise<RespostaCalendario> {
    // Identifica o calendário armazenado por temporada.
    const chaveCache = `corridas:calendario:${temporada}`;

    // Define a validade do cache em 24 horas.
    const tempoVida = 24 * 60 * 60 * 1000;

    // Verifica se o calendário já está armazenado em memória.
    const dadosCache = obterCache<RespostaCalendario>(chaveCache);

    if (dadosCache !== null) {
        console.log(`[CACHE HIT] ${chaveCache}`);
        return dadosCache;
    }

    console.log(`[CACHE MISS] ${chaveCache}`);

    // Evita consultas simultâneas duplicadas à Jolpica.
    return executarUmaVez(chaveCache, async () => {

        const url = `https://api.jolpi.ca/ergast/f1/${temporada}.json?limit=100`;

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

        const resultado = respostaCalendarioSchema.safeParse(dados);

        if (!resultado.success) {
            // Impede o processamento de dados com estrutura inesperada.
            throw new ErroAplicacao(
                502,
                "A Jolpica retornou dados em um formato inesperado."
            );
        }

        const dadosJolpica = resultado.data;

        const lista = dadosJolpica.MRData.RaceTable;

        if (lista.Races.length === 0) {
            // Retorna 404 quando não existe corridas na temporada.
            throw new ErroAplicacao(
                404,
                `Nenhuma corrida disponível para ${temporada}.`
            );
        }

        const corridas: CorridaCalendario[] = lista.Races.map((corrida) => ({
            rodada: Number(corrida.round),
            nome: corrida.raceName,
            idCircuito: corrida.Circuit.circuitId,
            circuito: corrida.Circuit.circuitName,
            pais: corrida.Circuit.Location.country,
            localidade: corrida.Circuit.Location.locality,
            data: corrida.date,
            horario: corrida.time ?? null,
            inicioFimSemana: corrida.FirstPractice?.date ?? corrida.date,
            sessoes: {
                primeiroTreino: corrida.FirstPractice,
                segundoTreino: corrida.SecondPractice,
                terceiroTreino: corrida.ThirdPractice,
                classificacao: corrida.Qualifying,
                sprint: corrida.Sprint,
                classificacaoSprint: corrida.SprintQualifying,
            }
        }));

        // Monta a resposta seguindo o contrato interno do backend.
        const resultadoFinal: RespostaCalendario = {
            temporada: Number(dadosJolpica.MRData.RaceTable.season),
            corridas
        };

        // Armazena apenas os dados que passaram pelas validações.
        salvarCache(chaveCache, resultadoFinal, tempoVida);

        // Retorna o calendário ao Controller.
        return resultadoFinal;

    });
} 
