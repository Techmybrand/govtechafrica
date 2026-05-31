import React from 'react';
import styles from './Scenarios.module.scss';

const Scenarios = () => {
  return (
    <section id="scenarios" className={styles["global_wrapper"]}>
      <div className={styles["section_container"]}>
        <div className={styles["label"]}>
          2026 DPI Outlook Scenarios
        </div>
        <h2 className={styles["section-title"]}>
          Three possible<br /><em>Nigeria by year end</em>
        </h2>
        <p className={styles["section-body"]}>
          These are not predictions. They are decision-making
          tools. The difference between them is not technology — it is coordination, political will, and enforcement.
          Nigeria already has the frameworks. The question is
          whether it will use them.
        </p>

        <div className={styles["scenarios_grid"]}>
          <div className={`${styles["scenario_card"]} ${styles["s1"]}`}>
            <div className={styles["scenario_label"]}>
              Scenario 1 — Best Case
            </div>
            <div className={styles["scenario_title"]}>
              Momentum Sustained
            </div>
            <div className={styles["scenario_body"]}>
              Timelines are kept. Federal agencies coordinate. NGDX
              becomes operational. NIN-BVN harmonisation moves from
              announcement to implementation. States use the NGF report
              to improve.
            </div>
            <ul className={styles["scenario_checks"]}>
              <li><span className={styles["check_icon"]}>✓</span>NGDX operational across a critical mass of federal MDAs</li>
              <li><span className={styles["check_icon"]}>✓</span>NIN-BVN harmonisation moves to implementation</li>
              <li><span className={styles["check_icon"]}>✓</span>Medium-maturity states begin moving up the curve</li>
              <li><span className={styles["check_icon"]}>✓</span>LGAs begin activating digital service portals</li>
              <li><span className={styles["check_icon"]}>✓</span>Public awareness of data rights begins to rise</li>
            </ul>
          </div>
          <div className={`${styles["scenario_card"]} ${styles["s2"]}`}>
            <div className={styles["scenario_label"]}>
              Scenario 2 — Most Likely
            </div>
            <div className={styles["scenario_title"]}>
              Uneven Progress
            </div>
            <div className={styles["scenario_body"]}>
              Reforms proceed but coordination gaps persist. Progress
              is visible but fragile. Procurement delays and inter-agency
              friction limit what NGDX can achieve in year one.
            </div>
            <ul className={styles["scenario_checks"]}>
              <li><span className={styles["check_icon"]}>~</span>NGDX launches in name, adoption limited</li>
              <li><span className={styles["check_icon"]}>~</span>NIN-BVN harmonisation remains incomplete</li>
              <li><span className={styles["check_icon"]}>~</span>State maturity largely static without targeted support</li>
              <li><span className={styles["check_icon"]}>~</span>LGA activation barely improves at scale</li>
              <li><span className={styles["check_icon"]}>~</span>Public trust weak due to inconsistent enforcement</li>
            </ul>
          </div>
          <div className={`${styles["scenario_card"]} ${styles["s3"]}`}>
            <div className={styles["scenario_label"]}>
              Scenario 3 — Downside Risk
            </div>
            <div className={styles["scenario_title"]}>
              Stalled and Fragmented
            </div>
            <div className={styles["scenario_body"]}>
              Political distraction, funding gaps, procurement failure,
              weak coordination, or legal disputes stall implementation.
              High-maturity states build independent systems. Low-maturity
              states fall further behind.
            </div>
            <ul className={styles["scenario_checks"]}>
              <li><span className={styles["check_icon"]}>✗</span>NGDX rollout delayed; no national interoperability platform</li>
              <li><span className={styles["check_icon"]}>✗</span>NIN-BVN harmonisation stalls indefinitely</li>
              <li><span className={styles["check_icon"]}>✗</span>Fragmentation deepens across state systems</li>
              <li><span className={styles["check_icon"]}>✗</span>Citizens see no tangible service improvement</li>
              <li><span className={styles["check_icon"]}>✗</span>A major breach or failure damages public trust</li>
            </ul>
          </div>
        </div>

        <div className={styles["levers_wrapper"]}>
          <div className={styles["label"]}>
            What separates the scenarios
          </div>
          <div className={styles["levers_list"]}>
            <div className={styles["lever"]}>
              <div className={styles["lever_num"]}>01</div>
              <div className={styles["lever_text"]}>
                <strong>NGDX launch</strong> — whether it becomes
                real infrastructure or another pilot that never
                scales
              </div>
              <div className={`${styles["lever_status"]} ${styles["status_critical"]}`}>
                Critical
              </div>
            </div>
            <div className={styles["lever"]}>
              <div className={styles["lever_num"]}>02</div>
              <div className={styles["lever_text"]}>
                <strong>Identity convergence</strong> — whether
                NIN becomes the single anchor across all federal
                services
              </div>
              <div className={`${styles["lever_status"]} ${styles["status_progress"]}`}>
                In progress
              </div>
            </div>
            <div className={styles["lever"]}>
              <div className={styles["lever_num"]}>03</div>
              <div className={styles["lever_text"]}>
                <strong>State support</strong> — whether states are
                assisted according to their actual maturity level,
                not treated uniformly
              </div>
              <div className={`${styles["lever_status"]} ${styles["status_critical"]}`}>
                Critical
              </div>
            </div>
            <div className={styles["lever"]}>
              <div className={styles["lever_num"]}>04</div>
              <div className={styles["lever_text"]}>
                <strong>LGA digital activation</strong> — whether
                the 774 local governments are brought into the
                national digital system
              </div>
              <div className={`${styles["lever_status"]} ${styles["status_critical"]}`}>
                Critical
              </div>
            </div>
            <div className={styles["lever"]}>
              <div className={styles["lever_num"]}>05</div>
              <div className={styles["lever_text"]}>
                <strong>Inclusion-first design</strong> — whether
                services are built for the urban smartphone user or
                for all Nigerians
              </div>
              <div className={`${styles["lever_status"]} ${styles["status_progress"]}`}>
                Partial
              </div>
            </div>
            <div className={styles["lever"]}>
              <div className={styles["lever_num"]}>06</div>
              <div className={styles["lever_text"]}>
                <strong>Data protection enforcement</strong> — whether
                NDPC moves from guidance to active compliance
              </div>
              <div className={`${styles["lever_status"]} ${styles["status_partial"]}`}>
                Early stage
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scenarios;
