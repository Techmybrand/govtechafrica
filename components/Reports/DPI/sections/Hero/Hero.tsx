"use client";
import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.scss';
import Link from 'next/link';

const Counter = ({ target, dec }: { target: number, dec?: string }) => {
    const counterRef = useRef<HTMLSpanElement>(null);
    const animated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !animated.current) {
                    animated.current = true;
                    animateValue(entry.target as HTMLElement);
                }
            });
        }, { threshold: 0.3 });

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => observer.disconnect();
    }, [target, dec]);

    const animateValue = (el: HTMLElement) => {
        const duration = 1800;
        const startTime = performance.now();

        const update = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * target);

            if (dec) {
                el.textContent = current === target ? target + '.' + dec : current.toString();
            } else {
                el.textContent = current.toString();
            }

            if (progress < 1) {
                requestAnimationFrame(update);
            } else {
                el.textContent = dec ? target + '.' + dec : target.toString();
            }
        };
        requestAnimationFrame(update);
    };

    return (
        <span ref={counterRef} className={styles["counter"]}>0</span>
    );
};

const Hero = () => {
    return (
        <section className={styles["hero"]} id="overview">
            <div className={styles["hero-inner"]}>
                <div className={styles["hero-eyebrow"]}>GOVTECH Africa Intelligence Report</div>
                <h1 className={styles["hero-title"]}>Nigeria DPI Readiness<br /><em>Outlook 2026</em></h1>
                <p className={styles["hero-subtitle"]}>A defining year for digital public infrastructure, state readiness, interoperability, and citizen inclusion. Nigeria enters 2026 with <strong>promise under pressure</strong> — the challenge is converting ambition into coordinated execution.</p>
                <div className={styles["hero-actions"]}>
                    <Link href="#download" className={styles["btn-hero-primary"]}>↓ Download Full Report</Link>
                    <Link href="#states" className={styles["btn-hero-secondary"]}>View State Readiness →</Link>
                    <Link href="#recommendations" className={styles["btn-hero-secondary"]}>Policy Recommendations →</Link>
                </div>

                <div className={styles["hero-stats"]}>
                    <div className={styles["stat-card"]}>
                        <div className={styles["stat-num"]}><Counter target={120} />M+</div>
                        <div className={styles["stat-label"]}>NIN enrolments in the national identity database</div>
                        <div className={styles["stat-source"]}>NIMC, 2025</div>
                    </div>
                    <div className={styles["stat-card"]}>
                        <div className={styles["stat-num"]}><Counter target={50} dec="58" />%</div>
                        <div className={styles["stat-label"]}>Broadband penetration at end-2025</div>
                        <div className={styles["stat-source"]}>NCC, 2025</div>
                    </div>
                    <div className={styles["stat-card"]}>
                        <div className={styles["stat-num"]}><Counter target={61} dec="2" />%</div>
                        <div className={styles["stat-label"]}>Electricity access — a foundational DPI constraint</div>
                        <div className={styles["stat-source"]}>NERC, 2025</div>
                    </div>
                    <div className={styles["stat-card"]}>
                        <div className={styles["stat-num"]}><Counter target={7} /> of 774</div>
                        <div className={styles["stat-label"]}>LGAs with functional websites despite federal allocations</div>
                        <div className={styles["stat-source"]}>GOV TECH Tracker</div>
                    </div>
                    <div className={styles["stat-card"]}>
                        <div className={styles["stat-num"]}><Counter target={34} /> states</div>
                        <div className={styles["stat-label"]}>assessed in the NGF DPI Readiness Report 2025</div>
                        <div className={styles["stat-source"]}>NGF, 2025</div>
                    </div>
                    <div className={styles["stat-card"]}>
                        <div className={styles["stat-num"]}><Counter target={2} /> states</div>
                        <div className={styles["stat-label"]}>classified as high-maturity in DPI readiness</div>
                        <div className={styles["stat-source"]}>NGF Classification</div>
                    </div>
                    <div className={styles["stat-card"]}>
                        <div className={styles["stat-num"]}><Counter target={20} /> states</div>
                        <div className={styles["stat-label"]}>at medium-maturity — progress but fragile foundations</div>
                        <div className={styles["stat-source"]}>NGF Classification</div>
                    </div>
                    <div className={styles["stat-card"]}>
                        <div className={styles["stat-num"]}>&lt;<Counter target={20} />%</div>
                        <div className={styles["stat-label"]}>of Nigerians aware of their data protection rights</div>
                        <div className={styles["stat-source"]}>NDPC Survey, 2025</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
