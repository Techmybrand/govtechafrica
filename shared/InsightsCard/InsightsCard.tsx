"use client";
import { useState } from "react";
import { Button } from "@/shared";
import { shortenTitle } from "@/utils/stringShortner";
// import { useRouter } from "next/navigation";
import { insightCardProps } from "@/interfaces";
import styles from './InsightsCard.module.scss';

const InsightsCard = ({ insight, index }: insightCardProps) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const onHover = () => {
        setIsHover(true)
    }
    const offHover = () => {
        setIsHover(false)
    }
  return (
    <div data-index={index} key={insight.title} 
        style={!isHover ? {backgroundImage: `url(${insight.image})`}: {backgroundColor: `${insight?.bgColor}`}}
        className={styles.slide}
        onMouseEnter={onHover}
        onMouseLeave={offHover}
        data-active={isHover}
    >
        <div className={styles.details}>
            <h4>{shortenTitle(insight.title, 42)}</h4>
            <p>{insight.description}</p>
        </div>
        <Button className={styles.card_btn}>Explore</Button>
    </div>
  )
}

export default InsightsCard