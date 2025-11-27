"use client";
import React from "react";
import Image from "next/image";
import styles from './ResearchDetails.module.scss';
import { Button } from "@/shared";
import Link from "next/link";

const ResearchDetails = () => {
  return (
    <section className={styles.details_container}>
        <div className={styles.details_content}>
            <div className={styles.details_header}>
                <h3>Research Report</h3>
                <h1>The intersection of AI governance and cybersecurity</h1>
                <div className={styles.time_and_date}>
                    <h4>5 mins read</h4>
                    <h4>March 11, 2025</h4>
                </div>
            </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.details_content}>
            <div className={styles.details_body}>
                <div className={styles.research_details}>
                    <h2>
                        In Brief
                    </h2>
                    <ul>
                        <li>
                            Nearly 90% of the world’s 4000 largest companies (G4000) are connecting 
                            decarbonization efforts to business value.
                        </li>
                        <li>
                            One third of the G4000, and 41% of the G2000 (the largest 2000 companies) 
                            have now set full net zero targets covering Scopes 1, 2 and 3.
                        </li>
                        <li>
                            13 of 21 decarbonization levers are adopted by more than half of the 
                            G4000—but only 16% are on track for net zero in operations by 2050.
                        </li>
                    </ul>
                    <Link href={`/pdfs/testing.pdf`} target="_blank" rel="noopener noreferrer">
                        <Button className={styles.download_btn}>
                            Read the report
                        </Button>
                    </Link>
                    <h3>
                        AI governance plays a critical role in ensuring that the technology is used 
                        responsibly, securely, and ethically. Transparency and accountability must be at the 
                        core of AI implementation, ensuring that automated decision-making processes can be 
                        audited and explained. There is also a growing concern around bias in AI models, as 
                        security algorithms trained on unbalanced datasets may lead to inaccurate threat 
                        assessments or discriminatory security measures.
                    </h3>
                </div>
                <div className={styles.written_by}>
                    <h2>WRITTEN BY</h2>
                    <div className={styles.writer_details_container}>
                        {[1, 2, 3].map((item: number) => 
                            <div key={item} className={styles.writer_details}>
                                <h4>Stephanie Jameson</h4>
                                <h6>Senior prinicipal - Govtech research</h6>
                                <div className={styles.details_linkedin}>
                                    <Image alt='' fill src='/svgs/linkedin.svg' />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.key_findings_container}>
                <h2>Key findings</h2>
                <div className={styles.findings_container}>
                    {[1, 2, 3, 4].map((item: number) =>
                        <div key={item} className={styles.findings}>
                            <div className={styles.findings_image}>
                                <Image alt="" fill src='/images/findings.jpg' />
                            </div>
                            <div className={styles.findings_texts}>
                                <h3>{item}. From Goals to Levers</h3>
                                <p>
                                    Since 2016, the world’s largest companies have grown their 
                                    revenues in aggregate by 7% a year while keeping overall 
                                    operational emissions flat, demonstrating that decoupling 
                                    growth from emissions leads to competitive advantage.
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.details_body_}>
                <h2>
                    Conclusion
                </h2>
                <h3>
                    Another key element in this discussion is cloud computing, which has transformed how 
                    data is stored, shared, and protected.
                </h3>
                <Link href={`/pdfs/testing.pdf`} target="_blank" rel="noopener noreferrer">
                    <Button className={styles.download_btn}>
                        Read the report
                    </Button>
                </Link>
            </div>
            <div className={styles.written_by_sm}>
                <h2>WRITTEN BY</h2>
                <div className={styles.line}></div>
                <div className={styles.writer_details_container}>
                    {[1, 2, 3].map((item: number) => 
                        <div key={item} className={styles.writer_details}>
                            <div className={styles.name_and_role}>
                                <h4>Stephanie Jameson</h4>
                                <h6>Senior prinicipal - Govtech research</h6>
                            </div>
                            <div className={styles.details_linkedin}>
                                <Image alt='' fill src='/svgs/linkedin.svg' />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <div className={styles.divider_green}></div>
    </section>
  )
}

export default ResearchDetails