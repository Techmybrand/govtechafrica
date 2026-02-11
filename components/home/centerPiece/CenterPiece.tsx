"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import styles from "./CenterPiece.module.scss";

const CenterPiece = () => {
	const ref = useRef<HTMLDivElement>(null);
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const mobile = isMobile;
	const [speed] = useState<number>(0.5);
	const videoRef = useRef<HTMLVideoElement | null>(null)
	useEffect(() => {
		if (videoRef.current) {
			videoRef.current.playbackRate = speed
		}
	}, [speed]);
	
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
		offset: ["start 90%", "end center"]
	});
  	const videoWidth = useTransform(scrollYProgress, [0, 0.3], ["100%", "70%"]);
  	const videoHeight = useTransform(scrollYProgress, [0, 0.3], ["35rem", "25rem"]);

  	// const textX = useTransform(scrollYProgress, [0, 0.5, 1], [mobile ? 0 : "100%", mobile ? 0 : "30%", 0]);
  	// const textY = useTransform(scrollYProgress, [0, 0.5, 1], [mobile ? "100%" : 0, mobile ? "40%" : 0, 0]);
  	// const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7], [0, 0.2, 1]);
  	const textX = useTransform(scrollYProgress, [0, 0.3], [mobile ? 0 : "100%", 0]);
  	const textY = useTransform(scrollYProgress, [0, 0.3], [mobile ? "100%" : 0, 0]);
  	const textOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
	

	return (
		<div ref={ref} className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.image_and_text}>
					<motion.div className={styles.image}
						style={{
							width: isMobile ? "100%" : videoWidth,
							height: videoHeight,
						}}
					>
						<video ref={videoRef} src='/videos/centerpiece.mp4' loop autoPlay 
							muted playsInline preload="auto"
						/>
					</motion.div>
					<div className={styles.image_mob}>
						<video ref={videoRef} src='/videos/centerpiece.mp4' loop autoPlay 
							muted playsInline preload="auto"
						/>
					</div>
					<motion.div className={styles.text}
						style={{
							x: mobile ? 0 : textX,
							y: textY,
							opacity: textOpacity,
						}}
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
