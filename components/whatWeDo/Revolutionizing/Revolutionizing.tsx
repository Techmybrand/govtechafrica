import React from "react";
import styles from "./Revolutionizing.module.scss";
import Image from "next/image";

const Revolutionizing = () => {
    return (
        <div className={styles.revolutionizing_sector}>
            <div className={styles.revolutionizing_container}>
                <div className={styles.revolutionizing_text}>
                    <h1>Revolutionizing Governance Through Technology</h1>
                    <p>For some the word impossible ends discussions, for us, it starts the conversation</p>
                </div>
                <div className={styles.mission_and_vision}>
                    <div className={styles.mission}>
                        <h3>Our Mission</h3>
                        <p>
                            We&apos;re building thriving, resilient societies by putting state-of-the-art technology in the hands of 
                            African governments and public institutions — improving transparency, driving efficiency, and enabling
                            government excellence.
                        </p>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.vision}>
                        <h3>Our Vision</h3>
                        <p>
                            To be the leading technology partner and systems integrator helping African governments scale efficiency
                            and governance through solutions built for their reality, not imported from someone else&apos;s.
                        </p>
                    </div>
                </div>
                <div className={styles.revolutionizing_image}>
                    <Image src="/images/revolution.png" alt="Revolutionizing" fill />
                </div>
            </div>
        </div>
    )
}

export default Revolutionizing