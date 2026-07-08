"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/shared";
import styles from "./IntroToFulcrum.module.scss";

const IntroToFulcrum = () => {
	return (
		<div className={styles.fulcrum_section}>
			<div className={styles.bg_pattern_wrapper}>
				<Image 
					src="/svgs/fulcrum_pattern.svg" 
					alt="" 
					fill 
					priority
					sizes="100vw"
				/>
			</div>

			<div className={styles.container}>
				<div className={styles.layout_grid}>
					<div className={styles.left_column}>
						<div className={styles.section_title_wrapper}>
							<div className={styles.vertical_accent_line}></div>
							<h3 className={styles.title_label}>Fulcrum</h3>
						</div>

						<div className={styles.illustration_wrapper}>
							<div className={styles.offset_box}></div>
							<div className={styles.image_container}>
								<Image 
									src="/images/fulcrum_image.png" 
									alt="Fulcrum Illustration" 
									fill
									priority
									sizes="(max-width: 1024px) 100vw, 50vw"
								/>
							</div>
						</div>
					</div>

					<div className={styles.right_column}>
						<h2 className={styles.intro_heading}>
							Introducing <br />
							<span>Fulcrum...</span>
						</h2>

						<p className={styles.intro_description}>
							A Unified Execution Platform That Gives Leadership Real-Time Visibility
							Into Project Delivery, Budget Performance, Milestones, And SDG
							Alignment Across Ministries, Departments, And Agencies.
						</p>

						<Button href="https://fulcrum.govtechafrica.com" className={styles.visit_btn}>
							Visit Page
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default IntroToFulcrum;