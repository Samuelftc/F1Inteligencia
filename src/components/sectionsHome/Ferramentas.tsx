import { ArrowRight, Flag } from 'lucide-react'
import '../../styles/home/Ferramentas.css'

export default function Ferramentas() {
    return (
        <section className="exploreFerramentas section">
            <div className="topoSection">
                <div className="infosTopoSection">
                    <h2 className="tituloSection">Explore as ferramentas</h2>
                    <p>Acesse análises detalhadas e mergulhe nos dados de cada corrida.</p>
                </div>
            </div>

            <div className="ferramentas">
                <div className="cardFerramenta">
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
                </div>

                <div className="cardFerramenta">
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
                </div>

                <div className="cardFerramenta">
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
                </div>
            </div>
        </section>
    );
}