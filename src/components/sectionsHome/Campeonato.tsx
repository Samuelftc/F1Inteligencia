import { ArrowRight } from "lucide-react";

export default function Campeonato() {
    const pilotos = [
        { id: 1, posicao: 1, foto: "/assets/images/pilotos/landoNorris.png", nome: "L. Norris", equipe: "McLaren", pontos: 423 },
        { id: 2, posicao: 2, foto: "/assets/images/pilotos/maxVerstappen.png", nome: "M. Verstappen", equipe: "Red Bull", pontos: 421 },
        { id: 3, posicao: 3, foto: "/assets/images/pilotos/oscarPiastri.png", nome: "O. Piastri", equipe: "McLaren", pontos: 410 },
        { id: 4, posicao: 4, foto: "/assets/images/pilotos/georgeRussell.png", nome: "G. Russell", equipe: "Mercedes", pontos: 319 },
        { id: 5, posicao: 5, foto: "/assets/images/pilotos/charlesLeclerc.png", nome: "C. Leclerc", equipe: "Ferrari", pontos: 242 },
    ];

    const construtores = [
        { id: 1, posicao: 1, logo: "/assets/images/construtores/mcLaren.png", equipe: "McLaren", pontos: 833 },
        { id: 2, posicao: 2, logo: "/assets/images/construtores/mercedes.png", equipe: "Mercedes", pontos: 469 },
        { id: 3, posicao: 3, logo: "/assets/images/construtores/redBull.png", equipe: "Red Bull", pontos: 451 },
        { id: 4, posicao: 4, logo: "/assets/images/construtores/ferrari.png", equipe: "Ferrari", pontos: 398 },
        { id: 5, posicao: 5, logo: "/assets/images/construtores/williams.png", equipe: "Williams", pontos: 137 },
    ];

    return (
        <section className="campeonato">
            <div className="topoCampeonato">
                <div className="infosTopoCampeonato">
                    <h2 className="tituloCampeonato">Campeonato 2025</h2>
                    <p>Classificação de pilotos e construtores.</p>
                </div>

                <div className="btnTopoCampeonato">
                    <a href="#">Ver classificação completa</a>
                </div>
            </div>

            <div className="conteudoCampeonato">
                <div className="campeonatos">
                    <div className="cardCampeonatoPilotos">
                        <div className="cardCampeonatoTopo">
                            <h3>Pilotos</h3>
                            <ArrowRight size={20} />
                        </div>
                        <ul className="cardCampeonatoLista">
                            {pilotos.map((piloto) => (
                                <li key={piloto.id}>
                                    <span>{piloto.posicao}</span> 
                                    <img src={piloto.foto} alt={piloto.nome} height={60} />
                                    {piloto.nome} - {piloto.pontos} pontos
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="cardCampeonatoConstrutores">
                        <div className="cardCampeonatoTopo">
                            <h3>Construtores</h3>
                            <ArrowRight size={20} />
                        </div>
                        <ul className="cardCampeonatoLista">
                            {construtores.map((construtor) => (
                                <li key={construtor.id}>
                                    <span>{construtor.posicao}</span> 
                                    <img src={construtor.logo} alt={construtor.equipe} height={50} />
                                    {construtor.equipe} - {construtor.pontos} pontos
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}