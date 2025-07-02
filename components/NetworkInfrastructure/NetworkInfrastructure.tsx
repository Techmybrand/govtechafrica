import React from 'react';
import { Partners, ServiceIntroSection } from '@/shared';
import { Insights } from '../home';
import styles from './NetworkInfrastructure.module.scss';

const NetworkInfrastructure = () => {
  return (
    <div className={styles.capacity_building_section}>
      <div className={styles.divider}></div>
        <div className={styles.capacity_building_content}>
          <ServiceIntroSection
            title='Network Infrastructure Design & Implementation'
            subtext='Reliable and scalable networks that support government innovation and connectivity'
            description='Govtech Africa specializes in the design and implementation of robust 
            network infrastructures that support the evolving needs of government agencies. 
            Our team works closely with public sector organizations to create scalable, secure, 
            and high-performance network architectures that ensure seamless connectivity, data 
            integrity, and operational efficiency. From planning and designing the network 
            layout to installing hardware and configuring secure communication systems, 
            we ensure that all components are optimized for reliability and future growth. 
            Our solutions help government agencies maintain secure, fast, and resilient 
            networks that support both day-to-day operations and long-term digital transformation 
            initiatives. (Learn more)'
            top_image='/svgs/network_1.svg'
            bottom_image='/svgs/network_2.svg'
            description_class={styles.description_class}
            top_image_class={styles.top_image_class}
          />
          <Partners />
          <Insights isDivider={false}  />
        </div>
        <div className={styles.divider_green}></div>
    </div>
  )
}

export default NetworkInfrastructure