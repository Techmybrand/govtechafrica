import React from "react";
import { Modal } from "@/shared";
import styles from './CookieSettingsModal.module.scss';

interface CookiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookieSettingsModal = ({ isOpen, onClose }: CookiesModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={styles.modal_body}>
        
    </Modal>
  )
}

export default CookieSettingsModal