export interface ClassificacaoPiloto {
  posicao: number;
  idPiloto: string;
  // Abreviação do piloto (ex: VER, NOR, PIA).
  codigo: string | null;
  nome: string;
  nacionalidade: string;
  pontos: number;
  vitorias: number;
  construtores: string[];
}

export interface ClassificacaoConstrutor {
  posicao: number;
  idConstrutor: string;
  nome: string;
  nacionalidade: string;
  pontos: number;
  vitorias: number;
}

/**
 * Define o formato padrão de uma resposta
 * contendo a classificação de um campeonato.
 *
 * O <T> representa o tipo dos elementos
 * que estarão dentro do array classificacao.
 *
 * Dessa forma, a mesma interface pode ser
 * utilizada para pilotos e construtores.
 */
export interface RespostaCampeonato<T> {
  // Ano da temporada consultada (ex: 2025).
  temporada: number;

  // Número da última rodada considerada na classificação.
  rodada: number;

  // Lista de pilotos ou construtores, dependendo do tipo T.
  classificacao: T[];
}

// interface para representar a estrutura que esperamos receber da Jolpica.
export interface RespostaJolpicaPilotos {
  MRData: {
    StandingsTable: {
      season: string;
      StandingsLists: {
        round: string;
        DriverStandings: {
          position: string;
          points: string;
          wins: string;
          Driver: {
            driverId: string;
            code?: string;
            givenName: string;
            familyName: string;
            nationality: string;
          };
          Constructors: {
            constructorId: string;
            name: string;
          }[];
        }[];
      }[];
    };
  };
}


export interface RespostaJolpicaConstrutores {
  MRData: {
    StandingsTable: {
      season: string;
      StandingsLists: {
        round: string;
        ConstructorStandings: {
          position: string;
          points: string;
          wins: string;
          Constructor: {
            constructorId: string;
            name: string;
            nationality: string;
          };
        }[];
      }[];
    };
  };
}