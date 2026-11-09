import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import '../../styles/home/Campeonato.css'
// import { ultimaCorrida } from '../../data/ultimaCorrida'

import { useEffect, useRef, useState } from 'react'
import type { PilotoClassificacao, ConstrutorClassificacao } from '../../types/campeonato/campeonato'
import { buscarClassificacaoPilotos, buscarClassificacaoConstrutores } from '../../services/campeonato/campeonato.service'
import { adaptarPilotos, adaptarConstrutores } from '../../services/campeonato/campeonato.adapter'

import type { UltimaCorrida } from '../../types/campeonato/ultimaCorrida'
import { buscarUltimaCorrida } from '../../services/campeonato/ultimaCorrida.service'
import { adaptarUltimaCorrida } from '../../services/campeonato/ultimaCorrida.adapter'

export default function Campeonato() {

    const reduzirMovimento = useReducedMotion()

    // Referência ao container HTML utilizado para navegar entre os campeonatos.
    const campeonatosRef = useRef<HTMLDivElement>(null)

    // Armazena as classificações completas de pilotos e construtores.
    const [pilotos, setPilotos] = useState<PilotoClassificacao[]>([])
    const [construtores, setConstrutores] = useState<ConstrutorClassificacao[]>([])

    const [ultimaCorrida, setUltimaCorrida] = useState<UltimaCorrida | null>(null)

    // Controla os estados de carregamento e erro das requisições.
    const [carregandoCampeonato, setCarregandoCampeonato] = useState(true)
    const [erroCampeonato, setErroCampeonato] = useState<string | null>(null)

    const [carregandoUltimaCorrida, setCarregandoUltimaCorrida] = useState(true)
    const [erroUltimaCorrida, setErroUltimaCorrida] = useState<string | null>(null)

    // Busca as classificações quando o componente é montado.
    useEffect(() => {
        // Impede atualizações de estado após a limpeza do efeito.
        let ativo = true

        async function carregarCampeonatos() {
            try {
                // Executa as duas requisições concorrentemente.
                // Se uma falhar, o Promise.all rejeita a operação.
                const [respostaPilotos, respostaConstrutores] = await Promise.all([
                    buscarClassificacaoPilotos(2025),
                    buscarClassificacaoConstrutores(2025)
                ])

                // Ignora respostas caso o efeito já tenha sido encerrado.
                if (!ativo) return

                // Converte os dados da API para os modelos utilizados pelo frontend.
                setPilotos(adaptarPilotos(respostaPilotos.classificacao))
                setConstrutores(adaptarConstrutores(respostaConstrutores.classificacao))

                // Limpa possíveis erros anteriores após uma consulta bem-sucedida.
                setErroCampeonato(null)
            } catch (erro) {
                if (!ativo) return

                // Registra o erro técnico e apresenta uma mensagem amigável ao usuário.
                console.error('Erro ao carregar campeonatos:', erro)
                setErroCampeonato('Não foi possível carregar as classificações.')
            } finally {
                // Finaliza o carregamento apenas se o efeito continuar ativo.
                if (ativo) {
                    setCarregandoCampeonato(false)
                }
            }
        }

        carregarCampeonatos()

        // Cleanup: invalida esta execução quando o efeito é encerrado.
        // Não cancela as requisições HTTP em andamento.
        return () => {
            ativo = false
        }
    }, [])

    useEffect(() => {
        // Impede atualizações de estado após a limpeza do efeito.
        let ativo = true

        async function carregarUltimaCorrida() {
            try {
                const respostaUltimaCorrida = await buscarUltimaCorrida(2025)

                // Ignora respostas caso o efeito já tenha sido encerrado.
                if (!ativo) return

                // Converte os dados da API para os modelos utilizados pelo frontend.
                setUltimaCorrida(adaptarUltimaCorrida(respostaUltimaCorrida.corrida))

                // Limpa possíveis erros anteriores após uma consulta bem-sucedida.
                setErroUltimaCorrida(null)
            } catch (erro) {
                if (!ativo) return

                // Registra o erro técnico e apresenta uma mensagem amigável ao usuário.
                console.error('Erro ao carregar ultima corrida:', erro)
                setErroUltimaCorrida('Não foi possível carregar a ultima corrida.')
            } finally {
                // Finaliza o carregamento apenas se o efeito continuar ativo.
                if (ativo) {
                    setCarregandoUltimaCorrida(false)
                }
            }
        }

        carregarUltimaCorrida()

        // Cleanup: invalida esta execução quando o efeito é encerrado.
        // Não cancela as requisições HTTP em andamento.
        return () => {
            ativo = false
        }
    }, [])

    function navegarCampeonatos(indice: number) {
        const container = campeonatosRef.current
        const card = container?.children.item(indice)

        if (!(card instanceof HTMLElement)) return

        card.scrollIntoView({
            behavior: reduzirMovimento ? 'instant' : 'smooth',
            block: 'nearest',
            inline: 'start',
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
                                {carregandoCampeonato ? (
                                    <tr>
                                        <td colSpan={4} role="status">
                                            Carregando classificação de pilotos...
                                        </td>
                                    </tr>
                                ) : erroCampeonato ? (
                                    <tr>
                                        <td colSpan={4} role="alert">
                                            {erroCampeonato}
                                        </td>
                                    </tr>
                                ) : (
                                    pilotos.slice(0, 5).map((piloto) => (
                                        <tr key={piloto.id}>
                                            <td className="posicaoTd">{piloto.posicao}</td>

                                            <th scope="row">
                                                <div className="infoTd">
                                                    {piloto.foto && <img src={piloto.foto} alt="" />}
                                                    <span>{piloto.nome}</span>
                                                </div>
                                            </th>

                                            <td>{piloto.equipe}</td>
                                            <td>{piloto.pontos}</td>
                                        </tr>
                                    ))
                                )}
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
                                {carregandoCampeonato ? (
                                    <tr>
                                        <td colSpan={3} role="status">
                                            Carregando classificação de construtores...
                                        </td>
                                    </tr>
                                ) : erroCampeonato ? (
                                    <tr>
                                        <td colSpan={3} role="alert">
                                            {erroCampeonato}
                                        </td>
                                    </tr>
                                ) : (
                                    construtores.slice(0, 5).map((construtor) => (
                                        <tr key={construtor.id}>
                                            <td>{construtor.posicao}</td>

                                            <th scope="row">
                                                <div className="infoTd">
                                                    {construtor.logo && (
                                                        <img src={construtor.logo} alt="" />
                                                    )}
                                                    <span>{construtor.equipe}</span>
                                                </div>
                                            </th>

                                            <td>{construtor.pontos}</td>
                                        </tr>
                                    ))
                                )}
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
                        {carregandoUltimaCorrida ? (
                            <p>Carregando última corrida...</p>
                        ) : erroUltimaCorrida ? (
                            <p role="alert">{erroUltimaCorrida}</p>
                        ) : ultimaCorrida ? (
                            <>
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
                                        {ultimaCorrida.resultados.slice(0, 3).map((resultado) => (
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
                            </>
                        ) : (
                            <p>Nenhuma corrida disponível.</p>
                        )}
                    </motion.div>

                    <motion.div
                        className="cardVoltaRapida"
                        variants={cardVariants}
                    >
                        <h3>Melhor volta da corrida</h3>

                        <div className="infosVoltaRapida">
                            <img
                                src={ultimaCorrida?.voltaRapida?.foto}
                                alt=""
                                height={50}
                            />

                            <div>
                                <h4>{ultimaCorrida?.voltaRapida?.piloto}</h4>
                                <p>{ultimaCorrida?.voltaRapida?.equipe}</p>
                            </div>
                        </div>

                        <p className="tempoVoltaRapida">
                            {ultimaCorrida?.voltaRapida?.tempo}
                        </p>

                        <p className="infosVoltaComposto">
                            Volta {ultimaCorrida?.voltaRapida?.volta} - Composto{' '}
                            {ultimaCorrida?.voltaRapida?.composto}
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}