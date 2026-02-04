// import { Insights } from "@/components/home";
import { Consulting, Technology } from "@/components/whatWeDo";
import { Hero } from "@/shared";
import React from "react";

const WhatWeDoView = () => {
	return (
		<React.Fragment>
			<Hero
				backgroundType="image"
				backgroundImage="/images/what-we-do-background.png"
				title="Revolutionizing Governance Through Technology"
				description="For some, the word impossible ends discussions. For us, it starts the conversation."
				dataType="do"
			/>
			<Technology />
			<Consulting />
			{/* <Insights /> */}
		</React.Fragment>
	);
};

export default WhatWeDoView;
