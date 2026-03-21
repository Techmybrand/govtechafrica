import React from "react";
import styles from "./Hero.module.scss";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className={styles.hero_section}>
      <div className={styles.hero_container}>
        <div className={styles.hero_content}>
          <div className={styles.hero_badge}>
            <div className={styles.dot}></div>
            <h3>30 March 2026  ·  Abuja, Nigeria</h3>
          </div>
          <div className={styles.hero_title}>
            <h1>
              National <span>GovTech</span> <br />
              Policy Roundtable 2026
            </h1>
          </div>
          <div className={styles.hero_subtext}>
            <p>
              Digital First Governance: Rethinking How Nigerian <br />
              Governments Serve, Engage and Deliver.
            </p>
          </div>
          <div className={styles.details_and_location}>
            <div className={styles.date}>
              <h4>Date</h4>
              <p>30th March 2026</p>
            </div>
            <div className={styles.venue}>
              <h4>Venue</h4>
              <p>National Assembly Library</p>
            </div>
            <div className={styles.panels}>
              <h4>Panels</h4>
              <p>3 Thematic sessions</p>
            </div>
          </div>
          <div className={styles.buttons}>
            <Link href='/policy-roundtable#register'>
              <div className={styles.register_btn}>
                <h3>Register to attend</h3>
              </div>
            </Link>
            <Link href='/policy-roundtable#agenda'>
              <div className={styles.view_btn}>
                <h3>View full agenda</h3>
              </div>
            </Link>
          </div>
          <div className={styles.collaborations}>
            <h2>In collaboration with</h2>
            <div className={styles.collabs}>
              {['office of the deputy speaker, hor', 'National Assembly Library Trust Fund', 
                'GovTech Africa'
              ].map((item) =>
                <div key={item} className={styles .collab}>
                  <p>{item}</p>
                </div>
              )}
            </div>
          </div>
          <div className={styles.scroll}>
            <p>Scroll</p>
            <div className={styles.scroll_line}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero