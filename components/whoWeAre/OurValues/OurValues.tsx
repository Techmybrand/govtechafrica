"use client";
import styles from "./OurValues.module.scss";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const cards = [
	{
		title: `Innovation`,
		description: `We embrace innovation and creativity as 
			catalysts for positive change and  continuous improvement.`,
		image: "/images/innovate.png",
	},
	{
		title: `Integrity`,
		description: `We uphold the highest standards of integrity, 
			transparency, and ethical  conduct in all our interactions.`,
		image: "/images/integrity.png",
	},
	{
		title: `Collaboration`,
		description: `We believe in the power of collaboration and 
			partnerships to achieve shared  goals and drive collective impact.`,
		image: "/images/collab.png",
	},
	{
		title: `Empowerment`,
		description: `We are committed to empowering governments 
			and citizens with the tools  and knowledge they need to thrive in today’s digital age.`,
		image: "/images/empowerment.png"
	},
	{
		title: `Impact`,
		description: `We measure our success by the impact we 
			create, both in terms of tangible  outcomes and positive societal change.`,
		image: "/images/impact.jpeg",
	}
];

const CLOSING_ANIMATION_DURATION = 2500;
const OPENING_ANIMATION_DURATION = 3900;
const CARD_DISPLAY_DURATION = 5000;

const OurValues = () => {
	const [activeCard, setActiveCard] = useState<number | null>(0);
	const [cardItems, setCardItems] = useState<number>(0);
	const [canAnimateOpen, setCanAnimateOpen] = useState<Set<number>>(new Set([0]));
	const [closingCard, setClosingCard] = useState<number | null>(null);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);
	const autoPlayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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

	const handleCardToggle = (id: number) => {
		setIsAutoPlaying(false);
		clearAutoPlayTimers();

		if (activeCard === id) {
			setClosingCard(id);
			setActiveCard(null);
			setCanAnimateOpen(new Set());
			setTimeout(() => setClosingCard(null), CLOSING_ANIMATION_DURATION);
			return;
		}

		openCard(id);
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

	return (
		<div className={styles.our_values}>
			<div className={styles.container}>
				<h2>Our Values</h2>
				<div className={styles.cards_container}>
					{cards.map((card, index) => (
						<div
							key={index}
							className={styles.card}
							onClick={() => handleCardToggle(index)}
							data-index={index}
							data-active={activeCard === index}
							data-can-animate={canAnimateOpen.has(index)}
							data-closing={closingCard === index}
						>
							<div className={styles.title}>
								<h3>{card.title}</h3>
							</div>
							<div className={styles.plus_icon}>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
									<line x1="12" y1="5" x2="12" y2="19"></line>
									<line x1="5" y1="12" x2="19" y2="12"></line>
								</svg>
							</div>
							<div className={styles.green_overlay} />
							<div className={styles.description}>
								<p>{card.description}</p>
							</div>
							<div className={styles.image_container}>
								<Image
									src={card.image}
									alt={card.title}
									fill
									sizes="(max-width: 768px) 100vw, 50vw"
								/>
							</div>
						</div>
					))}
				</div>
				<div className={styles.cards_container_sm}>
					<div className={styles.mobile_card}>
						<div className={styles.mobile_image_container}>
							<Image
								src={cards[cardItems as number]?.image}
								alt={cards[cardItems as number]?.title}
								fill
								sizes="100vw"
								priority
							/>
							{/* <div className={styles.mobile_gradient}></div> */}
						</div>

						<div className={styles.mobile_content}>
							<div className={styles.mobile_tabs}>
								{cards.map((card, index) => (
									<div
										key={index}
										className={`${styles.mobile_tab} ${cardItems === index ? styles.active : ''}`}
										onClick={() => setCardItems(index)}
										data-active={cardItems === index}

									>
										<span>{card.title}</span>
										<div className={styles.progress_bar}>
											<div
												className={styles.progress_fill}
											// style={{
											// 	animationDuration: activeCard === index ? `${OPENING_ANIMATION_DURATION + CARD_DISPLAY_DURATION}ms` : '0ms',
											// 	animationPlayState: isAutoPlaying ? 'running' : 'paused'
											// }}
											></div>
										</div>
									</div>
								))}
							</div>
							<h3 className={styles.mobile_title}>
								{cards[cardItems as number]?.title}
							</h3>
							<p className={styles.mobile_description}>
								{cards[cardItems as number]?.description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurValues;