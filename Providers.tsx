"use client";
import React from "react";
// import Script from 'next/script';
// import { CookiesModal } from '@/shared/Modals';
import { AppProvider } from "./context/AppContext";

const Providers: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // const [showModal, setShowModal] = useState<boolean>(false);
  // const [consent, setConsent] = useState<string | null>(null);
  // console.log('consent: ', consent);

  // useEffect(() => {
  //   const storedConsent = localStorage.getItem('cookieConsent');
  //   setConsent(storedConsent);
  //   if (!storedConsent) {
  //       setShowModal(true);
  //   }
  // }, []);
  return (
    <React.Fragment>
        {/* <Script id="ga-consent-default" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', { analytics_storage: 'denied' });
          `}
        </Script>
        <Script
          src="https://www.googletagmanager.com"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', { anonymize_ip: true });
          `}
        </Script> */}
        {/* <CookiesModal isOpen={showModal} onClose={() => setShowModal(false)} /> */}
        <AppProvider>
            {children}
        </AppProvider>
    </React.Fragment>
  )
}

export default Providers