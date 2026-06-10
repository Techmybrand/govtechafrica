"use client";
import React, { useRef } from "react";
import { AnimatedSection } from "@/shared";
import { useScroll } from "framer-motion";
import Image from "next/image";
import styles from "./MeetTheTeam.module.scss";

const MeetTheTeam = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end center"]
    });

    // const rawY = useTransform(scrollYProgress, [0, 0.2], [300, 0]);
    // const y = useSpring(rawY, {
    //     stiffness: 100,
    //     damping: 20,
    //     mass: 0.5
    // });
    // const rawOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    // const opacity = useSpring(rawOpacity, {
    //     stiffness: 100,
    //     damping: 20,
    //     mass: 0.5
    // });

    return (
        <div ref={sectionRef} className={styles.section_wrapper}>
            <div className={styles.section_container}>
                <div className={styles.text_section}>
                    <AnimatedSection className={styles.text_wrapper} scrollYProgress={scrollYProgress}>
                        <h2>{`It's all about inclusive governance`}</h2>
                        <h3>
                            <span>We believe we can build a future where </span>
                            governance is inclusive, accountable, and
                            responsive. <span>We also believe in the
                                transformative power of</span> African
                            ingenuity and innovation.
                        </h3>
                    </AnimatedSection>
                </div>
                <div className={styles.team_section}>
                    <div className={styles.teams_container}
                    // scrollYProgress={scrollYProgress}
                    >
                        {['/images/team_1.png', '/images/team_2.png', '/images/team_3.png', '/images/team_4.png'].map((image, index) => (
                            <div className={styles.team_card} key={index}>
                                <Image src={image} fill alt="team" />
                            </div>
                        ))}
                    </div>
                    <div className={styles.teams_text}>
                        <h3>
                            Meet The <span>Team</span>
                        </h3>
                        <p>
                            {`We are an organisation powered by
                            people. Meet the dynamic team of
                            experienced professionals driving
                            Govtech Africa's mission to build
                            thriving  and resilient societies
                            through technology`}
                        </p>
                        {/* <Button className={styles.button}>
                            Visit
                        </Button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MeetTheTeam