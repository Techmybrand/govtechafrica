import React from "react";
import { Hero } from "@/shared";
import { Growth, Drivers, CenterPiece, Insights, Mission } from "@/components/home";
import { Partners } from "@/components/whoWeAre";
import styles from "./HomeView.module.scss";

const HomeView = () => {
	return (
		<>
			<Hero
				backgroundImage="/images/home-hero.png"
				className={styles.hero}
				title="African technology for Government Excellence"
				description="We enable African governments to better serve citizens by leveraging the enormous potential of technology and the digital economy. "
				button="Explore our solutions"
				href="/"
			/>
			<Growth />
			<Mission />
			<Drivers />
			<CenterPiece />
			<Insights />
			{/* <Choose /> */}
			<Partners />
			<div className={styles.divider}></div>
		</>
	);
};

export default HomeView;
