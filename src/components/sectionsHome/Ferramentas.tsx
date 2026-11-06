import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react';
import '../../styles/home/Ferramentas.css'

export default function Ferramentas() {
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
        <section className="exploreFerramentas section">
            <div className="topoSection">
                <div className="infosTopoSection">
                    <h2 className="tituloSection">Explore as ferramentas</h2>
                    <p>Acesse análises detalhadas e mergulhe nos dados de cada corrida.</p>
                </div>
            </div>

            <motion.div className="ferramentas"
                variants={containerVariants}
                initial="hidden"
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
                            <ArrowRight />
                        </div>
                    </div>
                </motion.a>

                <motion.a className="cardFerramenta" href="#"
                    variants={cardVariants}>
                    <div className="mainCardFerramenta">
                        <div className="infosFerramenta">
                            <div className="textoCardFerramenta">
                                <h3>Comparação de Pilotos</h3>
                                <p>Compare o desempenho de dois pilotos com gráficos e estatisticas avançadas.</p>
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
                            <ArrowRight />
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
                            <ArrowRight />
                        </div>
                    </div>
                </motion.a>
            </motion.div>
        </section>
    );
}