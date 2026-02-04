'use client';
import React from "react";
import { technologies } from "@/mock/navLists.mock";
import { TechnologyCard } from "@/shared";
import { TechnologyProps } from "@/interfaces";
import styles from "./Technology.module.scss";

const Technology = () => {
	return (
		<div className={styles.section} id="technology">
			<div className={styles.section_container}>
				<div className={styles.text}>
					<h2>Technology</h2>
					<h3>
						We empower African governments{" "}
						<span>
							to thrive through innovative IT solutions tailored for societal advancement.
						</span>
					</h3>
				</div>
				<div className={styles.rows}>
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
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Technology;
