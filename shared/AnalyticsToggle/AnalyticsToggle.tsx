import React from "react";
import styles from "./AnalyticsToggle.module.scss";
// import { ConsentCategories } from "@/lib/cookieConsent";

interface AnalyticsToggleProps {
    active: boolean;
    setActive: (value: boolean) => void;
}

const AnalyticsToggle = ({ active, setActive }: AnalyticsToggleProps) => {
    const handleToggle = () => setActive(!active);
    return (
        <div onClick={handleToggle} className={styles.container} data-active={active}>
            <div className={styles.image}></div>
        </div>
    )
}

export default AnalyticsToggle