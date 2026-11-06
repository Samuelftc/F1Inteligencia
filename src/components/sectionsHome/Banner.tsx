import { ArrowRight, Bell, Languages, Moon, Search } from 'lucide-react';
import '../../styles/home/Banner.css'
import { useState } from 'react';

export default function Banner() {
    const temporadas = [
        { id: 1, link: '#', nome: 'Temporada 2025', ano: 2025 },
        { id: 2, link: '#', nome: 'Temporada 2024', ano: 2024 },
        { id: 3, link: '#', nome: 'Temporada 2023', ano: 2023 },
    ];

    const [temporadaSelecionada, setTemporadaSelecionada] = useState(1);

    const handleTemporadaChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTemporadaSelecionada(Number(event.target.value));
    };

    const temporadaAtual = temporadas.find(
        (temporada) => temporada.id === temporadaSelecionada
    );

    return (
        <section className="bannerHome">
            <div className="topoBanner">
                <div className="campoBusca">
                    <Search color="#39424e" />
                    <input type="text" placeholder="Buscar piloto, equipe, circuito ou corrida..." />
                </div>

                <div className="campoNotificacoes">
                    <button className="languages">
                        <Languages size={20} />
                    </button>

                    <button className="moon">
                        <Moon size={20} />
                    </button>

                    <select className="selectTemporada" name="" id="" onChange={handleTemporadaChange}>
                        {temporadas.map((temporada) => (
                            <option key={temporada.id} value={temporada.id}>
                                {temporada.nome}
                            </option>
                        ))}
                    </select>

                    <button className="btnNotificacao">
                        <Bell size={20} />
                    </button>
                </div>
            </div>

            <div className="conteudoBanner">
                <p className='subtituloBanner'>Fórmula 1</p>
                <h1 className='tituloBanner'>Cada volta conta <span>uma história.</span></h1>
                <p className='descricaoBanner'>Análises, estatisticas e insights para você entender o que acontece dentro e fora das pistas.</p>
                <a className="btnExplore" href={temporadaAtual?.link || temporadas[0].link}>
                    Explorar a {temporadaAtual?.nome || temporadas[0].nome}
                    <ArrowRight size={20} />
                </a>
            </div>
        </section>
    );
}