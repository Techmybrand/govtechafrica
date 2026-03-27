// "use client";
// import React, { useEffect } from "react";

// interface GruveTicketButtonProps {
//   eventAddress: string;
//   themeColor?: string;
//   backgroundColor?: string;
//   buttonTextColor?: string;
//   children?: React.ReactNode;
//   className?: string;
// }

// const GruveTicketButton: React.FC<GruveTicketButtonProps> = ({
//   eventAddress,
//   themeColor = "#00BF4D",
// //   backgroundColor = "#00BF4D",
//   buttonTextColor = "white",
//   children,
//   className,
// }) => {
//     useEffect(() => {
//         if (document.getElementById('gruve-echo-script')) return;

//         const script = document.createElement('script');
//         script.id = 'gruve-echo-script';
//         script.src = 'https://unpkg.com/@gruve/echo@latest/dist/index.umd.js';
//         script.async = true;
//         document.body.appendChild(script);

//         return () => {
//             const existingScript = document.getElementById('gruve-echo-script');
//             if (existingScript) existingScript.remove();
//         };
//     }, []);

//     return (
//         <a
//             className={`gruve-cta-button ${className}`}
//             data-gruve-event-address={eventAddress}
//             data-gruve-theme-color={themeColor}
//             data-gruve-button-text-color={buttonTextColor}
//         >
//             {children}
//         </a>
//     );
// };

// export default GruveTicketButton;

"use client";

import { useState } from "react";

export default function GruveWidgetTwo() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html, body {
            width: 100%;
            height: 100%;
            background: transparent;
          }
        </style>
      </head>
      <body>
        <a
          class="gruve-cta-button"
          data-gruve-event-address="0bfc8ff1245021bb034669ff8002133a536db1b4"
          data-gruve-theme-color="#00BF4D"
          data-gruve-button-text-color="white"
        >
          REGISTER
        </a>
        <script src="https://unpkg.com/react@18/umd/react.production.min.js"><\/script>
        <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"><\/script>
        <script src="https://unpkg.com/@gruve/echo@latest/dist/index.umd.js"><\/script>
        <script>
          // Notify parent when modal opens/closes
          const observer = new MutationObserver((mutations) => {
            const modal = document.querySelector('[role="dialog"], .modal, [class*="modal"]');
            if (modal) {
              window.parent.postMessage({ gruveModalOpen: true }, '*');
            }
          });
          
          observer.observe(document.body, { 
            childList: true, 
            subtree: true 
          });

          // Listen for clicks on the button to expand
          document.addEventListener('click', (e) => {
            if (e.target.closest('.gruve-cta-button')) {
              window.parent.postMessage({ gruveModalOpen: true }, '*');
            }
          });

          // Listen for close events
          document.addEventListener('click', (e) => {
            if (e.target.closest('[class*="close"]') || 
                e.target.closest('[class*="overlay"]') ||
                e.target.closest('[class*="backdrop"]')) {
              setTimeout(() => {
                window.parent.postMessage({ gruveModalOpen: false }, '*');
              }, 100);
            }
          });

          // Also detect when modal is removed
          const closeObserver = new MutationObserver(() => {
            const modal = document.querySelector('[role="dialog"], .modal, [class*="modal"]');
            if (!modal) {
              window.parent.postMessage({ gruveModalOpen: false }, '*');
            }
          });
          
          setTimeout(() => {
            closeObserver.observe(document.body, { 
              childList: true, 
              subtree: true 
            });
          }, 1000);
        <\/script>
      </body>
    </html>
  `;

    if (typeof window !== "undefined") {
        window.addEventListener("message", (event) => {
            if (event.data.gruveModalOpen !== undefined) {
            setIsOpen(event.data.gruveModalOpen);
            }
        });
    }

    return (
        <>
            {isOpen && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        zIndex: 9998,
                        background: "rgba(0, 0, 0, 0.5)",
                    }}
                    onClick={() => setIsOpen(false)}
                />
            )}

            <iframe
                srcDoc={html}
                style={{
                    border: "none",
                    overflow: "hidden",
                    ...(isOpen
                    ? {
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100vw",
                        height: "100vh",
                        zIndex: 9999,
                        background: "transparent",
                        }
                    : {
                            width: "160px",
                            height: "50px",
                            backgroundColor: "#00BF4D",
                            color: "#FFF",
                            borderRadius: '1rem',
                            fontSize: '0.875rem',
                            padding: '1.2rem 4rem',
                        }),
                }}
                title="Register"
                allow="payment"
            />
        </>
    );
}