'use client';
import { useEffect, useRef, useState } from "react";
import { Button } from "@/shared";
import Image from "next/image";
import styles from "./Partners.module.scss";

const Partners = () => {
	// const items = [
	// 	'/images/logo-1.png',
	// 	'/images/logo-2.png',
	// 	'/images/logo-3.png',
	// 	'/images/logo-4.png',
	// 	'/images/logo-1.png',
	// 	'/images/logo-2.png',
	// 	'/images/logo-3.png',
	// 	'/images/logo-4.png',
  	// ]
	const items = [ '/images/logo-1.png', '/images/logo-2.png', '/images/logo-3.png', '/images/logo-4.png' ]
	const [isHover, setIsHover] = useState<boolean>(false);
	const onMouseHover = () => setIsHover(true);
	const onMouseExit = () => setIsHover(false);
	const cardBodyRef = useRef<HTMLDivElement | null>(null);
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const mobile = isMobile;
		
	useEffect(() => {
		if (!mobile || !isHover) return;
		const handleOutsideClick = (e: MouseEvent | TouchEvent) => {
			if (cardBodyRef.current && !cardBodyRef.current.contains(e.target as Node)) {
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
		const handleResize = () => setIsMobile(window.innerWidth <= 650);
		handleResize();
		window.addEventListener("resize", handleResize);

		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<div className={styles.section} id="partners">
			<div className={styles.section_container}>
				{mobile ? (
					<div className={styles.body}>
						<div className={styles.details}>
							<div className={styles.text}>
								<h3>
									Our <span>Partners</span>
								</h3>
								<p>
									We are an organisation powered by people. Meet the dynamic
									team of experienced professionals driving Govtech Africa’s
									mission to build thriving and resilient societies through
									technology
								</p>
							</div>
							<Button className={styles.button}>
								Explore Partners
							</Button>
							<div className={styles.partners_logos}>
								{items.map((item: string, index: number) =>
									<div key={index} className={styles.partner_logo_card}>
										<div data-index={index} className={styles.partner_logo}>
											<Image alt='logo' fill src={item} sizes='100%' />
										</div>
									</div>
								)}
							</div>
						</div>
						<div className={styles.btn_and_logos}>
							<div className={styles.btn_and_subtext}>
							</div>
							<div className={styles.logos}>
								<div className={styles.full_logo}>

								</div>
							</div>
						</div>
						<div className={styles.image_and_logo}>
							<div className={styles.top_image}>
								<Image alt='image' fill src='/svgs/partners.svg' />
							</div>
							<div className={styles.partners_logo}>
								{items.map((item: string, index: number) =>
									<div key={index} className={styles.logo_card}>
										<div data-index={index} className={styles.logo}>
											<Image alt='logo' fill src={item} sizes='100%' />
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				) : (
					<div data-active={isHover} onMouseEnter={onMouseHover} onMouseLeave={onMouseExit}
						className={styles.body}
					>
						<div className={styles.details}>
							<div className={styles.text}>
								<h3>
									Our <span>Partners</span>
								</h3>
							</div>
						</div>
						<div className={styles.btn_and_logos}>
							<div className={styles.btn_and_subtext}>
								<p>
									We are an organisation powered by people. Meet the dynamic
									team of experienced professionals driving Govtech Africa’s
									mission to build thriving and resilient societies through
									technology
								</p>
								<Button className={styles.button}>
									Explore Partners
								</Button>
							</div>
							<div className={styles.logos}>
								<div className={styles.partners_logo}>
									{items.map((item: string, index: number) =>
										<div key={index} className={styles.partner_logo_card}>
											<div data-index={index} className={styles.partner_logo}>
												<Image alt='logo' fill src={item} sizes='100%' />
											</div>
										</div>
									)}
								</div>
								<div className={styles.full_logo}>
									<div className={styles.logo_container}>
										<div className={styles.logo}>
											<Image alt="" fill src="/svgs/g_logo.svg" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={styles.image_and_logo}>
							<div className={styles.top_image}>
								<Image alt='image' fill src='/svgs/partners.svg' />
							</div>
							<div className={styles.partners_logo}>
								{items.map((item: string, index: number) =>
									<div key={index} className={styles.partner_logo_card}>
										<div data-index={index} className={styles.partner_logo}>
											<Image alt='logo' fill src={item} sizes='100%' />
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				)}
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Partners;
