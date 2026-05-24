import React from 'react';
import styles from './StateReadiness.module.scss';

const StateReadiness = () => {
  return (
    <section id="states" className={styles["global_wrapper"]}>
      <div className={styles["section_container"]}>
        <div className={styles["state_header"]}>
          <div className={styles["label_and_title"]}>
            <div className={styles["label"]}>
              State Readiness
            </div>
            <h2 className={styles["section-title"]}>
              Nigeria's DPI is <br /> <em>deeply uneven</em>
            </h2>
          </div>
          <div className={styles["tier_legend"]}>
            <div className={`${styles["tier_dot"]} ${styles["high"]}`}>High maturity</div>
            <div className={`${styles["tier_dot"]} ${styles["med"]}`}>Medium maturity</div>
            <div className={`${styles["tier_dot"]} ${styles["low"]}`}>Low maturity</div>
          </div>
        </div>
        <p className={styles["section-body"]}>
          A few states have strong digital governance structures.
          Most are partially ready or still dealing with
          foundational gaps. The same federation, running at
          very different speeds.
        </p>

        <div className={styles["states_grid"]}>
          <div className={`${styles["state_card"]} ${styles["high"]}`}>
            <div className={styles["state_name"]}>Lagos</div>
            <div className={styles["state_tier_badge"]}>High Maturity</div>
            <div className={styles["state_insight"]}>Digital front-runner with strong e-tax systems, cybersecurity capacity, metro-fibre, and business registration services. But digital systems do not reliably reach all LGAs. The Lagos paradox: sophisticated state, deep local exclusion.</div>
            <div className={styles["stat_bars"]}>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Identity
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div
                    className={styles["stat_bar_fill"]}
                    style={{ width: "88%" }}
                  ></div>
                </div>
                <div className={styles["stat_bar_val"]}>
                  88%
                </div>
              </div>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Payments
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div
                    className={styles["stat_bar_fill"]}
                    style={{ width: "82%" }}
                  ></div>
                </div>
                <div className={styles["stat_bar_val"]}>
                  82%
                </div>
              </div>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Data protection
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div
                    className={styles["stat_bar_fill"]}
                    style={{ width: "71%" }}
                  ></div>
                </div>
                <div className={styles["stat_bar_val"]}>
                  71%
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles["state_card"]} ${styles["high"]}`}>
            <div className={styles["state_name"]}>Kaduna</div>
            <div className={styles["state_tier_badge"]}>
              High Maturity
            </div>
            <div className={styles["state_insight"]}>
              Strong digital skills, hosting infrastructure, and
              maturity in health and land administration.
              Weaknesses: low payments interoperability, weak
              data-sharing infrastructure, and privacy/security
              vulnerabilities.
            </div>
            <div className={styles["stat_bars"]}>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Identity
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div
                    className={styles["stat_bar_fill"]}
                    style={{ width: "80%" }}
                  ></div>
                </div>
                <div className={styles["stat_bar_val"]}>
                  80%
                </div>
              </div>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Payments
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div
                    className={styles["stat_bar_fill"]}
                    style={{ width: "55%" }}
                  ></div>
                </div>
                <div className={styles["stat_bar_val"]}>
                  55%
                </div>
              </div>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Data protection
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div
                    className={styles["stat_bar_fill"]}
                    style={{ width: "62%" }}
                  ></div>
                </div>
                <div className={styles["stat_bar_val"]}>
                  62%
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles["state_card"]} ${styles["med"]}`}>
            <div className={styles["state_name"]}>Kano</div>
            <div className={styles["state_tier_badge"]}>
              Medium Maturity
            </div>
            <div className={styles["state_insight"]}>
              Strategic vision and high identity coverage.
              Progress in social protection and agriculture.
              But payments interoperability, NDPA compliance,
              and consent management remain weak gaps.
            </div>
            <div className={styles["stat_bars"]}>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Identity
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div
                    className={styles["stat_bar_fill"]}
                    style={{ width: "72%" }}
                  ></div>
                </div>
                <div className={styles["stat_bar_val"]}>
                  72%
                </div>
              </div>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Payments
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div
                    className={styles["stat_bar_fill"]}
                    style={{ width: "41%" }}
                  ></div>
                </div>
                <div className={styles["stat_bar_val"]}>
                  41%
                </div>
              </div>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Data protection
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div
                    className={styles["stat_bar_fill"]}
                    style={{ width: "38%" }}
                  ></div>
                </div>
                <div className={styles["stat_bar_val"]}>
                  38%
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles["state_card"]} ${styles["med"]}`}>
            <div className={styles["state_name"]}>Delta</div>
            <div className={styles["state_tier_badge"]}>
              Medium Maturity
            </div>
            <div className={styles["state_insight"]}>
              Social protection strength — digital-first welfare
              delivery works. But low ICT infrastructure and weak
              data governance create sustainability risks. A
              promising model held back by fragile foundations.
            </div>
            <div className={styles["stat_bars"]}>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Identity
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div
                    className={styles["stat_bar_fill"]}
                    style={{ width: "60%" }}
                  ></div>
                </div>
                <div className={styles["stat_bar_val"]}>
                  60%
                </div>
              </div>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Payments
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div className={styles["stat_bar_fill"]}
                    style={{ width: "52%" }}
                  ></div>
                </div>
                <div className={styles["stat_bar_val"]}>
                  52%
                </div>
              </div>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Data protection
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div className={styles["stat_bar_fill"]}
                    style={{ width: "35%" }}
                  ></div>
                </div>
                <div className={styles["stat_bar_val"]}>
                  35%
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles["state_card"]} ${styles["med"]}`}>
            <div className={styles["state_name"]}>
              Enugu
            </div>
            <div className={styles["state_tier_badge"]}>
              Medium Maturity
            </div>
            <div className={styles["state_insight"]}>
              Performs well in interoperability and digital
              skills. But low consent management means citizens
              may not have adequate control over how their data
              is used — a hidden vulnerability.
            </div>
            <div className={styles["stat_bars"]}>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Identity
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div className={styles["stat_bar_fill"]}
                    style={{ width: "65%" }}
                  ></div>
                </div>
                <div className={styles["stat_bar_val"]}>
                  65%
                </div>
              </div>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Payments
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div className={styles["stat_bar_fill"]}
                    style={{ width: "58%" }}
                  ></div>
                </div>
                <div className={styles["stat_bar_val"]}>
                  58%
                </div>
              </div>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Data protection
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div className={styles["stat_bar_fill"]}
                    style={{ width: "30%" }}
                  ></div>
                </div>
                <div className={styles["stat_bar_val"]}>
                  30%
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles["state_card"]} ${styles["med"]}`}>
            <div className={styles["state_name"]}>Cross River</div>
            <div className={styles["state_tier_badge"]}>
              Medium Maturity
            </div>
            <div className={styles["state_insight"]}>
              Digital skills and some payment interoperability
              present. But lacks the infrastructure and governance
              systems needed to turn human talent into systematic
              service delivery at scale.
            </div>
            <div className={styles["stat_bars"]}>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Identity
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div className={styles["stat_bar_fill"]}
                    style={{ width: "55%" }}
                  ></div>
                </div>
                <div className={styles["stat_bar_val"]}>
                  55%
                </div>
              </div>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Payments
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div className={styles["stat_bar_fill"]}
                    style={{ width: "47%" }}
                  ></div>
                </div>
                <div className={styles["stat_bar_val"]}>
                  47%
                </div>
              </div>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Data protection
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div className={styles["stat_bar_fill"]}
                    style={{ width: "28%" }}
                  ></div>
                </div>
                <div className={styles["stat_bar_val"]}>
                  28%
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles["state_card"]} ${styles["low"]}`}>
            <div className={styles["state_name"]}>
              Borno
            </div>
            <div className={styles["state_tier_badge"]}>
              Low Maturity
            </div>
            <div className={styles["state_insight"]}>
              ICT agency established — a useful first step. But
              low interoperability, weak data sharing, limited
              inclusion, and foundational infrastructure challenges
              remain the defining reality.
            </div>
            <div className={styles["stat_bars"]}>
              <div className={styles["stat_bar_row"]}><div className={styles["stat_bar_label"]}>Identity</div><div className={styles["stat_bar_track"]}><div className={styles["stat_bar_fill"]} style={{ width: "35%" }}></div></div><div className={styles["stat_bar_val"]}>35%</div></div>
              <div className={styles["stat_bar_row"]}><div className={styles["stat_bar_label"]}>Payments</div><div className={styles["stat_bar_track"]}><div className={styles["stat_bar_fill"]} style={{ width: "22%" }}></div></div><div className={styles["stat_bar_val"]}>22%</div></div>
              <div className={styles["stat_bar_row"]}><div className={styles["stat_bar_label"]}>Data protection</div><div className={styles["stat_bar_track"]}><div className={styles["stat_bar_fill"]} style={{ width: "15%" }}></div></div><div className={styles["stat_bar_val"]}>15%</div></div>
            </div>
          </div>
          <div className={`${styles["state_card"]} ${styles["low"]}`}>
            <div className={styles["state_name"]}>Bauchi</div>
            <div className={styles["state_tier_badge"]}>Low Maturity</div>
            <div className={styles["state_insight"]}>Frameworks adopted. Strategy in place. But implementation remains weak across payments, data sharing, and ICT infrastructure. The framework-execution gap at its clearest.</div>
            <div className={styles["stat_bars"]}>
              <div className={styles["stat_bar_row"]}><div className={styles["stat_bar_label"]}>Identity</div><div className={styles["stat_bar_track"]}><div className={styles["stat_bar_fill"]} style={{ width: "30%" }}></div></div><div className={styles["stat_bar_val"]}>30%</div></div>
              <div className={styles["stat_bar_row"]}><div className={styles["stat_bar_label"]}>Payments</div><div className={styles["stat_bar_track"]}><div className={styles["stat_bar_fill"]} style={{ width: "18%" }}></div></div><div className={styles["stat_bar_val"]}>18%</div></div>
              <div className={styles["stat_bar_row"]}><div className={styles["stat_bar_label"]}>Data protection</div><div className={styles["stat_bar_track"]}><div className={styles["stat_bar_fill"]} style={{ width: "12%" }}></div></div><div className={styles["stat_bar_val"]}>12%</div></div>
            </div>
          </div>
          <div className={`${styles["state_card"]} ${styles["low"]}`}>
            <div className={styles["state_name"]}>Sokoto</div>
            <div className={styles["state_tier_badge"]}>
              Low Maturity
            </div>
            <div className={styles["state_insight"]}>
              Strong digital ambition and DPI alignment. September
              2025 commitment shows political will. But low NDPA
              compliance and weak consent management threaten the
              sustainability of progress.
            </div>
            <div className={styles["stat_bars"]}>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Identity
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div className={styles["stat_bar_fill"]}
                    style={{ width: "42%" }}></div></div>
                <div className={styles["stat_bar_val"]}>
                  42%
                </div>
              </div>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Payments
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div className={styles["stat_bar_fill"]}
                    style={{ width: "25%" }}
                  >
                  </div>
                </div>
                <div className={styles["stat_bar_val"]}>
                  25%
                </div>
              </div>
              <div className={styles["stat_bar_row"]}>
                <div className={styles["stat_bar_label"]}>
                  Data protection
                </div>
                <div className={styles["stat_bar_track"]}>
                  <div className={styles["stat_bar_fill"]}
                    style={{ width: "20%" }}>
                  </div>
                </div>
                <div className={styles["stat_bar_val"]}>
                  20%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["editorial_wrapper"]}
        >
          <span className={styles["editorial_text"]}>⚠️</span>
          <span className={styles["editorial_text"]}>
            <strong>Editorial note:</strong>
            The NGF classification in the main report text
            references 2 high-maturity states, while the appendix
            lists Lagos, Akwa Ibom, and Oyo under high maturity.
            This tier list should be reconciled before the
            state_readiness section is finalised for publication.
          </span>
        </div>
      </div>
    </section>
  );
};

export default StateReadiness;
