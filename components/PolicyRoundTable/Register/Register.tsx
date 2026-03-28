"use client";
import React from "react";
import { InputField, TextArea } from "@/shared";
import Image from "next/image";
import toast from "react-hot-toast";
import styles from "./Register.module.scss";

const Register = () => {
  const details = [
    {
      icon: '/svgs/calendar_white.svg',
      title: 'date',
      text: 'Monday, 30th March 2026',
    },
    {
      icon: '/svgs/location_white.svg',
      title: 'time',
      text: '9am - 3pm',
    },
    {
      icon: '/svgs/in_person.svg',
      title: 'venue',
      text: 'National Assembly Library and Resource Centre, Three Arms Zone, FCT-Abuja',
    },
    {
      icon: '/svgs/registration.svg',
      title: 'format',
      text: `Hybrid (Physical Attendance is strictly by invitation. Virtual Attendance is 
        free, but registration is compulsory)`,
    },
  ]
  // const sectorTypes = [
  //   { label: 'Federal Government', value: 'federal government' },
  //   { label: 'State Government', value: 'state government' },
  //   { label: 'Legislature', value: 'legislature' },
  //   { label: 'Private Sector / Technology', value: 'private sector / technology' },
  //   { label: 'Development Partners / Multilateral', value: 'development partners / multilateral' },
  //   { label: 'Civil society / NGO', value: 'civil society / ngo' },
  //   { label: 'Academia / Research', value: 'academia / research' },
  //   { label: 'Media', value: 'media' },
  //   { label: 'Other', value: 'other' },
  // ];
  // const sessionTypes = [
  //   { label: 'Session 1 - The public sector panel', value: 'session 1 - the public sector panel' },
  //   { label: 'Session 2 - The Private sector panel', value: 'session 2 - The private sector panel' },
  //   { label: 'Development Partners & Civil Society', value: 'development partners & civil society' },
  //   { label: 'All Sessions / No Preference', value: 'all sessions / no preference' },
  // ]
  // const [selectFieldValue,] = useState<string>("");
  // const onOptionChange = (option: string) => setSelectFieldValue(option);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      firstName: formData.get("firstName"),
      otherNames: formData.get("otherNames"),
      email: formData.get("email"),
      phoneNumber: formData.get("phoneNumber"),
      organisation: formData.get("organisation"),
      designation: formData.get("designation"),
      sector: "",
      additionalNotes: formData.get("additionalNotes") ?? "",
    };
    const endpoint = `https://script.google.com/macros/s/AKfycbxldJzdbOfxr8zmlk9M5u_5uqdRXP0KzkyoQYhLwptNWWM6dXDa4kxDN6L2BfMkreBBfg/exec`

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        const result = await res.json();
        if (result.status === "success") {
          toast.success("Registration successful! Check your email for confirmation.");
          // e.currentTarget.reset();
        } else {
          toast.error("Submission failed. Please try again.");
        }
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Network error. Please check your connection.");
    }
};

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
              Physical participation for the Roundtable is strictly by invitation only.<br />
              <br />
              Virtual participation is open to senior government officials, technology leaders,
              and other interested stakeholders for free, but registration is compulsory.
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
                    <p data-index={index}>{detail.text}</p>
                  </div>
                </div>
              )}
            </div>
            <p>
              Be Part of Shaping Nigeria’s Digital Governance Future
            </p>
          </div>
          <div className={styles.form_container}>
            <div className={styles.form_content}>
              {/* <h3>Secure Your Place</h3>
              <p className={styles.p}>
                Complete the form below. A confirmation will be sent to your email upon 
                successful registration.
              </p> */}
              <form onSubmit={handleSubmit} className={styles.form_wrapper}>
                <div className={styles.group}>
                  <div className={styles.name}>
                    <label htmlFor="firstName">First Name </label>
                    <InputField placeholder="Enter name" type="text"
                      className={styles.input_field} name="firstName" id="firstName"
                      required
                    />
                  </div>
                  <div className={styles.name}>
                    <label htmlFor="otherNames">Other Names</label>
                    <InputField placeholder="Enter other names" id="otherNames"
                      className={styles.input_field} name="otherNames" type="text"
                    />
                  </div>
                </div>
                <div className={styles.group}>
                  <div className={styles.name}>
                    <label htmlFor="email">Email Address</label>
                    <InputField placeholder="Enter your email" type="email"
                      className={styles.input_field} name="email" id="email"
                      required
                    />
                  </div>
                  <div className={styles.name}>
                    <label htmlFor="phoneNumber">phone number</label>
                    <InputField placeholder="Enter your phone number"
                      className={styles.input_field} name="phoneNumber" id="phoneNumber"
                      required
                    />
                  </div>
                </div>
                <div className={styles.group}>
                  <div className={styles.name}>
                    <label htmlFor="organisation">organisation / institution</label>
                    <InputField placeholder="Ministry / Agency / Company"
                      className={styles.input_field} name="organisation" id="organisation"
                      required
                    />
                  </div>
                  <div className={styles.name}>
                    <label htmlFor="designation">Designation / title</label>
                    <InputField placeholder="Enter your designation"
                      className={styles.input_field} name="designation" id="designation"
                      required
                    />
                  </div>
                </div>
                {/* <div className={styles.group}> */}
                  {/* <div className={styles.name}> */}
                    {/* <label htmlFor="lastName">sector</label>
                    <Select options={sectorTypes}
                      defaultOption='Select a sector'
                    /> */}
                    {/* <label htmlFor="session">which panel session interests you the most</label>
                    <Select options={sessionTypes} defaultOption='Select a session'
                      onOptionChange={onOptionChange}
                    /> */}
                  {/* </div> */}
                {/* </div> */}
                <div className={styles.single}>
                  <label htmlFor="additionalNotes">Additional notes or requirements</label>
                    <TextArea placeholder="Accessibility needs, dietary restrictions or any additional information..."
                      name="additionalNotes" id="additionalNotes"
                      textClassName={styles.text_area_field}
                    />
                </div>
                <button type="submit" className={styles.submit_btn}>
                  <h3>submit registration</h3>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register