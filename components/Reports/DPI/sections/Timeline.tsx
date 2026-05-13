import React from 'react';
import styles from '../DPI.module.scss';

const Timeline = () => {
    return (
        <>
            <section className={styles["bg-off"]} id="nigeria2025">
  <div className={styles["section-inner"]}>
    <div className={styles["section-label"]}>Nigeria's Domestic DPI Developments</div>
    <h2 className={styles["section-title"]}>The year that built<br /><em>the foundation</em></h2>
    <p className={styles["section-body"]}>2025 brought a cluster of institutional advances that set the terms for 2026. These are not minor updates — they represent the policy, legal, and infrastructure building blocks on which the NGDX must now stand.</p>

    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
      <div className={styles["timeline"]}>
        <div className={styles["timeline-item"]}>
          <div className={styles["timeline-dot"]}></div>
          <div className={styles["timeline-date"]}>May 2025</div>
          <div className={styles["timeline-title"]}>Presidential DPI Committee Inaugurated</div>
          <div className={styles["timeline-body"]}>The Federal Government launched a Presidential Committee on DPI implementation covering digital identity, financial payments, and data exchange — signalling executive commitment to coordination.</div>
        </div>
        <div className={styles["timeline-item"]}>
          <div className={styles["timeline-dot"]}></div>
          <div className={styles["timeline-date"]}>July 2025</div>
          <div className={styles["timeline-title"]}>NGF DPI Readiness Report Released</div>
          <div className={styles["timeline-body"]}>The Nigeria Governors' Forum published a state-level DPI readiness assessment covering 34 states, creating the first public classification system for state digital maturity.</div>
        </div>
        <div className={styles["timeline-item"]}>
          <div className={styles["timeline-dot"]}></div>
          <div className={styles["timeline-date"]}>September 2025</div>
          <div className={styles["timeline-title"]}>Sokoto Makes a DPI Commitment</div>
          <div className={styles["timeline-body"]}>Sokoto formally committed to implementing Nigeria's DPI framework and NGDX standards, including ICT agency strengthening and personnel recruitment — a signal to peer states.</div>
        </div>
        <div className={styles["timeline-item"]}>
          <div className={styles["timeline-dot"]}></div>
          <div className={styles["timeline-date"]}>2025</div>
          <div className={styles["timeline-title"]}>National Digital Economy Bill Advanced</div>
          <div className={styles["timeline-body"]}>The National Assembly progressed the National Digital Economy and e-Governance Bill 2025, providing legal recognition for electronic communications, digital signatures, digital records, and data exchange.</div>
        </div>
      </div>
      <div className={styles["timeline"]}>
        <div className={styles["timeline-item"]}>
          <div className={styles["timeline-dot"]}></div>
          <div className={styles["timeline-date"]}>2025</div>
          <div className={styles["timeline-title"]}>NIN Database Grows to 126M+</div>
          <div className={styles["timeline-body"]}>NIMC expanded enrolment from approximately 103 million in late 2023 to over 126 million, alongside diaspora centres, mobile devices, self-service updates, and partner integrations.</div>
        </div>
        <div className={styles["timeline-item"]}>
          <div className={styles["timeline-dot"]}></div>
          <div className={styles["timeline-date"]}>2025</div>
          <div className={styles["timeline-title"]}>Nigeria Data Exchange Emerges</div>
          <div className={styles["timeline-body"]}>NGDX was framed as the third foundational DPI rail alongside identity and payments, designed to enable secure data sharing across government and between government and the private sector.</div>
        </div>
        <div className={styles["timeline-item"]}>
          <div className={styles["timeline-dot"]}></div>
          <div className={styles["timeline-date"]}>2025</div>
          <div className={styles["timeline-title"]}>NDPC Operationalises Data Protection</div>
          <div className={styles["timeline-body"]}>The Nigeria Data Protection Commission operationalised the NDPA 2023, issued DPIA guidance, and advanced privacy-by-design conversations for AI-driven DPI systems.</div>
        </div>
        <div className={styles["timeline-item"]}>
          <div className={styles["timeline-dot"]}></div>
          <div className={styles["timeline-date"]}>2025</div>
          <div className={styles["timeline-title"]}>EU Commits Support; PKI Framed</div>
          <div className={styles["timeline-body"]}>The European Union confirmed support for Nigeria's DPI rollout. Public Key Infrastructure was established as the backbone of trusted digital infrastructure for secure transactions and identity verification.</div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    );
};

export default Timeline;
