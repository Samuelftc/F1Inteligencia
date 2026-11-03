import { ArrowLeft, ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import 'swiper/css/navigation';
import '../../styles/home/Corridas.css';

export default function CorridasHome() {

    const primeirasCorridas = [
        {
            id: 1,
            ordem: 1,
            dataInicio: "14/03",
            dataFim: "16/03",
            imagemBandeira: "/assets/images/bandeiras/australia.png",
            pais: "Austrália",
            nomeGrandePremio: "Austrália",
            nomeCircuito: "Albert Park",
            pngCircuito: "/assets/images/circuitos/australia.png",
            imagemFundo: "/assets/images/paisagens/australia.png"
        },
        {
            id: 2,
            ordem: 2,
            dataInicio: "21/03",
            dataFim: "23/03",
            imagemBandeira: "/assets/images/bandeiras/china.png",
            pais: "China",
            nomeGrandePremio: "China",
            nomeCircuito: "Shanghai",
            pngCircuito: "/assets/images/circuitos/shanghai.png",
            imagemFundo: "/assets/images/paisagens/china.png"
        },
        {
            id: 3,
            ordem: 3,
            dataInicio: "04/04",
            dataFim: "06/04",
            imagemBandeira: "/assets/images/bandeiras/japao.png",
            pais: "Japão",
            nomeGrandePremio: "Japão",
            nomeCircuito: "Suzuka",
            pngCircuito: "/assets/images/circuitos/japao.png",
            imagemFundo: "/assets/images/paisagens/japao.png"
        },
        {
            id: 4,
            ordem: 4,
            dataInicio: "11/04",
            dataFim: "13/04",
            imagemBandeira: "/assets/images/bandeiras/bahrein.png",
            pais: "Bahrein",
            nomeGrandePremio: "Bahrein",
            nomeCircuito: "Bahrain",
            pngCircuito: "/assets/images/circuitos/bahrein.png",
            imagemFundo: "/assets/images/paisagens/bahrein.png"
        },
        {
            id: 5,
            ordem: 5,
            dataInicio: "18/04",
            dataFim: "20/04",
            imagemBandeira: "/assets/images/bandeiras/arabiaSaudita.png",
            pais: "Arábia Saudita",
            nomeGrandePremio: "Arábia Saudita",
            nomeCircuito: "Jeddah",
            pngCircuito: "/assets/images/circuitos/jeddah.png",
            imagemFundo: "/assets/images/paisagens/arabiaSaudita.png"
        },
        {
            id: 6,
            ordem: 6,
            dataInicio: "02/05",
            dataFim: "04/05",
            imagemBandeira: "/assets/images/bandeiras/estadosUnidos.png",
            pais: "Estados Unidos",
            nomeGrandePremio: "Miami",
            nomeCircuito: "Miami International",
            pngCircuito: "/assets/images/circuitos/miami.png",
            imagemFundo: "/assets/images/paisagens/miami.png"
        },
        {
            id: 7,
            ordem: 7,
            dataInicio: "16/05",
            dataFim: "18/05",
            imagemBandeira: "/assets/images/bandeiras/italia.png",
            pais: "Itália",
            nomeGrandePremio: "Emília-Romanha",
            nomeCircuito: "Imola",
            pngCircuito: "/assets/images/circuitos/imola.png",
            imagemFundo: "/assets/images/paisagens/emiliaRomagna.png"
        },
        {
            id: 8,
            ordem: 8,
            dataInicio: "23/05",
            dataFim: "25/05",
            imagemBandeira: "/assets/images/bandeiras/monaco.png",
            pais: "Mônaco",
            nomeGrandePremio: "Mônaco",
            nomeCircuito: "Circuit de Monaco",
            pngCircuito: "/assets/images/circuitos/monaco.png",
            imagemFundo: "/assets/images/paisagens/monaco.png"
        },
        {
            id: 9,
            ordem: 9,
            dataInicio: "30/05",
            dataFim: "01/06",
            imagemBandeira: "/assets/images/bandeiras/espanha.png",
            pais: "Espanha",
            nomeGrandePremio: "Espanha",
            nomeCircuito: "Barcelona",
            pngCircuito: "/assets/images/circuitos/barcelona.png",
            imagemFundo: "/assets/images/paisagens/espanha.png"
        },
        {
            id: 10,
            ordem: 10,
            dataInicio: "13/06",
            dataFim: "15/06",
            imagemBandeira: "/assets/images/bandeiras/canada.png",
            pais: "Canadá",
            nomeGrandePremio: "Canadá",
            nomeCircuito: "Gilles-Villeneuve",
            pngCircuito: "/assets/images/circuitos/canada.png",
            imagemFundo: "/assets/images/paisagens/canada.png"
        }
    ];

    return (
        <section className="corridasHome">
            <div className="topoCorridas">
                <div className="infosTopoCorridas">
                    <h2 className="tituloCorridas">Corridas 2025</h2>
                    <p>Calendário da temporada 2025</p>
                </div>

                <div className="acoesTopoCorridas">
                    <a href="#" className="linkTopoCorridas">
                        Ver calendário completo
                        <ArrowRight size={20} />
                    </a>

                    <div className="navegacaoCorridas">
                        <button
                            type="button"
                            className="btnCorridaAnterior"
                            aria-label="Ver corridas anteriores"
                        >
                            <ArrowLeft size={20} />
                        </button>

                        <button
                            type="button"
                            className="btnProximaCorrida"
                            aria-label="Ver próximas corridas"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="containerCorridas">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={5}
                    slidesPerGroup={5}
                    speed={600}
                    navigation={{
                        prevEl: ".btnCorridaAnterior",
                        nextEl: ".btnProximaCorrida"
                    }}
                    className="swiperCorridas"
                >
                    {primeirasCorridas.map((corrida) => (
                        <SwiperSlide key={corrida.id}>
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
                                            <h3 className="ordemCorrida">R{corrida.ordem}</h3>
                                            <p>
                                                {corrida.dataInicio} - {corrida.dataFim}
                                            </p>
                                        </div>
                                        <ArrowRight />
                                    </div>

                                    <div className="mainCardCorrida">
                                        <img
                                            src={corrida.imagemBandeira}
                                            alt={`Bandeira de ${corrida.pais}`}
                                            className="bandeiraCorrida"
                                            height={40}
                                        />

                                        <div>
                                            <p className="nomeGrandePremio">{corrida.nomeGrandePremio}</p>
                                            <p className="nomeCircuito">{corrida.nomeCircuito}</p>
                                        </div>
                                    </div>

                                    <div className="circuitoCardCorrida">
                                        <img
                                            src={corrida.pngCircuito}
                                            alt={`Traçado do circuito ${corrida.nomeCircuito}`}
                                            height={120}
                                        />
                                    </div>
                                </a>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    );
}