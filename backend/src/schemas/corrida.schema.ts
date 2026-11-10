import { z } from "zod";

// ULTIMA CORRIDA
const melhorVoltaSchema = z.object({
    rank: z.string().regex(/^\d+$/),
    lap: z.string().regex(/^\d+$/),
    Time: z.object({
        time: z.string()
    })
});

const resultadoPilotoSchema = z.object({
    position: z.string().regex(/^\d+$/),
    Driver: z.object({
        driverId: z.string(),
        givenName: z.string(),
        familyName: z.string()
    }),
    Constructor: z.object({
        name: z.string()
    }),
    Time: z.object({
        time: z.string()
    }).optional(),
    FastestLap: melhorVoltaSchema.optional()
});


const ultimaCorridaSchema = z.object({
    round: z.string().regex(/^\d+$/),
    Circuit: z.object({
        circuitId: z.string(),
        circuitName: z.string(),
        Location: z.object({
            country: z.string()
        })
    }),
    raceName: z.string(),
    date: z.string(),
    Results: z.array(resultadoPilotoSchema)
});

export const respostaCorridaSchema = z.object({
    MRData: z.object({
        RaceTable: z.object({
            season: z.string().regex(/^\d+$/),
            Races: z.array(ultimaCorridaSchema)
        })
    })
});


//  CORRIDAS
const sessaoJolpicaSchema = z.object({
    date: z.string(),
    time: z.string().optional()
});

const corridaCalendarioSchema = z.object({
    round: z.string().regex(/^\d+$/),
    raceName: z.string(),
    Circuit: z.object({
        circuitId: z.string(),
        circuitName: z.string(),
        Location: z.object({
            locality: z.string(),
            country: z.string()
        })
    }),
    date: z.string(),
    time: z.string().optional(),
    FirstPractice: sessaoJolpicaSchema.optional(),
    SecondPractice: sessaoJolpicaSchema.optional(),
    ThirdPractice: sessaoJolpicaSchema.optional(),
    Qualifying: sessaoJolpicaSchema.optional(),
    Sprint: sessaoJolpicaSchema.optional(),
    SprintQualifying: sessaoJolpicaSchema.optional(),
});

export const respostaCalendarioSchema = z.object({
    MRData: z.object({
        RaceTable: z.object({
            season: z.string().regex(/^\d+$/),
            Races: z.array(corridaCalendarioSchema)
        }),
    }),
});