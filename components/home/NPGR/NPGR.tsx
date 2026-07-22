"use client";
import React, { useRef, useState } from "react";
import { Button } from "@/shared";
import { motion, useTransform, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./NPGR.module.scss";

// const images = [
//     "/images/npgr_section.png",
//     "/images/npgr_home_hero.png",
//     "/images/NGPRT.png",
//     "/images/NPGR.png",
//     "/images/quantum_technologies.png",
// ];

const flagShipEvents = [
    {
        title: "National Govtech Policy Rountable 2026",
        image: "/images/npgr_section.png",
        // url: "/policy-roundtable",
    },
    {
        title: "Africa Govtech Week 2027",
        image: "/images/AGW27_section.png",
        url: "https://africagovtechweek.com"
    },
];

const NPGR = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
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
    const currentEvent = flagShipEvents[currentIndex];

    const handleNext = () => {
        if (currentIndex < flagShipEvents.length - 1) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <div ref={sectionRef} className={styles.npgr_container}>
            <motion.div style={{ y, opacity }} className={styles.section_container}>
                <h2>Our Flagship Events</h2>
                <div className={styles.npgr_content}>
                    <div className={styles.npgr_image}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0.3 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.3 }}
                                className={styles.carousel_image_wrapper}
                            >
                                <Image alt={currentEvent.title} fill src={currentEvent.image} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className={styles.content_body}>
                        <div className={styles.btn_and_text}>
                            <h3>{currentEvent.title}</h3>
                            {currentEvent.url ? (
                                <Link href={currentEvent.url} target="_blank" rel="noopener noreferrer">
                                    <Button className={styles.button}>
                                        Learn more
                                    </Button>
                                </Link>
                            ) : (
                                <Button className={styles.button}>
                                    Learn more
                                </Button>
                            )}
                        </div>
                        <div className={styles.btns}>
                            <div className={`${styles.btn} ${currentIndex === 0 ? styles.disabled : ""}`} onClick={handlePrev}>
                                <div className={styles.btn_icon}>
                                    <Image alt="Previous" fill src="/svgs/chevron_light.svg" style={{ transform: "rotate(180deg)" }} />
                                </div>
                            </div>
                            <div className={`${styles.btn} ${currentIndex === flagShipEvents.length - 1 ? styles.disabled : ""}`}
                                onClick={handleNext}
                            >
                                <div className={styles.btn_icon}>
                                    <Image alt="Next" fill src="/svgs/chevron_light.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default NPGR;