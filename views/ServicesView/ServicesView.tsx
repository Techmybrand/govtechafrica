import React from "react";
import { RelatedInsights } from "@/components";
import { Technology, Consulting } from "@/components/whatWeDo";
import styles from "./ServicesView.module.scss"

const ServicesView = () => {
    return (
        <div className={styles.services_view}>
            <div className={styles.spacing} />
            <Technology />
            <Consulting />
            <RelatedInsights type="new" />
        </div>
    )
}

export default ServicesView;