import React from 'react';
import styles from './Partners.module.scss';
import Image from 'next/image';

const Partners = () => {
  return (
    <div className={styles.partners_section}>
      <div className={styles.partners_content}>
        <h3>Partners</h3>
        <div className={styles.partner_logos}>
          <div className={styles.logo_1}>
            <Image alt='logo' fill src='/svgs/rox.svg' />
          </div>
          <div className={styles.logo_2}>
            <Image alt='logo' fill src='/svgs/button_lab.svg' />
          </div>
          <div className={styles.logo_3}>
            <Image alt='logo' fill src='/svgs/techmybrand.svg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Partners