"use client";
import React, { useRef, useState, useEffect } from "react";
import styles from "./Approach.module.scss";
import { motion, useScroll, useTransform, MotionValue, useSpring } from "framer-motion";
import Image from "next/image";

const approachData = [
	{
		num: '01',
		title: 'Build the Technology',
		text: `We design and deliver secure, scalable and future-ready digital infrastructure that modernizes government operations. From custom software and cloud platforms to AI, cybersecurity and connected infrastructure, every solution is built to solve real public sector challenges while remaining adaptable for future growth.`,
	},
	{
		num: '02',
		title: 'Enable the Institution',
		text: `Technology succeeds when the people and institutions behind it are equipped to lead change. We work alongside governments to develop digital strategies, strengthen governance, build institutional capacity and provide the advisory support needed for long-term success.`,
	},
	{
		num: '03',
		title: 'Transform the Citizen Experience',
		text: `The ultimate measure of digital government is the experience of the people it serves. Every solution we design is focused on making public services faster, simpler, more transparent and more accessible.`,
	},
];
interface CardData {
	num: string;
	title: string;
	text: string;
}

const Approach = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end center"]
    });
    const { scrollYProgress: cardsScrollYProgress } = useScroll({
        target: container,
        offset: ["start center", "end end"]
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

    const rawCardsY = useTransform(cardsScrollYProgress, [0, 0.2], [300, 0]);
    const cardsY = useSpring(rawCardsY, {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    });
    const rawCardsOpacity = useTransform(cardsScrollYProgress, [0, 0.3], [0, 1]);
    const cardsOpacity = useSpring(rawCardsOpacity, {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    });

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 650);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    return (
        <div className={styles.approach_section} ref={container}>
            <div className={styles.approach_container}>
                <div className={styles.header_container}>
                    <motion.span style={{ opacity: opacity, y: y }} className={styles.tag}>OUR APPROACH</motion.span>
                    <motion.h2 style={{ opacity: opacity, y: y }} transition={{ delay: 0.1 }} className={styles.title}>
                        Building Digital Governments<br/>From The Ground Up
                    </motion.h2>
                    <motion.p style={{ opacity: opacity, y: y }} transition={{ delay: 0.2 }} className={styles.description}>
                        Technology alone doesn&apos;t transform governments. Sustainable impact happens when the right digital
                        solutions are combined with capable institutions and services designed around the needs of citizens.
                    </motion.p>
                </div>

                {isMobile ? (
                    <div className={styles.mobile_cards_container}>
                        {approachData.map((card, index) => {
                            return (
                                <MobileCard key={index} card={card} index={index} />
                            );
                        })}
                    </div>
                ) : (
                    <div className={styles.desktop_cards_container}>
                        <div className={styles.grid_background}></div>
                        <motion.div className={styles.curve_1} style={{ opacity: cardsOpacity, y: cardsY }}>
                            <div className={styles.dotted_line}>
                                <Image alt="line" fill src="/svgs/approach_line_1.svg" />
                            </div>
                        </motion.div>
                        <motion.div className={styles.curve_2} style={{ opacity: cardsOpacity, y: cardsY }}>
                            <div className={styles.dotted_line}>
                                <Image alt="line" fill src="/svgs/approach_line_2.svg" />
                            </div>
                        </motion.div>
                        {approachData.map((card, index) => (
                            <DesktopCard key={index} index={index} card={card} scrollYProgress={cardsScrollYProgress} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

const DesktopCard = ({ card, index, scrollYProgress }: { card: CardData; index: number, scrollYProgress: MotionValue<number> }) => {
    const rotation = index === 0 ? -17 : index === 1 ? 20 : -18;
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
        <motion.div className={`${styles.card_wrapper} ${styles[`card_${index}`]}`}
            style={{ opacity: opacity, y: y, rotate: rotation }}
        >
            <div className={styles.card}>
                <div className={styles.black_dot}></div>
                <div className={styles.card_inner}>
                    <div className={styles.card_num}>{card.num}</div>
                    <h3 className={styles.card_title}>{card.title}</h3>
                    <p className={styles.card_text}>{card.text}</p>
                </div>
            </div>
        </motion.div>
    );
};

interface MobileCardProps {
	card: CardData;
	index: number;
}

const MobileCard = ({ card, index }: MobileCardProps) => {
    // const rotation = index === 0 ? 0 : index === 1 ? -3 : -6;

	return (
		<motion.div data-index={index} className={styles.mobile_card_wrapper}
			style={{ position: "sticky", top: `calc(10rem + ${index * 2}rem)` }}
		>
			<div className={styles.card}>
                <div className={styles.black_dot}></div>
                <div className={styles.card_inner}>
                    <div className={styles.card_num}>{card.num}</div>
                    <h3 className={styles.card_title}>{card.title}</h3>
                    <p className={styles.card_text}>{card.text}</p>
                </div>
			</div>
		</motion.div>
	);
};

export default Approach;
