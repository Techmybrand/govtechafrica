"use client";
import React, { useRef } from "react";
import { AnimatedSection, Button } from "@/shared";
import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
// import Link from "next/link";
import styles from "./MeetTheTeam.module.scss";

const MeetTheTeam = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end center"]
    });

    const { scrollYProgress: scrollYProgressText } = useScroll({
        target: sectionRef,
        offset: ["start 60%", "end center"]
    });

    const rawY = useTransform(scrollYProgressText, [0, 0.2], [300, 0]);
    const y = useSpring(rawY, {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    });
    const rawOpacity = useTransform(scrollYProgressText, [0, 0.3], [0, 1]);
    const opacity = useSpring(rawOpacity, {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    });

    return (
        <div ref={sectionRef} className={styles.section_wrapper}>
            <div className={styles.section_container}>
                <div className={styles.text_section}>
                    <div className={styles.inclusive_gov_1_wrapper}>
                        <div className={styles.inclusive_gov_1}>
                            <Image src="/svgs/inclusive_gov_1.svg" alt="Inclusive Governance" fill priority sizes="100%" />
                        </div>
                    </div>
                    <AnimatedSection className={styles.text_wrapper} scrollYProgress={scrollYProgress}>
                        <h2>
                            {`It's all about inclusive governance`}
                        </h2>
                        <h3>
                            <span>We believe we can build a future where </span>
                            governance is inclusive, accountable, and
                            responsive. <span>We also believe in the
                            transformative power of </span> African
                            ingenuity and innovation.
                        </h3>
                    </AnimatedSection>
                    <div className={styles.inclusive_gov_2_wrapper}>
                        <div className={styles.inclusive_gov_2}>
                            <Image src="/svgs/inclusive_gov_2.svg" alt="Inclusive Governance" fill priority sizes="100%" />
                        </div>
                    </div>
                </div>
                
                <motion.div style={{ y, opacity }} className={styles.team_section}>
                    <div className={styles.teams_text_column}>
                        <h3 className={styles.title_text}>
                            Meet <span>the</span><br />
                            Team
                        </h3>
                        <div className={styles.divider}></div>
                        <p className={styles.description}>
                            {`We are an organisation powered by people. Meet the
                            dynamic team of experienced professionals driving
                            Govtech Africa's mission to build thriving and resilient
                            societies through technology`}
                        </p>
                        <Button className={styles.visit_btn} href="/">
                            Visit
                        </Button>
                    </div>
                    
                    <div className={styles.image_column}>
                        <div className={styles.illustration_wrapper}>
                            <Image 
                                src="/images/meet_the_team_icon.png" 
                                alt="Meet the Team" 
                                fill
                                priority
                                sizes="100%"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default MeetTheTeam;