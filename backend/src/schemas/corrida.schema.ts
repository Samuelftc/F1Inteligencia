import { z } from "zod";

const resultadoPilotoSchema = z.object({
    position: z.string().regex(/^\d+$/),
    Driver: z.object({
        driverId: z.string(),
        givenName: z.string(),
        familyName: z.string()
    }),
    Time: z.object({
        time: z.string()
    }).optional()
});


const ultimaCorridaSchema = z.object({
    round: z.string().regex(/^\d+$/),
    Circuit: z.object({
        circuitId: z.string(),
        circuitName: z.string(),
    }),
    raceName: z.string(),
    date: z.string(),
    Results: z.array(resultadoPilotoSchema)
});

export const respostaUltimaCorridaSchema = z.object({
    MRData: z.object({
        RaceTable: z.object({
            season: z.string().regex(/^\d+$/),
            Races: z.array(ultimaCorridaSchema)
        })
    })
});