"use client";
import React, { useRef } from "react";
import { TechnologyCard } from "@/shared";
import { consulting } from "@/mock/navLists.mock";
import { TechnologyProps } from "@/interfaces";
import { useScroll } from "framer-motion";
import Image from "next/image";
import styles from "./Consulting.module.scss";

const Consulting = () => {
	const topSectionRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: topSectionRef,
		offset: ["start end", "end end"],
	});
	return (
		<div ref={topSectionRef} className={styles.section} id="consulting">
			<div className={styles.section_container}>
				<div className={styles.text_container}>
					<Image alt="" fill src="/images/consulting.png" sizes="100%" />
					<div className={styles.text}>
						<h2>Consulting</h2>
						<h3>
							Our digital consulting practice empowers agencies to{" "}
							<span>
								modernize operations, leveraging advanced technologies for secure, 
								scalable, and transformative solutions.
							</span>
						</h3>
					</div>
				</div>
				<div className={styles.row}>
					<div className={styles.large_row}>
						{consulting.slice(0, 2).map((consult: TechnologyProps, index: number) => (
							<TechnologyCard key={consult.id} scrollYProgress={scrollYProgress}
								cardType="consulting" index={index}
								technology={consult}
							/>
						))}
					</div>
					<div className={styles.small_row}>
						{consulting.slice(2).map((consult: TechnologyProps, index: number) => (
							<TechnologyCard key={consult.id} scrollYProgress={scrollYProgress}
								cardType="consulting" index={index}
								technology={consult}
							/>
						))}
					</div>
				</div>
				<div className={styles.rows_mob}>
					{consulting.map((consult: TechnologyProps, index: number) => (
						<TechnologyCard key={consult.id} scrollYProgress={scrollYProgress}
							cardType="consulting" index={index}
							technology={consult}
						/>
					))}
				</div>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Consulting;
