import React from 'react';
import styles from './ExecSummary.module.scss';

const ExecSummary = () => {
  return (
    <section id="exec-summary" className={styles["exec_summary_wrapper"]}>
      <div className={styles["exec_container"]}>
        <div className={styles["label"]}>Executive Summary</div>
        <h2 className={styles["section-title"]}>Progress is real.<br /><em>But fragmentation is the risk.</em></h2>
        <p className={styles["section-body"]}>
          Nigeria has entered the global DPI implementation moment
          with meaningful progress. Its national identity base
          has grown, payments infrastructure is maturing, the
          data protection regime is active, and the Nigeria Data
          Exchange is expected to become a central infrastructure
          layer. But these gains exist alongside deep structural
          weaknesses.
        </p>

        <div className={styles["exec-grid"]}>
          <div className={`${styles["exec-card"]} ${styles["promise"]}`}>
            <div className={styles["exec-card-tag"]}>Promise</div>
            <div className={styles["exec-card-title"]}>
              Nigeria Has Momentum
            </div>
            <div className={styles["exec-card-body"]}>
              Identity, payments, data exchange, and digital
              governance are advancing. The NIN database expanded
              from 103 million to over 126 million. NDPA is
              operational. NGDX rollout is imminent. International
              support is confirmed.
            </div>
          </div>
          <div className={`${styles["exec-card"]} ${styles["pressure"]}`}>
            <div className={styles["exec-card-tag"]}>Pressure</div>
            <div className={styles["exec-card-title"]}>
              Structural Weaknesses Persist
            </div>
            <div className={styles["exec-card-body"]}>
              Infrastructure, trust, electricity, cybersecurity,
              and state readiness remain critical gaps. Weak
              interoperability across government systems and low
              citizen awareness of digital rights undermine the
              gains made at the federal level.
            </div>
          </div>
          <div className={`${styles["exec-card"]} ${styles["test"]}`}>
            <div className={styles["exec-card-tag"]}>The Decisive Test</div>
            <div className={styles["exec-card-title"]}>
              2026 Is the Year of Reckoning
            </div>
            <div className={styles["exec-card-body"]}>
              Whether the Nigeria Data Exchange becomes real
              infrastructure or another fragmented project will
              determine Nigeria's DPI trajectory. The Presidential
              Committee must enforce coordination. Agencies must
              connect, not compete.
            </div>
          </div>
          <div className={`${styles["exec-card"]} ${styles["priority"]}`}>
            <div className={styles["exec-card-tag"]}>Core Priority</div>
            <div className={styles["exec-card-title"]}>
              Interoperability Is Not Optional
            </div>
            <div className={styles["exec-card-body"]}>
              Interoperability, inclusion-first design, and
              enforcement must sit at the centre of Nigeria's strategy.
              Building digital systems is not enough. Those systems
              must connect, share data securely, protect citizens, and
              reach people beyond urban populations.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecSummary;
