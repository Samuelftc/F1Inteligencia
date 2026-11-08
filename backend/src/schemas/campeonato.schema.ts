import { z } from "zod";

// Estrutura dos dados individuais de um piloto.
const pilotoSchema = z.object({
  driverId: z.string(),
  code: z.string().optional(),
  givenName: z.string(),
  familyName: z.string(),
  nationality: z.string()
});

// Estrutura dos construtores associados ao piloto.
const construtorPilotoSchema = z.object({
  constructorId: z.string(),
  name: z.string()
});

// Estrutura de cada registro da classificação.
const classificacaoPilotoSchema = z.object({
  position: z.string().regex(/^\d+(\.\d+)?$/),
  points: z.string().regex(/^\d+(\.\d+)?$/),
  wins: z.string().regex(/^\d+(\.\d+)?$/),
  Driver: pilotoSchema,
  Constructors: z.array(construtorPilotoSchema)
});

// Estrutura da resposta da Jolpica.
export const respostaJolpicaPilotosSchema = z.object({
  MRData: z.object({
    StandingsTable: z.object({
      season: z.string().regex(/^\d+(\.\d+)?$/),
      StandingsLists: z.array(
        z.object({
          round: z.string().regex(/^\d+(\.\d+)?$/),
          DriverStandings: z.array(classificacaoPilotoSchema)
        })
      )
    })
  })
});

// CONSTRUTORES
const construtorSchema = z.object({
    constructorId: z.string(),
    name: z.string(),
    nationality: z.string()
});

const classificacaoConstrutorSchema = z.object({
    position: z.string().regex(/^\d+(\.\d+)?$/),
    points: z.string().regex(/^\d+(\.\d+)?$/),
    wins: z.string().regex(/^\d+(\.\d+)?$/),
    Constructor: construtorSchema
});

export const respostaJolpicaConstrutoresSchema = z.object({
  MRData: z.object({
    StandingsTable: z.object({
      season: z.string().regex(/^\d+(\.\d+)?$/),
      StandingsLists: z.array(
        z.object({
          round: z.string().regex(/^\d+(\.\d+)?$/),
          ConstructorStandings: z.array(classificacaoConstrutorSchema)
        })
      )
    })
  })
});