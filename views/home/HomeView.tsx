import React from "react";
import { Hero } from "@/shared";
import { Growth, Drivers, CenterPiece, Mission, Research } from "@/components/home";
// import { Growth, Drivers, CenterPiece, Insights, Mission, Research } from "@/components/home";
// import { Partners } from "@/components/whoWeAre";
import styles from "./HomeView.module.scss";

const HomeView = () => {
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
		</React.Fragment>
	);
};

export default HomeView;
