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
            <IntroToFulcrum type="what_we_do" />
            <RelatedInsights type="new" />
            <ExploreServices />
        </React.Fragment>
    )
}

export default NewWhatWeDo