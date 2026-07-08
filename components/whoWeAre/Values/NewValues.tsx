"use client";
import React, { useRef } from "react";
import { motion, useTransform, useScroll, useSpring, MotionValue } from "framer-motion";
import Image from "next/image";
import styles from "./NewValues.module.scss";

const valueCards = [
	{
		prefix: 'We Champion',
		main: 'INNOVATION',
		suffix: 'for Impact',
		icon: '/svgs/innovation_icon.svg',
		type: 'dark'
	},
	{
		prefix: 'We Leverage',
		main: 'PARTNERSHIPS',
		suffix: 'for Progress',
		icon: '/svgs/partnerships_icon.svg',
		type: 'light'
	},
	{
		prefix: 'We Profer',
		main: 'LOCAL SOLUTIONS',
		suffix: 'to local problems',
		icon: '/svgs/solutions_icon.svg',
		type: 'light'
	},
	{
		prefix: 'We build',
		main: 'RESILIENT & SECURE',
		suffix: 'systems that enable government excellence',
		icon: '/svgs/secure_icon.svg',
		type: 'dark'
	}
];

interface CardData {
	prefix: string;
	main: string;
	suffix: string;
	icon: string;
	type: string;
}

const NewValues = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start 95%", "end 95%"]
	});

	return (
		<div ref={sectionRef} className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.grid}>
					{valueCards.map((card, index) => (
						<ValueCard 
							key={index} 
							card={card} 
							index={index} 
							scrollYProgress={scrollYProgress} 
						/>
					))}
				</div>
			</div>
		</div>
	);
};

interface ValueCardProps {
	card: CardData;
	index: number;
	scrollYProgress: MotionValue<number>;
}

const ValueCard = ({ card, index, scrollYProgress }: ValueCardProps) => {
	const start = 0 + index * 0.2;
	const end = start + 0.3;
	
	const rawY = useTransform(scrollYProgress, [start, end], [150, 0]);
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
		<motion.div data-index={index} style={{ y, opacity }}
			className={`${styles.card} ${card.type === 'dark' ? styles.dark : styles.light}`}
		>
			{card.type === 'dark' && (
				<React.Fragment>
					<div className={styles.horizontal_lines}></div>
					<div className={styles.vertical_lines}></div>
				</React.Fragment>
			)}
			
			<div className={styles.card_content}>
				<div className={styles.text_wrapper}>
					<span className={styles.prefix}>{card.prefix}</span>
					<h4 className={styles.main_value}>{card.main}</h4>
					<span className={styles.suffix}>{card.suffix}</span>
				</div>
				
				<div data-index={index} className={styles.icon_wrapper}>
					<Image 
						src={card.icon} 
						alt={card.main} 
						fill
						priority
						sizes="4.8rem"
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default NewValues;