"use client";
import React, { useRef } from "react";
import { GrowthCardProps, GrowthCardMobileProps } from "@/interfaces";
import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import styles from "./Growth.module.scss";

const growthList = [
	{
		value: 35,
		label: '%',
		description: "Of government institutions adopting cloud transformation for public service delivery"
	},
	{
		value: 76,
		label: '%',
		description: "Already adopting cloud-based platforms for public service delivery as of 2024."
	},
	{
		value: 70,
		label: '%',
		description: "African governments providing mobile-based public services."
	},
	{
		value: 4.6,
		label: 'bn',
		currency: '$',
		description: "The size of the African public sector IT market in 2023, projected to reach USD 7.8 billion by 2026."
	},
	{
		value: 1.1,
		label: 'bn',
		currency: '$',
		description: "Cybersecurity investments projection by African governments in 2026."
	},
	{
		value: 16.5,
		label: 'bn',
		currency: '$',
		description: " in AI investments for public services in Africa  by 2030"
	}
];

const Growth = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end 90%"]
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

	// const rawXRightToLeft = useTransform(scrollYProgress, [0.15, 0.65], [700, 0]);
  	// const rawXLeftToRight = useTransform(scrollYProgress, [0.15, 0.65], [-700, 0]);
	// const xFromLeft = useSpring(rawXLeftToRight, {
	// 	stiffness: 100,
	// 	damping: 20,
	// 	mass: 0.5
	// });
	// const xFromRight = useSpring(rawXRightToLeft, {
	// 	stiffness: 100,
	// 	damping: 20,
	// 	mass: 0.5
	// });
	// const rawOpacityX = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
	// const opacityX = useSpring(rawOpacityX, {
	// 	stiffness: 100,
	// 	damping: 20,
	// 	mass: 0.5
	// });

	return (
		<motion.div ref={sectionRef} className={styles.section}>
			<div className={styles.section_container}>
				<motion.div className={styles.text} style={{ y, opacity }}>
					<h3>
						There is growing demand for technology in Africa’s public sector - {" "}
					</h3>
				</motion.div>
				{/* <motion.div className={styles.grid} style={{ x: xFromLeft, opacity: opacityX }}>
					{growthList.slice(0, 3).map((growth, index: number) => (
						<GrowthCard key={index} index={index} inView={inView}
							{...growth}
						/>
					))}
				</motion.div>
				<motion.div className={styles.grid} style={{ x: xFromRight, opacity: opacityX }}>
					{growthList.slice(3).map((growth, index: number) => (
						<GrowthCard key={index}
							{...growth} index={index} inView={inView}
						/>
					))}
				</motion.div> */}
				<motion.div className={styles.grid}>
					{growthList.map((growth, index: number) => (
						<GrowthCard key={index} scrollYProgress={scrollYProgress}
							{...growth} index={index}
						/>
					))}
				</motion.div>
				<motion.div className={styles.grid_mob}>
					{growthList.map((growth, index: number) => (
						<GrowthCardMobile key={index} index={index} scrollYProgress={scrollYProgress}
							{...growth}
						/>
					))}
				</motion.div>
				<div className={styles.text}>
					<h3>
						Govtech Africa <span>exists to lend a helping hand</span>
					</h3>
				</div>
			</div>
			<div className={styles.divider}></div>
		</motion.div>
	);
};

export default Growth;


export const GrowthCard = ({ currency, value, description, label, scrollYProgress, index }: GrowthCardProps) => {
	const start = 0 + index * 0.12;
	const end = start + 0.25;
	const rawY = useTransform(scrollYProgress, [start, end], [250, 0]);
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
	const countProgress = useTransform(scrollYProgress, [start, end], [0, 1]);
	const easedCount = useTransform(countProgress, (p) => {
		return 1 - (1 - p) ** 2;
	});
  	const animatedCount = useTransform(easedCount, [0, 1], [0, value]);
  	const decimals = value.toString().includes('.') ? value.toString().split('.')[1].length : 0;
	const display = useTransform(animatedCount, (v) => v.toFixed(decimals));

	return (
		<motion.div className={styles.card} style={{ y, opacity }}>
			<div className={styles.card_header}>
				<h6>{currency}</h6>
				<motion.h4>{display}</motion.h4>
				<h6>{label}</h6>
			</div>
			<span></span>
			<p>{description}</p>
		</motion.div>
	)
}

export const GrowthCardMobile = ({ currency, value, description, label, index, scrollYProgress }: GrowthCardMobileProps) => {
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
	const countProgress = useTransform(scrollYProgress, [start, end], [0, 1]);
	const easedCount = useTransform(countProgress, (p) => {
		return 1 - (1 - p) ** 2;
	});
  	const animatedCount = useTransform(easedCount, [0, 1], [0, value]);
  	const decimals = value.toString().includes('.') ? value.toString().split('.')[1].length : 0;
	const display = useTransform(animatedCount, (v) => v.toFixed(decimals));

	return (
		<motion.div className={styles.card} style={{ y, opacity }}>
			<div className={styles.card_header}>
				<h6>{currency}</h6>
				<motion.h4>{display}</motion.h4>
				{/* <h4>{value}</h4> */}
				<h6>{label}</h6>
			</div>
			<span></span>
			<p>{description}</p>
		</motion.div>
	)
}