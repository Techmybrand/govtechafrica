import React from 'react';
import Image from 'next/image';
import { SectionProps } from '@/interfaces';
import styles from './ServiceIntroSection.module.scss';

const ServiceIntroSection = ({ title, subtext, top_image, bottom_image, description, 
    top_image_class, bottom_image_class, sec_description, description_class, subtext_class
}: SectionProps) => {
  return (
    <div className={styles.intro_section}>
        <div className={styles.top_section}>
            <div className={styles.text}>
                <h1>{title}</h1>
                <h3 className={`${subtext_class} ${styles.subtext}`}>{subtext}</h3>
            </div>
            <div className={`${top_image_class} ${styles.top_image}`}>
                <Image alt='image' fill src={top_image} />
            </div>
        </div>
        <div className={styles.bottom_section}>
            <div className={`${bottom_image_class} ${styles.bottom_image}`}>
                <Image alt='image' fill src={bottom_image} />
            </div>
            <div className={styles.text}>
                <h3 className={description_class}>{description}</h3>
                <h3 className={styles.sec}>{sec_description}</h3>
            </div>
        </div>
    </div>
  )
}

export default ServiceIntroSection