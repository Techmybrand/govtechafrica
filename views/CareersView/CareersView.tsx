import React from 'react';
import styles from './CareersView.module.scss';
import { Careers } from '@/components';

const CareersView = () => {
  return (
    <React.Fragment>
      <Careers />
		  <div className={styles.divider}></div>
    </React.Fragment>
  )
}

export default CareersView