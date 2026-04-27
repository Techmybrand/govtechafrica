"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import styles from "./MissionV2.module.scss";

const stackedCards = [
	{
		title: "Mission",
		text: "We are on a mission to build thriving and resilient societies by providing state-of-the-art technology for African governments and public institutions.",
		image: "/images/mission.png"
	},
	{
		title: "Vision",
		text: "Our vision is to be the leading IT solutions provider and technology systems integrator helping African governments scale up efficiency.",
		image: "/images/vision.png"
	},
	{
		title: "Values",
		text: "Through collaboration and scalable solutions, we are committed to reimagining what governance can achieve in today's digital era.",
		image: "/images/govtechafri.png"
	}
];

const MissionV2 = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ["start start", "end end"]
	});

	return (
		<div className={styles.section} ref={containerRef}>
			<div className={styles.sticky_container}>
				<div className={styles.header}>
					<h4>Where Innovation Thrives</h4>
					<p>As the leading technology provider for the public sector, we create ecosystems that empower communities and governments.</p>
				</div>
				<div className={styles.cards_container}>
					{stackedCards.map((card, index) => {
						const targetScale = 1 - (stackedCards.length - 1 - index) * 0.05;
						// eslint-disable-next-line react-hooks/rules-of-hooks
						const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);
						
						return (
							<motion.div 
								key={index} 
								className={styles.card_wrapper}
								style={{
									top: `calc(10% + ${index * 2}rem)`,
									scale
								}}
							>
								<div className={styles.card}>
									<div className={styles.image_bg}>
										<Image src={card.image} alt={card.title} fill sizes="100%" />
									</div>
									<div className={styles.content}>
										<div className={styles.icon_circle}>
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#00E676" fillOpacity="0.2" stroke="#00E676" strokeWidth="2"/>
												<circle cx="12" cy="12" r="4" fill="#00E676"/>
											</svg>
										</div>
										<h5>{card.title}</h5>
										<p>{card.text}</p>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default MissionV2;
