"use client";
import React from "react";
import { Modal } from "@/shared";
import Image from "next/image";
import styles from "./NewsLetterFailureModal.module.scss";

interface Props {
    open: boolean;
    closeModal: () => void;
    message?: string;
}

const NewsLetterFailureModal = ({ open, closeModal, message }: Props) => {
    return (
        <Modal isOpen={open} onClose={closeModal}
            className={styles.newsletter_modal_container}
            sec_className={styles.newsletter_overlay}
        >
            <div className={styles.modal_content}>
                <div onClick={closeModal} className={styles.close_button}>
                    <h3>+</h3>
                </div>
                <div className={styles.success_icon}>
                    <div className={styles.success_image}>
                        <Image alt="error" fill src="/svgs/error.svg" />
                    </div>
                </div>
                <div className={styles.modal_text}>
                    <h1>{`An error occured: ${message}`}</h1>
                    <p>
                        We are so sorry we couldn't complete the 
                        sign up process. Please, try again shortly!
                    </p>
                </div>
            </div>
        </Modal>
    )
}

export default NewsLetterFailureModal