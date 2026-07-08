"use client";
import React, { useRef } from "react";
import { useTransform, motion, MotionValue, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import styles from "./NewMission.module.scss";

const stackedCards = [
	{
		tag: 'Our Mission',
		title: 'Empowering Governments',
		sec_title: 'Through Technology',
		text: `We are on a mission to build thriving and resilient societies by providing 
			state-of-the-art technology for African governments and public institutions. Our goal is 
			simple: to improve transparency, drive efficiency, and enable government excellence.`,
		image: '/images/new_mission.jpg',
	},
	{
		tag: 'Our Vision',
		title: 'Scaling Governance',
		sec_title: 'Through Automation',
		text: `Our vision is to be the leading IT solutions provider and technology systems integrator 
			helping African governments and public institutions scale up efficiency and governance 
			through tailored automation.`,
		image: '/images/new_vision.jpg',
	},
];

interface CardData {
	tag: string;
	title: string;
	sec_title: string;
	text: string;
	image: string;
}

const NewMission = () => {
	const container = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,
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
		<div ref={container} className={styles.section} id="mission">
			<motion.div style={{ y, opacity }} className={styles.section_container}>
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
			</motion.div>
			<div className={styles.divider}></div>
		</div>
	);
};

interface CardProps {
	card: CardData;
	progress: MotionValue<number>;
	range: [number, number];
	targetScale: number;
	index: number;
}

const Card = ({ card, progress, range, targetScale, index }: CardProps) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const scale = useTransform(progress, range, [1, targetScale]);

	return (
		<motion.div data-index={index} className={styles.card_container} ref={cardRef}
			style={{ top: `calc(50% - 28rem + ${index * 0.2}rem)`, scale }}
		>
			<div className={`${styles.card} ${index === 1 ? styles.row_reverse : ""}`}>
				<div className={styles.image_column}>
					<div className={styles.image_wrapper}>
						<Image src={card.image} priority fill alt={card.tag} sizes="100%"/>
					</div>
				</div>
				<div className={styles.text_column}>
					<div className={styles.tag_pill}>
						{card.tag}
					</div>
					<h3 className={styles.title}>
						{card.title} <br />
						<span>{card.sec_title}</span>
					</h3>
					<p className={styles.description}>
						{card.text}
					</p>
				</div>
			</div>
		</motion.div>
	);
};

export default NewMission;