"use client";
import { useState } from "react";
import { Button } from "@/shared";
import { shortenTitle } from "@/utils/stringShortner";
import { formatURL } from "@/utils/formatUrl";
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
    <div data-index={index} key={insight.title} className={styles.slide} data-active={isHover}
        style={!isHover ? {backgroundImage: `url(${insight.image})`} : {backgroundColor: `${insight?.bgColor}`}}
        onMouseEnter={onHover} onMouseLeave={offHover}
    >
        <div className={styles.details}>
            <h4>{shortenTitle(insight.title, 42)}</h4>
            <p>{insight.description}</p>
        </div>
        <Button href={`/insights/${formatURL(insight.title)}`} className={styles.card_btn}>
            Explore
        </Button>
    </div>
  )
}

export default InsightsCard