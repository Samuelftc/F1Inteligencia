import { ArrowRight, ChartNoAxesCombined, TrendingUp } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import { insights } from '../../data/insights';

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

    const iconesInsight = {
        ritmo: TrendingUp,
        consistencia: ChartNoAxesCombined,
        estrategia: ChartNoAxesCombined
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
                {insights.map((insight) => {
                    const Icone = iconesInsight[insight.tipo];

                    return (
                        <motion.article
                            key={insight.id}
                            className="cardPerformance"
                            variants={cardVariants}
                        >
                            <div className="topoCardPerformance">
                                <Icone aria-hidden="true" />
                                <span>{insight.categoria}</span>
                            </div>

                            <div className="mainCardPerformance">
                                <div className="textoCardPerformance">
                                    <h3>{insight.titulo}</h3>
                                    <p>{insight.descricao}</p>
                                </div>

                                <img
                                    src={insight.imagem}
                                    alt=""
                                    loading="lazy"
                                />
                            </div>
                        </motion.article>
                    );
                })}
            </motion.div>
        </section>
    );
}