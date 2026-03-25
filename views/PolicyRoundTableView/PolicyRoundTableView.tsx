import React from "react";
import { Hero, About, Speakers, Register, GreenSection, Footer, Agenda, Media } from "@/components/PolicyRoundTable";
import { Carousel } from "@/shared";
import styles from "./PolicyRoundTableView.module.scss";

const PolicyRoundTableView = () => {
    const images = [
        '/images/BPSR.jpeg',
        '/images/NCC.jpeg',
        '/images/NDPC.jpeg',
        '/images/NESG.jpeg',
        '/images/NITDA.png',
        '/images/OHCSF.jpeg',
        '/images/PEBEC.jpeg',
    ]

    return (
        <React.Fragment>
            <Hero />
            <GreenSection />
            <About />
            <div className={styles.slider_container}>
                <Carousel direction="right" speed="normal" items={images}
                    className={styles.carousel_image}
                />
            </div>
            <Agenda />
            <Speakers />
            <Register />
            <Media />
            <Footer />
        </React.Fragment>
    )
}

export default PolicyRoundTableView;