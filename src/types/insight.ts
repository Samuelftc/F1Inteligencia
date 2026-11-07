export type TipoInsight = 'ritmo' | 'consistencia' | 'estrategia';

export interface Insight {
    id: number;
    tipo: TipoInsight;
    categoria: string;
    titulo: string;
    descricao: string;
    imagem: string;
}