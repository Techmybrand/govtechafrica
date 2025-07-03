import React from 'react';
import { Catalogue, Centerpiece, Partners, ServiceIntroSection, Statistics } from '@/shared';
import { CatalogueCardProps, StatisticsProps } from '@/interfaces';
import { Insights } from '../home';
import styles from './StrategyConsulting.module.scss';

const StrategyConsulting = () => {
    const statistics: StatisticsProps[] = [
        {
            title: 'US$992.6 million',
            description: `Projected revenue for Nigeria's IT Outsourcing market in 2025 
                — reflecting a 20.4% growth from the previous year`,
        },
        {
            title: 'US$50.4 million',
            description: `Revenue for Nigeria's broader Professional Services market 
            (covering consulting, cybersecurity, digital marketing, etc.) expected in 2025.`,
        },
        {
            title: 'US$1.37 billion',
            description: `Estimated size of the Africa-wide IT Consulting & Implementation 
            market in 2025, with Nigeria as a major contributor, driven by its expanding 
            digital transformation projects`,
        },
        {
            title: '1 million',
            description: `Membership count of the Nigeria Association of Computing Students
             (NACOS) — signalling a deep national talent pool and strong grassroots 
             ecosystem feeding into consulting and advisory services`,
        },
    ]
    const catalogues: CatalogueCardProps[] = [
    {
        image: '/images/strategy_catalogue_1.png',
        text: '',
    },
    {
        image: '/images/strategy_catalogue_2.png',
        text: '',
    },
    {
        image: '/images/strategy_catalogue_3.png',
        text: '',
    },
    {
        image: '/images/strategy_catalogue_4.png',
        text: '',
    },
    ]
  return (
    <div className={styles.capacity_building_section}>
        <div className={styles.divider}></div>
        <div className={styles.capacity_building_content}>
            <ServiceIntroSection
                title='IT Strategy Consulting & Advisory'
                subtext='We guide governments toward smarter, more effective tech solutions'
                description='At Govtech Africa, we provide expert IT strategy consulting 
                and advisory services to help government clients navigate the complexities 
                of digital transformation. Our team of experienced consultants works 
                closely with public sector organizations to develop tailored IT strategies 
                that align with their unique goals and objectives.'
                sec_description='From technology assessments to roadmap development, 
                    we guide agencies in adopting the right technologies, optimizing existing 
                    infrastructures, and implementing best practices for governance and 
                    compliance.'
                top_image='/svgs/strategy_1.svg'
                bottom_image='/svgs/strategy_2.svg'
                description_class={styles.description_class}
            />
            <Statistics list={statistics} />
            <Centerpiece text='Our services ensure that governments can leverage IT 
                investments to improve service delivery, drive innovation, and create 
                long-term value for citizens and stakeholders.' 
            />
            <Catalogue isHeader={false} catalogues={catalogues}
                type='full'
            />
            <Partners />
            <Insights isDivider={false}  />
        </div>
        <div className={styles.divider_green}></div>
    </div>
  )
}

export default StrategyConsulting