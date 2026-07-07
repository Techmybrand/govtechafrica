"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./Coalition.module.scss";

const Coalition = () => {
    const coalitionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: coalitionRef,
        offset: ["start end", "end center"]
    });

    const rawY = useTransform(scrollYProgress, [0, 0.2], [300, 0]);
    const y = useSpring(rawY, {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    });
    const rawOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const opacity = useSpring(rawOpacity, {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    });
    return (
        <div ref={coalitionRef} className={styles.coalition_section}>
            <div className={styles.coalition_container}>
                <motion.div style={{ y, opacity }} className={styles.coalition_text}>
                    <h3 className={styles.h3}>
                        We build and deploy the digital foundations that empower governments, 
                        strengthen Public institutions, and accelerate 
                        progress across Africa.
                    </h3>
                </motion.div>
            </div>
        </div>
    )
}

export default Coalition