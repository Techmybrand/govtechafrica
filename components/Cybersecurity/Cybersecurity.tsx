import React from 'react';
import { Partners, ServiceIntroSection, ServicesCard } from '@/shared';
import { Insights } from '../home';
import { ServiceCardProps } from '@/interfaces';
import styles from './Cybersecurity.module.scss';
import Image from 'next/image';

const Cybersecurity = () => {
  const services: ServiceCardProps[] = [
    {
      title: 'Cyber Analytics',
      description: `We deploy the Foundational Automation Support Technology (FAST) framework as an 
      innovative approach to automatically discover and track all IP-addressable network devices — 
      reducing manual, labor-intensive processes like asset inventory. This approach facilitates 
      a configuration management database (CMDB) and incorporates AI and machine learning to 
      understand event relationships better and perform predictive analytics between events.`,
      image: '/images/cyber_analytics.png',
      web_direction: 'normal',
      mob_direction: 'reverse'
    },
    {
      title: 'Zero Trust',
      description: `A breach is unavoidable. Minimizing impact is essential. With cyber threats 
      continuously evolving, Zero Trust challenges traditional cybersecurity thinking. It assumes 
      that networks are either actively under attack or already breached and require continuous 
      security validation. Understanding this concept, the Leidos Zero Trust Readiness Level pairs 
      the level of cyber protection to the evaluated threat risk, providing a scale with which 
      organizations can measure their readiness against increasingly advanced threats.`,
      image: '/images/zero_trust.png',
      web_direction: 'reverse',
      mob_direction: 'reverse'
    },
    {
      title: 'Quantum Technologies',
      description: `Quantum technologies offer critical advantages to inaccessible classical 
      technologies. Collaboration with our recognized leaders in cybersecurity, digital modernization, 
      AI/ML, and software drives multi-disciplinary innovation with emerging quantum technologies 
      to build practical solutions for our customer’s challenges.`,
      image: '/images/quantum_technologies.png',
      web_direction: 'normal',
      mob_direction: 'reverse'
    },
    {
      title: 'Insider Threat',
      description: `As the complexity of the workplace increases, insider threats increase, too. 
      Monitoring cyber footprints and human behavioral indicators in a single platform is the ideal 
      combination to detect and prevent insider attacks before they occur. Partner with our team to 
      ensure the protection of your company’s critical assets and help you prevent an insider 
      incident before it occurs.`,
      image: '/images/insider_threat.png',
      web_direction: 'reverse',
      mob_direction: 'reverse'
    },
    {
      title: 'Cognitive Cybersecurity',
      description: `Cognitive cybersecurity leverages advanced technologies like AI, machine learning, 
      and data analytics to enhance threat detection, response, and prevention. By analyzing vast 
      amounts of data in real-time, cognitive systems can identify patterns, detect anomalies, and 
      predict potential security risks faster and more accurately than traditional methods. This 
      enables organizations to proactively defend against emerging threats, automate response actions, 
      and continuously improve their security posture, all while reducing the burden on human teams.`,
      image: '/images/cognitive_cybersecurity.png',
      web_direction: 'normal',
      mob_direction: 'reverse'
    },
  ]
  return (
    <div className={styles.capacity_building_section}>
      <div className={styles.divider}></div>
        <div className={styles.capacity_building_content}>
          <ServiceIntroSection
            title='Cybersecurity'
            subtext='Emerging threats demand revolutionary cyber protection. 
            De-risk tomorrow by boosting cybersecurity today'
            description='In an era where being ‘smart’ is the baseline, Govtech Africa sets a new 
            standard by redefining what it means to stay ahead of evolving cyber threats. With our 
            AI-Driven Cyber Defense Framework, we don’t just react to attacks—we predict, adapt, 
            and neutralize threats before they arise. Our philosophy goes beyond conventional 
            intelligence; we make smart solutions smarter, transforming cyber defense into a 
            proactive, resilient, and adaptive strategy that safeguards your mission-critical 
            operations.'
            top_image='/svgs/cybersecurity_1.svg'
            bottom_image='/svgs/cybersecurity_2.svg'
            description_class={styles.description_class}
            subtext_class={styles.subtext_class}
            top_image_class={styles.top_image_class}
          />
          <div className={styles.ai_section}>
            <div className={styles.ai}>
              <div className={styles.text}>
                <h3>
                  In an era where being ‘smart’ is the baseline, Govtech Africa sets a new standard 
                  by redefining what it means to stay ahead of evolving cyber threats. With our 
                  AI-Driven Cyber Defense Framework, we don’t just react to attacks—we predict, 
                  adapt, and neutralize threats before they arise. Our philosophy goes beyond 
                  conventional intelligence; we make smart solutions smarter, transforming cyber 
                  defense into a proactive, resilient, and adaptive strategy that safeguards your 
                  mission-critical operations.
                </h3>
              </div>
              <div className={styles.image}>
                <Image alt='image' fill src='/svgs/cybersecurity_3.svg' />
              </div>
            </div>
          </div>
          <div className={styles.centerpiece_section}>
            <div className={styles.centerpiece_container}>
              <div className={styles.text_wrapper}>
                <div className={styles.line}></div>
                <h3>
                  When you choose Govtech Africa, you’re not just preparing for the future—you’re 
                  leading it. Our full-spectrum cyber solutions cover every dimension of protection, 
                  from offensive and defensive capabilities to cyber-physical systems integration. 
                  We deliver cutting-edge advancements in Zero Trust Architecture, Cognitive 
                  Cybersecurity, Quantum Cryptography, Identity, Credential, and Access Management 
                  (ICAM), and more.
                </h3>
              </div>
              <div className={styles.text_wrapper}>
                <div className={styles.line}></div>
                <h3>
                  At Govtech Africa, we don’t just protect; we empower. With our pioneering approach, 
                  we help you stay one step ahead, creating a secure, smarter, and more resilient 
                  future for your organization.
                </h3>
              </div>
            </div>
          </div>
          <div className={styles.customised_services_section}>
            <div className={styles.customised_services}>
              {services.map((service: ServiceCardProps, index: number) =>
                <ServicesCard key={index} {...service} />
              )}
            </div>
          </div>
          <Partners type='cybersecurity' />
          <Insights isDivider={false}  />
        </div>
        <div className={styles.divider_green}></div>
    </div>
  )
}

export default Cybersecurity