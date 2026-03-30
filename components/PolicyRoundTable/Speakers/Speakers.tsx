import React from "react";
import styles from "./Speakers.module.scss"
import Image from "next/image";
import { sections } from "@/mock/navLists.mock";

const Speakers = () => {
  return (
    <section id="speakers" className={styles.about_section}>
      <div className={styles.about_container}>
        <div className={styles.about_label}>
          <div className={styles.label_line}></div>
          <p>distinguished speakers</p>
        </div>
        <div className={styles.about_text}>
          <h1>
            {`Voices Shaping Nigeria's Digital Governance Agenda`}
          </h1>
        </div>
        <div className={styles.speakers}>
          {sections.map((section, index) =>
            <div key={index} className={styles.speaker_section}>
              <h4>{section.title}</h4>
              <div className={styles.speaker_card_container}>
                {section.speakersList.map((speaker, index) =>
                  <div key={index} className={styles.speaker_card}>
                    <div className={styles.initials}>
                      <Image alt="" fill src={speaker.initials} sizes="100%" />
                    </div>
                    <h2>{speaker.name}</h2>
                    {/* <p>{speaker.role}</p> */}
                    <h6>{speaker.position}</h6>
                    <h6>{speaker.org}</h6>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Speakers