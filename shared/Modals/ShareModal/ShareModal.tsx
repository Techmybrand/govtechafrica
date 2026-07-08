/* eslint-disable */
"use client";
import React, { useState } from "react";
import { Modal } from "@/shared";
import Image from "next/image";
import styles from "./ShareModal.module.scss";
import toast from "react-hot-toast";
import { 
  EmailShareButton, 
  FacebookShareButton, 
  LinkedinShareButton, 
  TelegramShareButton, 
  TwitterShareButton, 
  WhatsappShareButton,
  EmailIcon, 
  FacebookIcon, 
  LinkedinIcon, 
  TelegramIcon, 
  TwitterIcon,
  WhatsappIcon,
} from "next-share";

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  shareUrl: string;
  title?: string;
}

const ShareModal = ({ isOpen, onClose, shareUrl, title = "Share" }: ShareModalProps) => {
    const [copied, setCopied] = useState<boolean>(false);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }).catch((err: any) => {
            console.error("Failed to copy text: ", err);
        });
    };

    const handleInstagramShare = () => {
        navigator.clipboard.writeText(shareUrl).then(() => {
            toast.success("Link copied! Opening Instagram...");
            window.open("https://www.instagram.com", "_blank", "noopener,noreferrer");
        }).catch((err: any) => {
            console.error("Failed to copy text for Instagram: ", err);
        });
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose} className={styles.share_modal_container} sec_className={styles.share_overlay}>
            <div className={styles.modal_content}>
                <div onClick={onClose} className={styles.close_button}>
                    <h3>+</h3>
                </div>
                
                <div className={styles.modal_header}>
                    <h1>{title}</h1>
                </div>

                <div className={styles.share_options}>
                    <div className={styles.share_grid}>
                        <FacebookShareButton className={styles.share_btn} url={shareUrl}>
                            <FacebookIcon size={24} round />
                            <span>Facebook</span>
                        </FacebookShareButton>

                        <TwitterShareButton className={styles.share_btn} url={shareUrl} title={title}>
                            <TwitterIcon size={24} round />
                            <span>Twitter</span>
                        </TwitterShareButton>

                        <LinkedinShareButton className={styles.share_btn} url={shareUrl} title={title}>
                            <LinkedinIcon size={24} round />
                            <span>LinkedIn</span>
                        </LinkedinShareButton>

                        <WhatsappShareButton className={styles.share_btn} url={shareUrl} title={title} separator=": ">
                            <WhatsappIcon size={24} round />
                            <span>WhatsApp</span>
                        </WhatsappShareButton>

                        <TelegramShareButton className={styles.share_btn} url={shareUrl} title={title}>
                            <TelegramIcon size={24} round />
                            <span>Telegram</span>
                        </TelegramShareButton>

                        <EmailShareButton className={styles.share_btn} url={shareUrl} subject={title}>
                            <EmailIcon size={24} round />
                            <span>Email</span>
                        </EmailShareButton>

                        <button onClick={handleInstagramShare} className={styles.instagram_btn}>
                            <div className={styles.instagram_icon_wrapper}>
                                <Image src="/svgs/instagram.svg" alt="Instagram" width={20} height={20} />
                            </div>
                            <span>Instagram</span>
                        </button>
                    </div>
                </div>

                <div className={styles.copy_link_section}>
                    <input 
                        type="text" 
                        readOnly 
                        value={shareUrl} 
                        className={styles.link_input}
                        onClick={(e) => (e.target as HTMLInputElement).select()}
                    />
                    <button onClick={handleCopyLink} className={styles.copy_btn}>
                        {copied ? "Copied!" : "Copy Link"}
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ShareModal;