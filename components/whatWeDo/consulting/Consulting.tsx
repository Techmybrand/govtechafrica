import React from "react";
import { Button } from "@/shared";
import styles from "./Consulting.module.scss";

const consulting = [
	{
		title: "IT Infrastructure Procurement & Supply",
		description: "We empower African governments with the right infrastructure",
		href: "#",
		id: "infrastructure"
	},
	{
		title: "Capacity Building & Trainings",
		description:
			"We equip government stakeholders with the skills and tools they need to drive meaningful change and innovation.",
		href: "#",
		id: "capacity"
	},
	{
		title: "Tech Events Design and Delivery",
		description:
			"We connect Industry stakeholders for brainstorming & knowledge sharing",
		href: "#",
		id: "tech"
	},
	{
		title: "IT Strategy Consulting & Advisory",
		description: "We guide governments toward smarter, more effective tech solutions",
		href: "#",
		id: "strategy"
	},
	{
		title: "IT Compliance & Regulatory Consulting",
		description:
			"Compliance is key. We ensure government IT systems stay secure, compliant, and future-ready",
		href: "#",
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
						{consulting.slice(0, 2).map(consult => (
							<div key={consult.id} id={consult.id} className={styles.card}>
								<div className={styles.grad}></div>
								<div className={styles.details}>
									<h3>{consult.title}</h3>
									<p>{consult.description}</p>
								</div>
								<Button className={styles.button}>Explore</Button>
							</div>
						))}
					</div>
					<div className={styles.small_row}>
						{consulting.slice(2).map(consult => (
							<div key={consult.id} id={consult.id} className={styles.card}>
								<div className={styles.grad}></div>
								<div className={styles.details}>
									<h3>{consult.title}</h3>
									<p>{consult.description}</p>
								</div>
								<Button className={styles.button}>Explore</Button>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Consulting;
