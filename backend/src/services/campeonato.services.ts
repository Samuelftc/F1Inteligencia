import type { ClassificacaoPiloto, ClassificacaoConstrutor, RespostaCampeonato } from "../types/campeonato.types.js";
import { respostaJolpicaPilotosSchema, respostaJolpicaConstrutoresSchema } from "../schemas/campeonato.schema.js";
import { ErroAplicacao } from "../errors/ErroAplicacao.js";

/**
 * Consulta a classificação de pilotos de uma temporada
 * na Jolpica e transforma os dados para o formato
 * utilizado pelo backend do F1 Intelligence.
 *
 * Promise<RespostaCampeonato<ClassificacaoPiloto>>
 * define o tipo de dado que a função assíncrona retorna.
 */
export async function buscarClassificacaoPilotos(temporada: number): Promise<RespostaCampeonato<ClassificacaoPiloto>> {

    const url = `https://api.jolpi.ca/ergast/f1/${temporada}/driverstandings.json`;

    let resposta: Response;

    // Tenta consultar a Jolpica, limitando o tempo de espera
    // da requisição a 10 segundos.
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


    // unknown indica que ainda não conhecemos
    // nem validamos a estrutura dos dados externos.
    let dados: unknown;

    try {
        dados = await resposta.json();
    } catch {
        // Captura falhas ao interpretar o corpo da resposta como JSON.
        throw new ErroAplicacao(
            502,
            "A Jolpica retornou um JSON inválido."
        );
    }

    // Valida a estrutura do JSON recebido da Jolpica.
    // Em caso de sucesso, o Zod infere o tipo dos dados.
    const resultado = respostaJolpicaPilotosSchema.safeParse(dados);

    if (!resultado.success) {
        // Impede o processamento de dados com estrutura inesperada.
        throw new ErroAplicacao(
            502,
            "A Jolpica retornou dados em um formato inesperado."
        );
    }

    const dadosJolpica = resultado.data;

    // Acessa a primeira lista de classificação retornada.
    const lista =
        dadosJolpica.MRData.StandingsTable.StandingsLists[0];

    // Impede o processamento caso não exista classificação.
    if (!lista) {
        // Retorna 404 quando não existe classificação para a temporada.
        throw new ErroAplicacao(
            404,
            `Classificação indisponível para ${temporada}.`
        );
    }

    /**
     * map() percorre os pilotos recebidos da Jolpica
     * e cria um novo array no formato ClassificacaoPiloto.
     */
    const classificacao: ClassificacaoPiloto[] =
        lista.DriverStandings.map((piloto) => ({
            posicao: Number(piloto.position),
            idPiloto: piloto.Driver.driverId,
            codigo: piloto.Driver.code ?? null,
            nome: `${piloto.Driver.givenName} ${piloto.Driver.familyName}`,
            nacionalidade: piloto.Driver.nationality,
            pontos: Number(piloto.points),
            vitorias: Number(piloto.wins),

            // Extrai apenas os nomes das equipes do piloto.
            construtores: piloto.Constructors.map(
                (construtor) => construtor.name
            )
        }));

    // Retorna os dados seguindo o contrato
    // definido pela interface RespostaCampeonato<T>.
    return {
        temporada: Number(
            dadosJolpica.MRData.StandingsTable.season
        ),
        rodada: Number(lista.round),
        classificacao
    };
}

export async function buscarClassificacaoConstrutores(temporada: number): Promise<RespostaCampeonato<ClassificacaoConstrutor>> {

    const url = `https://api.jolpi.ca/ergast/f1/${temporada}/constructorstandings.json`;


    let resposta: Response;

    try {
        resposta = await fetch(url, {
            signal: AbortSignal.timeout(10000)
        });
    } catch (erro) {
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

    let dados: unknown;

    try {
        dados = await resposta.json();
    } catch {
        throw new ErroAplicacao(
            502,
            "A Jolpica retornou um JSON inválido."
        );
    }

    const resultado = respostaJolpicaConstrutoresSchema.safeParse(dados);

    if (!resultado.success) {
        throw new ErroAplicacao(
            502,
            "A Jolpica retornou dados em um formato inesperado."
        );
    }

    const dadosJolpica = resultado.data;

    const lista = dadosJolpica.MRData.StandingsTable.StandingsLists[0];

    if (!lista) {
        throw new ErroAplicacao(
            404,
            `Classificação indisponível para ${temporada}.`
        );
    }

    const classificacao: ClassificacaoConstrutor[] =
        lista.ConstructorStandings.map((construtor) => ({
            posicao: Number(construtor.position),
            idConstrutor: construtor.Constructor.constructorId,
            nome: construtor.Constructor.name,
            nacionalidade: construtor.Constructor.nationality,
            pontos: Number(construtor.points),
            vitorias: Number(construtor.wins)
        }));

    return {
        temporada: Number(dadosJolpica.MRData.StandingsTable.season),
        rodada: Number(lista.round),
        classificacao
    }
}