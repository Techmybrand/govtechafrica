import React from "react";
import styles from "./Growth.module.scss";

const growthList = [
	{
		title: "65%",
		description: "African governments Offering e-Government services to citizens."
	},
	{
		title: "76%",
		description:
			"Already adopting cloud-based platforms for public service delivery as of 2024."
	},
	{
		title: "70%",
		description: "Providing mobile-based public services ."
	},
	{
		title: "$4.6bn",
		description:
			"The size of the African public sector IT market in 2023, projected to reach USD 7.8 billion by 2026."
	},
	{
		title: "$6bn",
		description: "Cybersecurity investments by African governments from 2023 to 2026."
	},
	{
		title: "$400m",
		description: "In AI investments for African public services in 2024."
	}
];

const Growth = () => {
	return (
		<div className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.text}>
					<h3>
						With growing demand for technology in Africa’s public sector,{" "}
					</h3>
				</div>
				<div className={styles.grid}>
					{growthList.map(growth => (
						<div className={styles.card} key={growth.title}>
							<h4>{growth.title}</h4>
							<p>{growth.description}</p>
						</div>
					))}
				</div>
				<div className={styles.text}>
					<h3>
						Govtech Africa <span>exists to lend a helping hand</span>
					</h3>
				</div>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Growth;
