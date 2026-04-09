"use client";
import React from "react";
import styles from "./ParticipatingOrganisations.module.scss";
import { Carousel } from "@/shared";
import Image from "next/image";

const ParticipatingOrganisations = () => {
    const images = [
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
        '/svgs/remita.svg',
        '/images/nibbs_logo.png',
        '/images/OHCSF.png',
        '/images/supreme_court.png',
        "/images/UNDP.png",
        "/images/Rwanda.png",
        "/svgs/finland.svg",
        "/images/3mtt.png",
        "/images/fmyd.jpg",
        "/images/NA.png",
        "/images/nabro.png",
        "/images/nasrda.png",
        "/images/ncdc_logo.jpg",
        "/images/nepza.webp",
        "/images/nilds.png",
        "/images/nis.png",
        "/images/nmdpra.png",
        "/images/nuprc.png",
        "/images/senate.png",
        "/svgs/sec_logo.svg",
        "/svgs/budgit.svg",
        "/svgs/HOR.svg",
    ]
    return (
        <div className={styles.slider_container}>
            <h3 className={styles.h3}>participating organisations</h3>
            <div className={styles.slider_content}>
                <Carousel direction="right" speed="normal"
                    type="children"
                >
                    {images.map((image, index) =>
                        <div data-index={index} key={index} className={styles.carousel_image}>
                            <Image alt="" fill src={image} sizes="100%" />
                        </div>
                    )}
                </Carousel>
            </div>
            <div className={styles.slider_content_sm}>
                <Carousel direction="right" speed="normal"
                    type="children"
                >
                    {images.slice(0, 16).map((image, index) =>
                        <div key={index} className={styles.carousel_image}>
                            <Image alt="" fill src={image} sizes="100%" />
                        </div>
                    )}
                </Carousel>
                <Carousel direction="right" speed="normal"
                    type="children"
                >
                    {images.slice(16).map((image, index) =>
                        <div key={index} className={styles.carousel_image}>
                            <Image alt="" fill src={image} sizes="100%" />
                        </div>
                    )}
                </Carousel>
                {/* <Carousel direction="left" speed="slow" items={images.slice(0, 9)}
                    className={styles.carousel_image}
                />
                <Carousel direction="right" speed="slow" items={images.slice(9)}
                    className={styles.carousel_image}
                /> */}
            </div>
        </div>
    )
}

export default ParticipatingOrganisations