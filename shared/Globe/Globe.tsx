"use client";
import React, { useState } from "react";
import styles from "./Globe.module.scss";
interface GlobeProps {
    className?: string;
}
const Globe = ({ className = "" }: GlobeProps) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Normalize coordinates to range [-0.5, 0.5]
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
        <div 
            className={`${styles.globe_container} ${className}`}
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
                            
                            <radialGradient id="sphere-shading" cx="30%" cy="30%" r="70%">
                                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.12" />
                                <stop offset="45%" stopColor="#0a0c10" stopOpacity="0.25" />
                                <stop offset="75%" stopColor="#040507" stopOpacity="0.75" />
                                <stop offset="100%" stopColor="#000000" stopOpacity="0.95" />
                            </radialGradient>
                            <radialGradient id="sphere-inner-glow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stopColor="#00FF8C" stopOpacity="0.15" />
                                <stop offset="70%" stopColor="#00FF8C" stopOpacity="0.03" />
                                <stop offset="100%" stopColor="#00FF8C" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                        <circle cx="250" cy="250" r="245" fill="url(#sphere-inner-glow)" />
                        <g clipPath="url(#globe-clip)">
                            <g className={styles.scrolling_map}>
                                <path d="M 50 120 C 80 100, 130 90, 160 120 C 180 140, 170 180, 140 210 C 110 230, 90 200, 70 200 C 50 200, 30 150, 50 120 Z" fill="#00FF8C" opacity="0.32" />
                                <path d="M 130 220 C 150 230, 160 260, 140 310 C 120 370, 90 410, 80 430 C 70 410, 75 350, 95 300 C 110 260, 110 230, 130 220 Z" fill="#00FF8C" opacity="0.32" />
                                <path d="M 230 110 C 270 90, 350 80, 420 100 C 450 120, 460 160, 430 220 C 400 250, 350 230, 320 250 C 290 270, 270 240, 250 240 C 230 240, 210 160, 230 110 Z" fill="#00FF8C" opacity="0.32" />
                                <path d="M 210 210 C 250 200, 280 220, 270 270 C 260 320, 230 380, 210 390 C 190 380, 195 330, 185 280 C 175 240, 190 220, 210 210 Z" fill="#00FF8C" opacity="0.32" />
                                <path d="M 400 290 C 430 280, 450 300, 440 330 C 420 350, 390 340, 380 320 C 375 300, 390 290, 400 290 Z" fill="#00FF8C" opacity="0.32" />
                                <circle cx="90" cy="140" r="3.5" fill="#ffffff" opacity="0.8" />
                                <circle cx="135" cy="270" r="3.5" fill="#ffffff" opacity="0.8" />
                                <circle cx="235" cy="140" r="3.5" fill="#ffffff" opacity="0.8" />
                                <circle cx="235" cy="280" r="3.5" fill="#ffffff" opacity="0.8" />
                                <circle cx="360" cy="160" r="3.5" fill="#ffffff" opacity="0.8" />
                                <circle cx="415" cy="310" r="3.5" fill="#ffffff" opacity="0.8" />
                                <line x1="90" y1="140" x2="235" y2="140" stroke="#00FF8C" strokeWidth="0.8" opacity="0.3" />
                                <line x1="90" y1="140" x2="135" y2="270" stroke="#00FF8C" strokeWidth="0.8" opacity="0.3" />
                                <line x1="235" y1="140" x2="235" y2="280" stroke="#00FF8C" strokeWidth="0.8" opacity="0.3" />
                                <line x1="235" y1="140" x2="360" y2="160" stroke="#00FF8C" strokeWidth="0.8" opacity="0.3" />
                                <line x1="360" y1="160" x2="415" y2="310" stroke="#00FF8C" strokeWidth="0.8" opacity="0.3" />
                                <line x1="235" y1="280" x2="135" y2="270" stroke="#00FF8C" strokeWidth="0.8" opacity="0.3" />
                                <g transform="translate(500, 0)">
                                    <path d="M 50 120 C 80 100, 130 90, 160 120 C 180 140, 170 180, 140 210 C 110 230, 90 200, 70 200 C 50 200, 30 150, 50 120 Z" fill="#00FF8C" opacity="0.32" />
                                    <path d="M 130 220 C 150 230, 160 260, 140 310 C 120 370, 90 410, 80 430 C 70 410, 75 350, 95 300 C 110 260, 110 230, 130 220 Z" fill="#00FF8C" opacity="0.32" />
                                    <path d="M 230 110 C 270 90, 350 80, 420 100 C 450 120, 460 160, 430 220 C 400 250, 350 230, 320 250 C 290 270, 270 240, 250 240 C 230 240, 210 160, 230 110 Z" fill="#00FF8C" opacity="0.32" />
                                    <path d="M 210 210 C 250 200, 280 220, 270 270 C 260 320, 230 380, 210 390 C 190 380, 195 330, 185 280 C 175 240, 190 220, 210 210 Z" fill="#00FF8C" opacity="0.32" />
                                    <path d="M 400 290 C 430 280, 450 300, 440 330 C 420 350, 390 340, 380 320 C 375 300, 390 290, 400 290 Z" fill="#00FF8C" opacity="0.32" />
                                    <circle cx="90" cy="140" r="3.5" fill="#ffffff" opacity="0.8" />
                                    <circle cx="135" cy="270" r="3.5" fill="#ffffff" opacity="0.8" />
                                    <circle cx="235" cy="140" r="3.5" fill="#ffffff" opacity="0.8" />
                                    <circle cx="235" cy="280" r="3.5" fill="#ffffff" opacity="0.8" />
                                    <circle cx="360" cy="160" r="3.5" fill="#ffffff" opacity="0.8" />
                                    <circle cx="415" cy="310" r="3.5" fill="#ffffff" opacity="0.8" />
                                    <line x1="90" y1="140" x2="235" y2="140" stroke="#00FF8C" strokeWidth="0.8" opacity="0.3" />
                                    <line x1="90" y1="140" x2="135" y2="270" stroke="#00FF8C" strokeWidth="0.8" opacity="0.3" />
                                    <line x1="235" y1="140" x2="235" y2="280" stroke="#00FF8C" strokeWidth="0.8" opacity="0.3" />
                                    <line x1="235" y1="140" x2="360" y2="160" stroke="#00FF8C" strokeWidth="0.8" opacity="0.3" />
                                    <line x1="360" y1="160" x2="415" y2="310" stroke="#00FF8C" strokeWidth="0.8" opacity="0.3" />
                                    <line x1="235" y1="280" x2="135" y2="270" stroke="#00FF8C" strokeWidth="0.8" opacity="0.3" />
                                </g>
                            </g>
                        </g>
                        <ellipse cx="250" cy="125" rx="212" ry="24" fill="none" stroke="rgba(0, 255, 140, 0.22)" strokeWidth="1.2" />
                        <ellipse cx="250" cy="250" rx="245" ry="36" fill="none" stroke="rgba(0, 255, 140, 0.35)" strokeWidth="1.5" />
                        <ellipse cx="250" cy="375" rx="212" ry="24" fill="none" stroke="rgba(0, 255, 140, 0.22)" strokeWidth="1.2" />
                        <ellipse cx="250" cy="250" rx="80" ry="245" fill="none" stroke="rgba(0, 255, 140, 0.22)" strokeWidth="1.2" />
                        <ellipse cx="250" cy="250" rx="160" ry="245" fill="none" stroke="rgba(0, 255, 140, 0.16)" strokeWidth="1.2" />
                        <line x1="250" y1="5" x2="250" y2="495" stroke="rgba(0, 255, 140, 0.35)" strokeWidth="1.5" />
                        <circle cx="250" cy="250" r="245" fill="url(#sphere-shading)" />
                    </svg>
                </div>
                <div className={styles.sphere_overlay} />
            </div>
        </div>
    );
};

export default Globe;