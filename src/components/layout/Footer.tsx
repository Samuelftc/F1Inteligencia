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
                            <a href="https://github.com/Samuelftc" target="_blank">
                                <FaGithub size={24} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/samuel-ferreira-desenvolvedor/" target="_blank">
                                <FaLinkedin size={24} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:samuelferreiradev08@gmail.com"
                                aria-label="Enviar e-mail"
                            >
                                <SiGmail size={24} />
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="campoFooter">
                    <h3>Explorar</h3>
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
                </div>

                <div className="campoFooter">
                    <h3>Análises</h3>
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
                </div>

                <div className="campoFooter">
                    <h3>Projeto</h3>
                    <ul className="linksCampoFooter">
                        <li>
                            <a href="#">Sobre p F1 Intelligence</a>
                        </li>
                        <li>
                            <a href="#">Fontes de dados</a>
                        </li>
                        <li>
                            <a href="">Contato</a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="creditosFooter">
                <div className="divCopyright">
                    <p className="copyright">&copy; 2026 F1 Intelligence | Desenvolvido por <a href="https://samuelferreiradev.netlify.app/" target="_blank">Samuel Ferreira</a></p>
                    <p className="descMenorFooter">Projeto independente, sem vinculo oficial com a Fórmula 1.</p>
                </div>

                <div className="voltarAoTopo">
                    <a href="">
                        voltar ao topo
                        <ArrowUp />
                    </a>
                </div>
            </div>
        </footer>
    );
}