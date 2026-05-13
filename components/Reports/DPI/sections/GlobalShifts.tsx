import React from 'react';
import styles from '../DPI.module.scss';

const GlobalShifts = () => {
    return (
        <>
            <section className={styles["bg-dark"]} id="global">
  <div className={styles["section-inner"]}>
    <div className={styles["section-label"]}>Global Digital Public Infrastructure Outlook</div>
    <h2 className={styles["section-title"]}>Four shifts reshaping<br /><em>DPI in 2026</em></h2>
    <p className={styles["section-body"]}>More than 130 countries now have active DPI programmes. The world has moved from pilot projects to implementation — and from technology choices to geopolitical choices.</p>

    <div className={styles["shifts-grid"]}>
      <div className={styles["shift-card"]}>
        <div className={styles["shift-num"]}>01 — From Pilots to Implementation</div>
        <div className={styles["shift-title"]}>Experimentation Is Over</div>
        <div className={styles["shift-body"]}>More than 130 countries now have active DPI programmes. Digital identity, payment systems, and data exchange platforms are being treated as core public infrastructure. Enrolment numbers are no longer the metric — utility is.</div>
        <div className={styles["shift-nigeria"]}>
          <strong>Nigeria's position:</strong> The country has a growing NIN database, NIBSS payment infrastructure, and an imminent NGDX rollout. But the report is clear: enrolment is not utility. A digital ID only works when it functions reliably across services.
        </div>
      </div>
      <div className={styles["shift-card"]}>
        <div className={styles["shift-num"]}>02 — DPI as Geopolitical Asset</div>
        <div className={styles["shift-title"]}>Nations Are Choosing Standards, Not Just Technology</div>
        <div className={styles["shift-body"]}>India promotes India Stack. Europe promotes X-Road-style data exchange. China's Digital Silk Road offers a third pathway. Countries choosing technology are choosing governance models and long-term dependencies.</div>
        <div className={styles["shift-nigeria"]}>
          <strong>Nigeria's position:</strong> Nigeria has engaged India's eGov Foundation and is preparing an X-Road-style NGDX architecture. It needs a digital sovereignty framework — deciding which systems it controls and on what terms.
        </div>
      </div>
      <div className={styles["shift-card"]}>
        <div className={styles["shift-num"]}>03 — AI Integration into DPI</div>
        <div className={styles["shift-title"]}>AI Is Inside the Infrastructure Now</div>
        <div className={styles["shift-body"]}>AI is being embedded into authentication, data routing, service delivery, and risk management. It improves efficiency but increases risks of bias, exclusion, and automated decisions without accountability.</div>
        <div className={styles["shift-nigeria"]}>
          <strong>Nigeria's position:</strong> Nigeria has published an AI Strategy but integration into DPI layers remains prospective. Institutions must develop technical, legal, and ethical capacity before AI enters core public systems.
        </div>
      </div>
      <div className={styles["shift-card"]}>
        <div className={styles["shift-num"]}>04 — Inclusion: From Connectivity to Participation</div>
        <div className={styles["shift-title"]}>Coverage Is Not Inclusion</div>
        <div className={styles["shift-body"]}>A citizen may have mobile coverage, a bank account, and a NIN — yet still be excluded if services require smartphones, stable electricity, English interfaces, or expensive data. The UNDP framework defines six inclusion dimensions.</div>
        <div className={styles["shift-nigeria"]}>
          <strong>Nigeria's position:</strong> Wide mobile coverage, but electricity access, smartphone affordability, digital literacy, and broadband penetration remain the real barriers to meaningful inclusion.
        </div>
      </div>
    </div>

    <div className={styles["inclusion-grid"]}>
      <div className={styles["inclusion-item"]}><div className={styles["inclusion-circle"]}>📶</div><div className={styles["inclusion-label"]}>Connectivity</div></div>
      <div className={styles["inclusion-item"]}><div className={styles["inclusion-circle"]}>💰</div><div className={styles["inclusion-label"]}>Affordability</div></div>
      <div className={styles["inclusion-item"]}><div className={styles["inclusion-circle"]}>📚</div><div className={styles["inclusion-label"]}>Digital Skills</div></div>
      <div className={styles["inclusion-item"]}><div className={styles["inclusion-circle"]}>🎯</div><div className={styles["inclusion-label"]}>Meaningful Use</div></div>
      <div className={styles["inclusion-item"]}><div className={styles["inclusion-circle"]}>🔐</div><div className={styles["inclusion-label"]}>Data Protection</div></div>
      <div className={styles["inclusion-item"]}><div className={styles["inclusion-circle"]}>⚖️</div><div className={styles["inclusion-label"]}>Redress Mechanisms</div></div>
    </div>
  </div>
</section>
        </>
    );
};

export default GlobalShifts;
