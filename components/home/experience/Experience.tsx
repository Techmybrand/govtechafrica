"use client";
import styles from "./Experience.module.scss";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import { Button } from "@/shared";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";

const cards = [
	{
		title: "Innovation",
		description: "We champion",
		subtext: 'for impact',
		image: "/images/driver_1.jpg",
		lottieUrl: "/animations/Globe.json",
	},
	{
		title: "Partnerships",
		description: "We leverage",
		subtext: 'for progress',
		image: "/images/driver_2.jpg",
		lottieUrl: "/animations/Mobile-ui.json",
	},
	{
		title: "Local Solutions",
		description: "We profer",
		subtext: 'to local problems',
		image: "/images/driver_3.jpg",
		lottieUrl: "/animations/Credit-Card.json",
	},
	{
		title: "Resilient and Secure Systems",
		description: "We build",
		subtext: 'that enable government excellence',
		image: "/images/driver_4.jpg",
		lottieUrl: "/animations/Send-Message.json",
	},
];

const CLOSING_ANIMATION_DURATION = 2500;
const OPENING_ANIMATION_DURATION = 3900;
const CARD_DISPLAY_DURATION = 5000;

const Experience = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [isSmMobile, setIsSmMobile] = useState<boolean>(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
			setIsSmMobile(window.innerWidth <= 650);
		};
		checkMobile();
		window.addEventListener("resize", checkMobile);
		return () => window.removeEventListener("resize", checkMobile);
	}, []);

	const [animData, setAnimData] = useState<(object | null)[]>([null, null, null, null]);
	const [activeCard, setActiveCard] = useState<string | number | null>(0);
	const [canAnimateOpen, setCanAnimateOpen] = useState<Set<number>>(new Set([0]));
	const [closingCard, setClosingCard] = useState<number | null>(null);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);
	const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		Promise.all(cards.map(card => fetch(card.lottieUrl).then(r => r.json()))).then(
			data => setAnimData(data),
		);
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setActiveCard(0);
			setCanAnimateOpen(new Set([0]));
			setIsAutoPlaying(true);
		}, 0);
	}, []);

	const openCard = (id: number) => {
		if (activeCard !== null && activeCard !== id) {
			setClosingCard(activeCard as number);
			setCanAnimateOpen(new Set());
			setActiveCard(null);

			setTimeout(() => {
				setClosingCard(null);
				setActiveCard(id);
				setCanAnimateOpen(new Set([id]));
			}, CLOSING_ANIMATION_DURATION);
		} else {
			setActiveCard(id);
			setCanAnimateOpen(new Set([id]));
		}
	};

	const handleCardToggle = (id: string | number) => {
		setIsAutoPlaying(false);
		clearAutoPlayTimers();

		if (activeCard === id) {
			setClosingCard(id as number);
			setActiveCard(null);
			setCanAnimateOpen(new Set());
			setTimeout(() => setClosingCard(null), CLOSING_ANIMATION_DURATION);
			return;
		}

		openCard(id as number);
	};

	const clearAutoPlayTimers = () => {
		if (autoPlayTimeoutRef.current) {
			clearTimeout(autoPlayTimeoutRef.current);
			autoPlayTimeoutRef.current = null;
		}
	};

	useEffect(() => {
		if (isAutoPlaying && activeCard !== null) {
			clearAutoPlayTimers();

			const scheduleNextCard = () => {
				autoPlayTimeoutRef.current = setTimeout(() => {
					if (activeCard !== null) {
						const next = ((activeCard as number) + 1) % cards.length;

						setClosingCard(activeCard as number);
						setCanAnimateOpen(new Set());
						setActiveCard(null);

						setTimeout(() => {
							setClosingCard(null);
							setActiveCard(next);
							setCanAnimateOpen(new Set([next]));
							scheduleNextCard();
						}, CLOSING_ANIMATION_DURATION);
					}
				}, OPENING_ANIMATION_DURATION + CARD_DISPLAY_DURATION);
			};

			scheduleNextCard();
		}

		return () => clearAutoPlayTimers();
	}, [isAutoPlaying, activeCard]);

	useEffect(() => {
		if (!isAutoPlaying) {
			const t = setTimeout(() => setIsAutoPlaying(true), 10000);
			return () => clearTimeout(t);
		}
	}, [isAutoPlaying]);

	const experienceContainer = useRef<any>(null);
	const { scrollYProgress } = useScroll({
		target: experienceContainer,
		// offset: ["start start", "end end"],
		offset: ["start end", "end center"]
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

	return (
		<section ref={experienceContainer} id="global" className={styles.experience}>
			<motion.div style={{ y, opacity }} className={styles.container}>
				<div className={styles.title_container}>
					<div className={styles.title}>
						<h2>We are Drivers of Change</h2>
						<h3>
							At Govtech Africa,{" "}
							<span>
								we are driven by the need to close the technology gap for
								governments across the African continent.
							</span>
						</h3>
					</div>
					<Button className={styles.button}>
						Learn more
					</Button>
				</div>
				<div className={styles.cards_container}>
					{cards.map((card, index) => (
						<div key={index} className={styles.card}
							onClick={() => handleCardToggle(index)}
							data-mobile={isMobile}
							data-small={isSmMobile}
							data-index={index}
							data-active={activeCard === index}
							data-can-animate={canAnimateOpen.has(index)}
							data-closing={closingCard === index}
						// data-active={isMobile ? true : activeCard === index}
						// data-can-animate={
						// 	isMobile ? false : canAnimateOpen.has(index)
						// }
						// data-closing={isMobile ? false : closingCard === index}
						>
							<div className={styles.image_container}>
								<Image src={card.image} alt={card.title} fill
									sizes="100vw"
								/>
							</div>
							<div className={styles.blue_overlay} />
							<div className={styles.lottie_badge}>
								{animData[index] && (
									<Lottie
										animationData={animData[index]}
										loop
										autoplay
										className={styles.lottie}
									/>
								)}
							</div>
							<div className={styles.plus_icon}>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<line x1="12" y1="5" x2="12" y2="19"></line>
									<line x1="5" y1="12" x2="19" y2="12"></line>
								</svg>
							</div>
							<div className={styles.description}>
								<p>{card.description}</p>
							</div>
							<div className={styles.title}>
								<h3>{card.title}</h3>
							</div>
							<div className={styles.subtext}>
								<p>{card.subtext}</p>
							</div>
						</div>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default Experience;
