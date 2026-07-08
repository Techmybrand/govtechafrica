"use client";
import { useState } from "react";
import { ShareModal } from "@/shared/Modals";
import Link from "next/link";
import styles from "./DownloadSection.module.scss";

const DownloadSection = () => {
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const reportUrl = "https://drive.google.com/file/d/1M19ZAYn1IxID4jztRaXrccxgylTpaIe_/view?usp=sharing";

  return (
    <section className={styles["global_wrapper"]} id="download">
      <div className={styles["section_container"]}>
        <div className={styles["download_section_wrapper"]}>
          <div className={styles["label"]}>
            Full Intelligence Report
          </div>
          <div className={styles["section-title"]}>
            Nigeria DPI Readiness<br />
            <em>Outlook 2026</em>
          </div>
          <p className={styles["section-body"]}>
            The complete report includes detailed state-by-state
            assessments, full methodology, data annexures,
            sector-specific analysis, and the complete policy
            recommendations framework. Published 30 March 2026 by
            GOVTECH AFRICA.
          </p>
          <div className={styles["action_btns"]}>
            <Link target="_blank" download
              className={styles["btn-download"]}
              href={reportUrl}
            >
              ↓ Download Full Report (PDF)
            </Link>
            <div 
              className={styles["report_btn"]}
              onClick={() => setIsShareModalOpen(true)}
            >
              Share Report →
            </div>
          </div>
          <div className={styles["subtexts"]}>
            {`GOVTECH AFRICA · govtechafrica · Drivers of Change · It's all about inclusive governance`}
          </div>
        </div>

        <div className={styles["download-report-card"]}>
          <div className={styles["download-card-label"]}>Intelligence Report</div>
          <div className={styles["report-cover"]}>
            <div className={styles["report-cover-title"]}>Nigeria Digital Public Infrastructure Readiness Outlook</div>
            <div className={styles["report-cover-year"]}>2026</div>
          </div>
          <div className={styles["publish_text"]}>
            Published 30 March 2026
          </div>
          <Link href={reportUrl} target="_blank" download className={styles["btn-download"]}>
            ↓ Free Download
          </Link>
        </div>
      </div>

      <ShareModal 
        isOpen={isShareModalOpen} 
        onClose={() => setIsShareModalOpen(false)} 
        shareUrl={reportUrl}
        title="Share Intelligence Report"
      />
    </section>
  );
};

export default DownloadSection;
