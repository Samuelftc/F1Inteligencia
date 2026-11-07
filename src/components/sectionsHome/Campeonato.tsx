import { ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import '../../styles/home/Campeonato.css'

const pilotos = [
    { id: 1, posicao: 1, foto: '/assets/images/pilotos/landoNorris.webp', nome: 'L. Norris', equipe: 'McLaren', pontos: 423 },
    { id: 2, posicao: 2, foto: '/assets/images/pilotos/maxVerstappen.png', nome: 'M. Verstappen', equipe: 'Red Bull', pontos: 421 },
    { id: 3, posicao: 3, foto: '/assets/images/pilotos/oscarPiastri.webp', nome: 'O. Piastri', equipe: 'McLaren', pontos: 410 },
    { id: 4, posicao: 4, foto: '/assets/images/pilotos/georgeRussell.webp', nome: 'G. Russell', equipe: 'Mercedes', pontos: 319 },
    { id: 5, posicao: 5, foto: '/assets/images/pilotos/charlesLeclerc.webp', nome: 'C. Leclerc', equipe: 'Ferrari', pontos: 242 },
]

const construtores = [
    { id: 1, posicao: 1, logo: '/assets/images/construtores/mcLaren.png', equipe: 'McLaren', pontos: 833 },
    { id: 2, posicao: 2, logo: '/assets/images/construtores/mercedes.png', equipe: 'Mercedes', pontos: 469 },
    { id: 3, posicao: 3, logo: '/assets/images/construtores/redBull.png', equipe: 'Red Bull', pontos: 451 },
    { id: 4, posicao: 4, logo: '/assets/images/construtores/ferrari.png', equipe: 'Ferrari', pontos: 398 },
    { id: 5, posicao: 5, logo: '/assets/images/construtores/williams.png', equipe: 'Williams', pontos: 137 },
]

export default function Campeonato() {
    const reduzirMovimento = useReducedMotion()

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: reduzirMovimento ? 0 : 0.6,
            },
        },
    }

    const cardVariants = {
        hidden: reduzirMovimento ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: reduzirMovimento ? 0 : 0.6,
                ease: 'easeOut' as const,
            },
        },
    }

    return (
        <section className="campeonato section" aria-labelledby="titulo-campeonato">
            <div className="topoSection">
                <div className="infosTopoSection">
                    <h2 id="titulo-campeonato" className="tituloSection">Campeonato 2025</h2>
                    <p>Classificação de pilotos e construtores.</p>
                </div>

                <div className="containerlinkTopoSection">
                    <a href="#" className="linkTopoSection">
                        Ver classificação completa
                        <ArrowRight size={20} aria-hidden="true" />
                    </a>
                </div>
            </div>

            <div className="conteudoCampeonato">
                <div className="campeonatos">
                    <motion.div
                        className="cardCampeonato"
                        initial={reduzirMovimento ? false : { opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: reduzirMovimento ? 0 : 0.6, ease: 'easeOut' }}
                    >
                        <div className="cardCampeonatoTopo">
                            <h3 id="titulo-campeonato-pilotos">Pilotos</h3>
                            <ArrowRight size={30} aria-hidden="true" />
                        </div>

                        <table className="tabelaCampeonato" aria-labelledby="titulo-campeonato-pilotos">
                            <thead className="tabelaCampeonatoHead">
                                <tr>
                                    <th scope="col">Pos</th>
                                    <th scope="col">Piloto</th>
                                    <th scope="col">Equipe</th>
                                    <th scope="col">Pontos</th>
                                </tr>
                            </thead>
                            <tbody className="tabelaCampeonatoBody">
                                {pilotos.map((piloto) => (
                                    <tr key={piloto.id}>
                                        <td className="posicaoTd">{piloto.posicao}</td>
                                        <th scope="row" className="infoTd">
                                            <div className="infoTd">
                                                <img src={piloto.foto} alt="" />
                                                <span>{piloto.nome}</span>
                                            </div>
                                        </th>
                                        <td>{piloto.equipe}</td>
                                        <td>{piloto.pontos}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>

                    <motion.div
                        className="cardCampeonato"
                        initial={reduzirMovimento ? false : { opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: reduzirMovimento ? 0 : 0.6, ease: 'easeOut' }}
                    >
                        <div className="cardCampeonatoTopo">
                            <h3 id="titulo-campeonato-construtores">Construtores</h3>
                            <ArrowRight size={30} aria-hidden="true" />
                        </div>

                        <table className="tabelaCampeonato" aria-labelledby="titulo-campeonato-construtores">
                            <thead className="tabelaCampeonatoHead">
                                <tr>
                                    <th scope="col">Pos</th>
                                    <th scope="col">Equipe</th>
                                    <th scope="col">Pontos</th>
                                </tr>
                            </thead>
                            <tbody className="tabelaCampeonatoBody">
                                {construtores.map((construtor) => (
                                    <tr key={construtor.id}>
                                        <td>{construtor.posicao}</td>
                                        <th scope="row" className="infoTd">
                                            <img src={construtor.logo} alt="" />
                                            {construtor.equipe}
                                        </th>
                                        <td>{construtor.pontos}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>

                <motion.div
                    className="containerUltimaCorrida"
                    variants={containerVariants}
                    initial={reduzirMovimento ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div className="cardUltimaCorrida" variants={cardVariants}>
                        <div className="infosUltimaCorrida">
                            <h3>Última corrida</h3>
                            <div className="detalhesUltimaCorrida">
                                <img src="/assets/images/bandeiras/abuDhabi.png" alt="" height={50} />
                                <div className="infosDetalhesUltimaCorrida">
                                    <h4>GP de Abu Dhabi</h4>
                                    <p>Yas Marina - 05 - 07 DEZ 2025</p>
                                </div>
                            </div>
                            <a href="" className="linkUltimaCorrida">
                                Ver análise completa
                                <ArrowRight size={20} aria-hidden="true" />
                            </a>
                        </div>

                        <div className="resultadosUltimaCorrida">
                            <h4 id="titulo-resultados-ultima-corrida">Resultado</h4>
                            <ul aria-labelledby="titulo-resultados-ultima-corrida">
                                <li className="resultadoPiloto">
                                    <div>
                                        <p>1</p>
                                        <img src="/assets/images/pilotos/maxVerstappen.png" alt="" height={50} />
                                        <div><h5>M. Verstappen</h5></div>
                                    </div>
                                    <span>1:26:07.469</span>
                                </li>
                                <li className="resultadoPiloto">
                                    <div>
                                        <p>2</p>
                                        <img src="/assets/images/pilotos/oscarPiastri.webp" alt="" height={50} />
                                        <div><h5>O. Piastri</h5></div>
                                    </div>
                                    <span>+12.594</span>
                                </li>
                                <li className="resultadoPiloto">
                                    <div>
                                        <p>3</p>
                                        <img src="/assets/images/pilotos/landoNorris.webp" alt="" height={50} />
                                        <div><h5>L. Norris</h5></div>
                                    </div>
                                    <span>+16.572</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div className="cardVoltaRapida" variants={cardVariants}>
                        <h3>Melhor volta da corrida</h3>
                        <div className="infosVoltaRapida">
                            <img src="/assets/images/pilotos/charlesLeclerc.webp" alt="" height={50} />
                            <div>
                                <h4>Charles Leclerc</h4>
                                <p>Ferrari</p>
                            </div>
                        </div>
                        <p className="tempoVoltaRapida">1:26.725</p>
                        <p className="infosVoltaComposto">Volta 45 - Composto Médio</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
