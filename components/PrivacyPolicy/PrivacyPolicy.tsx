import React from "react";
import { privacyPolicyData } from "@/mock/navLists.mock";
import { PrivacyPolicyProps } from "@/interfaces";
import styles from './PrivacyPolicy.module.scss';

const PrivacyPolicy = () => {
  return (
    <section className={styles.privacy_policy_section}>
      <div className={styles.privacy_policy_content}>
        <h1>Privacy Policy</h1>
        <h3>
          At GovTech INC, we are committed to safeguarding your personal information and respecting
          your privacy. This Privacy Policy explains the types of information we collect, how we use it,
          who we share it with, and the rights you have over your data. 
        </h3>
        <div className={styles.policies_container}>
          {privacyPolicyData?.map((item: PrivacyPolicyProps, index: number) =>
            <div key={index} className={styles.policies}>
              <h2>{`${index + 1}. ${item?.title}`}</h2>
              <h4>{item?.headerText}</h4>
              {item?.content?.length > 0 && (
                item?.content?.map((content: string, index: number) =>
                  <div key={index} className={styles.policies_content}>
                    <h3>- {content}</h3>
                  </div>
              ))}
            </div>
          )}
        </div>
        <p>Thank you for trusting GovTech INC. We are committed to ensuring your privacy and security.</p>
      </div>
    </section>
  )
}

export default PrivacyPolicy