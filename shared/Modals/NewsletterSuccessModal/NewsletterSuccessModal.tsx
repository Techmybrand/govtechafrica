"use client";
import React from "react";
import styles from "./NewsletterSuccessModal.module.scss"
import Image from "next/image";
import { Button, Modal } from "@/shared";
import Link from "next/link";

interface NewsletterSuccessModalProps {
    open: boolean
    closeModal: () => void
}

const NewsletterSuccessModal = ({ open, closeModal }: NewsletterSuccessModalProps) => {
    return (
        <Modal isOpen={open} onClose={closeModal} className={styles.newsletter_modal_container}>
            <div className={styles.modal_content}>
                <div className={styles.close_button}>
                    <h3>+</h3>
                </div>
                <div className={styles.success_icon}>
                    <div className={styles.success_image}>
                        <Image alt="success" fill src="/svgs/success.svg" />
                    </div>
                </div>
                <div className={styles.modal_text}>
                    <h1>Thank you for subscribing!</h1>
                    <p>
                        You will receive an email shortly to 
                        confirm your subscription.
                    </p>
                </div>
            </div>
        </Modal>
    )
}

export default NewsletterSuccessModal