import React from "react";
import { Modal } from "@/shared";

interface CookiesModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const CookiesModal = ({ isOpen, onClose }: CookiesModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        CookiesModal
    </Modal>
  )
}

export default CookiesModal