import React from "react";
import { Hero, About, Speakers, Register, GreenSection, Footer, Agenda, Media } from "@/components/PolicyRoundTable";
import { Carousel } from "@/shared";
import styles from "./PolicyRoundTableView.module.scss";

const PolicyRoundTableView = () => {
    const images = [
        // '/images/BPSR.jpeg',
        // '/images/NCC.jpeg',
        // '/images/NDPC.jpeg',
        // '/images/NESG.jpeg',
        // '/images/NITDA.png',
        // '/images/OHCSF.jpeg',
        // '/images/PEBEC.jpeg',
        '/svgs/partner_1.svg',
        '/svgs/partner_2.svg',
        '/svgs/partner_3.svg',
        '/svgs/partner_4.svg',
        '/svgs/partner_5.svg',
        '/svgs/partner_6.svg',
        '/svgs/partner_7.svg',
        '/svgs/partner_8.svg',
        '/svgs/partner_9.svg',
        '/svgs/partner_10.svg',
    ]

    return (
        <React.Fragment>
            <Hero />
            <GreenSection />
            <About />
            <div className={styles.slider_container}>
                <h3 className={styles.h3}>partipating organisations</h3>
                <Carousel direction="right" speed="slow" items={images}
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