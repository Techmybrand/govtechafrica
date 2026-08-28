import React from "react";
import { Divider } from "@/shared";
import { privacyPolicyData } from "@/mock/navLists.mock";
import { PrivacyPolicyProps } from "@/interfaces";
import styles from './PrivacyPolicy.module.scss';

const PrivacyPolicy = () => {
  return (
    <React.Fragment>
      <section className={styles.privacy_policy_section}>
        <div className={styles.privacy_policy_content}>
          <h1>Privacy Policy</h1>
          <h3>
            At Govtech Africa, we are committed to safeguarding your personal information and respecting
            your privacy. This Privacy Policy explains the types of information we collect, how we use it,
            who we share it with, and the rights you have over your data. 
          </h3>
          <div className={styles.policies_container}>
            {privacyPolicyData?.map((item: PrivacyPolicyProps, index: number) =>
              <div key={index} className={styles.policies}>
                <h2>{`${index + 1}. ${item?.title}`}</h2>
                {item?.headerText && (
                  <h4>{item?.headerText}</h4>
                )}
                {item?.subText && (
                  <React.Fragment>
                    <br />
                    <h4>{item?.subText}</h4>
                  </React.Fragment>
                )}
                {item?.content?.length ? (item?.content?.map((content: string, index: number) =>
                  <div key={index} className={styles.policies_content}>
                    <h3>- {content}</h3>
                  </div>
                )) : null}
                {item?.postContent && (
                  <React.Fragment>
                    <br />
                    <h4>{item?.postContent}</h4>
                  </React.Fragment>
                )}
              </div>
            )}
          </div>
          <p>Thank you for trusting Govtech Africa. We are committed to ensuring your privacy and security.</p>
        </div>
      </section>
      <Divider />
    </React.Fragment>
  )
}

export default PrivacyPolicy