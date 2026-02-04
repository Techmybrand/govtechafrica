import React from "react";
import { TechnologyCard } from "@/shared";
import { consulting } from "@/mock/navLists.mock";
import { TechnologyProps } from "@/interfaces";
import styles from "./Consulting.module.scss";

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
