"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./DriversV2.module.scss";

const DriversV2 = () => {
	return (
		<div className={styles.section}>
            <div className={styles.driver_block}>
                <div className={styles.image_bg}>
                    <Image src="/images/mission.png" alt="Software Support" fill sizes="100%" style={{ objectFit: 'cover' }} />
                </div>
                <div className={`${styles.floating_card} ${styles.left}`}>
                    <h3>Software</h3>
                    <p>
                        We build customized IT systems that map optimally with standard operational models. Our range of products spanning e-procurement platforms, HR & payroll systems, and digital citizen engagement portals are tailored to serve as drivers to achieve government goals.
                    </p>
                    <Link href="/what-we-do" className={styles.link_button}>
                        Learn more
                        <div className={styles.icon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 5L19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>

            <div className={styles.driver_block}>
                <div className={styles.image_bg}>
                    <Image src="/images/vision.png" alt="Hardware Infrastructure" fill sizes="100%" style={{ objectFit: 'cover' }} />
                </div>
                <div className={`${styles.floating_card} ${styles.right}`}>
                    <h3>Hardware</h3>
                    <p>
                        We provide highly available, reliable servers and data storage facilities that optimize service delivery. Our hardware infrastructure deployments are matched with state-of-the-art security features guaranteed to withstand all conditions.
                    </p>
                    <Link href="/what-we-do" className={styles.link_button}>
                        Learn more
                        <div className={styles.icon}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 5L19 12L12 19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
		</div>
	);
};

export default DriversV2;
