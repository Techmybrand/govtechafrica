import React from 'react';
import styles from './CareersView.module.scss';
import { Careers } from '@/components';

const CareersView = () => {
  return (
    <>
      <Careers />
		  <div className={styles.divider}></div>
    </>
  )
}

export default CareersView