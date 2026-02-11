"use client";
import React, { useState, useEffect } from "react";
import { Modal, Accordion, AnalyticsToggle } from "@/shared";
import { ConsentCategories, getConsent, saveConsent } from "@/lib/cookieConsent";
import Link from "next/link";
import styles from "./CookieSettingsModal.module.scss";
interface CookiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CookieSettingsModal = ({ isOpen, onClose }: CookiesModalProps) => {
  const saved = getConsent();
  const [consents, setConsents] = useState<ConsentCategories>({
    analytics: saved.analytics ? saved.analytics : false,
    performance: saved.performance ? saved.performance : false,
    advertising: saved.advertising ? saved.advertising : false,
  });
  useEffect(() => {
    if (isOpen) {
      setConsents({
        analytics: saved.analytics,
        performance: saved.performance,
        advertising: saved.advertising,
      });
    }
  }, [isOpen, saved.analytics, saved.performance, saved.advertising]);
  const updateConsent = (key: keyof ConsentCategories, value: boolean) => {
    setConsents(prev => ({ ...prev, [key]: value }));
  };

  const handleAcceptAll = () => {
    const allGranted = { analytics: true, performance: true, advertising: true };
    setConsents(allGranted);
    saveConsent(allGranted);
    onClose();
  };

  const handleRejectAll = () => {
    const allDenied = { analytics: false, performance: false, advertising: false };
    setConsents(allDenied);
    saveConsent(allDenied);
    onClose();
  };
  const handleSaveChoices = () => {
    saveConsent(consents);
    onClose();
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} className={styles.modal_body}>
      <div className={styles.modal_content_body}>
        <div className={styles.modal_header}>
          <h1>Govtech Africa</h1>
          <div onClick={onClose} className={styles.close_icon}>
            <h3>x</h3>
          </div>
        </div>
        <div className={styles.modal_content_container}>
          <div className={styles.modal_content}>
            <h2>Privacy Preference Center</h2>
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
              learn more about how we use cookies and the purposes they serve, please review our{' '}
              <span><Link onClick={onClose} href="/cookies-policy">Cookies Policy.</Link></span>
            </h3>
          </div>
          <button onClick={handleAcceptAll} className={styles.accept_all}>
            <h3>Accept All</h3>
          </button>
          <div className={styles.preferences}>
            <h2>Manage Consent Preferences</h2>
            <div className={styles.preferences_body}>
              <Accordion title="Strictly Necessary Cookies"
                title_icon={<h6>Always Active</h6>}
              >
                <p>
                  These cookies are essential in order to enable you to move around the site and use its 
                  features, such as accessing secure areas of the site. Without these cookies, services you 
                  have asked for cannot be provided.
                </p>
              </Accordion>
              <Accordion title="Analytics Cookies"
                title_icon={
                  <AnalyticsToggle active={consents.analytics}
                    setActive={(value: boolean) => updateConsent('analytics', value)}
                  />
                }
              >
                <p>
                  These cookies enable us to employ data analytics so we can measure and improve the 
                  performance of our site and to personalize and enhance your profile-based experience on 
                  our site. They help us test and deliver content that is more relevant to you by analyzing 
                  how you interact with our site.
                  <br />
                  <br />
                  {`These cookies don't collect information that identifies a website visitor at an 
                  individual level. Non-identifiable region-based data is leveraged by service providers 
                  acting on our behalf, including Adobe Analytics, Adobe Target (including using AI for 
                  website performance improvement), Audience Manager, Contentsquare, and Demandbase. 
                  These service providers are unable to use this data for their own purposes.`}
                </p>
              </Accordion>
              <Accordion title="Performance Cookies and Functional Cookies"
                title_icon={
                  <AnalyticsToggle active={consents.performance}
                    setActive={(value: boolean) => updateConsent('performance', value)}
                  />
                }
              >
                <p>
                  <i>Performance cookies</i> {`are generally third-party cookies from vendors we work with or who 
                  work on our behalf that collect information about your visit and use of the Govtech Africa 
                  website, for instance which pages you visit the most often, and if you get error messages 
                  from web pages. These cookies don't collect information that identifies a visitor. All 
                  information these cookies collect is anonymous and is only used to improve how the website 
                  works. Third party vendors may have access to this data and may use it to improve their 
                  overall services and offerings.`}
                  <br />
                  <br />
                  <i>Functionality cookies</i> allow a site to remember choices you make (such as your username, 
                  language or the region you are in) and provide more enhanced, personal features. These 
                  cookies cannot track your browsing activity on other websites. They don&apos;t gather any 
                  information about you that could be used for advertising or remembering where you&apos;ve been 
                  on the Internet outside our site.
                </p>
              </Accordion>
              <Accordion title="Advertising and Social Media Cookies"
                title_icon={
                  <AnalyticsToggle active={consents.advertising}
                    setActive={(value: boolean) => updateConsent('advertising', value)}
                  />
                }
              >
                <p>
                  Advertising and social media cookies (including web beacons and other tracking and 
                  storage technologies) are used to (1) deliver advertisements more relevant to you and 
                  your interests; (2) limit the number of times you see an advertisement; (3) help measure 
                  the effectiveness of the advertising campaign; (4) retargeting to Govtech Africa 
                  websites/information and (5) understand people’s behavior after they view an 
                  advertisement. They are usually placed on behalf of advertising networks with the site 
                  operator’s permission. They remember that you have visited a site and quite often they 
                  will be linked to site functionality provided by the other organization. This may impact 
                  the content and messages you see on other websites you visit. If you do not allow these 
                  cookies you may not be able to use or see these sharing tools or play certain videos on 
                  our site.
                </p>
              </Accordion>
            </div>
          </div>
          <div className={styles.ctas}>
            <button onClick={handleRejectAll} className={styles.accept_btn}>
              <h3>Reject All</h3>
            </button>
            <button onClick={handleSaveChoices} className={styles.decline_btn}>
              <h3>Confirm my choices</h3>
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default CookieSettingsModal