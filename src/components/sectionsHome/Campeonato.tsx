import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import '../../styles/home/Campeonato.css'
import { pilotos, construtores } from '../../data/campeonato'
import { ultimaCorrida } from '../../data/ultimaCorrida'

export default function Campeonato() {
    const reduzirMovimento = useReducedMotion()
    const campeonatosRef = useRef<HTMLDivElement>(null)

    function navegarCampeonatos(indice: number) {
        const container = campeonatosRef.current
        const card = container?.children.item(indice)

        if (!container || !(card instanceof HTMLElement)) return

        const distancia =
            card.getBoundingClientRect().left -
            container.getBoundingClientRect().left

        container.scrollTo({
            left: container.scrollLeft + distancia,
            behavior: reduzirMovimento ? 'instant' : 'smooth',
        })
    }

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: reduzirMovimento ? 0 : 0.6,
            },
        },
    }

    const cardVariants = {
        hidden: reduzirMovimento
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 50 },
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
        <section
            className="campeonato section"
            aria-labelledby="titulo-campeonato"
        >
            <div className="topoSection">
                <div className="infosTopoSection">
                    <h2 id="titulo-campeonato" className="tituloSection">
                        Campeonato 2025
                    </h2>
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
                <div
                    ref={campeonatosRef}
                    id="carrossel-campeonatos"
                    className="campeonatos"
                    role="region"
                    aria-label="Classificação de pilotos e construtores"
                    tabIndex={0}
                >
                    <motion.div
                        className="cardCampeonato"
                        initial={reduzirMovimento ? false : { opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: reduzirMovimento ? 0 : 0.6,
                            ease: 'easeOut',
                        }}
                    >
                        <div className="cardCampeonatoTopo">
                            <h3 id="titulo-campeonato-pilotos">Pilotos</h3>
                            <ArrowRight size={30} aria-hidden="true" />
                        </div>

                        <table
                            className="tabelaCampeonato"
                            aria-labelledby="titulo-campeonato-pilotos"
                        >
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
                                        <td className="posicaoTd">
                                            {piloto.posicao}
                                        </td>

                                        <th scope="row">
                                            <div className="infoTd">
                                                <img
                                                    src={piloto.foto}
                                                    alt=""
                                                />
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
                        initial={reduzirMovimento ? false : { opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: reduzirMovimento ? 0 : 0.6,
                            ease: 'easeOut',
                        }}
                    >
                        <div className="cardCampeonatoTopo">
                            <h3 id="titulo-campeonato-construtores">
                                Construtores
                            </h3>
                            <ArrowRight size={30} aria-hidden="true" />
                        </div>

                        <table
                            className="tabelaCampeonato"
                            aria-labelledby="titulo-campeonato-construtores"
                        >
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

                                        <th scope="row">
                                            <div className="infoTd">
                                                <img
                                                    src={construtor.logo}
                                                    alt=""
                                                />
                                                <span>
                                                    {construtor.equipe}
                                                </span>
                                            </div>
                                        </th>

                                        <td>{construtor.pontos}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>

                <div
                    className="controlesCampeonato"
                    role="group"
                    aria-label="Navegar entre classificações"
                >
                    <button
                        type="button"
                        aria-label="Mostrar classificação de pilotos"
                        aria-controls="carrossel-campeonatos"
                        onClick={() => navegarCampeonatos(0)}
                    >
                        <ArrowLeft size={20} aria-hidden="true" />
                        <span>Pilotos</span>
                    </button>

                    <button
                        type="button"
                        aria-label="Mostrar classificação de construtores"
                        aria-controls="carrossel-campeonatos"
                        onClick={() => navegarCampeonatos(1)}
                    >
                        <span>Construtores</span>
                        <ArrowRight size={20} aria-hidden="true" />
                    </button>
                </div>

                <motion.div
                    className="containerUltimaCorrida"
                    variants={containerVariants}
                    initial={reduzirMovimento ? false : 'hidden'}
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div
                        className="cardUltimaCorrida"
                        variants={cardVariants}
                    >
                        <div className="infosUltimaCorrida">
                            <h3>Última corrida</h3>

                            <div className="detalhesUltimaCorrida">
                                <img
                                    src={ultimaCorrida.bandeira}
                                    alt=""
                                    height={50}
                                />

                                <div className="infosDetalhesUltimaCorrida">
                                    <h4>{ultimaCorrida.nome}</h4>
                                    <p>
                                        {ultimaCorrida.circuito} -{' '}
                                        {ultimaCorrida.data}
                                    </p>
                                </div>
                            </div>

                            <a href="" className="linkUltimaCorrida">
                                Ver análise completa
                                <ArrowRight size={20} aria-hidden="true" />
                            </a>
                        </div>

                        <div className="resultadosUltimaCorrida">
                            <h4 id="titulo-resultados-ultima-corrida">
                                Resultado
                            </h4>

                            <ul aria-labelledby="titulo-resultados-ultima-corrida">
                                {ultimaCorrida.resultados.map((resultado) => (
                                    <li
                                        className="resultadoPiloto"
                                        key={resultado.id}
                                    >
                                        <div>
                                            <p>{resultado.posicao}</p>

                                            <img
                                                src={resultado.foto}
                                                alt=""
                                                height={50}
                                            />

                                            <div>
                                                <h5>{resultado.nome}</h5>
                                            </div>
                                        </div>

                                        <span>{resultado.tempo}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        className="cardVoltaRapida"
                        variants={cardVariants}
                    >
                        <h3>Melhor volta da corrida</h3>

                        <div className="infosVoltaRapida">
                            <img
                                src={ultimaCorrida.voltaRapida.foto}
                                alt=""
                                height={50}
                            />

                            <div>
                                <h4>{ultimaCorrida.voltaRapida.piloto}</h4>
                                <p>{ultimaCorrida.voltaRapida.equipe}</p>
                            </div>
                        </div>

                        <p className="tempoVoltaRapida">
                            {ultimaCorrida.voltaRapida.tempo}
                        </p>

                        <p className="infosVoltaComposto">
                            Volta {ultimaCorrida.voltaRapida.volta} - Composto{' '}
                            {ultimaCorrida.voltaRapida.composto}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}