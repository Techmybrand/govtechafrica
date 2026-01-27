'use client';
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/shared";
import { motion, useInView, useAnimationControls } from "framer-motion";
import Image from "next/image";
import styles from "./Drivers.module.scss";

const Drivers = () => {
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const mobile = isMobile;

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 650);
		};

		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const amount = mobile ? 0.1 : 0.3;
	const sectionInView = useInView(sectionRef, { amount: amount, once: false });

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
				<div ref={sectionRef} className={styles.grid}>
					<div className={`${styles.card} ${styles.card_1}`}>
						<div className={styles.image}>
							<AnimatedContainer mobile={mobile} index={0}
								className={styles.container_1}
								inView={sectionInView}
								fromLeft={true}
							/>
						</div>
						<div className={styles.card_details}>
							<p>We champion</p>
							<h4>Innovation</h4>
							<p>for impact</p>
						</div>
					</div>
					<div className={`${styles.card} ${styles.card_2}`}>
						<div className={styles.image}>
							<AnimatedContainer mobile={mobile} index={1}
								className={styles.container_1}
								inView={sectionInView}
								fromLeft={true}
							/>
							<AnimatedContainer mobile={mobile} index={1}
								className={styles.container_2}
								inView={sectionInView}
								fromLeft={false}
							/>
						</div>
						<div className={styles.card_details}>
							<p>We leverage</p>
							<h4>Partnerships</h4>
							<p>for progress</p>
						</div>
					</div>
					<div className={`${styles.card} ${styles.card_3}`}>
						<div className={styles.image}>
							<AnimatedContainer mobile={mobile} index={2}
								className={styles.container_1}
								inView={sectionInView}
								fromLeft={true}
							/>
							<AnimatedContainer mobile={mobile} index={2}
								className={styles.container_2}
								inView={sectionInView}
								fromLeft={false}
							/>
						</div>
						<div className={styles.card_details}>
							<p>We profer</p>
							<h4>Local Solutions</h4>
							<p>to local problems</p>
						</div>
					</div>
					<div className={`${styles.card} ${styles.card_4}`}>
						<div className={styles.image}>
							<AnimatedContainer mobile={mobile} index={3}
								className={styles.container_1}
								inView={sectionInView}
								fromLeft={true}
							>
								<Image alt="" fill src='/svgs/polygon_1.svg' />
							</AnimatedContainer>
							<AnimatedContainer mobile={mobile} index={3}
								className={styles.container_2}
								inView={sectionInView}
								fromLeft={false}
							>
								<Image alt="" fill src='/svgs/polygon_2.svg' />
							</AnimatedContainer>
						</div>
						<div className={styles.card_details}>
							<p>We build</p>
							<h4>Resilient and Secure Systems</h4>
							<p>that enable government excellence</p>
						</div>
					</div>
				</div>
				<Button className={styles.learn_more}>Learn more</Button>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Drivers;
export interface AnimatedContainerProps {
  inView: boolean;
  mobile?: boolean;
  fromLeft: boolean;
  className: string;
  children?: React.ReactNode;
  index?: number
}

export const AnimatedContainer = ({ className, children, fromLeft, inView }: AnimatedContainerProps) => {
	const controls = useAnimationControls();
	// const delay = mobile ? (index ?? 0 * 0.3) : 0;
	useEffect(() => {
		if (inView) {
			controls.start({
				x: 0,
				opacity: 1,
				transition: { duration: 0.5, ease: "easeOut" },
			});
		} else {
			controls.start({
				x: fromLeft ? "-400%" : "400%",
				opacity: 0,
				transition: { duration: 0 },
			});
		}
	}, [inView, controls, fromLeft]);

	return (
		<motion.div className={className}
			initial={{ x: fromLeft ? "-400%" : "400%", opacity: 0 }}
      		animate={controls}
			// transition={{ duration: 0.5, ease: [0.3, 0.6, 0.9, 1.2], delay }}
		>
			{children}
		</motion.div>
	)
}