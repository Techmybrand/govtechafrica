import React from 'react';
import { Partners, ServiceIntroSection } from '@/shared';
import { Insights } from '../home';
import styles from './SupportServices.module.scss';

const SupportServices = () => {
  return (
    <div className={styles.capacity_building_section}>
      <div className={styles.divider}></div>
        <div className={styles.capacity_building_content}>
          <ServiceIntroSection
            title='IT Support Services (Remote support & Maintenance)'
            subtext='Seamless IT operations with proactive remote support and maintenance'
            description='Govtech Africa provides comprehensive IT support services, including remote 
            support and ongoing maintenance, to ensure that client IT systems are always running 
            smoothly. Our team offers proactive monitoring, troubleshooting, and problem resolution, 
            minimizing downtime and ensuring high availability of critical systems. Whether its 
            providing remote technical assistance, performing system updates, or maintaining 
            hardware and software environments, we deliver reliable, efficient support tailored 
            to the unique needs of public sector organizations. Our services are designed to 
            enhance operational efficiency, reduce IT-related risks, and help agencies focus on 
            their core missions without worrying about IT disruptions.'
            top_image='/svgs/support_services_1.svg'
            bottom_image='/svgs/support_services_2.svg'
            description_class={styles.description_class}
          />
          <Partners />
          <Insights isDivider={false}  />
        </div>
        <div className={styles.divider_green}></div>
    </div>
  )
}

export default SupportServices