"use client";

import { Button } from "@/shared";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./Insights.module.scss";
import "swiper/css";
import "swiper/css/pagination";
import { shortenTitle } from "@/utils/stringShortner";
import Image from "next/image";
import { useEffect, useState } from "react";

const insightList = [
	{
		title: "Converged Cyber AI: A Paradigm Shift in Cybersecurity",
		image: "/images/converge-1.png"
	},
	{
		title: "The intersection of AI governance and cybersecurity",
		image: "/images/intersection.png",
		type: "intersection"
	},
	{
		title: "Converged Cyber AI: A Paradigm Shift in Cybersecurity",
		image: "/images/converge-2.png"
	}
];

const Insights = () => {
	const [slides, setSlides] = useState<number>(2);
	const [largeSlides, setLargeSlides] = useState<number>(2);

	useEffect(() => {
		if (window.innerWidth <= 600) {
			setSlides(1);
			setLargeSlides(1);
		} else {
			setSlides(2);
			setLargeSlides(2.5);
		}
	}, []);
	return (
		<div className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.row}>
					<div className={styles.text}>
						<h3>Insights</h3>
					</div>
					<Button>Explore Insights</Button>
				</div>
				<div className={styles.slider_container}>
					<div className={styles.slider}>
						<Swiper
							slidesPerView={slides}
							spaceBetween={32}
							modules={[Autoplay]}
							loop
							autoplay={{
								delay: 2500,
								disableOnInteraction: false
							}}
						>
							{insightList.map(insight => (
								<SwiperSlide key={insight.image} className={styles.slide}>
									<div className={styles.details}>
										<h4>{shortenTitle(insight.title, 42)}</h4>
									</div>
									<div
										className={styles.image}
										data-type={insight.type}
									>
										<Image
											src={insight.image}
											alt={insight.title}
											fill
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
					<div className={styles.slider}>
						<Swiper
							slidesPerView={largeSlides}
							spaceBetween={32}
							modules={[Autoplay]}
							loop
							autoplay={{
								delay: 3000,
								disableOnInteraction: false
							}}
						>
							{insightList.map(insight => (
								<SwiperSlide key={insight.image} className={styles.slide}>
									<div className={styles.details}>
										<h4>{shortenTitle(insight.title, 42)}</h4>
									</div>
									<div
										className={styles.image}
										data-type={insight.type}
									>
										<Image
											src={insight.image}
											alt={insight.title}
											fill
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				</div>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Insights;
