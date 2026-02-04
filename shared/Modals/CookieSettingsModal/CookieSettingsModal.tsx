import React from "react";
import { Modal } from "@/shared";
import styles from "./CookieSettingsModal.module.scss";
interface CookiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookieSettingsModal = ({ isOpen, onClose }: CookiesModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={styles.modal_body}>
        <div className={styles.modal_content_body}>
        <div className={styles.modal_header}>
          <h1>Govtech Africa</h1>
          <div onClick={onClose} className={styles.close_icon}>
            <h3>x</h3>
          </div>
        </div>
        <div className={styles.modal_content}>
          <h3>
            GovTechAfrica is the data controller for information processed through cookies on this website. 
            Some cookies used on this site are set by trusted third-party service providers such as Meta, 
            Google, X (formerly Twitter), Instagram, LinkedIn, including analytics and platform partners, 
            to help us understand site usage, improve performance, and deliver relevant content. You can 
            manage your cookie preferences by enabling or disabling 
            cookies by category using the controls provided. Accepting cookies activates the features 
            associated with each category, while declining them may limit certain site functionalities. 
            We respect your right to privacy. You may choose not to allow certain types of cookies and 
            can withdraw or change your consent at any time through our cookie preference manager. To 
            learn more about how we use cookies and the purposes they serve, please review our 
            <span>Cookies Policy.</span>
          </h3>
        </div>
        <div className={styles.accept_all}></div>
        <div className={styles.preferences}>
          <h3></h3>
          <div></div>
        </div>
        <div className={styles.ctas}>
          <button className={styles.accept_btn}>
            <h3>Reject All</h3>
          </button>
          <button className={styles.decline_btn}>
            <h3>Confirm my choices</h3>
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default CookieSettingsModal