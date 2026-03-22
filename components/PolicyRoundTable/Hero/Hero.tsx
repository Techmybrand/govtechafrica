"use client";
import React from "react";
import { Button } from "@/shared";
import styles from "./Hero.module.scss";
import Image from "next/image";

const Hero = () => {
  const details = [
    {
      name: 'Date and time',
      title: '30th March, 2026. 9am',
    },
    {
      name: 'Venue',
      title: 'National Assembly Library',
    },
  ]
  const partners = [
    {
      logo: '/svgs/deputy_speaker.svg',
      name: 'Office of the Deputy Speaker, House of Representatives',
    },
    {
      logo: '/svgs/national_assembly.svg',
      name: 'National Assembly Library Trust Fund',
    },
    {
      logo: '/images/opengraph_image.png',
      name: 'Govtech Africa',
    },
  ]
  return (
    <section id="hero" className={styles.hero_section}>
      <div className={styles.hero_container}>
        <div className={styles.hero_content}>
          <div className={styles.logo_and_btn}>
            <div className={styles.logo_big}>
              <Image alt="logo" fill src="/svgs/NGPR.svg" />
            </div>
            <h3>
              Digital First Governance: Rethinking How Nigerian Governments Serve, Engage 
              and Deliver.
            </h3>
            <Button className={styles.btn} href="/policy-roundtable#register">
              Register Now to Attend
            </Button>
          </div>
          <div className={styles.details_and_partners}>
            <div className={styles.details}>
              {details.map((detail, index) =>
                <div className={styles.detail} key={index}>
                  <p>{detail.name}</p>
                  <h4>{detail.title}</h4>
                  <div className={styles.line}></div>
                </div>
              )}
            </div>
            <div className={styles.partners}>
              <p>in collaboration with</p>
              <div className={styles.logos}>
                {partners.map((partner, index) =>
                  <div className={styles.partner} key={index}>
                    <div data-index={index} className={styles.logo}>
                      <Image alt="" fill src={partner.logo} />
                    </div>
                    <h5>{partner.name}</h5>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero