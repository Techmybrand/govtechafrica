import React from 'react';
import { Partners, ServiceIntroSection, ServicesCard } from '@/shared';
import { Insights } from '../home';
import { ServiceCardProps } from '@/interfaces';
import styles from './CloudServices.module.scss';

const CloudServices = () => {
  const services: ServiceCardProps[] = [
    {
      title: 'Cloud Migration',
      description: `At Govtech Africa, we combine our extensive expertise and deep understanding of 
      government operations to guide public sector organizations through the cloud migration process. 
      We work with you to assess which platforms and applications are best suited for immediate 
      migration, and which ones should be strategically planned for the future. Once the migration 
      strategy is defined, we manage the entire process: from procurement and integration of cloud 
      services to ensuring secure connectivity with your existing network. Our automation solutions 
      streamline the migration, while also preventing unauthorized third-party providers from creating 
      shadow IT—ensuring that your cloud environment is compliant, secure, and efficient.`,
      image: '/images/cloud_migration.png',
      web_direction: 'normal',
      mob_direction: 'reverse'
    },
    {
      title: 'Secure Cloud Integration',
      description: `Cloud integration involves connecting information flows between cloud-hosted 
      applications and other systems, whether hosted in different clouds or within an on-premises 
      data center. A cloud integration platform or tool automates this process by linking various 
      applications through their application programming interfaces (APIs) and facilitating the 
      secure transfer of commands and data. When selecting an integration tool, it is essential to 
      first evaluate the compatibility of the APIs that manage the flow of traffic between cloud 
      components. This ensures seamless communication while maintaining the necessary security 
      standards across cloud, IT, and network applications.`,
      image: '/images/cloud_integration.png',
      web_direction: 'reverse',
      mob_direction: 'reverse'
    },
    {
      title: 'Developing In The Cloud',
      description: `Many organizations aim to leverage both Agile and DevOps methodologies but often 
      face challenges when trying to integrate these approaches with ITIL (Information Technology 
      Infrastructure Library) practices. ITIL, with over two million practitioners globally, is 
      considered the industry's closest standard for IT management. However, its sequential, 
      plan-centric, and deterministic nature makes it less compatible with the flexible, iterative 
      principles of Agile and DevOps. While ITIL can be tailored to fit specific business needs, 
      it is not inherently agile. By adapting ITIL processes to incorporate Agile and DevOps 
      principles, organizations can unlock the benefits of these methodologies, enhancing team 
      collaboration and optimizing workflows where appropriate. This approach allows businesses to 
      balance the structure of ITIL with the flexibility and speed that Agile and DevOps offer.`,
      image: '/images/develop_cloud.png',
      web_direction: 'normal',
      mob_direction: 'reverse'
    },
    {
      title: 'Edge To Cloud',
      description: `In the past, analyzing data to make mission-critical decisions often took days or 
      even weeks. Today, with edge-to-cloud technology, real-time intelligence processing is a 
      reality. Edge-to-cloud refers to a distributed computing model where data is collected and 
      processed at or near its source, rather than being sent to a centralized data center. By 
      leveraging the power of edge to cloud, decision making is moved to the edge where data is 
      collected through rapid connection with the cloud, reducing the time it takes to move from 
      threat to mission from days to minutes.`,
      image: '/images/edge_cloud.png',
      web_direction: 'reverse',
      mob_direction: 'reverse'
    },
    {
      title: 'Cloud Connectivity',
      description: `Cloud connectivity enables seamless interoperability between on-premises resources 
      and public cloud environments. Whether utilizing services like AWS Direct Connect or Microsoft 
      Azure ExpressRoute, this connectivity leverages various connection protocols to integrate 
      networking, storage, compute, and user environments. The primary goal is to enhance business 
      agility, allowing organizations to quickly adjust and scale their operations in response to 
      changing market demands.`,
      image: '/images/cloud_connectivity.png',
      web_direction: 'normal',
      mob_direction: 'reverse'
    },
    {
      title: 'Cloud Managed Services',
      description: `While traditional Managed Service Providers (MSPs) typically focus on monitoring 
      and maintenance, we support our customers throughout the entire cloud adoption journey. Our 
      comprehensive range of cloud services includes developing a tailored cloud adoption strategy, 
      assessing existing legacy systems, building a strong business case to ensure long-term value, 
      managing seamless migration to private, public, or hybrid cloud environments, and providing 
      ongoing maintenance and support to sustain the environment over time.`,
      image: '/images/cloud_managed_services.png',
      web_direction: 'reverse',
      mob_direction: 'reverse'
    },
  ]
  return (
    <div className={styles.capacity_building_section}>
      <div className={styles.divider}></div>
        <div className={styles.capacity_building_content}>
          <ServiceIntroSection
            title='Cloud Services'
            subtext='Governments require the speed and agility that cloud computing offers. 
            Unleash the potential of the cloud.'
            description='Unleashing the potential of the cloud can create unique, innovative, and 
            sustainable competitive advantages. However, one cloud does not rule them all. 
            Accordingly, Govtech Africa maintains enterprise partnerships with the major cloud 
            service providers. We build solutions that enable our customers to select where and how 
            they consume cloud resources to confirm alignment with spend priorities and 
            interoperability with legacy systems'
            top_image='/svgs/cloud_services_1.svg'
            bottom_image='/svgs/cloud_services_2.svg'
            description_class={styles.description_class}
            subtext_class={styles.subtext_class}
            top_image_class={styles.top_image_class}
          />
          <div className={styles.customised_services_section}>
            <div className={styles.customised_services}>
              {services.map((service: ServiceCardProps, index: number) =>
                <ServicesCard key={index} {...service} />
              )}
            </div>
          </div>
          <Partners type='cloud_services' />
          <Insights isDivider={false}  />
        </div>
        <div className={styles.divider_green}></div>
    </div>
  )
}

export default CloudServices