"use client";
import React from "react";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import styles from "./ExploreServices.module.scss";
import Image from "next/image";

const ExploreServices = () => {
    const servicesRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: servicesRef,
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
        <motion.div style={{ y, opacity }} ref={servicesRef} className={styles.explore_services_section}>
            <div className={styles.explore_services_container}>
                <div className={styles.text}>
                    <h1>
                        See exactly how we build and enable, service by service.
                    </h1>
                </div>
                <div className={styles.button}>
                    <h3>Explore  our  Services</h3>
                    <div className={styles.long_arrow}>
                        <Image src="/svgs/long_arrow.svg" alt="Arrow" fill />
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ExploreServices