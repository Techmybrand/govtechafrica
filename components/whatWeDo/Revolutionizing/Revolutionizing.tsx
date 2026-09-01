"use client";
import React from "react";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from "./Revolutionizing.module.scss";
import Image from "next/image";

const Revolutionizing = () => {
    const revolutionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: revolutionRef,
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
        <div ref={revolutionRef} className={styles.revolutionizing_sector}>
            <div className={styles.wave_lines_container}>
                <Image src="/svgs/wave_lines.svg" alt="wave_lines" fill />
            </div>
            <motion.div style={{ opacity, y }} className={styles.revolutionizing_container}>
                <div className={styles.revolutionizing_text}>
                    <h1>Revolutionizing Governance Through Technology</h1>
                    <p>For some the word impossible ends discussions, for us, it starts the conversation</p>
                </div>
                <div className={styles.mission_and_vision}>
                    <div className={styles.mission}>
                        <h3>We Build</h3>
                        <p>
                            Technology & Digital Infrastructure that power the public sector
                        </p>
                    </div>
                    {/* <div className={styles.line}></div> */}
                    <div className={styles.vision}>
                        <h3>We Enable</h3>
                        <p>
                            IT Advisory, Compliance and Strategy for government institutions
                        </p>
                    </div>
                </div>
                <div className={styles.revolutionizing_image}>
                    <Image src="/images/revolution.png" alt="Revolutionizing" fill />
                </div>
            </motion.div>
        </div>
    )
}

export default Revolutionizing