import type { UltimaCorrida } from '../types/campeonato/ultimaCorrida';

export const ultimaCorrida: UltimaCorrida = {
    nome: 'GP de Abu Dhabi',
    circuito: 'Yas Marina',
    data: '05 - 07 DEZ 2025',
    bandeira: '/assets/images/bandeiras/abuDhabi.png',

    resultados: [
        {
            id: "1",
            posicao: 1,
            nome: 'M. Verstappen',
            foto: '/assets/images/pilotos/maxVerstappen.png',
            tempo: '1:26:07.469'
        },
        {
            id: "2",
            posicao: 2,
            nome: 'O. Piastri',
            foto: '/assets/images/pilotos/oscarPiastri.webp',
            tempo: '+12.594'
        },
        {
            id: "3",
            posicao: 3,
            nome: 'L. Norris',
            foto: '/assets/images/pilotos/landoNorris.webp',
            tempo: '+16.572'
        }
    ],

    voltaRapida: {
        piloto: 'Charles Leclerc',
        equipe: 'Ferrari',
        foto: '/assets/images/pilotos/charlesLeclerc.webp',
        tempo: '1:26.725',
        volta: 45,
        composto: 'Médio'
    }
};