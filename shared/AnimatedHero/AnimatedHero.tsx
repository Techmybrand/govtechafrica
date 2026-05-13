"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./AnimatedHero.module.scss";

export interface MediaItem {
    id: string;
    type: "image" | "video";
    src: string;
    headline?: string;
}

export interface AnimatedHeroProps {
    subheading?: string;
    media?: MediaItem[];
}

const defaultMedia: MediaItem[] = [
    { id: "1", type: "image", src: "/images/gradient_bg.jpg", headline: "It's all about inclusive governance" },
    { id: "2", type: "image", src: "/images/who_we_are.jpg", headline: "We are Drivers of change" },
    { id: "3", type: "image", src: "/images/tech.png", headline: "Building thriving and resilient societies" },
];

const AnimatedHero = ({
    subheading,
    media = defaultMedia
}: AnimatedHeroProps) => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % media.length);
        }, 11000);

        return () => clearInterval(interval);
    }, [media.length]);

    const boxes = Array.from({ length: 60 }).map((_, i) => i);

    return (
        <div className={styles.animated_hero_container}>
            <div className={styles.boxes_container}>
                {boxes.map((box) => (
                    <div key={box} className={styles.green_box} />
                ))}
            </div>

            <div className={styles.media_layer}>
                {media.slice(0, 3).map((item, index) => {
                    let position = "right";
                    if (index === activeIndex) {
                        position = "center";
                    } else if (index === (activeIndex + 1) % media.length) {
                        position = "right";
                    } else {
                        position = "left";
                    }

                    return (
                        <div
                            key={item.id}
                            className={`${styles.media_container} ${styles[position]}`}
                            data-index={index}
                        >
                            {item.type === "image" ? (
                                <Image
                                    src={item.src}
                                    alt="Hero background"
                                    fill
                                    className={styles.media_content}
                                    priority={position === "center"}
                                />
                            ) : (
                                <video
                                    src={item.src}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className={styles.media_content}
                                />
                            )}
                            <div className={styles.overlay} />
                        </div>
                    );
                })}
            </div>

            <div className={styles.text_layer}>
                <div className={styles.headlines_wrapper}>
                    {media.slice(0, 3).map((item, index) => (
                        <h1
                            key={item.id}
                            className={`${styles.headline} ${index === activeIndex ? styles.active : ''}`}
                        >
                            {item.headline}
                        </h1>
                    ))}
                </div>
                {subheading && <p className={styles.subheading}>{subheading}</p>}
            </div>
        </div>
    );
};

export default AnimatedHero;