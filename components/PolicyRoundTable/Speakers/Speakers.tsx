import React from "react";
import styles from "./Speakers.module.scss"
import Image from "next/image";

const Speakers = () => {
  const speakersList = [
    {
      initials: '/images/BK.png',
      name: 'Rt. Hon. Benjamin Okezie Kalu',
      role: 'Keynote/Formal Opening',
      position: 'House of Representatives / The Deputy Speaker',
    },
    {
      initials: '/images/HN.png',
      name: 'Hon. Henry Nwawuba',
      role: 'Keynote Speaker',
      position: 'Federal Ministry of Communications, Innovation and Digital Economy/The Hon. Minister',
    },
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
    {
      initials: '/images/BO.png',
      name: 'Blessing O. Ajimoti',
      role: 'moderator',
      position: 'Public Digital/Digital Transformation Consultant',
    },
    {
      initials: '/images/DA.png',
      name: 'Dr. Dasuki Arabi',
      role: 'panelist',
      position: 'Bureau of Public Service Reforms (BPSR)/The Director General',
    },
    {
      initials: '/images/KI.png',
      name: 'Kashifu Inuwa Abdullahi, CCIE',
      role: `panelist`,
      position: 'National Information Technology Development Agency (NITDA)/The Director General',
    },
    {
      initials: '/images/VO.png',
      name: 'Dr. Vincent Olatunji',
      role: 'panelist',
      position: 'Nigeria Data Protection Commission (NDPC)/The National Commissioner',
    },
    {
      initials: '/images/IA.png',
      name: 'Prof. Ibrahim Adeyanju',
      role: 'panelist',
      position: 'Galaxy Backbone Ltd/The MD/CEO',
    },
    {
      initials: '/images/AM.png',
      name: 'Dr. Aminu Maida',
      role: 'panelist',
      position: 'Nigerian Communications Commission/The EVC/CEO',
    },
    {
      initials: '/images/TA.png',
      name: 'Dr. Tayo Aduloju',
      role: 'panelist',
      position: 'Nigeria Economic Summit Group/The CEO',
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
          {speakersList.map((speaker, index) =>
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
    </section>
  )
}

export default Speakers