"use client";
import React, { useRef } from "react";
import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { Values } from "..";
import Image from "next/image";
import styles from "./Mission.module.scss";

const stackedCards: Card[] = [
	{
		title: 'Our',
		sec_title: 'Mission',
		text: `We are on a mission to build thriving and resilient societies by providing state-of-the-art 
			technology for African governments and public institutions. Our goal is simple: to improve 
			transparency, drive efficiency, and enable government excellence.`,
		image: '/images/mission.png',
		list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	},
	{
		title: 'Our',
		sec_title: 'Vision',
		text: `Our vision is to be the leading IT solutions provider and technology systems integrator 
			helping African governments and public institutions scale up efficiency and governance
			through tailored automation.`,
		image: '/images/vision.png',
		list: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	},
]
interface Card {
	title: string;
	sec_title: string;
	text: string;
	image: string;
	list: number[];
}

const Mission = () => {
	const container = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start start", "end end"],
	});
	
	const { scrollYProgress: textYProgress } = useScroll({
		target: textRef,
		offset: ["start 90%", "end center"],
	});
	const fullText = `We are a coalition of homegrown leading technology giants delivering tier one 
		technology systems development and deployment to governments across the African continent.`;
	const textLength = useTransform(textYProgress, [0, 1], [0, fullText.length]);
	const displayedText = useTransform(textLength, (latest) => fullText.slice(0, Math.floor(latest)));
	// const firstPart = "We are a coalition of";
  	// const secondPart = fullText.slice(firstPart.length);
	// const firstPartLength = useTransform(textLength, (v) => Math.min(v, firstPart.length));
	// const secondPartLength = useTransform(textLength, (v) => Math.max(0, v - firstPart.length));
	return (
		<React.Fragment>
			<div className={styles.text_section} ref={textRef}>
				<div className={styles.divider}></div>
				<div className={styles.text_container}>
					<div className={styles.text_}>
						{/* We are a coalition of{" "} */}
						<motion.h3>
							<motion.span style={{color: "#FFFFFF"}}>{displayedText}</motion.span>
							<motion.span
								animate={{ opacity: [0, 1, 0] }}
								transition={{ duration: 0.8, repeat: Infinity }}
								style={{ marginLeft: "1px" }}
							>
								|
							</motion.span>
						</motion.h3>
					</div>
				</div>
			</div>
			<div className={styles.section} ref={container} id="mision">
				<div className={styles.divider_}></div>
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
			<Values />
		</React.Fragment>
	);
};

export default Mission;
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
			style={{ top: `calc(54% - 30rem + ${index * 0.2}rem)`, scale: scale }}
		>
			<motion.div className={styles.card}>
				<div className={styles.details}>
					<div className={styles.text}>
						<h3>
							{card.title} <span>{card.sec_title}</span>
						</h3>
						<p>{card.text}</p>
					</div>
					<div className={styles.row}>
						{card.list.map(item => (
							<div key={item} className={styles.line}></div>
						))}
					</div>
				</div>
				<div className={styles.image}>
					<Image src={card.image} priority fill alt="mission" sizes="100%" />
				</div>
			</motion.div>
		</motion.div>
	);
};