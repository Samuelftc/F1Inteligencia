import { ArrowRight, ChartNoAxesCombined, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

import '../../styles/home/Insights.css';

export default function Insights() {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.6
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <section className="performanceInsights section">
            <div className="topoSection">
                <div className="infosTopoSection">
                    <h2 className="tituloSection">Performance insights</h2>
                    <p>Descobertas e análises baseadas nos dados da temporada.</p>
                </div>

                <div className="containerlinkTopoSection">
                    <a href="#" className="linkTopoSection">
                        Ver mais insights
                        <ArrowRight size={20} />
                    </a>
                </div>
            </div>

            <motion.div className="performances"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}>
                <motion.div className="cardPerformance"
                    variants={cardVariants}>
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
                </motion.div>

                <motion.div className="cardPerformance"
                    variants={cardVariants}>
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
                </motion.div>

                <motion.div className="cardPerformance"
                    variants={cardVariants}>
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
                </motion.div>
            </motion.div>
        </section>
    );
}