/* eslint-disable */
"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./WhatWeDoHero.module.scss";

const WhatWeDoHero = () => {
    const router = useRouter();
    const handleExploreServices = () => router.push("#services");

    return (
        <div className={styles.what_we_do_hero}>
            <div className={styles.stars_background}>
                <Image src="/images/new_who_we_are.png" alt="stars" fill />
            </div>
            <div className={styles.green_boxes_left}>    
                <div className={styles.left_icon}>
                    <Image src="/svgs/what_we_do_hero_left_icon.svg" alt="boxes" fill />
                </div>
            </div>
            <div className={styles.green_boxes_right}>
                <div className={styles.right_icon}>
                    <Image src="/svgs/what_we_do_hero_right_icon.svg" alt="boxes" fill />
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.left_content}>
                    <h1 className={styles.title}>
                        We build the <br /> systems.<br/>
                        We enable the <br /> shift.
                    </h1>
                    <p className={styles.description}>
                        Two disciplines, one mission: giving African governments the technology and the know-how to serve citizens
                        better — from the infrastructure up.
                    </p>
                    <div className={styles.button_container}>
                        <button className={styles.explore_btn}>
                            Explore our Services
                            <svg width="40" height="12" viewBox="0 0 60 12" fill="none">
                                <path d="M0 6H58M58 6L52 1M58 6L52 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className={styles.right_content}>
                    <div className={styles.diagram_container}>
                        <svg viewBox="0 0 420 340" className={styles.hero_diagram}>
                            <path d="M 20 70 H 180" stroke="#FFFFFFB3" strokeWidth="1.5" fill="none"/>
                            <path d="M 180 70 C 220 70, 220 170, 260 170" stroke="#6EE7A8" strokeWidth="1.5" fill="none"/>
                            <path d="M 20 270 H 180" stroke="#FFFFFFB3" strokeWidth="1.5" fill="none"/>
                            <path d="M 180 270 C 220 270, 220 170, 260 170" stroke="#E8A33D" strokeWidth="1.5" fill="none"/>
                            
                            <circle cx="20" cy="70" r="4" fill="#6EE7A8"/>
                            <circle cx="20" cy="270" r="4" fill="#E8A33D"/>
                            <circle cx="260" cy="170" r="7" fill="#FFFFFF"/>
                            <circle cx="260" cy="170" r="14" fill="none" stroke="#FFFFFF" strokeOpacity="0.95"/>
                            
                            <circle className={styles.pulse} cx="20" cy="70" r="3.5" fill="#6EE7A8">
                                <animateMotion dur="4s" repeatCount="indefinite" path="M 0 0 H 160 C 200 0, 200 100, 240 100"/>
                            </circle>
                            <circle className={styles.pulse} cx="20" cy="270" r="3.5" fill="#E8A33D">
                                <animateMotion dur="4s" begin="0.4s" repeatCount="indefinite" path="M 0 0 H 160 C 200 -0, 200 -100, 240 -100"/>
                            </circle>
                            
                            <text x="45" y="60" className={styles.trace_label}>We Build - Technology</text>
                            <text x="45" y="295" className={styles.trace_label_blue}>We Enable - Consulting</text>
                            <text x="230" y="205" className={styles.trace_label}>Governments</text>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeDoHero