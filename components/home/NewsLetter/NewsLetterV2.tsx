"use client";
import React from "react";
import Image from "next/image";
import { InputField } from "@/shared";
import styles from "./NewsLetterV2.module.scss";

const NewsLetterV2 = () => {
    return (
        <div className={styles.section}>
            <div className={styles.background_wrapper}>
                <Image src="/images/newsletter.png" alt="Newsletter Background" fill sizes="100%" className={styles.bg_image} />
            </div>
            
            <div className={styles.container}>
                <div className={styles.content}>
                    <h3>Sign up to our Newsletter</h3>
                    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <div className={styles.input_group}>
                            <InputField required className={styles.input_field} placeholder="Enter your first name" name="firstName" />
                            <InputField required className={styles.input_field} placeholder="Enter your email address" name="email" type="email" />
                        </div>
                        <button type="submit" className={styles.submit_button}>Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsLetterV2;
