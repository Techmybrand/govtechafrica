"use client";
import styles from "./Experience.module.scss";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lottie from "lottie-react";

const cards = [
	{
		title: "Global Wallet",
		description: "You have access to global wallets for smooth money movement",
		image: "/images/app-1.png",
		lottieUrl: "/animations/Globe.json",
	},
	{
		title: "e-SIMs",
		description: "Stay connected wherever you go with affordable international data.",
		image: "/images/app-2.png",
		lottieUrl: "/animations/Mobile-ui.json",
	},
	{
		title: "Travel Card",
		description: "Get the assurance to use this wherever Visa is accepted",
		image: "/images/app-3.png",
		lottieUrl: "/animations/Credit-Card.json",
	},
	{
		title: "Hotels & Flights",
		description: "Plan, book, and manage your trips without stress.",
		image: "/images/app-4.png",
		lottieUrl: "/animations/Send-Message.json",
	},
];

const CLOSING_ANIMATION_DURATION = 2500;
const OPENING_ANIMATION_DURATION = 3900;
const CARD_DISPLAY_DURATION = 5000;

const Experience = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
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
		if (isMobile) {
			setTimeout(() => {
				setActiveCard(null);
				setCanAnimateOpen(new Set(cards.map((_, i) => i)));
				setIsAutoPlaying(false);
			}, 0);
		} else {
			setTimeout(() => {
				setActiveCard(0);
				setCanAnimateOpen(new Set([0]));
				setIsAutoPlaying(true);
			}, 0);
		}
	}, [isMobile]);

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
		if (isMobile) return;

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
		if (isMobile) return;

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
	}, [isAutoPlaying, activeCard, isMobile]);

	useEffect(() => {
		if (!isAutoPlaying) {
			const t = setTimeout(() => setIsAutoPlaying(true), 10000);
			return () => clearTimeout(t);
		}
	}, [isAutoPlaying]);

	return (
		<section id="global" className={styles.experience}>
			<div className={styles.container}>
				<div className={styles.title_container}>
					<div className={styles.title}>
						<h1>One app for your better travel and payment experience</h1>
					</div>
				</div>
				<div className={styles.cards_container}>
					{cards.map((card, index) => (
						<div
							key={index}
							className={styles.card}
							onClick={() => handleCardToggle(index)}
							data-active={isMobile ? true : activeCard === index}
							data-can-animate={
								isMobile ? false : canAnimateOpen.has(index)
							}
							data-closing={isMobile ? false : closingCard === index}
							data-mobile={isMobile}
						>
							{/* Image always fills the card — blue overlay sits on top and reveals it */}
							<div className={styles.image_container}>
								<Image
									src={card.image}
									alt={card.title}
									fill
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
							<div className={styles.title}>
								<h3>{card.title}</h3>
							</div>
							<div className={styles.description}>
								<p>{card.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience;
