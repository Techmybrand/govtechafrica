"use client";
import React, { useState } from "react";
import styles from "./Globe.module.scss";
import { globePoints } from "./points";
interface GlobeProps {
    className?: string;
}
const filteredPoints = globePoints.filter((_, idx) => idx % 2 === 0);

const Globe = ({ className = "" }: GlobeProps) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const normalizedX = (x / rect.width) - 0.5;
        const normalizedY = (y / rect.height) - 0.5;
        const maxTilt = 12;
        
        setTilt({
            x: -normalizedY * maxTilt,
            y: normalizedX * maxTilt
        });
    };
    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
    };

    return (
        <div className={`${styles.globe_container} ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className={styles.orbit_ring} />
            <div className={styles.globe_wrapper}
                style={{
                    transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
                }}
            >
                <div className={styles.sphere_bg} />
                <div className={styles.globe_texture}>
                    <svg
                        viewBox="0 0 500 500"
                        className={styles.globe_svg}
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <defs>
                            <clipPath id="globe-clip">
                                <circle cx="250" cy="250" r="245" />
                            </clipPath>
                            <linearGradient id="globe-dots-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#25eae7" /> {/* Cyan/Teal */}
                                <stop offset="45%" stopColor="#a78bfa" /> {/* Lavender/Purple */}
                                <stop offset="60%" stopColor="#ec4899" /> {/* Pink/Rose */}
                                <stop offset="100%" stopColor="#22c55e" /> {/* Emerald Green */}
                            </linearGradient>
                            <radialGradient id="sphere-shading" cx="30%" cy="30%" r="70%">
                                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
                                <stop offset="45%" stopColor="#0a0c10" stopOpacity="0.15" />
                                <stop offset="75%" stopColor="#040507" stopOpacity="0.6" />
                                <stop offset="100%" stopColor="#000000" stopOpacity="0.9" />
                            </radialGradient>
                        </defs>

                        <g clipPath="url(#globe-clip)">
                            <g className={styles.scrolling_map} fill="url(#globe-dots-gradient)">
                                <g transform="scale(2.48756) translate(0, 52)">
                                    {filteredPoints.map(([cx, cy], i) => (
                                        <circle key={`main-${i}`} cx={cx} cy={cy} r={0.6} opacity={0.8} />
                                    ))}
                                </g>
                                <g transform="translate(500, 0) scale(2.48756) translate(0, 52)">
                                    {filteredPoints.map(([cx, cy], i) => (
                                        <circle key={`dup-${i}`} cx={cx} cy={cy} r={0.6} opacity={0.8} />
                                    ))}
                                </g>
                            </g>
                        </g>
                        <ellipse cx="250" cy="125" rx="212" ry="24" fill="none" stroke="rgba(0, 240, 255, 0.14)" strokeWidth="1.2" />
                        <ellipse cx="250" cy="250" rx="245" ry="36" fill="none" stroke="rgba(0, 240, 255, 0.20)" strokeWidth="1.5" />
                        <ellipse cx="250" cy="375" rx="212" ry="24" fill="none" stroke="rgba(0, 240, 255, 0.14)" strokeWidth="1.2" />
                        <ellipse cx="250" cy="250" rx="80" ry="245" fill="none" stroke="rgba(0, 240, 255, 0.14)" strokeWidth="1.2" />
                        <ellipse cx="250" cy="250" rx="160" ry="245" fill="none" stroke="rgba(0, 240, 255, 0.10)" strokeWidth="1.2" />
                        <line x1="250" y1="5" x2="250" y2="495" stroke="rgba(0, 240, 255, 0.20)" strokeWidth="1.5" />
                        <circle cx="250" cy="250" r="245" fill="url(#sphere-shading)" pointerEvents="none" />
                    </svg>
                </div>
                <div className={styles.sphere_overlay} />
            </div>
        </div>
    );
};

export default Globe;