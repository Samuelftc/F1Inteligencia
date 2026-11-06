import { ActivityIcon, ChartNoAxesColumnIncreasing, Flag, House, Radio, Settings, UsersRound } from 'lucide-react'
import '../../styles/Sidebar.css'

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="logo">
                <img src="/assets/logoF1Intelligence.png" alt="Logo F1 Inteligencia" height={80} />
            </div>

            <nav className="menus" aria-label="Navegação principal">
                <ul className="menu-lista">
                    <li className="active">
                        <a href="" aria-current="page">
                            <House aria-hidden="true" />
                            <span>Visão Geral</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <Flag aria-hidden="true" />
                            <span>Explorar Corridas</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <UsersRound aria-hidden="true" />
                            <span>Comparação de Pilotos</span>
                        </a>
                    </li>
                </ul>

                <p>Análise Avançada</p>

                <ul className="menu-lista">
                    <li>
                        <a href="">
                            <ChartNoAxesColumnIncreasing aria-hidden="true" />
                            <span>Laboratório de estratégia</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <ActivityIcon aria-hidden="true" />
                            <span>Laboratório de telemetria</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <Radio aria-hidden="true" />
                            <span>Central de Corridas ao Vivo</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="dados-alem">
                <img className="dados-alem-img" src="/assets/dadosQueVaoAlem.png" alt="" height={300} />
            </div>

            <div className="perfil">
                <div className="perfil-info">
                    <img className="perfil-img" src="/assets/perfil.png" alt="Imagem de perfil" height={50} />
                    <div className="perfil-texto">
                        <p className="perfil-nome">Samuel</p>
                        <p className="perfil-plano">Plano grátis</p>
                    </div>
                </div>
                <button type="button" className="perfil-config" aria-label="Configurações do perfil">
                    <Settings size={28} color='#6f7886' aria-hidden="true" />
                </button>
            </div>
        </aside>
    )
}