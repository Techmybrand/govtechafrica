import React from "react";
import { RelatedInsights } from "@/components";
import { IntroToFulcrum } from "@/components/home";
import { Revolutionizing, Approach, ExploreServices, WhatWeDoHero } from "@/components/whatWeDo";

const WhatWeDoView = () => {
	return (
		<React.Fragment>
            <WhatWeDoHero />
            <Revolutionizing />
            <Approach />
            <IntroToFulcrum type="what_we_do" />
            <ExploreServices />
            <RelatedInsights type="new" />
        </React.Fragment>
	);
};

export default WhatWeDoView;
