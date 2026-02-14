"use client";
import React, { useEffect, useState } from "react";
import { Hero } from "@/shared";
import { Growth, Drivers, CenterPiece, Mission, Research } from "@/components/home";
import { CookiesModal } from "@/shared/Modals";
import styles from "./HomeView.module.scss";

const HomeView = () => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [, setConsent] = useState<string | null>(null);
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
				description={`At Govtech Africa, we empower African governments to better serve their 
					constituents by harnessing the power of technology for societal advancement, and 
					driving positive change through transparent, efficient, and inclusive governance 
					practices.
				`}
				button="Explore our solutions"
				href="/what-we-do"
				backgroundImage=""
			/>
			<Research />
			<Growth />
			<Mission />
			<Drivers />
			<CenterPiece />
			<div className={styles.divider}></div>
			<CookiesModal isOpen={showModal} onClose={() => setShowModal(false)} />
		</React.Fragment>
	);
};

export default HomeView;
