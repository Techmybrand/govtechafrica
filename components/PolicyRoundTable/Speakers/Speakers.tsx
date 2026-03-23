import React from "react";
import styles from "./Speakers.module.scss"
import Image from "next/image";

const Speakers = () => {
  const sections = [
    {
      title: 'Formal Opening',
      speakersList: [
        {
          initials: '/images/TA.webp',
          name: 'Rt. Hon. Tajudeen Abbas',
          role: 'Keynote / Formal Opening',
          position: 'Speaker, House of Representatives',
        },
        {
          initials: '/images/BK.png',
          name: 'Rt. Hon. Benjamin Okezie Kalu',
          role: 'Keynote / Formal Opening',
          position: 'Deputy Speaker, House of Representatives',
        },
        {
          initials: '/images/BT.jpeg',
          name: 'Dr. Bosun Tijani',
          role: 'Keynote / Formal Opening',
          position: 'Minister of Communications, Innovation & Digital Economy',
        },
        {
          initials: '/images/HN.png',
          name: 'Hon. Henry Nwawuba',
          role: 'Keynote / Formal Opening',
          position: 'Executive Secretary, National Assembly Library Trust Fund',
        },
        {
          initials: '/images/BK.png',
          name: 'Fortune Toma',
          role: 'Keynote / Formal Opening',
          position: 'Director for Africa, Govtech Africa Incr',
        },
      ]
    },
    {
      title: 'Panel Discussants',
      speakersList: [
        {
          initials: '/images/DE.png',
          name: 'Mrs. Didi Esther Walson-Jack, OON, mni',
          role: 'panelist',
          position: 'Office of the Head of the Civil Service of the Federation/The Head of the Civil Service of the Federation',
        },
        {
          initials: '/images/KE.png',
          name: 'Kabir Eniola Akanbi, Esq.',
          role: `panelist`,
          position: 'The Supreme Court of Nigeria/The Chief Registrar',
        },
        {
          initials: '/images/SO.jpeg',
          name: 'Hon. Adedeji Stanley Olajide',
          role: `panelist`,
          position: 'Chairman, Committee on Digital and Communications Technology, House of Representatives',
        },
        {
          initials: '/images/AO.png',
          name: 'Dr. Abdulateef O. Shittu',
          role: 'panelist',
          position: 'Nigeria Governors Forum(NGF)/The Director General',
        },
        {
          initials: '/images/ZM.png',
          name: 'Princess Zahrah Mustapha Audu',
          role: 'panelist',
          position: 'Presidential Enabling Business Environment Council (PEBEC)/The Director General',
        },
      ]
    },
    {
      title: 'Anchors / Moderators',
      speakersList: [
        {
          initials: '/images/DA.png',
          name: 'Umoh Edet',
          role: 'moderator',
          position: 'Head of Policy and Research, Govtech Africa Inc.',
        },
        {
          initials: '/images/BO.png',
          name: 'Blessing O. Ajimoti',
          role: 'moderator',
          position: 'Public Digital/Digital Transformation Consultant',
        },
      ]
    },
  ]
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
                      <Image alt="" fill src={speaker.initials} />
                    </div>
                    <h2>{speaker.name}</h2>
                    <p>{speaker.role}</p>
                    <h6>{speaker.position}</h6>
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