"use client";
import React from "react";
import { Hero } from "@/shared";
import { Research } from "@/components/home";
import { Governance, Mission, Partners } from "@/components/whoWeAre";

const WhoWeAreView = () => {
	return (
		<React.Fragment>
			<Hero
				backgroundType="image"
				backgroundImage="/images/who_we_are.jpg"
				title="We are Drivers of Change"
				button="Explore our solutions"
				description={`At Govtech Africa, we are driven by the need to close the technology gap 
					for governments across the African continent.`}
				href="/what-we-do"
				dataType="are"
			/>
			<Mission />
			<Governance />
			<Partners />
			<Research />
		</React.Fragment>
	);
};

export default WhoWeAreView;
