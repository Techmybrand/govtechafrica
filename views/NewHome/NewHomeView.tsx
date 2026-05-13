"use client";
import React, { useEffect, useState } from "react";
import { Hero, AnimatedHero } from "@/shared";
import { CookiesModal } from "@/shared/Modals";
import {
	GrowthV2, MissionV2, Research, NewsLetter, CenterPieceV2,
	Experience, NPGR
} from "@/components/home";
import { Governance } from "@/components/whoWeAre";
import { ParticipatingOrganisations } from "@/components/PolicyRoundTable";

const NewHomeView = () => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [, setConsent] = useState<string | null>(null);
	const [isMobile, setIsMobile] = useState<boolean>(false);
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 650);
		};
		const storedConsent = localStorage.getItem('cookieConsent');
		setConsent(storedConsent);
		if (!storedConsent) {
			setShowModal(true);
		}
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return (
		<React.Fragment>
			<Hero
				backgroundVideo={isMobile ? "/videos/hero_video_portrait.mp4" : "/videos/hero_video_landcape.mp4"}
				backgroundType="video"
				backgroundImage=""
				title=""
				description=''
			/>
			{/* <AnimatedHero /> */}
			<ParticipatingOrganisations type="new" />
			<Governance type="new" />
			<Research />
			<GrowthV2 />
			<MissionV2 />
			<Experience />
			<CenterPieceV2 />
			<NPGR />
			<NewsLetter />
			<CookiesModal isOpen={showModal} onClose={() => setShowModal(false)} />
		</React.Fragment>
	)
}

export default NewHomeView;




// "use client";
// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import styles from "./AnimatedHero.module.scss";

// export interface MediaItem {
// 	id: string;
// 	type: "image" | "video";
// 	src: string;
// }

// export interface AnimatedHeroProps {
// 	headline?: string;
// 	subheading?: string;
// 	media?: MediaItem[];
// }

// const defaultMedia: MediaItem[] = [
// 	{ id: "1", type: "image", src: "/images/gradient_bg.jpg" },
// 	{ id: "2", type: "image", src: "/images/who_we_are.jpg" },
// 	{ id: "3", type: "image", src: "/images/tech.png" },
// ];

// const AnimatedHero = ({
// 	headline = "we are drivers of change",
// 	subheading,
// 	media = defaultMedia
// }: AnimatedHeroProps) => {
// 	const [activeIndex, setActiveIndex] = useState<number>(0);

// 	useEffect(() => {
// 		const interval = setInterval(() => {
// 			setActiveIndex((prev) => (prev + 1) % media.length);
// 		}, 11000);

// 		return () => clearInterval(interval);
// 	}, [media.length]);

// 	const boxes = Array.from({ length: 15 }).map((_, i) => i);

// 	return (
// 		<div className={styles.animated_hero_container}>
// 			<div className={styles.boxes_container}>
// 				{boxes.map((box) => (
// 					<div key={box} className={styles.green_box} />
// 				))}
// 			</div>

// 			<div className={styles.media_layer}>
// 				{media.slice(0, 3).map((item, index) => {
// 					const isActive = activeIndex === index;
// 					return (
// 						<div
// 							key={item.id}
// 							className={`${styles.media_container} ${isActive ? styles.active : ''}`}
// 							data-index={index}
// 						>
// 							{item.type === "image" ? (
// 								<Image
// 									src={item.src}
// 									alt="Hero background"
// 									fill
// 									className={styles.media_content}
// 									priority={isActive}
// 								/>
// 							) : (
// 								<video
// 									src={item.src}
// 									autoPlay
// 									loop
// 									muted
// 									playsInline
// 									className={styles.media_content}
// 								/>
// 							)}
// 							<div className={styles.overlay} />
// 						</div>
// 					);
// 				})}
// 			</div>

// 			{/* Text Layer */}
// 			<div className={styles.text_layer}>
// 				{headline && <h1 className={styles.headline}>{headline}</h1>}
// 				{subheading && <p className={styles.subheading}>{subheading}</p>}
// 			</div>
// 		</div>
// 	);
// };

// export default AnimatedHero;