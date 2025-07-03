'use client';
import React from "react";
import { TechnologyCard } from "@/shared";
import { TechnologyProps } from "@/interfaces";
import styles from "./Technology.module.scss";

const technologies: TechnologyProps[] = [
	{
		title: "Customised Software Solutions",
		description: "We co-create the best solutions tailored to each agency’s need",
		href: "customised-software-solutions",
		image: '/svgs/customized.svg',
		id: "customised",
	},
	{
		title: "Cloud Services",
		description:
			"We equip government stakeholders with the skills and tools they need to drive meaningful change and innovation.",
		href: "/cloud-services",
		image: '/svgs/cloud_services.svg',
		id: "cloud",
	},
	{
		title: "Web3 & Blockchain Technology",
		description: "Decentralized solutions for the public sector",
		href: "/web3-and-blockchain",
		image: '/svgs/web3.svg',
		id: "web3",
	},
	{
		title: "Cybersecurity",
		description:
			"Emerging threats demand revolutionary cyber protection. De-risk tomorrow by boosting cybersecurity today",
		href: "/cybersecurity",
		image: '/svgs/cybersecurity.svg',
		id: "cybersecurity",
	},
	{
		title: "Data and AI",
		description:
			"Elevating decision-making with secure and intelligent data processing, analytics and operational AI",
		href: "/data-and-ai",
		image: '/svgs/ai.svg',
		id: "data",
	},
	{
		title: "Network Infrastructure Design & Implementation",
		description:
			"Compliance is key. We ensure government IT systems stay secure, compliant, and future-ready",
		href: "/network-infrastructure",
		image: '/svgs/network.svg',
		id: "network",
	},
	{
		title: "IT Support Services (Remote support & Maintenance)",
		description:
			"Seamless IT operations with proactive remote support and maintenance",
		href: "/support-services",
		image: '/svgs/it.svg',
		id: "it",
	}
];

const Technology = () => {
	
	return (
		<div className={styles.section} id="technology">
			<div className={styles.section_container}>
				<div className={styles.large_row}>
					{technologies.slice(0, 3).map((technology: TechnologyProps, index: number) => (
						<TechnologyCard key={index}
							cardType="technology"
							index={index}
							technology={technology}
						/>
					))}
				</div>
				<div className={styles.small_row}>
					{technologies.slice(3).map((technology: TechnologyProps, index: number) => (
						<TechnologyCard key={technology?.id}
							cardType="technology"
							index={index} 
							technology={technology} 
						/>
					))}
				</div>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Technology;
