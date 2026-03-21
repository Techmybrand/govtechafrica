import React from "react";
import styles from "./Speakers.module.scss"

const Speakers = () => {
  const speakersList = [
    {
      initials: 'BT',
      name: 'Dr. Bosun Tijani',
      role: 'Keynote speaker',
      position: 'Minister, communications & digital economy',
    },
    {
      initials: 'BK',
      name: 'Rt. Hon. Benjamin Okezie Kalu',
      role: 'opening address',
      position: 'deputy speaker, house of representatives',
    },
    {
      initials: 'GA',
      name: 'CEO, GovTech Africa',
      role: 'welcome address',
      position: 'govtech africa',
    },
    {
      initials: 'ES',
      name: 'Executive summary',
      role: `Host's remarks`,
      position: 'national assembly library trust fund',
    },
    {
      initials: 'AM',
      name: 'H.E The Ambassador',
      role: 'Special Remarks',
      position: 'Embassy of finland, abuja',
    },
  ]
  return (
    <section id="speakers" className={styles.about_section}>
      <div className={styles.about_container}>
        <div className={styles.about_label}>
          <div className={styles.label_line}></div>
          <p>About the roundtable</p>
        </div>
        <div className={styles.about_text}>
          <h1>
            {`Voices Shaping Nigeria's Digital Governance Agenda`}
          </h1>
        </div>
        <div className={styles.speakers}>
          {speakersList.map((speaker, index) =>
            <div key={index} className={styles.speaker_card}>
              <div className={styles.initials}>
                <h3>{speaker.initials}</h3>
              </div>
              <h2>{speaker.name}</h2>
              <p>{speaker.role}</p>
              <h6>{speaker.position}</h6>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Speakers