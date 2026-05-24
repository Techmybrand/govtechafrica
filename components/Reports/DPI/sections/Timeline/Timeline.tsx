import React from 'react';
import styles from './Timeline.module.scss';

const Timeline = () => {
  return (
    <section className={styles["global_wrapper"]} id="nigeria2025">
      <div className={styles["section_container"]}>
        <div className={styles["label"]}>Nigeria's Domestic DPI Developments</div>
        <h2 className={styles["section-title"]}>
          The year that built<br />
          <em>the foundation</em>
        </h2>
        <p className={styles["section-body"]}>
          2025 brought a cluster of institutional advances that
          set the terms for 2026. These are not minor updates —
          they represent the policy, legal, and infrastructure
          building blocks on which the NGDX must now stand.
        </p>

        <div className={styles["timeline_grid"]}>
          <div className={styles["timeline"]}>
            <div className={styles["timeline_item"]}>
              <div className={styles["timeline_dot"]}></div>
              <div className={styles["timeline_date"]}>
                May 2025
              </div>
              <div className={styles["timeline_title"]}>
                Presidential DPI Committee Inaugurated
              </div>
              <div className={styles["timeline_body"]}>
                The Federal Government launched a Presidential
                Committee on DPI implementation covering digital
                identity, financial payments, and data exchange —
                signalling executive commitment to coordination.
              </div>
            </div>
            <div className={styles["timeline_item"]}>
              <div className={styles["timeline_dot"]}></div>
              <div className={styles["timeline_date"]}>
                July 2025
              </div>
              <div className={styles["timeline_title"]}>
                NGF DPI Readiness Report Released
              </div>
              <div className={styles["timeline_body"]}>
                The Nigeria Governors' Forum published a
                state-level DPI readiness assessment covering 34
                states, creating the first public classification
                system for state digital maturity.
              </div>
            </div>
            <div className={styles["timeline_item"]}>
              <div className={styles["timeline_dot"]}></div>
              <div className={styles["timeline_date"]}>
                September 2025
              </div>
              <div className={styles["timeline_title"]}>
                Sokoto Makes a DPI Commitment
              </div>
              <div className={styles["timeline_body"]}>
                Sokoto formally committed to implementing Nigeria's
                DPI framework and NGDX standards, including ICT agency
                strengthening and personnel recruitment — a signal
                to peer states.
              </div>
            </div>
            <div className={styles["timeline_item"]}>
              <div className={styles["timeline_dot"]}></div>
              <div className={styles["timeline_date"]}>
                2025
              </div>
              <div className={styles["timeline_title"]}>
                National Digital Economy Bill Advanced
              </div>
              <div className={styles["timeline_body"]}>
                The National Assembly progressed the National
                Digital Economy and e-Governance Bill 2025,
                providing legal recognition for electronic communications, digital signatures, digital records, and data exchange.
              </div>
            </div>
          </div>
          <div className={styles["timeline"]}>
            <div className={styles["timeline_item"]}>
              <div className={styles["timeline_dot"]}></div>
              <div className={styles["timeline_date"]}>
                2025
              </div>
              <div className={styles["timeline_title"]}>
                NIN Database Grows to 126M+
              </div>
              <div className={styles["timeline_body"]}>
                NIMC expanded enrolment from approximately 103
                million in late 2023 to over 126 million,
                alongside diaspora centres, mobile devices,
                self-service updates, and partner integrations.
              </div>
            </div>
            <div className={styles["timeline_item"]}>
              <div className={styles["timeline_dot"]}></div>
              <div className={styles["timeline_date"]}>
                2025
              </div>
              <div className={styles["timeline_title"]}>
                Nigeria Data Exchange Emerges
              </div>
              <div className={styles["timeline_body"]}>
                NGDX was framed as the third foundational DPI rail
                alongside identity and payments, designed to enable
                secure data sharing across government and between
                government and the private sector.
              </div>
            </div>
            <div className={styles["timeline_item"]}>
              <div className={styles["timeline_dot"]}></div>
              <div className={styles["timeline_date"]}>
                2025
              </div>
              <div className={styles["timeline_title"]}>
                NDPC Operationalises Data Protection
              </div>
              <div className={styles["timeline_body"]}>
                The Nigeria Data Protection Commission
                <span>operationalised</span> the NDPA 2023, issued
                DPIA guidance, and advanced privacy-by-design
                conversations for AI-driven DPI systems.
              </div>
            </div>
            <div className={styles["timeline_item"]}>
              <div className={styles["timeline_dot"]}></div>
              <div className={styles["timeline_date"]}>
                2025
              </div>
              <div className={styles["timeline_title"]}>
                EU Commits Support; PKI Framed
              </div>
              <div className={styles["timeline_body"]}>
                The European Union confirmed support for Nigeria's
                DPI rollout. Public Key Infrastructure was
                established as the backbone of trusted digital
                infrastructure for secure transactions and
                identity verification.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
