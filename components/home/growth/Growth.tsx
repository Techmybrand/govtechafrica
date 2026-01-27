'use client';
import React, { useEffect, useRef, useState } from "react";
import { GrowthCardProps } from "@/interfaces";
// import { animateCounter } from "@/utils";
import { motion, useInView, useMotionValue, useTransform, useMotionValueEvent, animate } from "framer-motion";
import styles from "./Growth.module.scss";

const growthList: GrowthCardProps[] = [
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
	// const inView = useInView(sectionRef, { threshold: 0.3, once: false });
	const inView = useInView(sectionRef, { amount: 0.2, once: false });
    // const hasAnimated = useRef<boolean>(false);
	// const { scrollYProgress } = useScroll({
	// 	target: sectionRef,
	// 	offset: ["start end", "end end"],
	// });

    // useEffect(() => {
    //     const currentSection = sectionRef.current
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             entries.forEach((entry) => {
    //             if (entry.isIntersecting && !hasAnimated.current) {
    //                 const counters = sectionRef.current?.querySelectorAll('[data-count]');
    //                 counters?.forEach((counter) => {
    //                     const target = parseInt(counter.getAttribute('data-count') || '0');
    //                         animateCounter(counter as HTMLElement, 0, target, 2500);
    //                     }
    //                 );
    //                 hasAnimated.current = true;
    //             }
    //             });
    //         },
    //         { threshold: 0.3 }
    //     );

    //     if (currentSection) {
    //         observer.observe(currentSection);
    //     }

    //     return () => {
    //         if (currentSection) {
    //             observer.unobserve(currentSection);
    //         }
    //     };
    // }, []);

	return (
		<motion.div ref={sectionRef} className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.text}>
					<h3>
						There is growing demand for technology in Africa’s public sector - {" "}
					</h3>
				</div>
				<div className={styles.grid}>
					{growthList.map((growth: GrowthCardProps, index: number) => (
						<GrowthCard key={index}
							{...growth}
							inView={inView}
						/>
					))}
				</div>
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