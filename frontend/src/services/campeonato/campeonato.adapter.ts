import type { ClassificacaoPilotoApi, ClassificacaoConstrutorApi } from "../../types/campeonato/campeonatoApi";
import type { PilotoClassificacao, ConstrutorClassificacao } from "../../types/campeonato/campeonato";

import { imagensPilotos } from "../../data/imagensPilotos";
import { imagensConstrutores } from "../../data/imagensConstrutores";

// Transforma os dados da API no formato utilizado pela Home.
export function adaptarPilotos(classificacao: ClassificacaoPilotoApi[]): PilotoClassificacao[] {
    return classificacao.map((piloto) => ({
        id: piloto.idPiloto,
        posicao: piloto.posicao,
        foto: imagensPilotos[piloto.idPiloto] ?? "",
        nome: piloto.nome,
        equipe: piloto.construtores[0] ?? "Sem equipe",
        pontos: piloto.pontos,
    }));
}

// Transforma os dados dos construtores para a tabela da Home.
export function adaptarConstrutores(classificacao: ClassificacaoConstrutorApi[]): ConstrutorClassificacao[] {
    return classificacao.map((construtor) => ({
        id: construtor.idConstrutor,
        posicao: construtor.posicao,
        logo: imagensConstrutores[construtor.idConstrutor] ?? "",
        equipe: construtor.nome,
        pontos: construtor.pontos,
    }));
}