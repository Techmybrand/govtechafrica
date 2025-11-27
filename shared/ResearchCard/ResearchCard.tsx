"use client";
import React, { useState } from "react";
import { formatURL } from "@/utils/formatUrl";
import { Button } from "@/shared";
import Link from "next/link";
import styles from './ResearchCard.module.scss';
import Image from "next/image";

interface ResearchCardProps {
    btnText?: string;
    image: string;
    header: string;
    description?: string;
    alt?: string;
}

const ResearchCard = ({ image, alt, btnText, header, description }: ResearchCardProps) => {
    const [hover, setHover] = useState<boolean>(false);
    const onHover = () => {
        setHover(true);
    }
    const offHover = () => {
        setHover(false);
    }
  return (
    <div data-active={hover} className={styles.card_container} onMouseEnter={onHover} 
        onMouseLeave={offHover}
    >
        <div className={styles.card_content}>
            <div className={styles.image_wrapper}>
                <div className={styles.image}>
                    <Image alt={alt ? alt : 'image'} fill src={image} sizes="100%" />
                </div>
            </div>
            <div className={styles.btn_text_container}>
                <p>{btnText}</p>
            </div>
            <h2>{header}</h2>
            <h4>
                {description && description?.length > 170 ? 
                    `${description?.slice(0, 170)}...`
                : 
                    description
                }
            </h4>
        </div>
        <Link href={`/insights/research/${formatURL(header)}`}>
            <Button className={styles.button}>
                Learn More
            </Button>
        </Link>
    </div>
  )
}

export default ResearchCard