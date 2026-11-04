import { ArrowRight, ChartNoAxesCombined, TrendingUp } from "lucide-react";

import '../../styles/home/Insights.css';

export default function Insights() {
    return (
        <section className="performanceInsights">
            <div className="topoInsights">
                <div className="infosTopoInsights">
                    <h2 className="tituloInsights">Performance insights</h2>
                    <p>Descobertas e análises baseadas nos dados da temporada.</p>
                </div>

                <div className="containerlinkTopoInsights">
                    <a href="#" className="linkTopoInsights">
                        Ver mais insights
                        <ArrowRight size={20} />
                    </a>
                </div>
            </div>

            <div className="performances">
                <div className="cardPerformance">
                    <div className="topoCardPerformance">
                        <TrendingUp />
                        <span>Ritmo de Corrida</span>
                    </div>
                    <div className="mainCardPerformance">
                        <div className="textoCardPerformance">
                            <h3>McLaren teve o melhor ritmo médio em 2025</h3>
                            <p>Com base nas voltas válidas de corrida, a McLaren apresentou o menor tempo médio entre as equipes.</p>
                        </div>
                        <img src="/assets/images/estastisticas/graficoBarrasHome.png" alt="" />
                    </div>
                </div>

                <div className="cardPerformance">
                    <div className="topoCardPerformance">
                        <ChartNoAxesCombined />
                        <span>Consistência</span>
                    </div>
                    <div className="mainCardPerformance">
                        <div className="textoCardPerformance">
                            <h3>Verstappen lidera em consistência de ritmo</h3>
                            <p>Menor variação de tempos de volta entre os pilotos da temporada (0.427s de desvio-padrão).</p>
                        </div>
                        <img src="/assets/images/estastisticas/graficoLinhasHome.png" alt="" />
                    </div>
                </div>

                <div className="cardPerformance">
                    <div className="topoCardPerformance">
                        <ChartNoAxesCombined />
                        <span>Estratégia</span>
                    </div>
                    <div className="mainCardPerformance">
                        <div className="textoCardPerformance">
                            <h3>Estratégia de 1 pit stop foi a mais eficiente</h3>
                            <p>62% das cprrodas de 2025 foram vencidas com estratégia de apenas uma parada nos boxes.</p>
                        </div>
                        <img src="/assets/images/estastisticas/graficoPizzaHome.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
}