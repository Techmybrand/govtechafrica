"use client";
import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/shared";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import styles from "./NPGR.module.scss";

const images = [
    "/images/npgr_section.png",
    "/images/npgr_home_hero.png",
    "/images/NGPRT.png",
    "/images/NPGR.png",
    "/images/quantum_technologies.png",
];

// const flagShipEvents = [
//     {
//         title: "National Govtech Policy Rountable 2026",
//         image: "/images/npgr_section.png",
//         url: "/policy-roundtable",
//     },
//     {
//         title: "Africa Govtech Week 2027",
//         image: "/images/afri",
//         url: "https://africagovtechweek.com"
//     },
// ]

const NPGR = () => {
    const [, setCurrentIndex] = useState<number>(0);
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

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div ref={sectionRef} className={styles.npgr_container}>
            <motion.div style={{ y, opacity }} className={styles.section_container}>
                <h2>Our Flagship Events</h2>
                <div className={styles.npgr_content}>
                    <div className={styles.npgr_image}>
                        {/* <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -15 }}
                                transition={{ duration: 0.3 }}
                                className={styles.carousel_image_wrapper}
                            >
                                <Image alt="" fill src={images[currentIndex]} />
                            </motion.div>
                        </AnimatePresence> */}
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

export default NPGR;