"use client";
import React, { useRef, useState, useEffect } from "react";
import { AnimatedSection } from "@/shared";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { valueCardProps } from "@/interfaces";
import Image from "next/image";
import styles from "./Values.module.scss";

const values = [
    {
        title: "Innovation",
        description: "We embrace innovation and creativity as catalysts for positive change and  continuous improvement."
    },
    {
        title: "Integrity",
        description: "We uphold the highest standards of integrity, transparency, and ethical  conduct in all our interactions."
    },
    {
        title: "Collaboration",
        description: "We believe in the power of collaboration and partnerships to achieve shared  goals and drive collective impact."
    },
    {
        title: "Empowerment",
        description: "We are committed to empowering governments and citizens with the tools  and knowledge they need to thrive in today’s digital age."
    },
    {
        title: "Impact",
        description: "We measure our success by the impact we create, both in terms of tangible  outcomes and positive societal change."
    }
];
const CLOSING_ANIMATION_DURATION = 2000; // 2s in milliseconds
const OPENING_ANIMATION_DURATION = 3000; // 3s in milliseconds
const CARD_DISPLAY_DURATION = 3900; // 3.9s in milliseconds

const Values = () => {
    const [activeCard, setActiveCard] = useState<string | number | null>(0);
        const [canAnimateOpen, setCanAnimateOpen] = useState<Set<number>>(new Set([0]));
        const [closingCard, setClosingCard] = useState<number | null>(null);
        const [isAutoPlaying, setIsAutoPlaying] = useState(true);
        const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
        const openCard = (id: number) => {
            // If a card is already open, close it first
            if (activeCard !== null && activeCard !== id) {
                setClosingCard(activeCard as number);
                setCanAnimateOpen(new Set());
                setActiveCard(null);
    
                // After closing animation completes, open the new card
                setTimeout(() => {
                    setClosingCard(null);
                    setActiveCard(id);
                    setCanAnimateOpen(new Set([id as number]));
                }, CLOSING_ANIMATION_DURATION);
            } else {
                // No card is open, open immediately
                setActiveCard(id);
                setCanAnimateOpen(new Set([id as number]));
            }
        };
        const handleCardToggle = (id: string | number) => {
            // Pause auto-play when user manually interacts
            setIsAutoPlaying(false);
            clearAutoPlayTimers();
    
            // If clicking the same card, just close it
            if (activeCard === id) {
                setClosingCard(id as number);
                setActiveCard(null);
                setCanAnimateOpen(new Set());
                // Clear closing state after animation
                setTimeout(() => {
                    setClosingCard(null);
                }, CLOSING_ANIMATION_DURATION);
                return;
            }
    
            openCard(id as number);
        };
        const clearAutoPlayTimers = () => {
            if (autoPlayTimeoutRef.current) {
                clearTimeout(autoPlayTimeoutRef.current);
                autoPlayTimeoutRef.current = null;
            }
        };
        useEffect(() => {
            if (isAutoPlaying && activeCard !== null) {
                clearAutoPlayTimers();
    
                // Set up the cycle: wait for opening animation + display duration, then close and move to next
                const scheduleNextCard = () => {
                    // Wait for opening animation to complete, then display for 5 seconds, then close and move to next
                    autoPlayTimeoutRef.current = setTimeout(() => {
                        // After opening + display duration, close current and open next
                        if (activeCard !== null) {
                            const currentIndex = activeCard as number;
                            const nextIndex = (currentIndex + 1) % values.length;
                            setClosingCard(currentIndex);
                            setCanAnimateOpen(new Set());
                            setActiveCard(null);
    
                            // After closing animation, open next card
                            setTimeout(() => {
                                setClosingCard(null);
                                setActiveCard(nextIndex);
                                setCanAnimateOpen(new Set([nextIndex]));
                                // Schedule next cycle
                                scheduleNextCard();
                            }, CLOSING_ANIMATION_DURATION);
                        }
                    }, OPENING_ANIMATION_DURATION + CARD_DISPLAY_DURATION);
                };
    
                // Start the cycle
                scheduleNextCard();
            }
    
            return () => {
                clearAutoPlayTimers();
            };
        }, [isAutoPlaying, activeCard]);
        useEffect(() => {
            if (!isAutoPlaying) {
                const resumeTimeout = setTimeout(() => {
                    setIsAutoPlaying(true);
                }, 10000); // Resume after 10 seconds
    
                return () => clearTimeout(resumeTimeout);
            }
        }, [isAutoPlaying]);
    
        const titleContainerRef = useRef<HTMLDivElement>(null);
        const { scrollYProgress: titleScrollYProgress } = useScroll({
            target: titleContainerRef,
            offset: ["start end", "end center"],
        });
        const cardsContainerRef = useRef<HTMLDivElement>(null);
        const { scrollYProgress: cardsScrollYProgress } = useScroll({
            target: cardsContainerRef,
            offset: ["start end", "end center"],
        });
        const topSectionRef = useRef<HTMLDivElement>(null);
        const { scrollYProgress } = useScroll({
            target: topSectionRef,
            offset: ["start end", "end center"],
        });
    return (
        <div ref={topSectionRef} className={styles.values_section}>
            <div className={styles.values_section_container}>
                <div className={styles.long_card}>
                    <AnimatedSection ref={titleContainerRef} scrollYProgress={titleScrollYProgress}>
                        <div className={styles.text}>
                            <h3>
                                Our <span>Values</span>
                            </h3>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection ref={cardsContainerRef} scrollYProgress={cardsScrollYProgress}
                        className={styles.grid_row}
                    >
                        {values.map((value, index) => (
                            <div key={value.title} className={styles.small_card}
                                onClick={() => handleCardToggle(index)}
                                data-active={activeCard === index}
                                data-can-animate={canAnimateOpen.has(index)}
                                data-closing={closingCard === index}
                            >
                                {/* <div className={styles.small_card_text}>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </div> */}
                                <div className={styles.number}>{index + 1}</div>
                                <div className={styles.title}>
                                    <h3>{value.title}</h3>
                                </div>
                                <div className={styles.description}>
                                    <p>{value.description}</p>
                                </div>
                                <div className={styles.image_container}>
								<div className={styles.image}>
									<Image
										src="/images/drone.png"
										alt=""
										fill
										sizes="100vw"
									/>
								</div>
							</div>
                            </div>
                        ))}
                    </AnimatedSection>
                    <div className={styles.grid_row_mob}>
                        {values.map((value, index) => (
                            <ValueCardMobile key={index} index={index}
                                scrollYProgress={scrollYProgress} {...value}
                            />
                        ))}
                    </div>

                    <div className={styles.row}>
                        <div className={styles.row}>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => (
                                <div key={item} className={styles.line}></div>
                            ))}
                        </div>
                        <div className={styles.row}>
                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => (
                                <div key={item} className={styles.line}></div>
                            ))}
                        </div>
                        <div className={styles.row}>
                            {[0].map(item => (
                                <div key={item} className={styles.line}></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.divider}></div>
        </div>
    )
}

export default Values


export const ValueCardMobile = ({ index, scrollYProgress, title, description }: valueCardProps) => {
    const start = 0 + index * 0.1;
    const end = start + 0.2;
    const rawY = useTransform(scrollYProgress, [start, end], [300, 0]);
    const y = useSpring(rawY, {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    });
    const rawOpacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);
    const opacity = useSpring(rawOpacity, {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    });
    return (
        <motion.div className={styles.small_card_mob} style={{ y, opacity }}>
            <div className={styles.title_mob}>
                <h3>{title}</h3>
            </div>
            <div className={styles.description_mob}>
                <p>{description}</p>
            </div>
            <div className={styles.image_container_mob}>
                <div className={styles.image}>
                    <Image src="/images/drone.png" alt="" fill
                        sizes="100vw"
                    />
                </div>
            </div>
        </motion.div>
    )
}