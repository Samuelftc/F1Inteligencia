import Banner from "../components/sectionsHome/Banner";
import Campeonato from "../components/sectionsHome/Campeonato";
import CorridasHome from "../components/sectionsHome/Corridas";
import Ferramentas from "../components/sectionsHome/Ferramentas";
import HomeCTA from "../components/sectionsHome/HomeCTA";
import Insights from "../components/sectionsHome/Insights";
import '../styles/home/Home.css'

export default function Home() {
    return (
        <main className="home">
            <Banner />
            <Campeonato />
            <CorridasHome />
            <Insights />
            <Ferramentas />
            <HomeCTA />
        </main>
    );
}