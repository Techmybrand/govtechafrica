import React from "react";
import { Hero } from "@/shared";
import { RelatedInsights } from "@/components";
import { MissionV2, NewsLetter } from "@/components/home";
import { MeetTheTeam, OurValues, Coalition } from "@/components/whoWeAre";

const NewWhoWeAreView = () => {
    return (
        <React.Fragment>
            <Hero
                backgroundImage="/images/who_we_are_dark.jpg"
                backgroundType="image"
                title="We are Drivers of Change"
                description='At Govtech Africa, we are driven by the need
                    to close the technology gap for governments across the
                    African continent.'
                type="new"
                dataType="new-are"
            />
            <Coalition />
            <MissionV2 />
            <OurValues />
            <MeetTheTeam />
            <RelatedInsights type="new" />
            <NewsLetter />
        </React.Fragment>
    )
}

export default NewWhoWeAreView;