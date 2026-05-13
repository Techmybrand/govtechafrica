import React, { useState } from 'react';
import styles from '../DPI.module.scss';

const Sectors = () => {
    const [activeSector, setActiveSector] = useState('health');

    const handleTabClick = (sector: string) => {
        setActiveSector(sector);
    };

    return (
        <section className={styles["bg-off"]}>
            <div className={styles["section-inner"]}>
                <div className={styles["section-label"]}>Sectoral DPI Divide</div>
                <h2 className={styles["section-title"]}>Where DPI matters<br /><em>most — and reaches least</em></h2>

                <div className={styles["sector-tabs"]}>
                    <button 
                        className={`${styles["sector-tab"]} ${activeSector === 'health' ? styles["active"] : ''}`} 
                        onClick={() => handleTabClick('health')}
                    >Healthcare</button>
                    <button 
                        className={`${styles["sector-tab"]} ${activeSector === 'education' ? styles["active"] : ''}`} 
                        onClick={() => handleTabClick('education')}
                    >Education</button>
                    <button 
                        className={`${styles["sector-tab"]} ${activeSector === 'agriculture' ? styles["active"] : ''}`} 
                        onClick={() => handleTabClick('agriculture')}
                    >Agriculture</button>
                    <button 
                        className={`${styles["sector-tab"]} ${activeSector === 'revenue' ? styles["active"] : ''}`} 
                        onClick={() => handleTabClick('revenue')}
                    >Revenue & Tax</button>
                    <button 
                        className={`${styles["sector-tab"]} ${activeSector === 'social' ? styles["active"] : ''}`} 
                        onClick={() => handleTabClick('social')}
                    >Social Protection</button>
                    <button 
                        className={`${styles["sector-tab"]} ${activeSector === 'business' ? styles["active"] : ''}`} 
                        onClick={() => handleTabClick('business')}
                    >Business & Investment</button>
                </div>

                <div className={`${styles["sector-content"]} ${activeSector === 'health' ? styles["active"] : ''}`}>
                    <div className={styles["sector-text"]}>
                        <h3>Healthcare</h3>
                        <p>DPI can transform patient identity, insurance claims, drug tracking, and disease surveillance. The NHIA interoperability model is the benchmark — but it has not yet reached most states.</p>
                        <p>Weak state-level integration, low NIN coverage in some states, and unreliable electricity risk excluding vulnerable populations from the exact services they most need.</p>
                        <div className={styles["sector-insight"]}>The patient who needs care most is often the hardest to identify in a digital system. Identity-first health DPI must begin with those at the margins, not those already served.</div>
                    </div>
                    <div className={styles["sector-stats"]}>
                        <div className={styles["sector-stat-card"]}><div className={styles["sector-stat-num"]}>NHIA</div><div className={styles["sector-stat-label"]}>National Health Insurance Authority — primary interoperability model</div></div>
                        <div className={styles["sector-stat-card"]}><div className={styles["sector-stat-num"]}>Low</div><div className={styles["sector-stat-label"]}>NIN coverage in rural health facilities — primary barrier to patient identity</div></div>
                        <div className={styles["sector-stat-card"]}><div className={styles["sector-stat-num"]}>61.2%</div><div className={styles["sector-stat-label"]}>National electricity access — determines whether health platforms stay online</div></div>
                    </div>
                </div>
                <div className={`${styles["sector-content"]} ${activeSector === 'education' ? styles["active"] : ''}`}>
                    <div className={styles["sector-text"]}>
                        <h3>Education</h3>
                        <p>JAMB's NIN-linked admissions system shows what identity-based education reform can achieve. The model must extend to basic education, teacher payroll, and learning outcomes tracking.</p>
                        <p>Weak connectivity risks widening the education gap. Schools in low-maturity states cannot access digital administration platforms that require reliable broadband.</p>
                        <div className={styles["sector-insight"]}>JAMB proved the concept. The question is whether Nigeria's education system will replicate it down to the primary level, or whether digital education remains an advantage for urban, connected students only.</div>
                    </div>
                    <div className={styles["sector-stats"]}>
                        <div className={styles["sector-stat-card"]}><div className={styles["sector-stat-num"]}>JAMB</div><div className={styles["sector-stat-label"]}>NIN-linked admissions system — the working proof of concept</div></div>
                        <div className={styles["sector-stat-card"]}><div className={styles["sector-stat-num"]}>Gap</div><div className={styles["sector-stat-label"]}>Basic education, teacher payroll, learning outcomes — not yet NIN-linked</div></div>
                        <div className={styles["sector-stat-card"]}><div className={styles["sector-stat-num"]}>50.58%</div><div className={styles["sector-stat-label"]}>Broadband penetration — primary constraint on digital education delivery</div></div>
                    </div>
                </div>
                <div className={`${styles["sector-content"]} ${activeSector === 'agriculture' ? styles["active"] : ''}`}>
                    <div className={styles["sector-text"]}>
                        <h3>Agriculture</h3>
                        <p>Agriculture depends heavily on rural populations — who are most affected by broadband, electricity, and identity coverage gaps. NIN-linked farmer registries can reduce subsidy leakage, but poor infrastructure limits reach.</p>
                        <p>The opportunity is significant: better data on who is farming what, where, enables smarter subsidy, credit, and insurance systems. The risk is that digitisation reaches urban agriculture businesses, not smallholder farmers.</p>
                        <div className={styles["sector-insight"]}>The farmer without NIN enrolment, in a community without broadband, growing on land without a digital title, is invisible to every agricultural DPI system built so far.</div>
                    </div>
                    <div className={styles["sector-stats"]}>
                        <div className={styles["sector-stat-card"]}><div className={styles["sector-stat-num"]}>Rural</div><div className={styles["sector-stat-label"]}>Priority — smallholder farmers most at risk of digital exclusion from subsidy systems</div></div>
                        <div className={styles["sector-stat-card"]}><div className={styles["sector-stat-num"]}>NIN</div><div className={styles["sector-stat-label"]}>Farmer registry link — reduces leakage, enables credit and insurance targeting</div></div>
                        <div className={styles["sector-stat-card"]}><div className={styles["sector-stat-num"]}>Last mile</div><div className={styles["sector-stat-label"]}>The infrastructure problem: electricity and broadband before digital agriculture can function</div></div>
                    </div>
                </div>
                <div className={`${styles["sector-content"]} ${activeSector === 'revenue' ? styles["active"] : ''}`}>
                    <div className={styles["sector-text"]}>
                        <h3>Revenue & Tax</h3>
                        <p>States under-collect revenue partly because of poor data infrastructure. Integrating tax systems with NIN and NGDX could transform property tax, IGR collection, and economic formalisation.</p>
                        <p>The fiscal argument for DPI is strongest here: every naira of IGR improvement attributable to better data infrastructure is also a case for investment in that infrastructure.</p>
                        <div className={styles["sector-insight"]}>Nigeria's states are leaving revenue on the table because they cannot identify and locate their tax base. Digital infrastructure is not a cost — it is a revenue strategy.</div>
                    </div>
                    <div className={styles["sector-stats"]}>
                        <div className={styles["sector-stat-card"]}><div className={styles["sector-stat-num"]}>IGR</div><div className={styles["sector-stat-label"]}>Internally generated revenue — the primary metric for state fiscal independence</div></div>
                        <div className={styles["sector-stat-card"]}><div className={styles["sector-stat-num"]}>FIRS + NIN</div><div className={styles["sector-stat-label"]}>Federal tax system NIN integration — model for state replication</div></div>
                        <div className={styles["sector-stat-card"]}><div className={styles["sector-stat-num"]}>NGDX</div><div className={styles["sector-stat-label"]}>Expected to enable cross-MDA data sharing that makes tax compliance trackable</div></div>
                    </div>
                </div>
                <div className={`${styles["sector-content"]} ${activeSector === 'social' ? styles["active"] : ''}`}>
                    <div className={styles["sector-text"]}>
                        <h3>Social Protection</h3>
                        <p>Conditional cash transfers and welfare schemes are vulnerable to leakage and exclusion when identity systems are fragmented. NIN-linked payment systems reduce fraud but only if women are enrolled at the same rate as men.</p>
                        <p>The gender gap in NIN enrolment is especially important: many social protection programmes target women, but enrolment coverage among women — especially in the north — lags significantly.</p>
                        <div className={styles["sector-insight"]}>A social protection system built on digital identity that excludes the women it is designed to serve is not a system. It is a bias built into infrastructure.</div>
                    </div>
                    <div className={styles["sector-stats"]}>
                        <div className={styles["sector-stat-card"]}><div className={styles["sector-stat-num"]}>Gender gap</div><div className={styles["sector-stat-label"]}>Female NIN enrolment below male — primary vulnerability in benefit delivery</div></div>
                        <div className={styles["sector-stat-card"]}><div className={styles["sector-stat-num"]}>Leakage</div><div className={styles["sector-stat-label"]}>Primary problem that NIN-linked payment systems are designed to solve</div></div>
                        <div className={styles["sector-stat-card"]}><div className={styles["sector-stat-num"]}>NIBSS</div><div className={styles["sector-stat-label"]}>Payment rail for government-to-person transfers — scalability dependent on identity convergence</div></div>
                    </div>
                </div>
                <div className={`${styles["sector-content"]} ${activeSector === 'business' ? styles["active"] : ''}`}>
                    <div className={styles["sector-text"]}>
                        <h3>Business Registration & Investment</h3>
                        <p>Federal registration reforms have improved the ease of starting a business. But sub-national bottlenecks remain: right-of-way fees, poor broadband, analogue processes, and weak local systems discourage investment and formalisation at the state level.</p>
                        <p>CAC digitisation has moved business registration forward. The last mile is bringing state-level business licensing, land titling, and trade facilitation into the same digital ecosystem.</p>
                        <div className={styles["sector-insight"]}>An investor can now register a company in Lagos in hours. To operate in Borno, they still navigate analogue bureaucracy that no NGDX integration has yet reached.</div>
                    </div>
                    <div className={styles["sector-stats"]}>
                        <div className={styles["sector-stat-card"]}><div className={styles["sector-stat-num"]}>CAC</div><div className={styles["sector-stat-label"]}>Federal business registration — digitised and improved; the model for states to adopt</div></div>
                        <div className={styles["sector-stat-card"]}><div className={styles["sector-stat-num"]}>Sub-national</div><div className={styles["sector-stat-label"]}>The gap — licensing, land titles, right-of-way remain analogue in most states</div></div>
                        <div className={styles["sector-stat-card"]}><div className={styles["sector-stat-num"]}>PEBEC</div><div className={styles["sector-stat-label"]}>Presidential enabling environment — monitoring business environment reforms</div></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sectors;
