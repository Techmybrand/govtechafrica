"use client";
import React from "react";
import { Button } from "@/shared";
import styles from "./Hero.module.scss";
import Image from "next/image";

const Hero = () => {
  const details = [
    {
      name: 'Date',
      title: '30th March, 2026',
    },
    {
      name: 'Time',
      title: '9am - 3pm',
    },
    {
      name: 'Physical Participation',
      title: 'Strictly by Invitation',
    },
  ]
  // const partners = [
  //   {
  //     logo: '/svgs/deputy_speaker.svg',
  //     name: 'Office of the Deputy Speaker, House of Representatives',
  //   },
  //   {
  //     logo: '/svgs/national_assembly.svg',
  //     name: 'National Assembly Library Trust Fund',
  //   },
  //   {
  //     logo: '/images/opengraph_image.png',
  //     name: 'Govtech Africa',
  //   },
  // ]
  return (
    <section id="hero" className={styles.hero_section}>
      <div className={styles.hero_container}>
        <div className={styles.hero_content}>
          <div className={styles.logo_and_btn}>
            <div className={styles.logo_big}>
              <Image alt="logo" fill src="/svgs/NGPR.svg" />
            </div>
          </div>
          <div className={styles.details_and_partners}>
            <div className={styles.content}>
              <div className={styles.header}>
                <h3>Theme</h3>
              </div>
              <div className={styles.text}>
                <p>
                  Digital First Governance: <br />Rethinking How Nigerian Governments Serve, 
                  Engage and Deliver.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={styles.hero_container}>
        <div className={styles.hero_content_bottom}>
          {/* <div className={styles.details}> */}
            {details.map((detail, index) =>
              <div className={styles.detail} key={index}>
                <p>{detail.name}</p>
                <h4>{detail.title}</h4>
              </div>
            )}
          {/* </div> */}
          <Button className={styles.btn} href="#register">
            Register to Attend Virtually
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero