import Banner from "../components/sectionsHome/Banner";
import Campeonato from "../components/sectionsHome/Campeonato";
import CorridasHome from "../components/sectionsHome/Corridas";
import '../styles/home/Home.css'

export default function Home() {
    return (
        <main className="home">
            <Banner />
            <Campeonato />
            <CorridasHome />
        </main>
    );
}