"use client";
import React, { useEffect, useRef, useState } from "react";
import { useTransform, motion, MotionValue, useScroll, useSpring } from "framer-motion";
import { Button } from "@/shared";
import Image from "next/image";
import styles from "./Missionv2.module.scss";

const stackedCards = [
	{
		title: 'Our',
		sec_title: 'Mission',
		text: `We are on a mission to build thriving and resilient societies by providing 
			state-of-the-art technology for African governments and public institutions. Our goal is 
			simple: to improve transparency, drive efficiency, and enable government excellence.`,
		image: '/images/new_mission.jpg',
		image_mob: '/images/new_mission.jpg',
		list: [],
	},
	{
		title: 'Our',
		sec_title: 'Vision',
		text: `Our vision is to be the leading IT solutions provider and technology systems integrator 
			helping African governments and public institutions scale up efficiency and governance 
			through tailored automation.`,
		image: '/images/new_vision.jpg',
		image_mob: '/images/vision_mobile.png',
		list: [],
	},
]
interface Card {
	title: string;
	sec_title: string;
	text: string;
	image: string;
	image_mob: string;
	list: number[];
}

const MissionV2 = () => {
	const container = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		// offset: ["start start", "end end"],
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
		<div ref={container} className={styles.section} id="mision">
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
	const [isMobile, setIsMobile] = useState<boolean>(false);
	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 650);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	return (
		<motion.div
			className={styles.card_container} ref={cardRef}
			style={{ top: `calc(54% - 30rem + ${index * 0.2}rem)`, scale: scale ?? 1 }}
			data-index={index}
		>
			<motion.div className={styles.card}>
				<div className={styles.image_container}>
					<div data-index={index} className={styles.image}>
						<Image src={isMobile ? card.image_mob : card.image} priority fill alt="mission" sizes="100%" />
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