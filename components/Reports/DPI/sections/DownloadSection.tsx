import React from 'react';
import styles from '../DPI.module.scss';

const DownloadSection = () => {
    return (
        <>
            <section className={styles["download-section"]} id="download">
  <div className={styles["download-inner"]}>
    <div>
      <div className={styles["section-label"]} style={{ marginBottom: "12px" }}>Full Intelligence Report</div>
      <div className={styles["download-title"]}>Nigeria DPI Readiness<br /><em>Outlook 2026</em></div>
      <p className={styles["download-body"]}>The complete report includes detailed state-by-state assessments, full methodology, data annexures, sector-specific analysis, and the complete policy recommendations framework. Published 30 March 2026 by GOV TECH Africa.</p>
      <div style={{ marginTop: "28px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <a href="#" className={styles["btn-download"]}>↓ Download Full Report (PDF)</a>
        <a href="#" style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px", display: "flex", alignItems: "center", gap: "6px", textDecoration: "none", padding: "11px 0" }}>Share Report →</a>
      </div>
      <div style={{ marginTop: "24px", fontSize: "12px", color: "rgba(255,255,255,0.25)" }}>
        GOV TECH Africa · govtech.africa · Drivers of Change · It's all about inclusive governance
      </div>
    </div>

    <div className={styles["download-report-card"]}>
      <div className={styles["download-card-label"]}>Intelligence Report</div>
      <div className={styles["report-cover"]}>
        <div className={styles["report-cover-title"]}>Nigeria Digital Public Infrastructure Readiness Outlook</div>
        <div className={styles["report-cover-year"]}>2026</div>
      </div>
      <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", marginBottom: "14px" }}>Published 30 March 2026</div>
      <a href="#" className={styles["btn-download"]} style={{ width: "100%", justifyContent: "center" }}>↓ Free Download</a>
    </div>
  </div>
</section>
        </>
    );
};

export default DownloadSection;
