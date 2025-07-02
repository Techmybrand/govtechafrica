import React from 'react';
import { Partners, ServiceIntroSection, ServicesCard } from '@/shared';
import { Insights } from '../home';
import styles from './CustomisedSoftware.module.scss';
import { ServiceCardProps } from '@/interfaces';

const CustomisedSoftware = () => {
    const services: ServiceCardProps[] = [
        {
            title: 'E-government Portals',
            description: `E-government solutions are a specialized subset of customized software 
            designed to transform the way government agencies deliver services to citizens. 
            These platforms enable seamless, secure access to services such as online applications, 
            payments, and information sharing, improving transparency and operational efficiency. 
            By integrating these solutions, governments can reduce administrative overhead, 
            enhance citizen engagement, and drive digital transformation across public sectors. 
            At Govtech Africa, we play a pivotal role in helping government agencies to develop, 
            implement, and scale innovative, locally relevant AI-powered digital solutions that 
            improve service delivery and foster greater public trust.`,
            image: '/images/e_govt_portals.png',
            web_direction: 'normal',
            mob_direction: 'reverse'
        },
        {
            title: 'Web and Mobile Applications',
            description: `Web and mobile applications are vital for modernizing government services 
            and improving citizen engagement. These applications enable government agencies to 
            deliver services, share information, and interact with the public in a seamless, 
            accessible manner across various devices. Whether for e-government services, public 
            outreach, or internal operations, web and mobile apps enhance convenience, efficiency, 
            and transparency. As a specialized government technology services provider, Govtech 
            Africa develops and deploys custom web and mobile applications tailored to the unique 
            needs of government agencies, helping them improve service delivery, foster greater 
            citizen interaction, and drive digital transformation in the public sector.`,
            image: '/images/web_and_mobile.png',
            web_direction: 'reverse',
            mob_direction: 'reverse'
        },
        {
            title: 'APIs (Application Programming Interfaces)',
            description: `APIs are critical for enabling seamless integration between different 
            systems, applications, and services within government agencies. By allowing secure, 
            standardized communication between disparate systems, APIs help streamline workflows, 
            improve data sharing, and enhance interoperability across government platforms. 
            This fosters more efficient service delivery, better coordination, and greater 
            transparency. Govtech Africa specializes in developing and deploying robust APIs 
            tailored to the specific needs of respective government agencies, ensuring secure, 
            scalable, and efficient integration that enhances public service operations and 
            citizen experiences.`,
            image: '/images/api.png',
            web_direction: 'normal',
            mob_direction: 'reverse'
        },
        {
            title: 'Workflow Automation Solutions',
            description: `Customized workflow automation solutions help government agencies 
            streamline internal processes, reduce manual intervention, and improve efficiency. 
            From document management to approval workflows, automation tools can simplify complex 
            tasks and ensure consistency in service delivery. Govtech Africa can design and 
            implement automation solutions that help government agencies reduce bottlenecks 
            and improve productivity.`,
            image: '/images/workflow.png',
            web_direction: 'reverse',
            mob_direction: 'reverse'
        },
        {
            title: 'Enterprise Resource Planning (ERP) Systems',
            description: `ERP systems integrate various functions within government agencies—such 
            as finance, human resources, procurement, and logistics—into a unified platform. 
            Tailored ERP solutions improve operational efficiency, reduce redundancies, and 
            ensure compliance with regulations. Govtech Africa can develop ERP systems that are 
            specifically designed to meet the needs of public sector organizations, ensuring 
            streamlined operations and better resource management.`,
            image: '/images/ERP.png',
            web_direction: 'normal',
            mob_direction: 'reverse'
        },
    ]
  return (
    <div className={styles.capacity_building_section}>
      <div className={styles.divider}></div>
        <div className={styles.capacity_building_content}>
          <ServiceIntroSection
            title='Customised Software Solutions'
            subtext='We co-create the best solutions tailored to each agency’s need'
            description='We offer a comprehensive suite of customized software solutions from 
            e-government platforms, to web and mobile applications, application programming 
            interfaces (APIs) and much more, designed to streamline administrative processes, 
            enhance citizen and private sector engagement, improve decision-making processes, 
            and foster greater transparency and accountability within government institutions. 
            Our commitment is in ensuring the delivery of robust, scalable, and secure software 
            systems that drive growth and enhance operational efficiency.'
            top_image='/svgs/customised_services_1.svg'
            bottom_image='/svgs/customised_services_2.svg'
            description_class={styles.description_class}
            subtext_class={styles.subtext_class}
            top_image_class={styles.top_image_class}
          />
          <div className={styles.customised_services_section}>
            <div className={styles.customised_services}>
              {services.map((service: ServiceCardProps, index: number) =>
                <ServicesCard key={index} {...service}
                    // title={service?.title} description={service?.description}
                    // image={service?.image}
                    // direction={service?.direction}
                />
            )}
            </div>
          </div>
          <Partners />
          <Insights isDivider={false}  />
        </div>
        <div className={styles.divider_green}></div>
    </div>
  )
}

export default CustomisedSoftware