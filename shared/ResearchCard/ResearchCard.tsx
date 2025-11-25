"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from './ResearchCard.module.scss';

interface ResearchCardProps {
    btnText?: string;
    image: string;
    header: string;
    description?: string;
    alt?: string;
}

const ResearchCard = ({ image, alt }: ResearchCardProps) => {
    const [hover, setHover] = useState<boolean>(false);
    const onHover = () => {
        setHover(true);
    }
    const offHover = () => {
        setHover(false)
    }
  return (
    <div data-active={hover} className={styles.card_container} onMouseEnter={onHover} 
        onMouseLeave={offHover}
    >
        <div className={styles.image_wrapper}>
            <div className={styles.image}>
                <Image alt={alt ? alt : 'image'} fill src={image} />
            </div>
        </div>
    </div>
  )
}

export default ResearchCard