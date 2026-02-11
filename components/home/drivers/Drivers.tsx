'use client';
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/shared";
import { motion, useInView, MotionValue, useTransform, useSpring, useScroll } from "framer-motion";
import Image from "next/image";
import styles from "./Drivers.module.scss";
interface cardDataProps {
	children: React.ReactNode;
	title: string;
	bigText: string;
	className?: string;
	subtext: string;
}

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

	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end end"]
	});

	const rawY = useTransform(scrollYProgress, [0, 0.2], [300, 0]);
	const y = useSpring(rawY, {
		stiffness: 100,
		damping: 20,
		mass: 0.5
	});
	const rawOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
	const opacity = useSpring(rawOpacity, {
		stiffness: 100,
		damping: 20,
		mass: 0.5
	});

	const cardData: cardDataProps[] = [
		{
			className: `${styles.card_1}`,
			title: 'We champion',
			bigText: 'Innovation',
			subtext: 'for impact',
			children: <React.Fragment>
					<AnimatedContainer scrollYProgress={scrollYProgress} mobile={mobile} index={0}
						className={styles.container_1}
						inView={sectionInView}
						fromLeft={true}
					/>
				</React.Fragment>
		},
		{
			className: `${styles.card_2}`,
			title: 'We leverage',
			bigText: 'Partnerships',
			subtext: 'for progress',
			children: <React.Fragment>
				<AnimatedContainer scrollYProgress={scrollYProgress} mobile={mobile} index={1}
					className={styles.container_1}
					inView={sectionInView}
					fromLeft={true}
				/>
				<AnimatedContainer scrollYProgress={scrollYProgress} mobile={mobile} index={1}
					className={styles.container_2}
					inView={sectionInView}
					fromLeft={false}
				/>
			</React.Fragment>
		},
		{
			className: `${styles.card_3}`,
			title: 'We profer',
			bigText: 'Local Solutions',
			subtext: 'to local problems',
			children: <React.Fragment>
				<AnimatedContainer scrollYProgress={scrollYProgress} mobile={mobile} index={2}
					className={styles.container_1}
					inView={sectionInView}
					fromLeft={true}
				/>
				<AnimatedContainer scrollYProgress={scrollYProgress} mobile={mobile} index={2}
					className={styles.container_2}
					inView={sectionInView}
					fromLeft={false}
				/>
			</React.Fragment>
		},
		{
			className: `${styles.card_4}`,
			title: 'We build',
			bigText: 'Resilient and Secure Systems',
			subtext: 'that enable government excellence',
			children: <React.Fragment>
				<AnimatedContainer scrollYProgress={scrollYProgress} mobile={mobile} index={3}
					className={styles.container_1}
					inView={sectionInView}
					fromLeft={true}
				>
					<Image alt="" fill src='/svgs/polygon_1.svg' />
				</AnimatedContainer>
				<AnimatedContainer scrollYProgress={scrollYProgress} mobile={mobile} index={3}
					className={styles.container_2}
					inView={sectionInView}
					fromLeft={false}
				>
					<Image alt="" fill src='/svgs/polygon_2.svg' />
				</AnimatedContainer>
			</React.Fragment>
		},
	]

	return (
		<div ref={sectionRef} className={styles.section}>
			<div className={styles.section_container}>
				<motion.div className={styles.text} style={{ y, opacity }}>
					<h2>We are Drivers of Change</h2>
					<h3>
						At Govtech Africa,{" "}
						<span>
							we are driven by the need to close the technology gap for
							governments across the African continent.
						</span>
					</h3>
				</motion.div>
				<div className={styles.grid}>
					{cardData.map((card, index) =>
						<DriversCard key={index} index={index} mobile={mobile}
							card={card} scrollYProgress={scrollYProgress}
						/>
					)}
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
  index: number;
  scrollYProgress: MotionValue<number>;
}

export const AnimatedContainer = ({ className, children, fromLeft, index, mobile, scrollYProgress }: AnimatedContainerProps) => {
	const start = mobile ? index * 0.1 : index * 0.2;
  	const end = start + (mobile ? 0.2 : 0.3);
	// const xRange = fromLeft ? [-400, -60, 0] : [400, 60, 0];
	const xRange = fromLeft ? [-400, -60, 0] : [400, 60, 0];
  	const progressRange = [start - 0.1, start + 0.1, end];
	const x = useTransform(scrollYProgress, progressRange, xRange);
  	const opacity = useTransform(scrollYProgress, [start, start + 0.15, end], [0, 0.4, 1]);
	return (
		<motion.div className={className} style={{x, opacity}}>
			{children}
		</motion.div>
	)
}
interface CardProps {
	card: cardDataProps;
	index: number;
	mobile: boolean;
	scrollYProgress: MotionValue<number>;
}

export const DriversCard = ({ card, index, scrollYProgress, mobile }: CardProps) => {
	const start = 0 + index * 0.2;
	const end = start + 0.3;
	const mobileStart = 0 + index * 0.1;
	const mobileEnd = start + 0.2;
	const getStart = mobile ? mobileStart : start;
	const getEnd = mobile ? mobileEnd : end;
	const rawY = useTransform(scrollYProgress, [getStart, getEnd], [300, 0]);
	const y = useSpring(rawY, {
		stiffness: 100,
		damping: 20,
		mass: 0.5
	});
	const rawOpacity = useTransform(scrollYProgress, [start, end], [0.3, 1]);
	const opacity = useSpring(rawOpacity, {
		stiffness: 100,
		damping: 20,
		mass: 0.5
	});

	return (
		<motion.div className={`${styles.card} ${card?.className}`}
			key={index}
			style={{ y, opacity }}
		>
			<div className={styles.image}>
				{card?.children}
			</div>
			<div className={styles.card_details}>
				<p>{card?.title}</p>
				<h4>{card?.bigText}</h4>
				<p>{card?.subtext}</p>
			</div>
		</motion.div>
	)
}