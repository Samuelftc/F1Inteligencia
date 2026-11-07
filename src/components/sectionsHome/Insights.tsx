import { ArrowRight, ChartNoAxesCombined, TrendingUp } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import '../../styles/home/Insights.css';

export default function Insights() {
    const reduzirMovimento = useReducedMotion();

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: reduzirMovimento ? 0 : 0.6
            }
        }
    };

    const cardVariants = {
        hidden: reduzirMovimento
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 50 },

        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: reduzirMovimento ? 0 : 0.4,
                ease: "easeOut" as const
            }
        }
    };

    return (
        <section className="performanceInsights section" aria-labelledby="titulo-insights">
            <div className="topoSection">
                <div className="infosTopoSection">
                    <h2 id="titulo-insights" className="tituloSection">Performance insights</h2>
                    <p>Descobertas e análises baseadas nos dados da temporada.</p>
                </div>

                <div className="containerlinkTopoSection">
                    <a href="#" className="linkTopoSection">
                        Ver mais insights
                        <ArrowRight size={20} aria-hidden="true" />
                    </a>
                </div>
            </div>

            <motion.div className="performances"
                variants={containerVariants}
                initial={reduzirMovimento ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}>
                <motion.div className="cardPerformance"
                    variants={cardVariants}>
                    <div className="topoCardPerformance">
                        <TrendingUp aria-hidden="true" />
                        <span>Ritmo de Corrida</span>
                    </div>
                    <div className="mainCardPerformance">
                        <div className="textoCardPerformance">
                            <h3>McLaren se destacou no ritmo em 2025</h3>
                            <p>A equipe liderou análises de desempenho médio da temporada, consolidando sua competitividade ao longo do campeonato.</p>
                        </div>
                        <img src="/assets/images/estastisticas/graficoBarrasHome.png" alt="" loading="lazy" />
                    </div>
                </motion.div>

                <motion.div className="cardPerformance"
                    variants={cardVariants}>
                    <div className="topoCardPerformance">
                        <ChartNoAxesCombined aria-hidden="true" />
                        <span>Consistência</span>
                    </div>
                    <div className="mainCardPerformance">
                        <div className="textoCardPerformance">
                            <h3>Consistência de ritmo ao longo da temporada</h3>
                            <p>Compare a variação dos tempos de volta dos pilotos para identificar quem manteve o ritmo mais estável.</p>
                        </div>
                        <img src="/assets/images/estastisticas/graficoLinhasHome.png" alt="" loading="lazy" />
                    </div>
                </motion.div>

                <motion.div className="cardPerformance"
                    variants={cardVariants}>
                    <div className="topoCardPerformance">
                        <ChartNoAxesCombined aria-hidden="true" />
                        <span>Estratégia</span>
                    </div>
                    <div className="mainCardPerformance">
                        <div className="textoCardPerformance">
                            <h3>Estratégias de uma parada se destacaram em 2025</h3>
                            <p>A estratégia de uma parada esteve presente em grande parte das vitórias, mas sua eficácia variou conforme o circuito e as condições de corrida.</p>
                        </div>
                        <img src="/assets/images/estastisticas/graficoPizzaHome.png" alt="" loading="lazy" />
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}