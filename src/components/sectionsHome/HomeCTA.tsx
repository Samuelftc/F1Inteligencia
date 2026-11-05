import { ArrowRight } from "lucide-react";
import '../../styles/home/HomeCTA.css'

export default function HomeCTA() {
    return (
        <section className="homeCTA section">
            <div className="divHomeCTA">
                <div className="tituloCTA">
                    <img src="/assets/logoF1Intelligence.png" alt="" height={50} />
                    <h2>Transforme sua paixão por F1 <br />em <span>conhecimento.</span></h2>
                </div>

                <div className="descCTA">
                    <p>Acesse análises, explore dados e descubra histórias <br />por trás de cada corrida da temporada 2025.</p>
                </div>

                <div className="linkCTA">
                    <a href="#">
                        Começar a explorar
                        <ArrowRight height={50} />
                    </a>
                </div>
            </div>
        </section>
    );
}