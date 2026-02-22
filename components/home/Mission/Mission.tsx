"use client";
import React, { useRef } from "react";
import { Button } from "@/shared";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import styles from "./Mission.module.scss";

const Mission = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
        const { scrollYProgress } = useScroll({
            target: sectionRef,
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
        <div ref={sectionRef} className={styles.mission_section}>
            <div className={styles.container}>
                <motion.div className={styles.card} style={{ y, opacity }}>
                    <div className={styles.details}>
                        <div className={styles.text}>
                            <h3>
                                Our <span>Mission</span>
                            </h3>
                        </div>
                        <div className={styles.cta_and_subtext}>
                            <h6>
                                {`Our goal is to improve transparency, drive efficiency, and enable 
                                    excellence for Africa's public sector.`
                                }
                            </h6>
                            <Button className={styles.button} href="/who-we-are">
                                Learn more
                            </Button>
                        </div>
                        {/* <div className={styles.row}>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => (
                                <div key={item} className={styles.line}></div>
                            ))}
                        </div> */}
                    </div>
                    <div className={styles.image}>
                        <Image src="/images/mission.png" priority fill alt="mission" sizes="100%" />
                    </div>
                </motion.div>
            </div>
            <div className={styles.divider}></div>
        </div>
    )
}

export default Mission