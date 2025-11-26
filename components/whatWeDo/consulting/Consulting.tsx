import React from "react";
import { TechnologyCard } from "@/shared";
import { TechnologyProps } from "@/interfaces";
import styles from "./Consulting.module.scss";

const consulting: TechnologyProps[] = [
	{
		title: "IT Infrastructure Procurement & Supply",
		image: '/svgs/infrastructure.svg',
		description: "We empower African governments with the right infrastructure",
		href: "/infrastructure-procurement-and-supply",
		id: "infrastructure",
	},
	{
		title: "Capacity Building & Trainings",
		image: '/svgs/capacity.svg',
		description:
			"We equip government stakeholders with the skills and tools they need to drive meaningful change and innovation.",
		href: "/capacity-building-and-trainings",
		id: "capacity",
	},
	{
		title: "Tech Events Design and Delivery",
		image: '/svgs/tech.svg',
		description:
			"We connect Industry stakeholders for brainstorming & knowledge sharing",
		href: "/tech-events",
		id: "tech",
	},
	{
		title: "IT Strategy Consulting & Advisory",
		image: '/svgs/strategy.svg',
		description: "We guide governments toward smarter, more effective tech solutions",
		href: "/strategy-consulting-and-advisory",
		id: "strategy",
	},
	{
		title: "IT Compliance & Regulatory Consulting",
		image: '/svgs/compliance.svg',
		description:
			"Compliance is key. We ensure government IT systems stay secure, compliant, and future-ready",
		href: "/compliance-and-regulatory-consulting",
		id: "compliance"
	}
];

const Consulting = () => {
	return (
		<div className={styles.section} id="consulting">
			<div className={styles.section_container}>
				<div className={styles.text}>
					<h2>Consulting</h2>
					<h3>
						Our digital consulting practice empowers agencies to{" "}
						<span>
							modernize operations, leveraging advanced technologies for
							secure, scalable, and transformative solutions.
						</span>
					</h3>
				</div>
				<div className={styles.divider1}></div>
				<div className={styles.row}>
					<div className={styles.large_row}>
						{consulting.slice(0, 2).map((consult: TechnologyProps) => (
							<TechnologyCard key={consult.id}
								cardType="consulting"
								technology={consult}
							/>
						))}
					</div>
					<div className={styles.small_row}>
						{consulting.slice(2).map((consult: TechnologyProps) => (
							<TechnologyCard key={consult.id}
								cardType="consulting"
								technology={consult}
							/>
						))}
					</div>
				</div>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Consulting;
