import React from "react";
import styles from "./Register.module.scss"
import { InputField, Select, TextArea } from "@/shared";
import Image from "next/image";

const Register = () => {
  const details = [
    {
      icon: '/svgs/calendar_white.svg',
      title: 'date',
      text: 'Sunday, 30th March 2026',
    },
    {
      icon: '/svgs/location_white.svg',
      title: 'venue',
      text: 'National Assembly Library and Resource Center, Three arm zone, Abuja, FCT',
    },
    {
      icon: '/svgs/in_person.svg',
      title: 'attendance',
      text: 'Physical attendance - Strictly by information',
    },
    {
      icon: '/svgs/registration.svg',
      title: 'format',
      text: 'In-person. Limited seats available',
    },
  ]
  const sectorTypes = [
    { label: 'Federal Government', value: 'federal government' },
    { label: 'State Government', value: 'state government' },
    { label: 'Legislature', value: 'legislature' },
    { label: 'Private Sector / Technology', value: 'private sector / technology' },
    { label: 'Development Partners / Multilateral', value: 'development partners / multilateral' },
    { label: 'Civil society / NGO', value: 'civil society / ngo' },
    { label: 'Academia / Research', value: 'academia / research' },
    { label: 'Media', value: 'media' },
    { label: 'Other', value: 'other' },
  ];
  const sessionTypes = [
    { label: 'Session 1 - The public sector panel', value: 'session 1 - the public sector panel' },
    { label: 'Session 2 - The Private sector panel', value: 'session 1 - The private sector panel' },
    { label: 'Development Partners & Civil Society', value: 'development partners & civil society' },
    { label: 'All Sessions / No Preference', value: 'all sessions / no preference' },
  ]
  return (
    <section id="register" className={styles.about_section}>
      <div className={styles.about_container}>
        <div className={styles.about_label}>
          {/* <div className={styles.label_line}></div> */}
          <p>Participation</p>
        </div>
        <div className={styles.about_text}>
          <h1>Register for the Roundtable</h1>
        </div>
        <div className={styles.register}>
          <div className={styles.info}>
            <p>
              Participation is open to senior government officials, technology leaders,
              development partners, civil society organisations, and credentialed media.
            </p>
            <div className={styles.details}>
              {details.map((detail, index) =>
                <div key={index} className={styles.detail}>
                  <div className={styles.icon_bg}>
                    <div className={styles.icon}>
                      <Image alt="" fill src={detail.icon} />
                    </div>
                  </div>
                  <div className={styles.detail_text}>
                    <h3>{detail.title}</h3>
                    <p>{detail.text}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={styles.form_container}>
            <div className={styles.form_content}>
              {/* <h3>Secure Your Place</h3>
              <p className={styles.p}>
                Complete the form below. A confirmation will be sent to your email upon 
                successful registration.
              </p> */}
              <form className={styles.form_wrapper}>
                <div className={styles.single}>
                  <label htmlFor="firstName">Full Name </label>
                  <InputField placeholder="Enter your full name" type="text"
                    className={styles.input_field} name="fullName" id="fullname"
                  />
                  {/* <div className={styles.name}>
                    <label htmlFor="lastName">First Name </label>
                    <InputField placeholder="Enter your first name" id="lastName"
                      className={styles.input_field} name="lastName" type="text"
                    />
                  </div> */}
                </div>
                <div className={styles.group}>
                  <div className={styles.name}>
                    <label htmlFor="email">Email Address</label>
                    <InputField placeholder="Enter your email" type="email"
                      className={styles.input_field} name="email" id="email"
                    />
                  </div>
                  <div className={styles.name}>
                    <label htmlFor="phoneNumber">phone number</label>
                    <InputField placeholder="Enter your phone number"
                      className={styles.input_field} name="phoneNumber" id="phoneNumber"
                    />
                  </div>
                </div>
                <div className={styles.single}>
                  <label htmlFor="organisation">organisation / institution</label>
                  <InputField placeholder="Ministry / Agency / Company"
                    className={styles.input_field} name="organisation" id="organisation"
                  />
                </div>
                <div className={styles.group}>
                  <div className={styles.name}>
                    <label htmlFor="designation">Designation / title</label>
                    <InputField placeholder="Enter your first name"
                      className={styles.input_field} name="designation" id="designation"
                    />
                  </div>
                  <div className={styles.name}>
                    <label htmlFor="lastName">sector</label>
                    <Select options={sectorTypes} 
                      defaultOption='Select a sector'
                    />
                  </div>
                </div>
                <div className={styles.single}>
                  <label htmlFor="session">which panel session interests you the most</label>
                  <Select options={sessionTypes} defaultOption='Select a session'
                  />
                </div>
                <div className={styles.single}>
                  <label htmlFor="requirements">Additional notes or requirements</label>
                    <TextArea placeholder="Accessibility needs, dietary restrictions or any additional information..."
                      name="requirements" id="requirements"
                      textClassName={styles.text_area_field}
                    />
                </div>
                <button className={styles.submit_btn}>
                  <h3>submit registration</h3>
                </button>
                {/* <p className={styles.footer_p}>
                  Your data will be handled in accordance with applicable data protection 
                  guidelines. Confirmations will be issued within 48 hours of submission.
                </p> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register