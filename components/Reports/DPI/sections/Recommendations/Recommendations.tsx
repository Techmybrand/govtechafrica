import React from 'react';
import styles from './Recommendations.module.scss';

const Recommendations = () => {
  return (
    <section id="recommendations" className={styles["global_wrapper"]}>
      <div className={styles["section_container"]}>
        <div className={styles["label"]}>
          Policy Recommendations
        </div>
        <h2 className={styles["section-title"]}>
          Six things Nigeria must<br />
          <em>do in 2026</em>
        </h2>
        <p className={styles["section-body"]}>
          These are not aspirations. They are executable
          priorities. Each one has a clear owner, a measurable
          outcome, and a direct link to the scenarios Nigeria is
          trying to achieve.
        </p>

        <div className={styles["recs_grid"]}>
          <div className={styles["rec_card"]}>
            <div className={styles["rec_num"]}>REC 01</div>
            <div className={styles["rec_title"]}>Mandate Full Ne-GIF Adoption Across All States</div>
            <div className={styles["rec_body"]}>Interoperability must become a baseline requirement.
              Federal funding and technical support should be tied to compliance with the
              National e-Government Interoperability Framework.
              Opt-in is not enough.</div>
          </div>
          <div className={styles["rec_card"]}>
            <div className={styles["rec_num"]}>REC 02</div>
            <div className={styles["rec_title"]}>Accelerate NIN Harmonisation Across All Identity Systems</div>
            <div className={styles["rec_body"]}>Every state should integrate functional IDs with NIN to create a single source of truth.
              BVN, TIN, health IDs, and state IDs must converge under NIN. Harmonisation
              must move from announcement to implementation with a firm timeline.</div>
          </div>
          <div className={styles["rec_card"]}>
            <div className={styles["rec_num"]}>REC 03</div>
            <div className={styles["rec_title"]}>Set Mandatory Digital Minimum Standards for LGAs</div>
            <div className={styles["rec_body"]}>Every LGA should have a public-facing website, a digital payment channel, and a grievance redress mechanism. Connectivity support from the federal government should be conditional on meeting these minimum standards.</div>
          </div>
          <div className={styles["rec_card"]}>
            <div className={styles["rec_num"]}>REC 04</div>
            <div className={styles["rec_title"]}>Prioritise Data Protection Enforcement and Public Awareness</div>
            <div className={styles["rec_body"]}>States should appoint data protection officers, conduct annual audits, deploy consent management systems, and participate in a national citizen awareness campaign led by NDPC. Fewer than 20% of Nigerians know their rights — that is a crisis.</div>
          </div>
          <div className={styles["rec_card"]}>
            <div className={styles["rec_num"]}>REC 05</div>
            <div className={styles["rec_title"]}>Adopt Inclusion-First Design for All Digital Public Services</div>
            <div className={styles["rec_body"]}>Services must not be built only for smartphone users with stable internet. USSD, offline-first systems, assisted kiosks, low-bandwidth platforms, and multi-channel access are not optional features — they are the definition of public infrastructure.</div>
          </div>
          <div className={styles["rec_card"]}>
            <div className={styles["rec_num"]}>REC 06</div>
            <div className={styles["rec_title"]}>Provide Tiered Technical Assistance Based on State Maturity</div>
            <div className={styles["rec_body"]}>Low-maturity states need foundational support. Medium-maturity states need interoperability and scaling help. High-maturity states should become learning hubs and pilot advanced use cases. One-size support produces one-size failure.</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;
