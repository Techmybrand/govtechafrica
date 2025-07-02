import React from 'react';
import { ServiceCardProps } from '@/interfaces';
import Image from 'next/image';
import styles from './ServiceCard.module.scss';

const ServicesCard = ({ image, title, description, web_direction = 'normal', mob_direction = 'normal' }: ServiceCardProps) => {
  return (
    <div data-web={web_direction} data-mob={mob_direction} className={styles.services_card}>
      <div className={styles.image}>
        <Image alt='image' fill src={image} />
      </div>
      <div className={styles.text}>
        <h3>{title}</h3>
        <span></span>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ServicesCard