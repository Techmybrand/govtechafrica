import React from "react";
import { Divider } from "@/shared";
import { cookiesPolicyData } from "@/mock/navLists.mock";
import { ContentProps, cookiesPolicyDataProps } from "@/interfaces";
import styles from './CookiePolicy.module.scss';

const CookiePolicy = () => {
  return (
    <React.Fragment>
      <section className={styles.privacy_policy_section}>
        <div className={styles.privacy_policy_content}>
          <h1>Cookies Policy</h1>
          <h3>
            GovTech INC (“we,” “us,” “our”) uses cookies and similar technologies on our website (the
            “Site”) to improve functionality, enhance user experiences, and deliver personalized content.
            This Cookies Policy explains what cookies are, how we use them, and your choices regarding
            their use.
          </h3>
          <div className={styles.policies_container}>
            {cookiesPolicyData?.map((item: cookiesPolicyDataProps, index: number) =>
              <div key={index} className={styles.policies}>
                <h2>{`${index + 1}. ${item?.title}`}</h2>
                <h4>{item?.headerText}</h4>
                {item?.content?.length > 0 && (
                  item?.content?.map((content: ContentProps, index: number) =>
                    <div key={index} className={styles.policies_content}>
                      {content?.title && (
                        <h3>{content?.title}</h3>
                      )}
                      <div className={styles.policies_body}>
                        {content?.body?.map((body: string, index: number) =>
                          <p key={index}>- {body}</p>
                        )}
                      </div>
                    </div>
                ))}
              </div>
            )}
          </div>
          <p>
            By continuing to use our site, you consent to the use of cookies as described in this cookies
            policy.
          </p>
        </div>
      </section>
      <Divider />
    </React.Fragment>
  )
}

export default CookiePolicy