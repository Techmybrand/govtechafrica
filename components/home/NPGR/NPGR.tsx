"use client";
import React, { useRef } from "react";
import { Button } from "@/shared";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import styles from "./NPGR.module.scss";

const NPGR = () => {
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
        <div ref={sectionRef} className={styles.npgr_container}>
            <motion.div style={{ y, opacity }} className={styles.section_container}>
                <h2>Where it all goes down</h2>
                <div className={styles.npgr_content}>
                    <div className={styles.npgr_image}>
                        <Image alt="" fill src="/images/npgr_section.png" />
                    </div>
                    <div className={styles.content_body}>
                        <div className={styles.btn_and_text}>
                            <h3>National Govtech Policy Rountable 2026</h3>
                            <Button className={styles.button}>
                                Learn more
                            </Button>
                        </div>
                        <div className={styles.btn}>
                            <div className={styles.btn_icon}>
                                <Image alt="" fill src="/svgs/chevron_light.svg" />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default NPGR