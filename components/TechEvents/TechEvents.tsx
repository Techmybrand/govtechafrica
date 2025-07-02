import React from 'react';
import { Catalogue, Centerpiece, Partners, ServiceIntroSection, Statistics } from '@/shared';
import { CatalogueCardProps, StatisticsProps } from '@/interfaces';
import { Insights } from '../home';
import styles from './TechEvents.module.scss';

const TechEvents = () => {
    const statistics: StatisticsProps[] = [
        {
            title: '$400 million',
            description: `by Nigerian startups in 2024, matching the 2023 total.`,
        },
        {
            title: '108billion',
            description: `mobile money transactions valued at $1.68 trillion processed 
            on Nigerian fintech platforms in 2024`,
        },
        {
            title: '107 million',
            description: `internet users in nigeria as of January 2025, a 45.4% 
            penetration rate—up 2 million (1.9%) YoY `,
        },
        {
            title: '40%',
            description: `of Africa’s fastest‑growing IT and software companies in 
            FT’s 2025 rankings, with 79 entries accounted for by Nigeria and South africa`,
        },
    ]
    const catalogues: CatalogueCardProps[] = [
    {
        image: '/images/tech_event_catalogue_1.png',
        text: '',
    },
    {
        image: '/images/tech_event_catalogue_2.png',
        text: '',
    },
    {
        image: '/images/tech_event_catalogue_3.png',
        text: '',
    },
    {
        image: '/images/tech_event_catalogue_4.png',
        text: '',
    },
    ]

  return (
    <div className={styles.capacity_building_section}>
        <div className={styles.divider}></div>
        <div className={styles.capacity_building_content}>
            <ServiceIntroSection
                title='Tech Events Design and Delivery'
                subtext='We equip government stakeholders with the skills 
                and tools they need to drive meaningful change and innovation.'
                description='Govtech Africa specializes in designing and delivering 
                impactful tech events tailored specifically for government agencies 
                and public sector leaders. Our services include the end-to-end 
                management of conferences, workshops, seminars, and webinars 
                focused on the latest technology trends, innovations, 
                and solutions relevant to the public sector. 
                We work closely with government stakeholders to curate events 
                that foster knowledge sharing, promote collaboration, and drive 
                digital transformation.'
                top_image='/svgs/tech_events_1.svg'
                bottom_image='/svgs/tech_events_2.svg'
                description_class={styles.description_class}
            />
            <Statistics list={statistics} />
            <Centerpiece text='By leveraging our expertise in technology and public sector 
                needs, we ensure that each event is engaging, informative, and strategically 
                aligned with the goals of government organizations, helping them stay at 
                the forefront of technological advancements and best practices.' 
            />
            <Catalogue isHeader catalogues={catalogues}
                header='our events'
                spanText='Explore'
                btnText='See more'
                type='full'
            />
            <Partners />
            <Insights isDivider={false}  />
        </div>
        <div className={styles.divider_green}></div>
    </div>
  )
}

export default TechEvents