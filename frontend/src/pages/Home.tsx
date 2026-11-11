import { useState } from "react";
import Banner from "../components/sectionsHome/Banner";
import Campeonato from "../components/sectionsHome/Campeonato";
import CorridasHome from "../components/sectionsHome/Corridas";
import Ferramentas from "../components/sectionsHome/Ferramentas";
import HomeCTA from "../components/sectionsHome/HomeCTA";
import Insights from "../components/sectionsHome/Insights";
import '../styles/home/Home.css'

export default function Home() {
    const [temporada, setTemporada] = useState(2025);

    return (
        <main className="home">
            <Banner 
                temporada={temporada}
                setTemporada={setTemporada}
            />
            <Campeonato temporada={temporada}/>
            <CorridasHome key={temporada} temporada={temporada}/>
            <Insights />
            <Ferramentas />
            <HomeCTA />
        </main>
    );
}