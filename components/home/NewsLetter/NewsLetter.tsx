"use client";
import React from "react";
import styles from "./NewsLetter.module.scss";
import { Button, InputField } from "@/shared";

const NewsLetter = () => {
    return (
        <div className={styles.newsletter_section}>
            <div className={styles.newsletter_container}>
                <div className={styles.newsletter_content}>
                    <h1>Subscribe to Our Newsletter</h1>
                    <div className={styles.ctas}>
                        <InputField required className={styles.input_field}
                            placeholder="Enter your Name" name="Name"
                        />
                        <InputField required className={styles.input_field}
                            placeholder="Enter your email" name="Email"
                        />
                        <div></div>
                        <Button className={styles.subscribe_btn}>
                            Subscribe
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter