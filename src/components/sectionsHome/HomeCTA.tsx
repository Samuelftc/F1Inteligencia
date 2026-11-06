import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import '../../styles/home/HomeCTA.css'

export default function HomeCTA() {
    return (
        <section className="homeCTA section">
            <motion.div className="divHomeCTA"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut"
                }}>
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
            </motion.div>
        </section>
    );
}