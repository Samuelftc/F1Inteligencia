import { ActivityIcon, ChartNoAxesColumnIncreasing, Flag, House, Radio, Settings, UsersRound } from 'lucide-react'
import '../../styles/Sidebar.css'

export default function Sidebar() {
    return (
        <aside className="sidebar">
            <div className="logo">
                <img src="/assets/logoF1Intelligence.png" alt="Logo F1 Inteligencia" height={80} />
            </div>

            <nav className="menus">
                <ul className="menu-lista">
                    <li className="active"><House /><a href="">Visão Geral</a></li>
                    <li><Flag /><a href="">Explorar Corridas</a></li>
                    <li><UsersRound /><a href="">Comparação de Pilotos</a></li>
                </ul>

                <p>Análise Avançada</p>

                <ul className="menu-lista">
                    <li><ChartNoAxesColumnIncreasing /><a href="">Laboratório de estratégia</a></li>
                    <li><ActivityIcon /><a href="">Laboratório de telemetria</a></li>
                    <li><Radio /><a href="">Central de Corridas ao Vivo</a></li>
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
                <button className="perfil-config">
                    <Settings size={28} color='#6f7886' />
                </button>
            </div>
        </aside>
    )
}