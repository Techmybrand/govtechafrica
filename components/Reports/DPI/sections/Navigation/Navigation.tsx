"use client";
import React, { useEffect, useState } from 'react';
import styles from './Navigation.module.scss';

const Navigation = () => {
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id], div[id]');
            let current = "";
            sections.forEach(section => {
                const sectionTop = (section as HTMLElement).offsetTop;
                if (window.scrollY >= sectionTop - 80) {
                    current = section.id;
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getLinkStyle = (hash: string) => {
        const isActive = activeSection === hash.substring(1);
        return {
            borderBottomColor: isActive ? "var(--g-300)" : "transparent",
            color: isActive ? "white" : "rgba(255,255,255,0.55)"
        };
    };

    return (
        <nav>
            <div className={styles["nav-inner"]}>
                <a href="#" className={styles["nav-brand"]}>GOV TECH <span>Africa</span></a>
                <div className={styles["nav-links"]}>
                    <a href="#overview" style={getLinkStyle("#overview")}>Overview</a>
                    <a href="#global" style={getLinkStyle("#global")}>Global Shifts</a>
                    <a href="#nigeria2025" style={getLinkStyle("#nigeria2025")}>Nigeria 2025</a>
                    <a href="#scenarios" style={getLinkStyle("#scenarios")}>2026 Scenarios</a>
                    <a href="#risks" style={getLinkStyle("#risks")}>Risks</a>
                    <a href="#states" style={getLinkStyle("#states")}>State Readiness</a>
                    <a href="#recommendations" style={getLinkStyle("#recommendations")}>Recommendations</a>
                    <a href="#download" className={styles["nav-cta"]}>↓ Download</a>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
