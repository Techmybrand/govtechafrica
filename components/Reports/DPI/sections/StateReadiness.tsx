import React from 'react';
import styles from '../DPI.module.scss';

const StateReadiness = () => {
    return (
        <>
            <section id="states">
  <div className={styles["section-inner"]}>
    <div className={styles["state-header"]}>
      <div>
        <div className={styles["section-label"]}>State Readiness</div>
        <h2 className={styles["section-title"]}>Nigeria's DPI is <em>deeply uneven</em></h2>
      </div>
      <div className={styles["tier-legend"]}>
        <div className={`${styles["tier-dot"]} ${styles["high"]}`}>High maturity</div>
        <div className={`${styles["tier-dot"]} ${styles["med"]}`}>Medium maturity</div>
        <div className={`${styles["tier-dot"]} ${styles["low"]}`}>Low maturity</div>
      </div>
    </div>
    <p className={styles["section-body"]} style={{ marginBottom: "32px" }}>A few states have strong digital governance structures. Most are partially ready or still dealing with foundational gaps. The same federation, running at very different speeds.</p>

    <div className={styles["states-grid"]}>
      <div className={`${styles["state-card"]} ${styles["high"]}`}>
        <div className={styles["state-name"]}>Lagos</div>
        <div className={styles["state-tier-badge"]}>High Maturity</div>
        <div className={styles["state-insight"]}>Digital front-runner with strong e-tax systems, cybersecurity capacity, metro-fibre, and business registration services. But digital systems do not reliably reach all LGAs. The Lagos paradox: sophisticated state, deep local exclusion.</div>
        <div className={styles["stat-bars"]}>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Identity</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "88%" }}></div></div><div className={styles["stat-bar-val"]}>88%</div></div>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Payments</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "82%" }}></div></div><div className={styles["stat-bar-val"]}>82%</div></div>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Data protection</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "71%" }}></div></div><div className={styles["stat-bar-val"]}>71%</div></div>
        </div>
      </div>
      <div className={`${styles["state-card"]} ${styles["high"]}`}>
        <div className={styles["state-name"]}>Kaduna</div>
        <div className={styles["state-tier-badge"]}>High Maturity</div>
        <div className={styles["state-insight"]}>Strong digital skills, hosting infrastructure, and maturity in health and land administration. Weaknesses: low payments interoperability, weak data-sharing infrastructure, and privacy/security vulnerabilities.</div>
        <div className={styles["stat-bars"]}>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Identity</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "80%" }}></div></div><div className={styles["stat-bar-val"]}>80%</div></div>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Payments</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "55%" }}></div></div><div className={styles["stat-bar-val"]}>55%</div></div>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Data protection</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "62%" }}></div></div><div className={styles["stat-bar-val"]}>62%</div></div>
        </div>
      </div>
      <div className={`${styles["state-card"]} ${styles["med"]}`}>
        <div className={styles["state-name"]}>Kano</div>
        <div className={styles["state-tier-badge"]}>Medium Maturity</div>
        <div className={styles["state-insight"]}>Strategic vision and high identity coverage. Progress in social protection and agriculture. But payments interoperability, NDPA compliance, and consent management remain weak gaps.</div>
        <div className={styles["stat-bars"]}>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Identity</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "72%" }}></div></div><div className={styles["stat-bar-val"]}>72%</div></div>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Payments</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "41%" }}></div></div><div className={styles["stat-bar-val"]}>41%</div></div>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Data protection</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "38%" }}></div></div><div className={styles["stat-bar-val"]}>38%</div></div>
        </div>
      </div>
      <div className={`${styles["state-card"]} ${styles["med"]}`}>
        <div className={styles["state-name"]}>Delta</div>
        <div className={styles["state-tier-badge"]}>Medium Maturity</div>
        <div className={styles["state-insight"]}>Social protection strength — digital-first welfare delivery works. But low ICT infrastructure and weak data governance create sustainability risks. A promising model held back by fragile foundations.</div>
        <div className={styles["stat-bars"]}>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Identity</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "60%" }}></div></div><div className={styles["stat-bar-val"]}>60%</div></div>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Payments</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "52%" }}></div></div><div className={styles["stat-bar-val"]}>52%</div></div>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Data protection</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "35%" }}></div></div><div className={styles["stat-bar-val"]}>35%</div></div>
        </div>
      </div>
      <div className={`${styles["state-card"]} ${styles["med"]}`}>
        <div className={styles["state-name"]}>Enugu</div>
        <div className={styles["state-tier-badge"]}>Medium Maturity</div>
        <div className={styles["state-insight"]}>Performs well in interoperability and digital skills. But low consent management means citizens may not have adequate control over how their data is used — a hidden vulnerability.</div>
        <div className={styles["stat-bars"]}>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Identity</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "65%" }}></div></div><div className={styles["stat-bar-val"]}>65%</div></div>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Payments</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "58%" }}></div></div><div className={styles["stat-bar-val"]}>58%</div></div>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Data protection</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "30%" }}></div></div><div className={styles["stat-bar-val"]}>30%</div></div>
        </div>
      </div>
      <div className={`${styles["state-card"]} ${styles["med"]}`}>
        <div className={styles["state-name"]}>Cross River</div>
        <div className={styles["state-tier-badge"]}>Medium Maturity</div>
        <div className={styles["state-insight"]}>Digital skills and some payment interoperability present. But lacks the infrastructure and governance systems needed to turn human talent into systematic service delivery at scale.</div>
        <div className={styles["stat-bars"]}>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Identity</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "55%" }}></div></div><div className={styles["stat-bar-val"]}>55%</div></div>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Payments</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "47%" }}></div></div><div className={styles["stat-bar-val"]}>47%</div></div>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Data protection</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "28%" }}></div></div><div className={styles["stat-bar-val"]}>28%</div></div>
        </div>
      </div>
      <div className={`${styles["state-card"]} ${styles["low"]}`}>
        <div className={styles["state-name"]}>Borno</div>
        <div className={styles["state-tier-badge"]}>Low Maturity</div>
        <div className={styles["state-insight"]}>ICT agency established — a useful first step. But low interoperability, weak data sharing, limited inclusion, and foundational infrastructure challenges remain the defining reality.</div>
        <div className={styles["stat-bars"]}>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Identity</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "35%" }}></div></div><div className={styles["stat-bar-val"]}>35%</div></div>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Payments</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "22%" }}></div></div><div className={styles["stat-bar-val"]}>22%</div></div>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Data protection</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "15%" }}></div></div><div className={styles["stat-bar-val"]}>15%</div></div>
        </div>
      </div>
      <div className={`${styles["state-card"]} ${styles["low"]}`}>
        <div className={styles["state-name"]}>Bauchi</div>
        <div className={styles["state-tier-badge"]}>Low Maturity</div>
        <div className={styles["state-insight"]}>Frameworks adopted. Strategy in place. But implementation remains weak across payments, data sharing, and ICT infrastructure. The framework-execution gap at its clearest.</div>
        <div className={styles["stat-bars"]}>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Identity</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "30%" }}></div></div><div className={styles["stat-bar-val"]}>30%</div></div>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Payments</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "18%" }}></div></div><div className={styles["stat-bar-val"]}>18%</div></div>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Data protection</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "12%" }}></div></div><div className={styles["stat-bar-val"]}>12%</div></div>
        </div>
      </div>
      <div className={`${styles["state-card"]} ${styles["low"]}`}>
        <div className={styles["state-name"]}>Sokoto</div>
        <div className={styles["state-tier-badge"]}>Low Maturity</div>
        <div className={styles["state-insight"]}>Strong digital ambition and DPI alignment. September 2025 commitment shows political will. But low NDPA compliance and weak consent management threaten the sustainability of progress.</div>
        <div className={styles["stat-bars"]}>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Identity</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "42%" }}></div></div><div className={styles["stat-bar-val"]}>42%</div></div>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Payments</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "25%" }}></div></div><div className={styles["stat-bar-val"]}>25%</div></div>
          <div className={styles["stat-bar-row"]}><div className={styles["stat-bar-label"]}>Data protection</div><div className={styles["stat-bar-track"]}><div className={styles["stat-bar-fill"]} style={{ width: "20%" }}></div></div><div className={styles["stat-bar-val"]}>20%</div></div>
        </div>
      </div>
    </div>

    <div style={{ background: "#fff3cd", border: "1px solid rgba(232,150,10,0.3)", borderRadius: "10px", padding: "16px 20px", marginTop: "24px", fontSize: "13px", color: "#7a5200", display: "flex", gap: "12px", alignItems: "flex-start" }}>
      <span style={{ fontSize: "16px", flexShrink: "0" }}>⚠️</span>
      <span><strong>Editorial note:</strong> The NGF classification in the main report text references 2 high-maturity states, while the appendix lists Lagos, Akwa Ibom, and Oyo under high maturity. This tier list should be reconciled before the state-readiness section is finalised for publication.</span>
    </div>
  </div>
</section>
        </>
    );
};

export default StateReadiness;
