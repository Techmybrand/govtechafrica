import React from "react";
import styles from "./DPI.module.scss";
import Navigation from "./sections/Navigation";
import Hero from "./sections/Hero";
import ExecSummary from "./sections/ExecSummary";
import GlobalShifts from "./sections/GlobalShifts";
import InternationalComparison from "./sections/InternationalComparison";
import Timeline from "./sections/Timeline";
import Scenarios from "./sections/Scenarios";
import Risks from "./sections/Risks";
import StateReadiness from "./sections/StateReadiness";
import Sectors from "./sections/Sectors";
import Recommendations from "./sections/Recommendations";
import DownloadSection from "./sections/DownloadSection";
import Footer from "./sections/Footer";

const DPI = () => {
    return (
        <div className={styles.dpiContainer}>
            <Navigation />
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
            <Footer />
        </div>
    );
};

export default DPI;