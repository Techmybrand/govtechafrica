"use client";
import React, { useState } from "react";
import { Modal } from "@/shared";
import { CookieSettingsModal } from "..";
import Link from "next/link";
// import { setCookie, getCookie } from 'cookies-next';
import styles from './CookiesModal.module.scss';
import { saveConsent } from "@/lib/cookieConsent";
interface CookiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookiesModal = ({ isOpen, onClose }: CookiesModalProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleAccept = () => {
    const fullConsent = { analytics: true, performance: true, advertising: true };
    saveConsent(fullConsent);
    localStorage.setItem('cookieConsent', 'granted');
    onClose();
  };

  const handleDecline = () => {
    const minimalConsent = { analytics: false, performance: false, advertising: false };
    saveConsent(minimalConsent);
    localStorage.setItem('cookieConsent', 'denied');
    onClose();
  };

  return (
    <React.Fragment>
      <Modal isOpen={isOpen} onClose={() => {}} className={styles.modal_body}>
        <div className={styles.modal_content_body}>
          {/* <div className={styles.modal_header}>
            <h1>Accept the use of Cookies</h1>
            <div onClick={onClose} className={styles.close_icon}>
              <h3>x</h3>
            </div>
          </div> */}
          <div className={styles.modal_content}>
            <div className={styles.text}>
              <h3>
                Welcome to govetchafrica.com! In order to provide a more relevant experience for you, we 
                use cookies to enable some website functionality. Cookies help us see which articles most 
                interest you; allow you to easily share articles on social media; permit us to deliver 
                content, jobs and ads tailored to your interests and locations; and provide many other site 
                benefits. For more information, please review our
                <span><Link href='/cookies-policy'> Cookies Policy</Link></span> and
                <span><Link href='/privacy-policy'> Privacy Statement</Link></span>
              </h3>
            </div>
            <div className={styles.ctas}>
              <h4 onClick={() => setOpenModal(true)}>Cookies Settings</h4>
              <div className={styles.buttons}>
                <button className={styles.accept_btn} onClick={handleAccept}>
                  <h3>Accept Cookies</h3>
                </button>
                <button className={styles.decline_btn} onClick={handleDecline}>
                  <h3>Decline Cookies</h3>
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <CookieSettingsModal isOpen={openModal} onClose={() => setOpenModal(false)} />
    </React.Fragment>
  )
}

export default CookiesModal