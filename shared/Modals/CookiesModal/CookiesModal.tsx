import React from "react";
import { Modal } from "@/shared";
import Link from "next/link";
// import { setCookie, getCookie } from 'cookies-next';
import styles from './CookiesModal.module.scss';
interface CookiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookiesModal = ({ isOpen, onClose }: CookiesModalProps) => {
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'granted');
    onClose();
    // window.gtag?.('consent', 'update', { analytics_storage: 'granted' });
    // window.gtag?.('event', 'consent_granted', { event_category: 'engagement' });
    // try {
    //   await fetch('/api/log-consent', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ consent: 'granted', timestamp: new Date().toISOString() }),
    //   });
    // } catch (error) {
    //   console.error('Failed to log consent:', error);
    // }
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'denied');
    // window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={() => {}} className={styles.modal_body}>
      <div className={styles.modal_content_body}>
        <div className={styles.modal_header}>
          <h1>Accept the use of Cookies</h1>
          <div onClick={onClose} className={styles.close_icon}>
            <h3>x</h3>
          </div>
        </div>
        <div className={styles.modal_content}>
          <div className={styles.text}>
            <h3>
              {`We use cookies to improve your browsing experience, serve personlised content and analyse 
                our traffic. By clicking 'Accept all cookies', you agree to the storing of cookies on your 
                device.`
              }
            </h3>
            <h3>
              {/* You can customise your settings by clicking Manage preferences. */}
              For more details, see our <Link href='/cookies-policy'>Cookie Policy</Link> and 
              <Link href='/privacy-policy'> Privacy Statement</Link>
            </h3>
          </div>
          <div className={styles.ctas}>
            <button className={styles.accept_btn} onClick={handleAccept}>
              <h3>Accept Cookies</h3>
            </button>
            <button className={styles.decline_btn} onClick={handleDecline}>
              <h3>Decline Cookies</h3>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default CookiesModal