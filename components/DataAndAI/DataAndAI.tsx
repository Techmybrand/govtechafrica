import React from 'react';
import { Partners, ServiceIntroSection } from '@/shared';
import { Insights } from '../home';
import Image from 'next/image';
import styles from './DataAndAI.module.scss';

const DataAndAI = () => {
  return (
    <div className={styles.capacity_building_section}>
      <div className={styles.divider}></div>
        <div className={styles.capacity_building_content}>
          <ServiceIntroSection
            title='Data and AI'
            subtext='Elevating decision-making with secure and intelligent data processing, 
            analytics and operational AI'
            description='Govtech Africa offers cutting-edge data and AI solutions to help government 
            agencies harness the power of data for smarter decision-making and enhanced service 
            delivery. Our expertise in data analytics, machine learning, and artificial intelligence 
            enables public sector organizations to gain actionable insights, predict trends, automate 
            processes, and improve efficiency across various domains. Whether it’s leveraging big 
            data to improve policy outcomes, using AI to enhance public safety, or implementing 
            machine learning for predictive analytics, we empower governments to unlock the full 
            potential of their data. Our solutions are tailored to meet the unique needs of the 
            public sector, ensuring that governments can make data-driven decisions that drive 
            innovation and better serve citizens. (Learn more)'
            top_image='/svgs/data_and_ai_1.svg'
            bottom_image='/svgs/data_and_ai_2.svg'
            description_class={styles.description_class}
          />
          <div className={styles.ai_section}>
            <div className={styles.ai}>
              <div className={styles.image}>
                <Image alt='image' fill src='/svgs/data_and_ai_3.svg' />
              </div>
              <div className={styles.text}>
                <h3>
                  We help government clients solve data challenges and integrate artificial 
                  intelligence that enhances processing and analytics. We understand that a strong 
                  foundational data layer leads to better analytics and AI, so we help organizations 
                  achieve data convergence and interoperability and then integrate AI to supplement 
                  human thinking and decisions. Our approach focuses on bridging information domains, 
                  eliminating silos and then federating, organizing and securing data. Our AI solution 
                  is designed to be easy to use so every client can operationalize analytics and make 
                  the most of data.
                </h3>
              </div>
            </div>
          </div>
          <Partners />
          <Insights isDivider={false}  />
        </div>
        <div className={styles.divider_green}></div>
    </div>
  )
}

export default DataAndAI