"use client";
import { useRef, useState, useEffect } from "react";
import { useInView, motion, useTransform, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import styles from "./CenterPiece.module.scss";

const CenterPiece = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isInView = useInView(ref, { amount: 0.3, once: false });
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

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});

	const rangeStart = 0.05;
	const rangeEnd   = 0.3;
	const rawImageWidth = useTransform(scrollYProgress,
		[rangeStart, rangeEnd],
		["100%", mobile ? "100%" : "55%"]
	);
	const imageWidth = useSpring(rawImageWidth, {
		stiffness: 80,
		damping: 18,
		mass: 0.4,
	});
	const rawTextX = useTransform(scrollYProgress, [rangeStart, rangeEnd], [160, 0]);
  	const rawTextOpacity = useTransform(scrollYProgress, [rangeStart, rangeEnd], [0, 1]);

	const textX = useSpring(rawTextX, {
		stiffness: 90,
		damping: 22,
		mass: 0.5,
	});
	const textOpacity = useSpring(rawTextOpacity, {
		stiffness: 100,
		damping: 20,
		mass: 0.4,
	});

	const rawTextYMobile = useTransform(scrollYProgress, [rangeStart, rangeEnd], [60, 0]);
	const textYMobile = useSpring(rawTextYMobile, {
		stiffness: 90,
		damping: 22,
	});

	return (
		<div className={styles.section}>
			<div ref={ref} className={styles.section_container}>
				<div data-image={isInView} className={styles.image_and_text}>
					<motion.div
						// variants={imageVariants} initial="initial"
						// animate={isInView ? "animate" : "initial"}
						// transition={{ duration: 0.6, ease: "easeOut" }}
						style={{ width: imageWidth }}
						className={styles.image}
					>
						<Image src="/svgs/centerpiece.svg" sizes="100%" priority fill alt="" />
					</motion.div>
					<div className={styles.image_mob}>
						<Image src="/svgs/centerpiece_mob.svg" sizes="100%" fill alt="" />
					</div>
					<motion.div className={styles.text}
						style={{
							x: mobile ? 0 : textX,
							y: mobile ? textYMobile : 0,
							opacity: textOpacity,
						}}
						// initial="initial" 
						// animate={isInView ? "animate" : "initial"}
						// variants={mobile ? mobileTextVariants : textVariants}
						// transition={{
						// 	duration: 0.8,
						// 	ease: "easeOut",
						// 	delay: amount
            			// }}
					>
						<h3 className={styles.h3}>
							<span>All over the world, </span> technology{" "}
							<span>remains at the centrepiece of rapidly </span> paced development. 
						</h3>
						<h3>
							<br />
							Through
							<span>
								{" "}
								collaboration, capacity building, and scalable solutions,
							</span>{" "}
							we are committed to{" "}
							<span>
								reimagining what governance can achieve in today&apos;s
								digital era.
							</span>
						</h3>
					</motion.div>
				</div>
				<div className={styles.text_}>
					<h3>
						<span>All over the world,</span> technology{" "}
						<span>remains at the centrepiece of rapidly</span> paced
						development.
					</h3>
				</div>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default CenterPiece;
