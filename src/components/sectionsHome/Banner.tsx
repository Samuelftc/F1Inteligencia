import { ArrowRight, Bell, Languages, Moon, Search } from 'lucide-react';
import '../../styles/home/Banner.css'
import { useState } from 'react';

export default function Banner() {
    const temporadas = [
        { id: 1, link: '#', nome: 'Temporada 2025', ano: 2025 },
        { id: 2, link: '#', nome: 'Temporada 2024', ano: 2024 },
        { id: 3, link: '#', nome: 'Temporada 2023', ano: 2023 },
    ];

    const [temporadaSelecionada, setTemporadaSelecionada] = useState(2025);

    const handleTemporadaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTemporadaSelecionada(Number(event.target.value));
    };

    const temporadaAtual = temporadas.find(
        (temporada) => temporada.ano === temporadaSelecionada
    ) ?? temporadas[0];

    return (
        <section className="bannerHome" id="banner">
            <div className="topoBanner">
                <div className="campoBusca" role="search">
                    <Search color="#39424e" aria-hidden="true" />
                    <input type="search" aria-label="Buscar piloto, equipe, circuito ou corrida" placeholder="Buscar piloto, equipe, circuito ou corrida..." />
                </div>

                <div className="campoNotificacoes">
                    <button type="button" className="languages" aria-label="Alterar idioma">
                        <Languages size={20} aria-hidden="true" />
                    </button>

                    <button type="button" className="moon" aria-label="Alterar tema">
                        <Moon size={20} aria-hidden="true" />
                    </button>

                    <select className="selectTemporada" aria-label="Selecionar temporada" value={temporadaSelecionada} onChange={handleTemporadaChange}>
                        {temporadas.map((temporada) => (
                            <option key={temporada.ano} value={temporada.ano}>
                                {temporada.nome}
                            </option>
                        ))}
                    </select>

                    <button type="button" className="btnNotificacao" aria-label="Notificações">
                        <Bell size={20} aria-hidden="true" />
                    </button>
                </div>
            </div>

            <div className="conteudoBanner">
                <p className='subtituloBanner'>Fórmula 1</p>
                <h1 className='tituloBanner'>Cada volta conta <span>uma história.</span></h1>
                <p className='descricaoBanner'>Análises, estatísticas e insights para você entender o que acontece dentro e fora das pistas.</p>
                <a className="btnExplore" href={temporadaAtual?.link || temporadas[0].link}>
                    Explorar a {temporadaAtual.nome}
                    <ArrowRight size={20} aria-hidden="true" />
                </a>
            </div>
        </section>
    );
}