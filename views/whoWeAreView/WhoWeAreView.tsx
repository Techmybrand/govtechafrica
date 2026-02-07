"use client";
import React, { useEffect } from "react";
import { Governance, Mission, Partners } from "@/components/whoWeAre";
import { Hero } from "@/shared";
import Lenis from "lenis";

const WhoWeAreView = () => {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			smoothWheel: true,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);
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
		</React.Fragment>
	);
};

export default WhoWeAreView;
