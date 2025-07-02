'use client';
import React, { useState } from 'react';
import { Button } from '..';
import { TechnologyCardProps } from '@/interfaces';
import Link from 'next/link';
import Image from 'next/image';
import styles from './TechnologyCard.module.scss';

const TechnologyCard = ({technology, index, cardType}: TechnologyCardProps) => {
    const [isHover, setIsHover] = useState<boolean>(false);
    const onHover = () => {
        setIsHover(true);
    };
    const offHover = () => {
        setIsHover(false);
    };
  return (
    <div
        id={technology.id}
        className={styles.card}
        data-active={isHover}
        onMouseEnter={onHover}
        onMouseLeave={offHover}
        data-card={technology.id}
    >
        {/* <div className={styles.grad}></div> */}
        <div className={styles.details}>
            <h3>{technology.title}</h3>
        </div>
        {isHover ? (
            <div className={styles.details}>
                <p>{technology.description}</p>
            </div>

        ) : (
            <div data-image={technology.id} className={`${styles.card_image}`}>
                <Image alt="image" fill src={technology?.image} />
            </div>
        )}
        {(isHover && cardType === 'technology') && (
            <Link href={technology.href}>
                <Button className={styles.button}>
                    {index === 0 ? "Explore" : "Read more"}
                </Button>
            </Link>
        )}
        {(isHover && cardType === 'consulting') && (
            <Link href={technology.href}>
                <Button className={styles.button}>
                    Explore
                </Button>
            </Link>
        )}
        <div className={styles.details_mob}>
            <h3>{technology.title}</h3>
            <p>{technology.description}</p>
            {cardType === 'technology' && (
                <Link href={technology.href}>
                    <Button className={styles.button_mob}>
                        {index === 0 ? "Explore" : "Read more"}
                    </Button>
                </Link>
            )}
            {cardType === 'consulting' && (
                <Link href={technology.href}>
                    <Button className={styles.button_mob}>
                        Explore
                    </Button>
                </Link>
            )}
            <div data-image={technology.id} className={`${styles.card_image_mob}`}>
                <Image alt="image" fill src={technology?.image} />
            </div>
        </div>
    </div>
  )
}

export default TechnologyCard