'use client';
import { useEffect, useRef, useState } from "react";
import { Button } from "@/shared";
import styles from "./Governance.module.scss";
import Image from "next/image";

const Governance = () => {
	const [isHover, setIsHover] = useState<boolean>(false);
	const onHover = () => {
		setIsHover(true);
	};
	const offHover = () => {
		setIsHover(false);
	};
	const cardRef = useRef<HTMLDivElement | null>(null);
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

	return (
		<div className={styles.section} id="team">
			<div className={styles.text_container}>
				<div className={styles.text}>
					<h2>{`It's all about inclusive governance`}</h2>
					<h3>
						We believe we can build a future where{" "}
						<span>governance is inclusive, accountable, and responsive.</span>{" "}
						We also believe in the transformative power of{" "}
						<span>African ingenuity and innovation.</span>
					</h3>
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
