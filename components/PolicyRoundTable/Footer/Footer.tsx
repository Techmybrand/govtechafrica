import React from "react";
import styles from "./Footer.module.scss"

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className={styles.footer_body}>
            <div className={styles.footer_container}>
                <div className={styles.footer_content}>
                    <h1>National GovTech Policy Roundtable 2026</h1>
                    <h3>
                        Digital First Governance: Rethinking How Nigerian Governments Serve, 
                        Engage and Deliver
                    </h3>
                    <p>&copy; {year}</p>
                </div>
            </div>
        </div>
    )
}

export default Footer