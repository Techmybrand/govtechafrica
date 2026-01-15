import React from "react";
import { Divider } from "@/shared";
import { termsOfUseData } from "@/mock/navLists.mock";
import { PrivacyPolicyProps } from "@/interfaces";
import styles from './TermsOfUse.module.scss';

const TermsOfUse = () => {
  return (
    <React.Fragment>
      <section className={styles.privacy_policy_section}>
        <div className={styles.privacy_policy_content}>
          <h1>TERMS OF USE</h1>
          <h3>
            {`Welcome to Govtech Africa's website (the “site”). By accessing or using this site, you agree to
            comply with and be bound by these Terms of Use. If you do not agree with these terms, please
            refrain from using our site.`}
          </h3>
          <div className={styles.policies_container}>
            {termsOfUseData?.map((item: PrivacyPolicyProps, index: number) =>
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
          <p>
            By using this site, you agree to these Terms of Use and acknowledge that you have read and
            understood them. Thank you for visiting Govtech.
          </p>
        </div>
      </section>
      <Divider />
    </React.Fragment>
  )
}

export default TermsOfUse