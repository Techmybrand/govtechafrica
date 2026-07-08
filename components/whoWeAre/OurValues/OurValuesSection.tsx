"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./OurValuesSection.module.scss";

const valuesData = [
	{
		id: "01",
		title: "Integrity",
		description: "We uphold the highest standards of integrity, transparency, and ethical conduct in all our interactions.",
		image: "/images/integrity.png"
	},
	{
		id: "02",
		title: "Innovation",
		description: "We embrace innovation and creativity as catalysts for positive change and continuous improvement.",
		image: "/images/innovate.png"
	},
	{
		id: "03",
		title: "Collaboration",
		description: "We believe in the power of collaboration and partnerships to achieve shared goals and drive collective impact.",
		image: "/images/collab.png"
	},
	{
		id: "04",
		title: "Empowerment",
		description: "We are committed to empowering governments and citizens with the tools and knowledge they need to thrive in today’s digital age.",
		image: "/images/our_values_1.png"
	},
	{
		id: "05",
		title: "Impact",
		description: "We measure our success by the impact we create, both in terms of tangible outcomes and positive societal change.",
		image: "/images/our_values_1.png"
	}
];

const OurValuesSection = () => {
	const [activeCard, setActiveCard] = useState<number>(0);

	return (
		<div className={styles.our_values_section}>
			<div className={styles.container}>
				<div className={styles.header}>
					<h2>Our Values</h2>
				</div>

				<div className={styles.layout_grid}>
					<div className={styles.image_column}>
						<div className={styles.image_wrapper}>
							<Image
								src={valuesData[activeCard].image}
								alt={valuesData[activeCard].title}
								fill
								priority
								sizes="(max-width: 1024px) 100vw, 50vw"
							/>
						</div>
					</div>

					<div className={styles.accordion_column}>
						{valuesData.map((item, index) => {
							const isActive = activeCard === index;
							return (
								<div
									key={index}
									className={`${styles.accordion_item} ${isActive ? styles.active : ""}`}
									onClick={() => setActiveCard(index)}
								>
									<div className={styles.item_header}>
										<div className={styles.title_group}>
											<span className={styles.item_id}>{item.id}</span>
											<h3 className={styles.item_title}>{item.title}</h3>
										</div>
										<div className={styles.chevron_icon}>
											<svg
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											>
												{isActive ? (
													<polyline points="18 15 12 9 6 15" />
												) : (
													<polyline points="6 9 12 15 18 9" />
												)}
											</svg>
										</div>
									</div>
									
									{isActive && (
										<div className={styles.item_content}>
											<p>{item.description}</p>
										</div>
									)}
								</div>
							);
						})}
					</div>
				</div>

				<div className={styles.cards_container_sm}>
					<div className={styles.mobile_card}>
						<div className={styles.mobile_image_container}>
							<Image
								src={valuesData[activeCard]?.image}
								alt={valuesData[activeCard]?.title}
								fill
								sizes="100vw"
								priority
							/>
						</div>

						<div className={styles.mobile_content}>
							<div className={styles.mobile_tabs}>
								{valuesData.map((card, index) => (
									<div
										key={index}
										className={`${styles.mobile_tab} ${activeCard === index ? styles.active : ""}`}
										onClick={() => setActiveCard(index)}
										data-active={activeCard === index}
									>
										<span>{card.title}</span>
										<div className={styles.progress_bar}>
											<div className={styles.progress_fill}></div>
										</div>
									</div>
								))}
							</div>
							<h3 className={styles.mobile_title}>
								{valuesData[activeCard]?.title}
							</h3>
							<p className={styles.mobile_description}>
								{valuesData[activeCard]?.description}
							</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
};

export default OurValuesSection;