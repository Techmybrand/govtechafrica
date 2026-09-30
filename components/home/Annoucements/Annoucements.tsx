"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import styles from "./Annoucements.module.scss";

const PhotoPlaceholder = ({ className = "" }: { className?: string }) => (
    <div className={`${styles.photo_placeholder} ${className}`}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.icon}
        >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
        </svg>
        <span className={styles.text}>PHOTO / VIDEO</span>
    </div>
);

const Annoucements = () => {
    const annoucementRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: annoucementRef,
        offset: ["start end", "end center"],
    });

    const rawY = useTransform(scrollYProgress, [0, 0.2], [100, 0]);
    const y = useSpring(rawY, {
        stiffness: 100,
        damping: 20,
        mass: 0.5,
    });
    const rawOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const opacity = useSpring(rawOpacity, {
        stiffness: 100,
        damping: 20,
        mass: 0.5,
    });

    return (
        <div ref={annoucementRef} className={styles.annoucements_section}>
            <motion.div style={{ opacity, y }} className={styles.container}>
                <div className={styles.header_row}>
                    <div className={styles.header_left}>
                        <div className={styles.eyebrow}>
                            <span className={styles.dash}>—</span>
                            <span>INSIDE GOVTECH AFRICA</span>
                        </div>
                        <h2 className={styles.title}>
                            Updates, announcements, and everything in between.
                        </h2>
                        <p className={styles.subtitle}>
                            One place for policy milestones, event recaps, interviews, and everything happening across the
                            Govtech Africa ecosystem.
                        </p>
                    </div>

                    <div className={styles.header_right}>
                        <div className={styles.megaphone_wrapper}>
                            <Image
                                src="/svgs/megaphone.svg"
                                alt="Megaphone"
                                width={90}
                                height={90}
                                className={styles.megaphone_icon}
                            />
                        </div>
                        <Link href="/inside-govtech-africa" className={styles.view_all_btn}>
                            <span>View All Updates</span>
                            <span className={styles.arrow}>→</span>
                        </Link>
                    </div>
                </div>

                <div className={styles.cards_grid}>
                    <div className={styles.featured_card}>
                        <div className={styles.badge_wrapper}>
                            <span className={`${styles.badge} ${styles.badge_roundtable}`}>
                                ROUNDTABLE
                            </span>
                        </div>

                        <div className={styles.featured_placeholder}>
                            <PhotoPlaceholder />
                        </div>

                        <div className={styles.card_footer}>
                            <h3 className={styles.card_title}>
                                Inside the room: how the National Govtech Policy passed in Abuja
                            </h3>
                            <div className={styles.meta_info}>
                                <span>Aug 28, 2026</span>
                                <span className={styles.dot}>•</span>
                                <span>6 min read</span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.side_grid}>
                        <div className={styles.side_card}>
                            <div className={styles.side_card_top}>
                                <span className={`${styles.badge} ${styles.badge_update}`}>
                                    UPDATE
                                </span>
                                <PhotoPlaceholder className={styles.compact_placeholder} />
                            </div>
                            <h4 className={styles.side_card_title}>
                                National Digital ID rollout enters Phase 2
                            </h4>
                        </div>

                        <div className={styles.side_card}>
                            <div className={styles.side_card_top}>
                                <span className={`${styles.badge} ${styles.badge_event}`}>
                                    EVENT
                                </span>
                                <PhotoPlaceholder className={styles.compact_placeholder} />
                            </div>
                            <h4 className={styles.side_card_title}>
                                Policy Roundtable returns to Abuja, Nov 12–14
                            </h4>
                        </div>

                        <div className={styles.side_card}>
                            <div className={styles.side_card_top}>
                                <span className={`${styles.badge} ${styles.badge_event}`}>
                                    EVENT
                                </span>
                                <PhotoPlaceholder className={styles.compact_placeholder} />
                            </div>
                            <h4 className={styles.side_card_title}>
                                Policy Roundtable returns to Abuja, Nov 12–14
                            </h4>
                        </div>

                        <div className={styles.side_card}>
                            <div className={styles.side_card_top}>
                                <span className={`${styles.badge} ${styles.badge_deadline}`}>
                                    DEADLINE
                                </span>
                                <PhotoPlaceholder className={styles.compact_placeholder} />
                            </div>
                            <h4 className={styles.side_card_title}>
                                Civic-tech grant applications close Sept 30
                            </h4>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className={styles.wave_bg} aria-hidden="true">
                <div className={styles.wave}>
                    <Image fill alt="wave" src="/svgs/wave_lines.svg" />
                </div>
            </div>
        </div>
    );
};

export default Annoucements;