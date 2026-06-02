"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./Globe.module.scss";

interface GlobeProps {
    className?: string;
}

const Globe: React.FC<GlobeProps> = ({ className = "" }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        if (!rect.width || !rect.height) return;

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const normalizedX = (x / rect.width) - 0.5;
        const normalizedY = (y / rect.height) - 0.5;
        
        const maxTilt = 15;
        
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
                    <Image 
                        src="/svgs/earth.svg" 
                        alt="3D Spinning Globe Map with connected nodes" 
                        width={487}
                        height={449}
                        priority
                    />
                </div>
                <div className={styles.sphere_overlay} />
            </div>
        </div>
    );
};

export default Globe;