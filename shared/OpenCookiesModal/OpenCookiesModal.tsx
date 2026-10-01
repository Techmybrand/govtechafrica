"use client";
import React from "react";
import { useState, useEffect } from "react";
import { CookiesModal } from "../Modals";

const OpenCookiesModal = () => {
    const [showModal, setShowModal] = useState<boolean>(false);
    const [, setConsent] = useState<string | null>(null);
    // const [isMobile, setIsMobile] = useState<boolean>(false);
    useEffect(() => {
        // const handleResize = () => {
        // 	setIsMobile(window.innerWidth <= 650);
        // };
        const storedConsent = localStorage.getItem('cookieConsent');
        setConsent(storedConsent);
        if (!storedConsent) {
            setShowModal(true);
        }
        // handleResize();
        // window.addEventListener("resize", handleResize);
        // return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <CookiesModal isOpen={showModal} onClose={() => setShowModal(false)} />
    );
};

export default OpenCookiesModal;