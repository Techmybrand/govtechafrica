import React from 'react';
import styles from '../DPI.module.scss';

const Scenarios = () => {
    return (
        <>
            <section id="scenarios">
  <div className={styles["section-inner"]}>
    <div className={styles["section-label"]}>2026 DPI Outlook Scenarios</div>
    <h2 className={styles["section-title"]}>Three possible<br /><em>Nigerias by year-end</em></h2>
    <p className={styles["section-body"]}>These are not predictions. They are decision-making tools. The difference between them is not technology — it is coordination, political will, and enforcement. Nigeria already has the frameworks. The question is whether it will use them.</p>

    <div className={styles["scenarios-grid"]}>
      <div className={`${styles["scenario-card"]} ${styles["s1"]}`}>
        <div className={styles["scenario-label"]}>Scenario 1 — Best Case</div>
        <div className={styles["scenario-title"]}>Momentum Sustained</div>
        <div className={styles["scenario-body"]}>Timelines are kept. Federal agencies coordinate. NGDX becomes operational. NIN-BVN harmonisation moves from announcement to implementation. States use the NGF report to improve.</div>
        <ul className={styles["scenario-checks"]}>
          <li><span className={styles["check-icon"]}>✓</span>NGDX operational across a critical mass of federal MDAs</li>
          <li><span className={styles["check-icon"]}>✓</span>NIN-BVN harmonisation moves to implementation</li>
          <li><span className={styles["check-icon"]}>✓</span>Medium-maturity states begin moving up the curve</li>
          <li><span className={styles["check-icon"]}>✓</span>LGAs begin activating digital service portals</li>
          <li><span className={styles["check-icon"]}>✓</span>Public awareness of data rights begins to rise</li>
        </ul>
      </div>
      <div className={`${styles["scenario-card"]} ${styles["s2"]}`}>
        <div className={styles["scenario-label"]}>Scenario 2 — Most Likely</div>
        <div className={styles["scenario-title"]}>Uneven Progress</div>
        <div className={styles["scenario-body"]}>Reforms proceed but coordination gaps persist. Progress is visible but fragile. Procurement delays and inter-agency friction limit what NGDX can achieve in year one.</div>
        <ul className={styles["scenario-checks"]}>
          <li><span className={styles["check-icon"]}>~</span>NGDX launches in name, adoption limited</li>
          <li><span className={styles["check-icon"]}>~</span>NIN-BVN harmonisation remains incomplete</li>
          <li><span className={styles["check-icon"]}>~</span>State maturity largely static without targeted support</li>
          <li><span className={styles["check-icon"]}>~</span>LGA activation barely improves at scale</li>
          <li><span className={styles["check-icon"]}>~</span>Public trust weak due to inconsistent enforcement</li>
        </ul>
      </div>
      <div className={`${styles["scenario-card"]} ${styles["s3"]}`}>
        <div className={styles["scenario-label"]}>Scenario 3 — Downside Risk</div>
        <div className={styles["scenario-title"]}>Stalled and Fragmented</div>
        <div className={styles["scenario-body"]}>Political distraction, funding gaps, procurement failure, weak coordination, or legal disputes stall implementation. High-maturity states build independent systems. Low-maturity states fall further behind.</div>
        <ul className={styles["scenario-checks"]}>
          <li><span className={styles["check-icon"]}>✗</span>NGDX rollout delayed; no national interoperability platform</li>
          <li><span className={styles["check-icon"]}>✗</span>NIN-BVN harmonisation stalls indefinitely</li>
          <li><span className={styles["check-icon"]}>✗</span>Fragmentation deepens across state systems</li>
          <li><span className={styles["check-icon"]}>✗</span>Citizens see no tangible service improvement</li>
          <li><span className={styles["check-icon"]}>✗</span>A major breach or failure damages public trust</li>
        </ul>
      </div>
    </div>

    {/*  Decision Levers  */}
    <div style={{ marginTop: "48px" }}>
      <div className={styles["section-label"]} style={{ marginBottom: "16px" }}>What separates the scenarios</div>
      <div className={styles["levers-list"]}>
        <div className={styles["lever"]}>
          <div className={styles["lever-num"]}>01</div>
          <div className={styles["lever-text"]}><strong>NGDX launch</strong> — whether it becomes real infrastructure or another pilot that never scales</div>
          <div className={`${styles["lever-status"]} ${styles["status-critical"]}`}>Critical</div>
        </div>
        <div className={styles["lever"]}>
          <div className={styles["lever-num"]}>02</div>
          <div className={styles["lever-text"]}><strong>Identity convergence</strong> — whether NIN becomes the single anchor across all federal services</div>
          <div className={`${styles["lever-status"]} ${styles["status-progress"]}`}>In progress</div>
        </div>
        <div className={styles["lever"]}>
          <div className={styles["lever-num"]}>03</div>
          <div className={styles["lever-text"]}><strong>State support</strong> — whether states are assisted according to their actual maturity level, not treated uniformly</div>
          <div className={`${styles["lever-status"]} ${styles["status-critical"]}`}>Critical</div>
        </div>
        <div className={styles["lever"]}>
          <div className={styles["lever-num"]}>04</div>
          <div className={styles["lever-text"]}><strong>LGA digital activation</strong> — whether the 774 local governments are brought into the national digital system</div>
          <div className={`${styles["lever-status"]} ${styles["status-critical"]}`}>Critical</div>
        </div>
        <div className={styles["lever"]}>
          <div className={styles["lever-num"]}>05</div>
          <div className={styles["lever-text"]}><strong>Inclusion-first design</strong> — whether services are built for the urban smartphone user or for all Nigerians</div>
          <div className={`${styles["lever-status"]} ${styles["status-progress"]}`}>Partial</div>
        </div>
        <div className={styles["lever"]}>
          <div className={styles["lever-num"]}>06</div>
          <div className={styles["lever-text"]}><strong>Data protection enforcement</strong> — whether NDPC moves from guidance to active compliance</div>
          <div className={`${styles["lever-status"]} ${styles["status-partial"]}`}>Early stage</div>
        </div>
      </div>
    </div>
  </div>
</section>
        </>
    );
};

export default Scenarios;
