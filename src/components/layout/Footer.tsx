import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import '../../styles/Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="containerFooter">
                <div className="resumoFooter">
                    <img src="/assets/logoF1Intelligence.png" alt="" height={100} />
                    <div>
                        <h3>Dados que vão além da corrida.</h3>
                        <p>Explore as temporadas da Fórmula 1 com uma nova perspectiva.</p>
                    </div>
                    <ul className="redesSociais">
                        <li>
                            <a
                                href="https://github.com/Samuelftc"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub de Samuel Ferreira (abre em nova aba)"
                            >
                                <FaGithub size={24} aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/samuel-ferreira-desenvolvedor/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn de Samuel Ferreira (abre em nova aba)"
                            >
                                <FaLinkedin size={24} aria-hidden="true" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:samuelferreiradev08@gmail.com"
                                aria-label="Enviar e-mail para Samuel Ferreira"
                            >
                                <SiGmail size={24} aria-hidden="true" />
                            </a>
                        </li>
                    </ul>
                </div>

                <nav className="campoFooter" aria-labelledby="titulo-explorar">
                    <h3 id="titulo-explorar">Explorar</h3>
                    <ul className="linksCampoFooter">
                        <li>
                            <a href="#">Visão geral</a>
                        </li>
                        <li>
                            <a href="#">Corridas</a>
                        </li>
                        <li>
                            <a href="">Pilotos e equipes</a>
                        </li>
                        <li>
                            <a href="">Calendários</a>
                        </li>
                    </ul>
                </nav>

                <nav className="campoFooter" aria-labelledby="titulo-analises">
                    <h3 id="titulo-analises">Análises</h3>
                    <ul className="linksCampoFooter">
                        <li>
                            <a href="#">Comparar pilotos</a>
                        </li>
                        <li>
                            <a href="#">Estratégias</a>
                        </li>
                        <li>
                            <a href="">Telemetria</a>
                        </li>
                    </ul>
                </nav>

                <nav className="campoFooter" aria-labelledby="titulo-projeto">
                    <h3 id="titulo-projeto">Projeto</h3>
                    <ul className="linksCampoFooter">
                        <li>
                            <a href="#">Sobre o F1 Intelligence</a>
                        </li>
                        <li>
                            <a href="#">Fontes de dados</a>
                        </li>
                        <li>
                            <a href="">Contato</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="creditosFooter">
                <div className="divCopyright">
                    <p className="copyright">&copy; 2026 F1 Intelligence | Desenvolvido por <a href="https://samuelferreiradev.netlify.app/" aria-label="Site Portfolio de Samuel Ferreira (abre em nova aba)" target="_blank" rel="noopener noreferrer">Samuel Ferreira</a></p>
                    <p className="descMenorFooter">Projeto independente, sem vínculo oficial com a Fórmula 1.</p>
                </div>

                <div className="voltarAoTopo">
                    <a href="#banner">
                        voltar ao topo
                        <ArrowUp aria-hidden="true" />
                    </a>
                </div>
            </div>
        </footer>
    );
}