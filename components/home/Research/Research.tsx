import React from "react";
import { ResearchCard } from "@/shared";
import styles from './Research.module.scss';

const Research = () => {
  return (
    <div className={styles.research_container}>
        <div className={styles.research_wrapper}>
            {['/images/research_1.png', '/images/research_2.png',
                '/images/research_1.png', '/images/research_2.png',
                '/images/research_1.png', '/images/research_2.png',
                '/images/research_1.png', '/images/research_2.png',
            ].map((src: string, index: number) =>
                    <ResearchCard key={index} image={src} alt="image"
                        header={`Reforming the Public Sector in Africa Through Digital 
                            Transformation - Lessons from India's Digital Stack`
                        }
                        description={`This case study analyzes how India's Digital Public 
                            Infrastructure (DPI) successfully created a unified digital identity and 
                            financial system that serves one of the world's largest populations — 
                            offering valuable insights for African governments.`
                        }
                        btnText="Case study"
                    />
            )}
        </div>
        <div className={styles.divider}></div>
    </div>
  )
}

export default Research