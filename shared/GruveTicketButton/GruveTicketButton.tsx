"use client";
import React, { useEffect } from "react";

interface GruveTicketButtonProps {
  eventAddress: string;
  themeColor?: string;
  backgroundColor?: string;
  buttonTextColor?: string;
  children?: React.ReactNode;
  className?: string;
}

const GruveTicketButton: React.FC<GruveTicketButtonProps> = ({
  eventAddress,
  themeColor = "#00BF4D",
//   backgroundColor = "#00BF4D",
  buttonTextColor = "white",
  children,
  className,
}) => {
    useEffect(() => {
        if (document.getElementById('gruve-echo-script')) return;

        const script = document.createElement('script');
        script.id = 'gruve-echo-script';
        script.src = 'https://unpkg.com/@gruve/echo@latest/dist/index.umd.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            const existingScript = document.getElementById('gruve-echo-script');
            if (existingScript) existingScript.remove();
        };
    }, []);

    return (
        <a
            className={`gruve-cta-button ${className}`}
            data-gruve-event-address={eventAddress}
            data-gruve-theme-color={themeColor}
            data-gruve-button-text-color={buttonTextColor}
        >
            {children}
        </a>
    );
};

export default GruveTicketButton;