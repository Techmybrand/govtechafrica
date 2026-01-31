'use client';
import React, { useEffect, useRef, useState } from "react";
import { GrowthCardProps, GrowthCardMobileProps } from "@/interfaces";
import { motion, useInView, useMotionValue, useTransform, useMotionValueEvent, animate, useScroll, useSpring } from "framer-motion";
import styles from "./Growth.module.scss";

const growthList = [
	{
		value: 65,
		label: '%',
		description: "African governments Offering e-Government services to citizens."
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
		value: 6,
		label: 'bn',
		currency: '$',
		description: "Cybersecurity investments by African governments from 2023 to 2026."
	},
	{
		value: 400,
		label: 'm',
		currency: '$',
		description: "In AI investments for African public services in 2024."
	}
];

const Growth = () => {
	const sectionRef = useRef<HTMLDivElement>(null);
	const inView = useInView(sectionRef, { amount: 0.2, once: false });
	const { scrollYProgress } = useScroll({
		target: sectionRef,
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

	// const rawX = useTransform(scrollYProgress, [0.2, 0.7], [700, 0]);
	const rawXRightToLeft = useTransform(scrollYProgress, [0.15, 0.65], [700, 0]);
  	const rawXLeftToRight = useTransform(scrollYProgress, [0.15, 0.65], [-700, 0]);
	// const x = useSpring(rawX, {
	// 	stiffness: 100,
	// 	damping: 20,
	// 	mass: 0.5
	// });
	const xFromLeft = useSpring(rawXLeftToRight, {
		stiffness: 100,
		damping: 20,
		mass: 0.5
	});
	const xFromRight = useSpring(rawXRightToLeft, {
		stiffness: 100,
		damping: 20,
		mass: 0.5
	});
	const rawOpacityX = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
	const opacityX = useSpring(rawOpacityX, {
		stiffness: 100,
		damping: 20,
		mass: 0.5
	});

	return (
		<motion.div ref={sectionRef} className={styles.section}>
			<div className={styles.section_container}>
				<motion.div className={styles.text} style={{ y, opacity }}>
					<h3>
						There is growing demand for technology in Africa’s public sector - {" "}
					</h3>
				</motion.div>
				<motion.div className={styles.grid} style={{ x: xFromLeft, opacity: opacityX }}>
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
				</motion.div>
				<motion.div className={styles.grid_mob}>
					{growthList.map((growth, index: number) => (
						<GrowthCardMobile key={index} index={index} scrollYProgress={scrollYProgress}
							{...growth}
						/>
					))}
				</motion.div>
				<motion.div className={styles.text} style={{ y, opacity }}>
					<h3>
						Govtech Africa <span>exists to lend a helping hand</span>
					</h3>
				</motion.div>
			</div>
			<div className={styles.divider}></div>
		</motion.div>
	);
};

export default Growth;


export const GrowthCard = ({ currency, value, description, label, inView }: GrowthCardProps) => {
	const count = useMotionValue(0);
	const decimals = value.toString().includes(".") ? value.toString().split(".")[1].length : 0;
	const displayValue = useTransform(count, (latest) => latest.toFixed(decimals));
	const [display, setDisplay] = useState("0");

	useMotionValueEvent(displayValue, "change", (latest) => {
		setDisplay(latest);
	});

	useEffect(() => {
		if (inView) {
			// animate(count, 0, value, { duration: 2.5, ease: "easeOut" });
			animate(count, value, { duration: 2.5, ease: "easeOut" });
		} else {
			count.set(0);
		}
	}, [inView, count, value]);
	return (
		<div className={styles.card}>
			<div className={styles.card_header}>
				<h6>{currency}</h6>
				{/* <h4 data-count={growth.value}>0</h4> */}
				<h4>{display}</h4>
				<h6>{label}</h6>
			</div>
			<span></span>
			<p>{description}</p>
		</div>
	)
}

export const GrowthCardMobile = ({ currency, value, description, label, inView, index, scrollYProgress }: GrowthCardMobileProps) => {
	const count = useMotionValue(0);
	const decimals = value.toString().includes(".") ? value.toString().split(".")[1].length : 0;
	const displayValue = useTransform(count, (latest) => latest.toFixed(decimals));
	const [, setDisplay] = useState("0");

	useMotionValueEvent(displayValue, "change", (latest) => {
		setDisplay(latest);
	});

	useEffect(() => {
		if (inView) {
			// animate(count, 0, value, { duration: 2.5, ease: "easeOut" });
			animate(count, value, { duration: 2.5, ease: "easeOut" });
		} else {
			count.set(0);
		}
	}, [inView, count, value]);
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
		<motion.div className={styles.card} style={{ y, opacity }}>
			<div className={styles.card_header}>
				<h6>{currency}</h6>
				{/* <h4 data-count={growth.value}>0</h4> */}
				{/* <h4>{display}</h4> */}
				<h4>{value}</h4>
				<h6>{label}</h6>
			</div>
			<span></span>
			<p>{description}</p>
		</motion.div>
	)
}