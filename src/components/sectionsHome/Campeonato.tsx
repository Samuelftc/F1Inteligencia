import { ArrowRight } from "lucide-react";
import '../../styles/home/Campeonato.css';

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

                <div className="containerlinkTopoCampeonato">
                    <a href="#" className="linkTopoCampeonato">
                        Ver classificação completa
                        <ArrowRight size={20} />
                    </a>
                </div>
            </div>

            <div className="conteudoCampeonato">
                <div className="campeonatos">
                    <div className="cardCampeonato">
                        <div className="cardCampeonatoTopo">
                            <h3>Pilotos</h3>
                            <ArrowRight size={30} />
                        </div>

                        <table className="tabelaCampeonato">
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
                                        <td className="infoTd">
                                            <div className="infoTd">
                                                <img src={piloto.foto} alt={piloto.nome} />
                                                <span>{piloto.nome}</span>
                                            </div>
                                        </td>
                                        <td>{piloto.equipe}</td>
                                        <td>{piloto.pontos}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="cardCampeonato">
                        <div className="cardCampeonatoTopo">
                            <h3>Construtores</h3>
                            <ArrowRight size={30} />
                        </div>

                        <table className="tabelaCampeonato">
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
                                        <td className="infoTd">
                                            <img src={construtor.logo} alt={construtor.equipe} />
                                            {construtor.equipe}
                                        </td>
                                        <td>{construtor.pontos}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="containerUltimaCorrida">
                    <div className="cardUltimaCorrida">
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
                                <ArrowRight size={20} />
                            </a>
                        </div>

                        <div className="resultadosUltimaCorrida">
                            <h4>Resultado</h4>
                            <ul>
                                <li className="resultadoPiloto">
                                    <div>
                                        <p>1</p>
                                        <img src="/assets/images/pilotos/maxVerstappen.png" alt="" height={50} />
                                        <div>
                                            <h5>M. Verstappen</h5>
                                        </div>
                                    </div>
                                    <span>1:26:07.469</span>
                                </li>
                                <li className="resultadoPiloto">
                                    <div>
                                        <p>2</p>
                                        <img src="/assets/images/pilotos/oscarPiastri.png" alt="" height={50} />
                                        <div>
                                            <h5>O. Piastri</h5>
                                        </div>
                                    </div>
                                    <span>+12.594</span>
                                </li>
                                <li className="resultadoPiloto">
                                    <div>
                                        <p>3</p>
                                        <img src="/assets/images/pilotos/landoNorris.png" alt="" height={50} />
                                        <div>
                                            <h5>L. Norris</h5>
                                        </div>
                                    </div>
                                    <span>+16.572</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="cardVoltaRapida">
                        <h3>Melhor volta da corrida</h3>
                        <div className="infosVoltaRapida">
                            <img src="/assets/images/pilotos/charlesLeclerc.png" alt="" height={50} />
                            <div>
                                <h4>Charles Leclerc</h4>
                                <p>Ferrari</p>
                            </div>
                        </div>
                        <p className="tempoVoltaRapida">1:26.725</p>
                        <p className="infosVoltaComposto">Volta 45 - Composto Médio</p>
                    </div>
                </div>
            </div>
        </section >
    );
}