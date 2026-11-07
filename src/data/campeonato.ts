import type {
    PilotoClassificacao,
    ConstrutorClassificacao
} from '../types/campeonato';

export const pilotos: PilotoClassificacao[] = [
    { id: 1, posicao: 1, foto: '/assets/images/pilotos/landoNorris.webp', nome: 'L. Norris', equipe: 'McLaren', pontos: 423 },
    { id: 2, posicao: 2, foto: '/assets/images/pilotos/maxVerstappen.png', nome: 'M. Verstappen', equipe: 'Red Bull', pontos: 421 },
    { id: 3, posicao: 3, foto: '/assets/images/pilotos/oscarPiastri.webp', nome: 'O. Piastri', equipe: 'McLaren', pontos: 410 },
    { id: 4, posicao: 4, foto: '/assets/images/pilotos/georgeRussell.webp', nome: 'G. Russell', equipe: 'Mercedes', pontos: 319 },
    { id: 5, posicao: 5, foto: '/assets/images/pilotos/charlesLeclerc.webp', nome: 'C. Leclerc', equipe: 'Ferrari', pontos: 242 },
];

export const construtores: ConstrutorClassificacao[] = [
    { id: 1, posicao: 1, logo: '/assets/images/construtores/mcLaren.png', equipe: 'McLaren', pontos: 833 },
    { id: 2, posicao: 2, logo: '/assets/images/construtores/mercedes.png', equipe: 'Mercedes', pontos: 469 },
    { id: 3, posicao: 3, logo: '/assets/images/construtores/redBull.png', equipe: 'Red Bull', pontos: 451 },
    { id: 4, posicao: 4, logo: '/assets/images/construtores/ferrari.png', equipe: 'Ferrari', pontos: 398 },
    { id: 5, posicao: 5, logo: '/assets/images/construtores/williams.png', equipe: 'Williams', pontos: 137 },
];