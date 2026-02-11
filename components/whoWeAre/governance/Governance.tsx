"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/shared";
import { useTransform, motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import styles from "./Governance.module.scss";

const Governance = () => {
	const [isHover, setIsHover] = useState<boolean>(false);
	const onHover = () => setIsHover(true);
	const offHover = () => setIsHover(false);
	const cardRef = useRef<HTMLDivElement | null>(null);
	const textRef = useRef<HTMLDivElement>(null);
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const mobile = isMobile;
	
	useEffect(() => {
		if (!mobile || !isHover) return;
		const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
			if (cardRef.current && !cardRef.current.contains(e.target as Node)) {
				setIsHover(false);
			}
		};
		document.addEventListener("mousedown", handleOutsideClick);
		document.addEventListener("touchstart", handleOutsideClick);

		return () => {
			document.removeEventListener("mousedown", handleOutsideClick);
			document.removeEventListener("touchstart", handleOutsideClick);
		};
	}, [mobile, isHover]);
	
	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 767);
		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	const { scrollYProgress: textYProgress } = useScroll({
		target: textRef,
		offset: ["start 90%", "end end"],
	});
	const fullText = `It's all about Inclusive Governance`;
	const smText = `We believe we can build a future where governance is inclusive, accountable, and 
	responsive. We also believe in the transformative power of African ingenuity and innovation.`;
	const textLength = useTransform(textYProgress, [0, 1], [0, fullText.length]);
	const smTextLength = useTransform(textYProgress, [0, 1], [0, smText.length]);
	const displayedText = useTransform(textLength, (latest) => fullText.slice(0, Math.floor(latest)));
	const displayedSmText = useTransform(smTextLength, (latest) => smText.slice(0, Math.floor(latest)));

	const [displayedMain, setDisplayedMain] = useState<string>("");
	const [displayedSmall, setDisplayedSmall] = useState<string>("");

	useMotionValueEvent(textYProgress, "change", (progress) => {
		const p = Math.max(0, Math.min(1, progress));
		const mainProgress = p / 0.2;
		const mainChars = Math.round(mainProgress * fullText.length);
		setDisplayedMain(fullText.slice(0, Math.min(mainChars, fullText.length)));
		if (p > 0.2) {
			const smallProgress = (p - 0.2) / 0.4;
			const smallChars = Math.round(smallProgress * smText.length);
			setDisplayedSmall(smText.slice(0, Math.min(smallChars, smText.length)));
		} else {
			setDisplayedSmall("");
		}
	});
	console.log(displayedText, displayedSmText);
	
	return (
		<div ref={textRef} className={styles.section} id="team">
			<div className={styles.text_container}>
				<div className={styles.text}>
					<motion.h2>{displayedMain}</motion.h2>
					<motion.h3>
						{/* <motion.span>{displayedSmText}</motion.span> */}
						<motion.span>{displayedSmall}</motion.span>
						{(displayedSmall.length < smText.length) && (
							<motion.span
								animate={{ opacity: [0, 1, 0] }}
								transition={{ duration: 0.8, repeat: Infinity }}
							>
								|
							</motion.span>
						)}
					</motion.h3>
				</div>
			</div>
			<div className={styles.divider}></div>
			<div className={styles.section_container}>
				{mobile ? (
					<div className={styles.card}>
						<div className={styles.card_content}>
							<div className={styles.card_text}>
								<h3>
									Meet The <span>Team</span>
								</h3>
								<p>
									We are an organisation powered by people. Meet the dynamic
									team of experienced professionals driving Govtech Africa’s
									mission to build thriving and resilient societies through
									technology
								</p>
							</div>
							<div className={styles.card_image}>
								<Image alt="" fill src="/svgs/teams.svg" />
							</div>
						</div>
						<Button href="/teams" className={styles.button}>
							Visit
						</Button>
					</div>
				) : (	
					<div data-active={isHover} onMouseEnter={onHover} onMouseLeave={offHover}
						className={styles.card}
					>
						<div className={styles.card_content}>
							<div className={styles.card_text}>
								<h3>
									Meet The <span>Team</span>
								</h3>
								<p>
									We are an organisation powered by people. Meet the dynamic
									team of experienced professionals driving Govtech Africa’s
									mission to build thriving and resilient societies through
									technology
								</p>
							</div>
							<div className={styles.card_image}>
								<Image alt="" fill src="/svgs/teams.svg" />
							</div>
						</div>
						<Button href="/teams" className={styles.button}>
							Visit
						</Button>
					</div>
				)}
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Governance;
