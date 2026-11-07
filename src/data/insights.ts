import type { Insight } from '../types/insight';

export const insights: Insight[] = [
    {
        id: 1,
        tipo: 'ritmo',
        categoria: 'Ritmo de Corrida',
        titulo: 'McLaren se destacou no ritmo em 2025',
        descricao: 'A equipe liderou análises de desempenho médio da temporada, consolidando sua competitividade ao longo do campeonato.',
        imagem: '/assets/images/estastisticas/graficoBarrasHome.png'
    },
    {
        id: 2,
        tipo: 'consistencia',
        categoria: 'Consistência',
        titulo: 'Consistência de ritmo ao longo da temporada',
        descricao: 'Compare a variação dos tempos de volta dos pilotos para identificar quem manteve o ritmo mais estável.',
        imagem: '/assets/images/estastisticas/graficoLinhasHome.png'
    },
    {
        id: 3,
        tipo: 'estrategia',
        categoria: 'Estratégia',
        titulo: 'Estratégias de uma parada se destacaram em 2025',
        descricao: 'A estratégia de uma parada esteve presente em grande parte das vitórias, mas sua eficácia variou conforme o circuito e as condições de corrida.',
        imagem: '/assets/images/estastisticas/graficoPizzaHome.png'
    }
];