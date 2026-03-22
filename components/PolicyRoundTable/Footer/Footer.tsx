import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <Image alt="green_section" fill src="/images/green_section.png" />
        </div>
    )
}

export default Footer