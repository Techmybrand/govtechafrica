import React from 'react';
import { Catalogue, Centerpiece, Partners, ServiceIntroSection, Statistics } from '@/shared';
import { CatalogueCardProps, StatisticsProps } from '@/interfaces';
import { Insights } from '../home';
import styles from './Compliance.module.scss';

const Compliance = () => {
    const statistics: StatisticsProps[] = [
        {
            title: '₦1.5 trillion',
            description: `Estimated size of Nigeria's IT outsourcing and strategy consulting market 
            in 2025, driven by increasing digital transformation in both public and private sectors. 
            (Approx. $980 million x ₦1,550 exchange rate)`,
        },
        {
            title: '₦3.2 billion',
            description: `Budget allocated in 2024 by the National Information Technology Development 
            Agency (NITDA) for IT policy advisory, digital strategy support, and capacity development 
            consulting under the Digital Economy Blueprint.`,
        },
        {
            title: '₦6.4 trillion',
            description: `Projected size of Nigeria's cybersecurity services market by 2025, which 
            includes advisory services for government agencies, banks, and fintechs to align with 
            global security standards.`,
        },
        {
            title: '₦25 billion',
            description: `Private sector investment into tech advisory, software integration, 
            and digital infrastructure consulting in 2024 by leading Nigerian firms and 
            multinationals (e.g., Verraki, PwC, Deloitte, KPMG).`,
        },
    ]
    const catalogues: CatalogueCardProps[] = [
        {
            image: '/images/compliance_catalogue_1.png',
            text: '',
        },
        {
            image: '/images/compliance_catalogue_2.png',
            text: '',
        },
        {
            image: '/images/compliance_catalogue_3.png',
            text: '',
        },
        {
            image: '/images/compliance_catalogue_4.png',
            text: '',
        },
    ]
  return (
    <div className={styles.capacity_building_section}>
        <div className={styles.divider}></div>
        <div className={styles.capacity_building_content}>
            <ServiceIntroSection
                title='IT Compliance & Regulatory Consulting'
                subtext='Compliance is key. We ensure government IT systems stay secure, 
                compliant, and future-ready'
                description='Govtech Africa provides specialized IT compliance and regulatory 
                consulting services to help government agencies navigate the complex landscape 
                of technology regulations and standards. Our team of experts work closely 
                with public sector organizations to ensure that their IT systems and operations 
                are fully compliant with local, national, and international regulations, 
                including data protection laws, cybersecurity standards, and industry-specific 
                requirements. By aligning IT strategies with regulatory mandates, we help agencies 
                mitigate risks, avoid penalties, and build trust with citizens.'
                top_image='/svgs/compliance_1.svg'
                bottom_image='/svgs/compliance_2.svg'
                description_class={styles.description_class}
                top_image_class={styles.top_image_class}
            />
            <Statistics list={statistics} />
            <Centerpiece text='Our consulting services empower government organizations to 
                achieve compliance while maintaining operational efficiency and security in an 
                increasingly regulated digital ecosystem.'
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

export default Compliance