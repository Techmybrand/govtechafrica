import React from "react";
import styles from "./Technology.module.scss";
import { Button } from "@/shared";

const technologies = [
	{
		title: "Customised Software Solutions",
		description: "We co-create the best solutions tailored to each agency’s need",
		href: "#",
		id: "customised"
	},
	{
		title: "Cloud Services",
		description:
			"We equip government stakeholders with the skills and tools they need to drive meaningful change and innovation.",
		href: "#",
		id: "cloud"
	},
	{
		title: "Web3 & Blockchain Technology",
		description: "Decentralized solutions for the public sector",
		href: "#",
		id: "web3"
	},
	{
		title: "Cybersecurity",
		description:
			"Emerging threats demand revolutionary cyber protection. De-risk tomorrow by boosting cybersecurity today",
		href: "#",
		id: "cybersecurity"
	},
	{
		title: "Data and AI",
		description:
			"Elevating decision-making with secure and intelligent data processing, analytics and operational AI",
		href: "#",
		id: "data"
	},
	{
		title: "Network Infrastructure Design & Implementation",
		description:
			"Compliance is key. We ensure government IT systems stay secure, compliant, and future-ready",
		href: "#",
		id: "network"
	},
	{
		title: "IT Support Services (Remote support & Maintenance)",
		description:
			"Seamless IT operations with proactive remote support and maintenance",
		href: "#",
		id: "it"
	}
];

const Technology = () => {
	return (
		<div className={styles.section} id="technology">
			<div className={styles.section_container}>
				<div className={styles.large_row}>
					{technologies.slice(0, 3).map((technology, index) => (
						<div
							key={technology.id}
							id={technology.id}
							className={styles.card}
						>
							<div className={styles.grad}></div>
							<div className={styles.details}>
								<h3>{technology.title}</h3>
								<p>{technology.description}</p>
							</div>
							<Button className={styles.button}>
								{index === 0 ? "Explore" : "Read more"}
							</Button>
						</div>
					))}
				</div>
				<div className={styles.small_row}>
					{technologies.slice(3).map(technology => (
						<div
							key={technology.id}
							id={technology.id}
							className={styles.card}
						>
							<div className={styles.grad}></div>
							<div className={styles.details}>
								<h3>{technology.title}</h3>
								<p>{technology.description}</p>
							</div>
							<Button className={styles.button}>Read more</Button>
						</div>
					))}
				</div>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Technology;
