import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react';
import '../../styles/home/Ferramentas.css'

export default function Ferramentas() {
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
        <section className="exploreFerramentas section" aria-labelledby="titulo-ferramentas">
            <div className="topoSection">
                <div className="infosTopoSection">
                    <h2 id="titulo-ferramentas" className="tituloSection">Explore as ferramentas</h2>
                    <p>Acesse análises detalhadas e mergulhe nos dados de cada corrida.</p>
                </div>
            </div>

            <motion.div className="ferramentas"
                variants={containerVariants}
                initial={reduzirMovimento ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}>
                <motion.a className="cardFerramenta" href="#"
                    variants={cardVariants}>
                    <div className="mainCardFerramenta">
                        <div className="infosFerramenta">
                            <div className="textoCardFerramenta">
                                <h3>Explorar Corridas</h3>
                                <p>Resultados, voltas e toda a informação de cada Grande Prêmio</p>
                            </div>
                        </div>
                        <div
                            className="imagemFundoCardFerramenta"
                            style={{
                                backgroundImage: `
                                    linear-gradient(
                                        to right,
                                        #0b131b 0%,
                                        rgba(11, 19, 27, 0.85) 20%,
                                        rgba(11, 19, 27, 0.3) 60%,
                                        transparent 100%
                                    ),
                                    url('/assets/cardRaceExplorerHome.png')
                                    `
                            }}
                        >
                            <ArrowRight aria-hidden="true" />
                        </div>
                    </div>
                </motion.a>

                <motion.a className="cardFerramenta" href="#"
                    variants={cardVariants}>
                    <div className="mainCardFerramenta">
                        <div className="infosFerramenta">
                            <div className="textoCardFerramenta">
                                <h3>Comparação de Pilotos</h3>
                                <p>Compare o desempenho de dois pilotos com gráficos e estatísticas avançadas.</p>
                            </div>
                        </div>
                        <div
                            className="imagemFundoCardFerramenta"
                            style={{
                                backgroundImage: `
                                    linear-gradient(
                                        to right,
                                        #0b131b 0%,
                                        rgba(11, 19, 27, 0.85) 20%,
                                        rgba(11, 19, 27, 0.3) 60%,
                                        transparent 100%
                                    ),
                                    url('/assets/cardDriverHome.png')
                                    `
                            }}
                        >
                            <ArrowRight aria-hidden="true" />
                        </div>
                    </div>
                </motion.a>

                <motion.a className="cardFerramenta" href="#"
                    variants={cardVariants}>
                    <div className="mainCardFerramenta">
                        <div className="infosFerramenta">
                            <div className="textoCardFerramenta">
                                <h3>Laboratório de Estratégia</h3>
                                <p>Analise stints, pneus e decisões estratégicas das equipes</p>
                            </div>
                        </div>
                        <div
                            className="imagemFundoCardFerramenta"
                            style={{
                                backgroundImage: `
                                    linear-gradient(
                                        to right,
                                        #0b131b 0%,
                                        rgba(11, 19, 27, 0.85) 20%,
                                        rgba(11, 19, 27, 0.3) 60%,
                                        transparent 100%
                                    ),
                                    url('/assets/cardEstrategiaHome.png')
                                    `
                            }}
                        >
                            <ArrowRight aria-hidden="true" />
                        </div>
                    </div>
                </motion.a>
            </motion.div>
        </section>
    );
}