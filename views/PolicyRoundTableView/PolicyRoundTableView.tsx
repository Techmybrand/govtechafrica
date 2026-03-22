import React from "react";
import { Hero, About, Speakers, Register, Footer } from "@/components/PolicyRoundTable";

const PolicyRoundTableView = () => {
    return (
        <React.Fragment>
            <Hero />
            <Footer />
            <About />
            {/* <Agenda /> */}
            <Speakers />
            <Register />
        </React.Fragment>
    )
}

export default PolicyRoundTableView;