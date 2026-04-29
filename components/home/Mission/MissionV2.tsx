"use client";
import React, { useRef } from "react";
import { useTransform, motion, MotionValue, useScroll } from "framer-motion";
import Image from "next/image";
import styles from "./Missionv2.module.scss";
import { Button } from "@/shared";

const stackedCards: Card[] = [
	{
		title: 'Our',
		sec_title: 'Mission',
		text: `We are on a mission to build thriving and resilient societies by providing 
			state-of-the-art technology for African governments and public institutions. Our goal is 
			simple: to improve transparency, drive efficiency, and enable government excellence.`,
		image: '/images/mission_new.png',
		list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
	},
	{
		title: 'Our',
		sec_title: 'Vision',
		text: `Our vision is to be the leading IT solutions provider and technology systems integrator 
			helping African governments and public institutions scale up efficiency and governance 
			through tailored automation.`,
		image: '/images/vision_new.png',
		list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
	},
]
interface Card {
	title: string;
	sec_title: string;
	text: string;
	image: string;
	list: number[];
}

const MissionV2 = () => {
    // const container = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        // target: container,
        offset: ["start start", "end end"],
    });
    return (
        <div className={styles.section} id="mision">
            <div className={styles.section_container}>
                {stackedCards.map((card, index) => {
                    const targetScale = 1 - (stackedCards.length - index) * 0.02;
                    return (
                        <Card
                            key={index}
                            card={card}
                            progress={scrollYProgress}
                            range={[0, 0.5]}
                            targetScale={targetScale}
                            index={index}
                        />
                    );
                })}
            </div>
			<div className={styles.divider}></div>
		</div>
    )
}

export default MissionV2;

interface CardProps {
	card: Card;
	progress: MotionValue<number>;
	range: [number, number];
	targetScale: number;
	index: number;
}

const Card = ({ card, progress, range, targetScale, index }: CardProps) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const scale = useTransform(progress, range, [1, targetScale]);
	
	return (
		<motion.div
			className={styles.card_container} ref={cardRef}
			style={{ top: `calc(54% - 30rem + ${index * 0.2}rem)`, scale: scale ?? 1 }}
			data-index={index}
		>
			<motion.div className={styles.card}>
                <div className={styles.image_container}>
                    <div data-index={index} className={styles.image}>
                        <Image src={card.image} priority fill alt="mission" sizes="100%" />
                    </div>
                </div>
				<div data-index={index} className={styles.details}>
					<div className={styles.text}>
						<h3>
							{card.title} <span>{card.sec_title}</span>
						</h3>
						<p>{card.text}</p>
					</div>
					<Button className={styles.button} href="">
                        Learn more
                    </Button>
				</div>
			</motion.div>
		</motion.div>
	);
};