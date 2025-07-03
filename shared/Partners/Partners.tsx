import React from 'react';
import styles from './Partners.module.scss';
import Image from 'next/image';

interface Props {
  type?: 'normal' | 'cybersecurity' | 'cloud_services'
}

const Partners = ({ type = 'normal' }: Props) => {
  return (
    <div className={styles.partners_section}>
      <div className={styles.partners_content}>
        <h3>Partners</h3>
        {type === 'normal'  && (
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
        )}
        {type === 'cybersecurity'  && (
          <div className={styles.partner_logos}>
            <div className={styles.logo_4}>
              <Image alt='logo' fill src='/svgs/cisco.svg' />
            </div>
            <div className={styles.logo_5}>
              <Image alt='logo' fill src='/svgs/leidos.svg' />
            </div>
          </div>
        )}
        {type === 'cloud_services'  && (
          <div data-type={type} className={styles.partner_logos}>
            <div className={styles.logo_6}>
              <Image alt='logo' fill src='/svgs/leidos.svg' />
            </div>
            <div className={styles.logo_7}>
              <Image alt='logo' fill src='/svgs/azure.svg' />
            </div>
            <div className={styles.logo_8}>
              <Image alt='logo' fill src='/svgs/oracle.svg' />
            </div>
            <div className={styles.logo_9}>
              <Image alt='logo' fill src='/svgs/microsoft.svg' />
            </div>
            <div className={styles.logo_10}>
              <Image alt='logo' fill src='/svgs/aws.svg' />
            </div>
            <div className={styles.logo_11}>
              <Image alt='logo' fill src='/svgs/zoho.svg' />
            </div>
            <div className={styles.logo_12}>
              <Image alt='logo' fill src='/svgs/google_cloud.svg' />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Partners