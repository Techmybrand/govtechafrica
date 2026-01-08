import React from 'react';
import Image from 'next/image';
import styles from './Mission.module.scss';

const Mission = () => {
  return (
    <div className={styles.mission_section}>
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.details}>
                    <div className={styles.text}>
                        <h3>
                            Our <span>Mission</span>
                        </h3>
                        <p>
                            We are on a mission to build thriving and resilient
                            societies by providing state-of-the-art technology for
                            African governments and public institutions. Our goal is
                            simple: to improve transparency, drive efficiency, and
                            enable government excellence.
                        </p>
                    </div>
                    <div className={styles.row}>
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => (
                            <div key={item} className={styles.line}></div>
                        ))}
                    </div>
                </div>
                <div className={styles.image}>
                    <Image src="/images/mission.png" priority fill alt="mission" sizes="100%" />
                </div>
			</div>
        </div>
    </div>
  )
}

export default Mission