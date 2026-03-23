import React from "react";
import styles from "./GreenSection.module.scss";
import Image from "next/image";

const GreenSection = () => {
    return (
        <div className={styles.green_container}>
            <Image alt="green_section" fill src="/images/green_section.png" />
        </div>
    )
}

export default GreenSection