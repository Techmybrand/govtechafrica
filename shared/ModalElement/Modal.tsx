"use client";
import React, { useEffect } from "react";
import styles from "./Modal.module.scss";

export interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  className?: string;
  sec_className?: string;
}

const Modal = ({ isOpen, onClose, children, className, sec_className }: ModalProps) => {

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  
  return (
    <React.Fragment>
      {isOpen && (
        <div className={`${styles.overlay} ${sec_className} backdrop-blur-sm`} onClick={onClose}>
          <div className={`${styles.modal_container} ${className}`} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

export default Modal