import React from 'react';
import styles from '../DPI.module.scss';

const InternationalComparison = () => {
    return (
        <>
            <section className={styles["bg-dark"]} style={{ paddingTop: "0" }}>
  <div className={styles["section-inner"]}>
    <div className={styles["section-label"]}>International Reference Models</div>
    <h2 className={styles["section-title"]}><em>What India, Brazil, and Estonia</em><br />teach Nigeria</h2>
    <table className={styles["compare-table"]}>
      <tr>
        <th>Country</th>
        <th>Core DPI System</th>
        <th>What Nigeria Can Adopt</th>
        <th>What Nigeria Must Avoid</th>
      </tr>
      <tr>
        <td><span className={styles["country-flag"]}>🇮🇳</span>India</td>
        <td>Aadhaar, UPI, DigiLocker, Account Aggregator</td>
        <td>Universal identity anchor; open APIs; government-to-person digital payments; population-scale service delivery<br /><span className={styles["lesson-tag"]}>Scale model</span></td>
        <td>Privacy risks from scale moving faster than governance safeguards; authentication failures that exclude populations</td>
      </tr>
      <tr>
        <td><span className={styles["country-flag"]}>🇧🇷</span>Brazil</td>
        <td>PIX instant payment system, Gov.br, federated governance</td>
        <td>Mandatory interoperability rails — PIX succeeded because institutions were required to connect and comply<br /><span className={styles["lesson-tag"]}>Interoperability mandate</span></td>
        <td>Voluntary adoption frameworks that allow large institutions to opt out, fragmenting the payment and data landscape</td>
      </tr>
      <tr>
        <td><span className={styles["country-flag"]}>🇪🇪</span>Estonia</td>
        <td>X-Road data exchange, e-Identity, Digital Cabinet</td>
        <td>Governance-first philosophy: trust, citizen control, auditability, and legal enforcement as design principles<br /><span className={styles["lesson-tag"]}>Governance model</span></td>
        <td>Direct transfer: Estonia is small, highly connected, with near-universal electricity. Nigeria's scale and federal complexity require adaptation, not replication</td>
      </tr>
    </table>
  </div>
</section>
        </>
    );
};

export default InternationalComparison;
