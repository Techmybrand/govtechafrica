import React from "react";
import { Hero, About, Agenda, Speakers, Register } from "@/components/PolicyRoundTable";

const PolicyRoundTableView = () => {
    return (
        <React.Fragment>
            <Hero />
            <About />
            <Agenda />
            <Speakers />
            <Register />
        </React.Fragment>
    )
}

export default PolicyRoundTableView;