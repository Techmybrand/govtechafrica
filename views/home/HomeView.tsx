"use client";
import React, { useEffect, useState } from "react";
import { Hero } from "@/shared";
import { Growth, Drivers, CenterPiece, Mission, Research } from "@/components/home";
import { CookiesModal } from "@/shared/Modals";
import styles from "./HomeView.module.scss";

const HomeView = () => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [consent, setConsent] = useState<string | null>(null);
	console.log('consent: ', consent);

	useEffect(() => {
		const storedConsent = localStorage.getItem('cookieConsent');
		setConsent(storedConsent);
		if (!storedConsent) {
			setShowModal(true);
		}
	}, []);
	return (
		<React.Fragment>
			<Hero
				backgroundVideo="/videos/Hero.mp4"
				backgroundType="video"
				className={styles.hero}
				title="African technology for Government Excellence"
				description="We enable African governments to better serve citizens by leveraging the enormous potential of technology and the digital economy. "
				button="Explore our solutions"
				href="/what-we-do"
				backgroundImage=""
			/>
			<Research />
			<Growth />
			<Mission />
			<Drivers />
			<CenterPiece />
			{/* <Insights /> */}
			<div className={styles.divider}></div>
			<CookiesModal isOpen={showModal} onClose={() => setShowModal(false)} />
		</React.Fragment>
	);
};

export default HomeView;
