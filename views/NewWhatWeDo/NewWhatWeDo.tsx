import React from "react";
import { RelatedInsights } from "@/components";
import { IntroToFulcrum } from "@/components/home";
import { Revolutionizing, Approach, ExploreServices, WhatWeDoHero } from "@/components/whatWeDo";

const NewWhatWeDo = () => {
    return (
        <React.Fragment>
            <WhatWeDoHero />
            <Revolutionizing />
            <Approach />
            <IntroToFulcrum />
            <RelatedInsights type="new" />
            <ExploreServices />
        </React.Fragment>
    )
}

export default NewWhatWeDo