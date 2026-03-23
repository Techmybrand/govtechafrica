import React from "react";
import { Hero, About, Speakers, Register, GreenSection, Footer,  Agenda } from "@/components/PolicyRoundTable";

const PolicyRoundTableView = () => {
    return (
        <React.Fragment>
            <Hero />
            <GreenSection />
            <About />
            <Agenda />
            <Speakers />
            <Register />
            <Footer />
        </React.Fragment>
    )
}

export default PolicyRoundTableView;