import React from "react";
import { RelatedInsights } from "@/components";
import { IntroToFulcrum } from "@/components/home";
import { Revolutionizing, Approach, ExploreServices } from "@/components/whatWeDo";
import { Hero } from "@/shared";


const NewWhatWeDo = () => {
    return (
        <React.Fragment>
            <Hero backgroundImage="/images/new_who_we_are.png" backgroundType="image" type="new" dataType="new-are"
				title="We are Drivers of Change"
				description='At Govtech Africa, we are driven by the need to close the technology gap for governments across the
					African continent.'
			/>
            <Revolutionizing />
            <Approach />
            <IntroToFulcrum />
            <RelatedInsights type="new" />
            <ExploreServices />
        </React.Fragment>
    )
}

export default NewWhatWeDo