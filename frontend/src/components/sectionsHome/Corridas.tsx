import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

import type { CorridaHome } from "../../types/corrida/corrida";
import { buscarCalendarioCorridas } from "../../services/corrida/corrida.service";
import { adaptarCorridaHome } from "../../services/corrida/corrida.adapter";

import { useReducedMotion } from "motion/react";

import "swiper/css";
import 'swiper/css/navigation';
import '../../styles/home/Corridas.css';
import { useEffect, useState } from "react";

export default function CorridasHome() {
    const reduzirMovimento = useReducedMotion();

    const [corridas, setCorridas] = useState<CorridaHome[]>([])
    const [carregandoCorridas, setCarregandoCorridas] = useState(true)
    const [erroCorridas, setErroCorridas] = useState<string | null>(null)

    useEffect(() => {
        // Impede atualizações de estado após a limpeza do efeito.
        let ativo = true

        async function carregarCorridas() {
            try {
                // Executa a requisição.
                const respostaCorridas = await buscarCalendarioCorridas(2025);

                // Ignora respostas caso o efeito já tenha sido encerrado.
                if (!ativo) return;

                // Converte os dados da API para o modelo utilizado pelo frontend.
                setCorridas(adaptarCorridaHome(respostaCorridas.corridas));

                // Limpa possíveis erros anteriores após uma consulta bem-sucedida.
                setErroCorridas(null);
            } catch (erro) {
                if (!ativo) return

                // Registra o erro técnico e apresenta uma mensagem amigável ao usuário.
                console.error('Erro ao carregar as corridas:', erro)
                setErroCorridas('Não foi possível carregar as corridas.')
            } finally {
                // Finaliza o carregamento apenas se o efeito continuar ativo.
                if (ativo) {
                    setCarregandoCorridas(false)
                }
            }
        }

        carregarCorridas()

        // Cleanup: invalida esta execução quando o efeito é encerrado.
        // Não cancela as requisições HTTP em andamento.
        return () => {
            ativo = false
        }
    }, [])

    return (
        <section className="corridasHome section" aria-labelledby="titulo-corridas">
            <div className="topoCorridas">
                <div className="infosTopoCorridas">
                    <h2 className="tituloCorridas" id="titulo-corridas">Corridas 2025</h2>
                    <p>Calendário da temporada 2025</p>
                </div>

                <div className="acoesTopoCorridas">
                    <a href="#" className="linkTopoCorridas">
                        Ver calendário completo
                        <ArrowRight size={20} aria-hidden="true" />
                    </a>

                    <div className="navegacaoCorridas">
                        <button
                            type="button"
                            className="btnCorridaAnterior"
                            aria-label="Ver corridas anteriores"
                        >
                            <ArrowLeft size={20} aria-hidden="true" />
                        </button>

                        <button
                            type="button"
                            className="btnProximaCorrida"
                            aria-label="Ver próximas corridas"
                        >
                            <ArrowRight size={20} aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="containerCorridas">

                {carregandoCorridas ? (
                    <p>Carregando Corridas...</p>
                ) : erroCorridas ? (
                    <p>{erroCorridas}</p>
                ) : corridas.length === 0 ? (
                    <p>Nenhuma corrida encontrada.</p>
                ) : (
                    <>
                        <Swiper
                            modules={[Navigation, A11y]}
                            spaceBetween={20}
                            slidesPerView={1}
                            slidesPerGroup={1}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                },
                                1025: {
                                    slidesPerView: 2,
                                    slidesPerGroup: 2,
                                },
                                1280: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3,
                                },
                                1600: {
                                    slidesPerView: 4,
                                    slidesPerGroup: 4,
                                },
                                1920: {
                                    slidesPerView: 5,
                                    slidesPerGroup: 5,
                                },
                            }}
                            speed={reduzirMovimento ? 0 : 600}
                            navigation={{
                                prevEl: ".btnCorridaAnterior",
                                nextEl: ".btnProximaCorrida"
                            }}
                            a11y={{
                                enabled: true,
                                containerMessage: 'Calendário de corridas da Fórmula 1 de 2025',
                                slideLabelMessage: 'Corrida {{index}} de {{slidesLength}}'
                            }}
                            className="swiperCorridas"
                        >
                            {corridas.slice(0, 10).map((corrida) => (
                                <SwiperSlide key={corrida.ordem}>
                                    <article className="cardCorrida" style={{
                                        backgroundImage: corrida.imagemFundo
                                            ? `linear-gradient(
                                    to left,
                                    rgba(0, 0, 0, 0.75),
                                    rgba(0, 0, 0, 0.85)
                                    ), url("${corrida.imagemFundo}")`
                                            : undefined
                                    }}>
                                        <a href="#">
                                            <div className="topoCardCorrida">
                                                <div>
                                                    <span className="ordemCorrida">R{corrida.ordem}</span>
                                                    <p>
                                                        {corrida.periodo}
                                                    </p>
                                                </div>
                                                <ArrowRight aria-hidden="true" />
                                            </div>

                                            <div className="mainCardCorrida">
                                                <img
                                                    src={corrida.imagemBandeira}
                                                    alt={`Bandeira de ${corrida.pais}`}
                                                    className="bandeiraCorrida"
                                                    height={40}
                                                    loading="lazy"
                                                />

                                                <div>
                                                    <h3 className="nomeGrandePremio">{corrida.nomeGrandePremio}</h3>
                                                    <p className="nomeCircuito">{corrida.nomeCircuito}</p>
                                                </div>
                                            </div>

                                            <div className="circuitoCardCorrida">
                                                <img
                                                    src={corrida.pngCircuito}
                                                    alt={`Traçado do circuito ${corrida.nomeCircuito}`}
                                                    height={120}
                                                    loading="lazy"
                                                />
                                            </div>
                                        </a>
                                    </article>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </>
                )}
            </div>

        </section>
    );
}