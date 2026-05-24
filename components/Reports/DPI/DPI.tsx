import React from "react";
import styles from "./DPI.module.scss";
// import Navigation from "./sections/Navigation";
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
// import Footer from "./sections/Footer";

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