import React from "react";
import Hero from "./sections/Hero/Hero";
import ExecSummary from "./sections/ExecSummary/ExecSummary";
import GlobalShifts from "./sections/GlobalShifts/GlobalShifts";
import InternationalComparison from "./sections/InternationalComparison/InternationalComparison";
import Timeline from "./sections/Timeline/Timeline";
import Scenarios from "./sections/Scenarios/Scenarios";
import Risks from "./sections/Risks/Risks";
import StateReadiness from "./sections/StateReadiness/StateReadiness";
import Sectors from "./sections/Sectors/Sectors";
import Recommendations from "./sections/Recommendations/Recommendations";
import DownloadSection from "./sections/DownloadSection/DownloadSection";
import styles from "./DPI.module.scss";

const DPI = () => {
    return (
        <div className={styles.dpi_container}>
            <Hero />
            <ExecSummary />
            <GlobalShifts />
            <InternationalComparison />
            <Timeline />
            <Scenarios />
            <Risks />
            <StateReadiness />
            <Sectors />
            <Recommendations />
            <DownloadSection />
        </div>
    );
};

export default DPI;