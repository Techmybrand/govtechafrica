import React from 'react';
import { Catalogue, Centerpiece, Partners, ServiceIntroSection, Statistics } from '@/shared';
import { CatalogueCardProps, StatisticsProps } from '@/interfaces';
import { Insights } from '../home';
import styles from './CapacityBuilding.module.scss';

const CapacityBuilding = () => {
   const statistics: StatisticsProps[] = [
    {
        title: '3 million',
        description: `young Nigerians to be trained in areas like AI, data science, 
        software engineering, cybersecurity, cloud computing, animation, and game 
        development by 2027`,
    },
    {
        title: '₦35m',
        description: `to be allocatedin its 2025 budget toward cybersecurity 
        and data centre management capacity building, following a cyber-attack 
        in December 2024`,
    },
    {
        title: '₦50bn',
        description: `estimated budget for 2024 of The ITF, Nigeria’s main 
        industrial vocational training agency`,
    },
    {
        title: '350,000',
        description: ` youth trained in digital skills, entrepreneurship, 
        leadership under the DEEL initiative.`,
    },
   ]
   const catalogues: CatalogueCardProps[] = [
    {
        image: '/images/catalogue_1.png',
        text: 'Programing & Development',
    },
    {
        image: '/images/catalogue_2.png',
        text: 'Programing & Development',
    },
    {
        image: '/images/catalogue_3.png',
        text: 'Programing & Development',
    },
    {
        image: '/images/catalogue_4.png',
        text: 'Programing & Development',
    },
   ]
  return (
    <div className={styles.capacity_building_section}>
        <div className={styles.divider}></div>
        <div className={styles.capacity_building_content}>
            <ServiceIntroSection
                title='Capacity Building & Trainings'
                subtext='We equip government stakeholders with the skills and tools they 
                need to drive meaningful change and innovation.'
                description='We offers comprehensive capacity building and training programs 
                designed to equip government employees with the skills and knowledge 
                necessary to leverage technology effectively. Our tailored training sessions 
                cover a wide range of topics, from basic digital literacy to advanced 
                technical skills in areas such as cybersecurity, cloud computing, 
                data analytics, and software development.'
                top_image='/svgs/capacity_building_1.svg'
                bottom_image='/svgs/capacity_building_2.svg'
                description_class={styles.description_class}
            />
            <Statistics list={statistics} />
            <Centerpiece text='By investing in the development of public sector teams, 
                we help government agencies enhance their operational efficiency, 
                improve service delivery, and foster a culture of continuous innovation. ' 
            />
            <Catalogue isHeader catalogues={catalogues}
                header='our training catalogues'
                spanText='Explore'
                btnText='Learn more'
                description='Our training programs are designed to ensure that government 
                personnel are well-prepared to meet the challenges of the digital era 
                and drive sustainable transformation in the public sector. 
                (Explore our training catalogues)'
                type='sm'
            />
            <Partners />
            <Insights isDivider={false}  />
        </div>
        <div className={styles.divider_green}></div>
    </div>
  )
}

export default CapacityBuilding