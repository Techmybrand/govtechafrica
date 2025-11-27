"use client";
import React from "react";
import Image from "next/image";
import styles from './ResearchDetails.module.scss';

const ResearchDetails = () => {
  return (
    <section className={styles.details_container}>
        <div className={styles.details_content}>
            <div className={styles.details_header}>
                <h1>The intersection of AI governance and cybersecurity</h1>
                <div className={styles.time_and_date}>
                    <h4>5mins read</h4>
                    <h4>March 11, 2025</h4>
                </div>
            </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.details_content}>
            <div className={styles.details_image}>
                <Image alt="" fill src='/images/preview.png' />
            </div>
            <div className={styles.details_body}>
                <h2>
                    The Importance of AI Governance in Cybersecurity
                </h2>
                <h3>
                    AI governance plays a critical role in ensuring that the technology is used 
                    responsibly, securely, and ethically. Transparency and accountability must be at the 
                    core of AI implementation, ensuring that automated decision-making processes can be 
                    audited and explained. There is also a growing concern around bias in AI models, as 
                    security algorithms trained on unbalanced datasets may lead to inaccurate threat 
                    assessments or discriminatory security measures. Addressing these concerns requires a 
                    governance structure that enforces fairness and ensures that AI systems are trained 
                    on diverse and representative data.
                </h3>
                <br />
                <h3>
                    Furthermore, while AI enhances cybersecurity capabilities, it should not replace 
                    human decision-making altogether. AI is most effective when it works in tandem with 
                    human analysts who can interpret data with context and intuition. A balanced approach,
                    where AI handles large-scale threat detection and human oversight ensures nuanced 
                    decision-making, is the way forward. This requires governments and organizations to 
                    invest in workforce training, equipping professionals with the knowledge to oversee 
                    AI-driven security operations effectively.
                    
                </h3>
                <br />
                <h3>
                    Another pressing issue is the need for standardized AI regulations. African countries 
                    are at different stages of digital transformation, and the lack of a cohesive 
                    regulatory framework makes it difficult to implement AI governance strategies 
                    consistently. Policymakers must collaborate to establish unified guidelines that 
                    address both AI governance and cybersecurity, ensuring that African nations do not 
                    lag behind in technological advancements while maintaining secure and ethical AI 
                    applications.
                </h3>
                <br />
            </div>
            <div className={styles.details_image_2}>
                <Image alt="" fill src='/images/preview_2.png' />
            </div>
            <div className={styles.details_body}>
                <h2>
                    Cloud Computing: A Friend and Foe in Cybersecurity
                </h2>
                <h3>
                    Another key element in this discussion is cloud computing, which has transformed how 
                    data is stored, shared, and protected. For African governments and enterprises, cloud 
                    adoption has made it easier to access and manage digital assets, fostering 
                    collaboration and innovation. Yet, cloud environments come with their own 
                    cybersecurity challenges. Multi-cloud strategies, while offering flexibility, also 
                    introduce risks such as inconsistent security protocols, data sovereignty concerns, 
                    and expanded attack surfaces. When security frameworks vary across cloud platforms, 
                    ensuring a unified defense strategy becomes difficult, leaving room for 
                    vulnerabilities.
                </h3>
                <br />
                <h3>
                    One of the major concerns African governments face with cloud computing is data 
                    sovereignty. Many organizations rely on cloud service providers based outside the 
                    continent, raising questions about control over sensitive information. If national 
                    security data is stored in servers governed by foreign jurisdictions, there is a 
                    potential risk of unauthorized access or misuse. This calls for greater investment in 
                    local cloud infrastructure and the establishment of sovereign cloud policies that 
                    ensure African nations retain control over their critical digital assets.
                </h3>
                <br />
                <h3>
                    At the same time, cloud environments can be leveraged to bolster cybersecurity. 
                    AI-powered threat detection systems hosted on the cloud enable real-time monitoring 
                    and automated incident responses, allowing governments and businesses to detect 
                    breaches before they escalate. The challenge lies in deploying these solutions in a 
                    way that balances security, accessibility, and compliance with regional data
                    protection laws.
                </h3>
                <br />
            </div>
        </div>
        <div className={styles.divider_green}></div>
    </section>
  )
}

export default ResearchDetails