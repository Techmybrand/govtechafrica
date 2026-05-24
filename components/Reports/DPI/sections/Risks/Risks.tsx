import React from 'react';
import styles from './Risks.module.scss';

const Risks = () => {
  return (
    <section className={styles["global_wrapper"]} id="risks">
      <div className={styles["section_container"]}>
        <div className={styles["label"]}>
          Major Risks and Vulnerabilities
        </div>
        <h2 className={styles["section-title"]}>
          Six risks that could<br />
          <em>derail the outlook</em>
        </h2>
        <p className={styles["section-body"]}>
          The challenge is not ambition or technology. Nigeria
          already has frameworks, agencies, and strategies. These
          are the structural vulnerabilities that turn ambition
          into fragmentation.
        </p>

        <div className={styles["risks_grid"]}>
          <div className={styles["risk_card"]}>
            <div className={styles["risk_icon"]}>🏛️</div>
            <div className={styles["risk_title"]}>
              Governance Fragmentation
            </div>
            <div className={styles["risk_body"]}>
              Agencies and states building separate systems
              without enforceable standards create new digital
              silos. Interoperability must be treated as a
              governance mandate, not a technical preference.
            </div>
            <div className={styles["risk_tag"]}>
              High Severity
            </div>
          </div>
          <div className={styles["risk_card"]}>
            <div className={styles["risk_icon"]}>🛡️</div>
            <div className={styles["risk_title"]}>
              Cybersecurity Vulnerability</div>
            <div className={styles["risk_body"]}>
              As identity, payments, and data exchange systems
              become more connected, the attack surface expands.
              High uptime does not equal security. NIMC and NGDX
              are primary targets.
            </div>
            <div className={styles["risk_tag"]}>
              High Severity
            </div>
          </div>
          <div className={styles["risk_card"]}>
            <div className={styles["risk_icon"]}>⚡</div>
            <div className={styles["risk_title"]}>
              Electricity Infrastructure Gap
            </div>
            <div className={styles["risk_body"]}>
              At 61.2% electricity access — with rural access far
              lower — digital kiosks, LGA servers, and public
              service platforms cannot function reliably.
              Electricity is the infrastructure beneath the
              infrastructure.
            </div>
            <div className={styles["risk_tag"]}>
              Systemic Risk
            </div>
          </div>
          <div className={styles["risk_card"]}>
            <div className={styles["risk_icon"]}>🪪</div>
            <div className={styles["risk_title"]}>
              Identity Harmonisation Deficit
            </div>
            <div className={styles["risk_body"]}>
              NIN, BVN, TIN, state IDs, and health IDs continue to
              operate in parallel. Multiple identity systems
              create duplication, confusion, fraud, and exclusion.
              NIN must become the single anchor.
            </div>
            <div className={styles["risk_tag"]}>
              High Severity
            </div>
          </div>
          <div className={styles["risk_card"]}>
            <div className={styles["risk_icon"]}>🤖</div>
            <div className={styles["risk_title"]}>
              AI Governance Gap
            </div>
            <div className={styles["risk_body"]}>
              Strategies exist; implementation capacity does not.
              Embedding AI into public systems before
              accountability, auditability, and bias safeguards
              are in place is a governance failure in the making.
            </div>
            <div className={styles["risk_tag"]}>
              Emerging Risk
            </div>
          </div>
          <div className={styles["risk_card"]}>
            <div className={styles["risk_icon"]}>🗺️</div>
            <div className={styles["risk_title"]}>
              Two-Speed Digital Federation
            </div>
            <div className={styles["risk_body"]}>
              High-maturity states are moving ahead while
              low-maturity states lack foundational
              infrastructure. Without targeted intervention,
              Nigeria will build a digital divide between its own
              states.
            </div>
            <div className={styles["risk_tag"]}>
              Structural Risk
            </div>
          </div>
        </div>

        <div className={styles["label"]}>
          Cross-cutting challenges
        </div>
        <div className={styles["challenge_grid"]}>
          <div className={styles["challenge_card"]}>
            <div className={styles["challenge_icon"]}>🔐</div>
            <div className={styles["challenge_title"]}>
              Data Protection Gap
            </div>
            <div className={styles["challenge_body"]}>
              Fewer than 20% of Nigerians know their data rights.
              Enforcement and awareness both remain weak.
            </div>
          </div>
          <div className={styles["challenge_card"]}>
            <div className={styles["challenge_icon"]}>🪪</div>
            <div className={styles["challenge_title"]}>
              Identity Fragmentation
            </div>
            <div className={styles["challenge_body"]}>
              Parallel identity systems create duplication,
              confusion, fraud risk, and exclusion for citizens
              who fall between systems.
            </div>
          </div>
          <div className={styles["challenge_card"]}>
            <div className={styles["challenge_icon"]}>🌐</div>
            <div className={styles["challenge_title"]}>
              LGA Digital Invisibility
            </div>
            <div className={styles["challenge_body"]}>
              Only 7 of 774 LGAs maintain functional websites —
              a governance and accountability crisis, not a
              technology problem.
            </div>
          </div>
          <div className={styles["challenge_card"]}>
            <div className={styles["challenge_icon"]}>📡</div>
            <div className={styles["challenge_title"]}>
              Infrastructure Deficits
            </div>
            <div className={styles["challenge_body"]}>
              Broadband below national targets.
              Most LGAs without active digital presence.
              Connectivity gaps compound electricity gaps.
            </div>
          </div>
          <div className={styles["challenge_card"]}>
            <div className={styles["challenge_icon"]}>🧑‍💻</div>
            <div className={styles["challenge_title"]}>
              Human Capital Gaps
            </div>
            <div className={styles["challenge_body"]}>
              Public sector digital capacity,
              cybersecurity skills, service ownership,
              and talent retention are all critical
              shortfalls.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Risks;
