import { Hero } from "@/shared";
import React from "react";
import styles from "./HomeView.module.scss";
import { Growth, Drivers, CenterPiece, Choose, Insights } from "@/components/home";

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
			<Drivers />
			<CenterPiece />
			<Insights />
			<Choose />
		</>
	);
};

export default HomeView;
