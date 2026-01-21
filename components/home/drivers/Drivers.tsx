'use client';
import React, { useEffect, useRef, useState } from "react";
import { Button } from "@/shared";
import styles from "./Drivers.module.scss";
import Image from "next/image";

const Drivers = () => {
	const sectionRef = useRef<HTMLDivElement | null>(null);
	const cardRef1 = useRef<HTMLDivElement | null>(null);
	const cardRef2 = useRef<HTMLDivElement | null>(null);
	const cardRef3 = useRef<HTMLDivElement | null>(null);
	const cardRef4 = useRef<HTMLDivElement | null>(null);
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
	

	useEffect(() => {
		const currentSection = sectionRef.current
		const firstcardRef = cardRef1.current
		const secondcardRef = cardRef2.current
		const thirdcardRef = cardRef3.current
		const fourthcardRef = cardRef4.current
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add(styles.visible);
					observer.unobserve(entry.target);
				}
				});
			},
			{
				threshold: 0.3,
				root: null,
				rootMargin: '0px',
			}
		);
		const cardObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                        cardObserver.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                threshold: 0.04,
                rootMargin: '0px'
            }
        );
		const setupObservers = () => {
			if (mobile) {
				if (currentSection) observer.unobserve(currentSection);
				if (firstcardRef) cardObserver.observe(firstcardRef);
				if (secondcardRef) cardObserver.observe(secondcardRef);
				if (thirdcardRef) cardObserver.observe(thirdcardRef);
				if (fourthcardRef) cardObserver.observe(fourthcardRef);
			} else {
				if (currentSection) observer.observe(currentSection);
				if (firstcardRef) cardObserver.unobserve(firstcardRef);
				if (secondcardRef) cardObserver.unobserve(secondcardRef);
				if (thirdcardRef) cardObserver.unobserve(thirdcardRef);
				if (fourthcardRef) cardObserver.unobserve(fourthcardRef);
			}
		}
		setupObservers();
		window.addEventListener('resize', setupObservers);

		return () => {
			window.removeEventListener('resize', setupObservers);
			if (mobile) {
				if (firstcardRef) cardObserver.unobserve(firstcardRef);
				if (secondcardRef) cardObserver.unobserve(secondcardRef);
				if (thirdcardRef) cardObserver.unobserve(thirdcardRef);
				if (fourthcardRef) cardObserver.unobserve(fourthcardRef);
				cardObserver.disconnect();
			} else {
				if (currentSection) observer.unobserve(currentSection);
				observer.disconnect();
			}
		};
	}, [mobile]);

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
					<div ref={cardRef1} className={`${styles.card} ${styles.card_1}`}>
						<div className={styles.image}>
							{/* <Image src="/svgs/drivers-1.svg" fill alt="" /> */}
							<div className={styles.container_1}></div>
						</div>
						<div className={styles.card_details}>
							<p>We champion</p>
							<h4>Innovation</h4>
							<p>for impact</p>
						</div>
					</div>
					<div ref={cardRef2} className={`${styles.card} ${styles.card_2}`}>
						<div className={styles.image}>
							{/* <Image src="/svgs/drivers-2.svg" fill alt="" /> */}
							<div className={styles.container_1}></div>
							<div className={styles.container_2}></div>
						</div>
						<div className={styles.card_details}>
							<p>We leverage</p>
							<h4>Partnerships</h4>
							<p>for progress</p>
						</div>
					</div>
					<div ref={cardRef3} className={`${styles.card} ${styles.card_3}`}>
						<div className={styles.image}>
							{/* <Image src="/svgs/drivers-3.svg" fill alt="" /> */}
							<div className={styles.container_1}></div>
							<div className={styles.container_2}></div>
						</div>
						<div className={styles.card_details}>
							<p>We profer</p>
							<h4>Local Solutions</h4>
							<p>to local problems</p>
						</div>
					</div>
					<div ref={cardRef4} className={`${styles.card} ${styles.card_4}`}>
						<div className={styles.image}>
							{/* <Image src="/svgs/drivers-4.svg" fill alt="" /> */}
							<div className={styles.container_1}>
								<Image alt="" fill src='/svgs/polygon_1.svg' />
							</div>
							<div className={styles.container_2}>
								<Image alt="" fill src='/svgs/polygon_2.svg' />
							</div>
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
