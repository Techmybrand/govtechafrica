import React from "react";
import styles from "./About.module.scss";

const About = () => {
  const pillars = [
    'Reframe digital transformation as a governance and policy priority, not merely a technical initiative.',
    'Strengthen alignment between legislative intent, institutional mandates, and implementation capacity.',
    'Promote a whole-of-government approach to digital systems, interoperability, and service delivery.',
    'Encourage the design of citizen- and business-centric services that are accessible, inclusive, and trusted.',
  ]
  const stats = [
    {
      icon: '3',
      text: 'High-level thematic panel sessions',
    },
    {
      icon: '1',
      text: 'Keynote Address — Minister of Communications & Digital Economy',
    },
    {
      icon: '2027',
      text: 'Africa GovTech Week — Fulcrum Platform launch preview',
    },
    {
      // icon: '🇳🇬',
      icon: 'NG',
      text: 'Co-hosted by the Deputy Speaker, House of Representatives',
    },
  ]
  return (
    <section id="about" className={styles.about_section}>
      <div className={styles.about_container}>
        <div className={styles.about_label}>
          {/* <div className={styles.label_line}></div> */}
          <p>About the roundtable</p>
        </div>
        <div className={styles.about_text}>
          <h1>
            A Policy Dialogue for the Digital Transformation of Nigerian Governance
          </h1>
          <h6>
            The NATIONAL GOVTECH POLICY ROUNDTABLE 2026 convenes senior policymakers,
            technology leaders, development partners, and civil society to advance a shared
            vision of government that is digital by design and citizen-centric by default.
          </h6>
        </div>
        <div className={styles.about_theme}>
          <div className={styles.pillars}>
            {/* <p>Through this theme, the Roundtable seeks to:</p> */}
            {pillars.map((pillar, index) =>
              <div key={index} className={styles.pillar}>
                <h6>{pillar}</h6>
              </div>
            )}
          </div>
          <div className={styles.stats}>
            {/* <h2>Why this roundtable matters</h2> */}
            <div className={styles.stat_row}>
              {stats.map((stat, index) =>
                <div key={index} className={styles.stat}>
                  <h3>{stat.icon}</h3>
                  <p>{stat.text}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About