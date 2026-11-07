import { useEffect, useRef, useState } from 'react'
import {
    ActivityIcon,
    ChartNoAxesColumnIncreasing,
    Flag,
    House,
    Menu,
    Radio,
    Settings,
    UsersRound,
    X,
} from 'lucide-react'
import '../../styles/Sidebar.css'

type SidebarContentProps = {
    onNavigate?: () => void
}

function SidebarContent({ onNavigate }: SidebarContentProps) {
    return (
        <>
            <div className="logo">
                <img
                    src="/assets/logoF1Intelligence.png"
                    alt="F1 Intelligence"
                    height={80}
                />
            </div>

            <nav className="menus" aria-label="Navegação principal">
                <ul className="menu-lista">
                    <li className="active">
                        <a href="" aria-current="page" onClick={onNavigate}>
                            <House aria-hidden="true" />
                            <span>Visão Geral</span>
                        </a>
                    </li>

                    <li>
                        <a href="" onClick={onNavigate}>
                            <Flag aria-hidden="true" />
                            <span>Explorar Corridas</span>
                        </a>
                    </li>

                    <li>
                        <a href="" onClick={onNavigate}>
                            <UsersRound aria-hidden="true" />
                            <span>Comparação de Pilotos</span>
                        </a>
                    </li>
                </ul>

                <p>Análise Avançada</p>

                <ul className="menu-lista">
                    <li>
                        <a href="" onClick={onNavigate}>
                            <ChartNoAxesColumnIncreasing aria-hidden="true" />
                            <span>Laboratório de estratégia</span>
                        </a>
                    </li>

                    <li>
                        <a href="" onClick={onNavigate}>
                            <ActivityIcon aria-hidden="true" />
                            <span>Laboratório de telemetria</span>
                        </a>
                    </li>

                    <li>
                        <a href="" onClick={onNavigate}>
                            <Radio aria-hidden="true" />
                            <span>Central de Corridas ao Vivo</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="dados-alem">
                <img
                    className="dados-alem-img"
                    src="/assets/dadosQueVaoAlem.png"
                    alt=""
                    height={300}
                />
            </div>

            <div className="perfil">
                <div className="perfil-info">
                    <img
                        className="perfil-img"
                        src="/assets/perfil.png"
                        alt=""
                        height={50}
                        width={50}
                    />

                    <div className="perfil-texto">
                        <p className="perfil-nome">Samuel</p>
                        <p className="perfil-plano">Plano grátis</p>
                    </div>
                </div>

                <button
                    type="button"
                    className="perfil-config"
                    aria-label="Configurações do perfil"
                >
                    <Settings size={28} aria-hidden="true" />
                </button>
            </div>
        </>
    )
}

export default function Sidebar() {
    const [menuAberto, setMenuAberto] = useState(false)
    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        const dialog = dialogRef.current

        if (!dialog) return

        if (menuAberto && !dialog.open) {
            dialog.showModal()
        } else if (!menuAberto && dialog.open) {
            dialog.close()
        }
    }, [menuAberto])

    useEffect(() => {
        if (!menuAberto) return

        const overflowAnterior = document.body.style.overflow
        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = overflowAnterior
        }
    }, [menuAberto])

    useEffect(() => {
        const media = window.matchMedia('(min-width: 1025px)')

        function fecharNoDesktop() {
            if (media.matches) {
                setMenuAberto(false)
            }
        }

        media.addEventListener('change', fecharNoDesktop)

        return () => {
            media.removeEventListener('change', fecharNoDesktop)
        }
    }, [])

    function fecharMenu() {
        setMenuAberto(false)
    }

    return (
        <>
            <aside className="sidebar sidebar-desktop">
                <SidebarContent />
            </aside>

            <header className="sidebar-mobile-header">
                <button
                    type="button"
                    className="sidebar-toggle"
                    aria-label="Abrir menu de navegação"
                    aria-haspopup="dialog"
                    aria-controls="sidebar-mobile"
                    aria-expanded={menuAberto}
                    onClick={() => setMenuAberto(true)}
                >
                    <Menu size={26} aria-hidden="true" />
                </button>

                <img
                    src="/assets/logoF1Intelligence.png"
                    alt="F1 Intelligence"
                    height={48}
                />
            </header>

            <dialog
                ref={dialogRef}
                id="sidebar-mobile"
                className="sidebar-dialog"
                aria-label="Menu de navegação"
                onCancel={fecharMenu}
                onClose={fecharMenu}
                onClick={(event) => {
                    if (event.target === event.currentTarget) {
                        fecharMenu()
                    }
                }}
            >
                <div className="sidebar sidebar-mobile">
                    <div className="sidebar-mobile-actions">
                        <button
                            type="button"
                            className="sidebar-toggle"
                            aria-label="Fechar menu de navegação"
                            onClick={fecharMenu}
                            autoFocus
                        >
                            <X size={26} aria-hidden="true" />
                        </button>
                    </div>

                    <SidebarContent onNavigate={fecharMenu} />
                </div>
            </dialog>
        </>
    )
}