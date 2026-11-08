import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import '../../styles/home/HomeCTA.css'

export default function HomeCTA() {
    const reduzirMovimento = useReducedMotion();

    return (
        <section className="homeCTA section" aria-labelledby="titulo-home-cta">
            <motion.div
                className="divHomeCTA"
                initial={reduzirMovimento ? false : { opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                    duration: reduzirMovimento ? 0 : 0.6,
                    ease: "easeOut",
                    delay: reduzirMovimento ? 0 : 0.4
                }}
            >
                <div className="tituloCTA">
                    <img src="/assets/logoF1Intelligence.png" alt="" height={50} />
                    <h2 id="titulo-home-cta">Transforme sua paixão por F1 em <span>conhecimento.</span></h2>
                </div>

                <div className="descCTA">
                    <p>Acesse análises, explore dados e descubra histórias por trás de cada corrida da temporada 2025.</p>
                </div>

                <div className="linkCTA">
                    <a href="#">
                        Começar a explorar
                        <ArrowRight height={50} aria-hidden="true" />
                    </a>
                </div>
            </motion.div>
        </section>
    );
}