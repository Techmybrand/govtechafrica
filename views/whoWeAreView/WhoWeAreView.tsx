import React from "react";
// import { Insights } from "@/components/home";
import { Governance, Mission, Partners } from "@/components/whoWeAre";
import { Hero } from "@/shared";

const WhoWeAreView = () => {
	return (
		<React.Fragment>
			<Hero
				backgroundType="image"
				backgroundImage="/images/who-we-are.png"
				title="We are Drivers of Change"
				button="Explore our solutions"
				description="At Govtech Africa, we are driven by the need to close the technology gap for governments across the African continent. "
				href="#"
				subDescription="homegrown leading technology giants delivering tier  one technology systems development and deployment to governments across the African continent."
				subTitle="We are a coalition of"
				dataType="are"
			/>
			<Mission />
			<Governance />
			<Partners />
			{/* <Insights /> */}
		</React.Fragment>
	);
};

export default WhoWeAreView;
