import React from 'react';
import { Partners, ServiceIntroSection } from '@/shared';
import { Insights } from '../home';
import styles from './Web3.module.scss';

const Web3 = () => {
  return (
    <div className={styles.capacity_building_section}>
      <div className={styles.divider}></div>
        <div className={styles.capacity_building_content}>
          <ServiceIntroSection
            title='Web3 & Blockchain Technology'
            subtext='Decentralized solutions for the public sector'
            description='Govtech Africa provides innovative Web3 and blockchain technology services 
            to help government agencies harness the potential of decentralized technologies. 
            Our solutions enable secure, transparent, and efficient systems for everything from 
            digital identity management to secure voting, land registration, and supply chain 
            tracking. By integrating blockchain and Web3 technologies, we empower governments to 
            create tamper-proof records, enhance public trust, and streamline processes in a way 
            that traditional systems cannot. We offer tailored consulting, development, and 
            implementation services to ensure that government agencies can adopt these cutting-edge 
            technologies with confidence, driving innovation and ensuring long-term security.'
            top_image='/svgs/web3_1.svg'
            bottom_image='/svgs/web3_2.svg'
            description_class={styles.description_class}
          />
          <Partners />
          <Insights isDivider={false}  />
        </div>
        <div className={styles.divider_green}></div>
    </div>
  )
}

export default Web3