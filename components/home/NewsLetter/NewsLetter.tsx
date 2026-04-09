"use client";
import React from "react";
import styles from "./NewsLetter.module.scss";
import { InputField } from "@/shared";
import Image from "next/image";

const NewsLetter = () => {
    return (
        <div className={styles.newsletter_section}>
            <div className={styles.newsletter_container}>
                <div className={styles.newsletter_content}>
                    <div className={styles.image}>
                        <Image alt="" fill src="/images/newsletter.png" />
                    </div>
                    <div className={styles.newsletter_text_and_ctas}>
                        <h1>Subscribe to Our Newsletter</h1>
                        <div className={styles.ctas}>
                            <h3>Subscribe to our Newsletter for latest updates</h3>
                            <InputField required className={styles.input_field}
                                placeholder="Enter your Name" name="Name"
                            />
                            <InputField required className={styles.input_field}
                                placeholder="Enter your email" name="Email"
                            />
                        </div>
                        <div className={styles.subscribe_btn}>
                            <p>Subscribe</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter