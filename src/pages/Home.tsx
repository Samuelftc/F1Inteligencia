import Banner from "../components/sectionsHome/Banner";
import Campeonato from "../components/sectionsHome/Campeonato";
import '../styles/home/Home.css'

export default function Home() {
    return (
        <main className="home">
            <Banner />
            <Campeonato />
        </main>
    );
}