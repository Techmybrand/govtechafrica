import React from 'react';
import { CenterpieceProps } from '@/interfaces';
import styles from './Centerpiece.module.scss';

const Centerpiece = ({ text }: CenterpieceProps) => {
  return (
    <div className={styles.centerpiece_section}>
      <div className={styles.centerpiece_container}>
        <div className={styles.text_wrapper}>
          <h3>{text}</h3>
        </div>
      </div>
    </div>
  )
}

export default Centerpiece