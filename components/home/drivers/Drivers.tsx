import React from "react";
import { Button } from "@/shared";
import styles from "./Drivers.module.scss";
import Image from "next/image";

const Drivers = () => {
	return (
		<div className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.grad_1}></div>
				<div className={styles.grad_2}></div>
				<div className={styles.text}>
					<h2>We are Drivers of Change</h2>
					<h3>
						At Govtech Africa,{" "}
						<span>
							we are driven by the need to close the technology gap for
							governments across the African continent.
						</span>
					</h3>
				</div>
				<div className={styles.grid}>
					<div className={styles.card}>
						<div className={styles.image}>
							<Image src="/svgs/drivers-1.svg" fill alt="" />
						</div>
						<div className={styles.card_details}>
							<p>We champion</p>
							<h4>Innovation</h4>
							<p>for impact</p>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.image}>
							<Image src="/svgs/drivers-2.svg" fill alt="" />
						</div>
						<div className={styles.card_details}>
							<p>We leverage</p>
							<h4>Partnerships</h4>
							<p>for progress</p>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.image}>
							<Image src="/svgs/drivers-3.svg" fill alt="" />
						</div>
						<div className={styles.card_details}>
							<p>We profer</p>
							<h4>Local Solutions</h4>
							<p>for local problems</p>
						</div>
					</div>
					<div className={styles.card}>
						<div className={styles.image}>
							<Image src="/svgs/drivers-4.svg" fill alt="" />
						</div>
						<div className={styles.card_details}>
							<p>We build</p>
							<h4>Resilient and Secure Systems</h4>
							<p>that enable government excellence</p>
						</div>
					</div>
				</div>
				<Button>Learn more</Button>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Drivers;
