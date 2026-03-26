"use client";
import React from "react";
import { InputField } from "@/shared";
// import toast from "react-hot-toast";
import styles from "./Media.module.scss";
import Image from "next/image";

const Media = () => {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const endpoint = `https://script.google.com/macros/s/AKfycbzLgcVnUqT4lm5zhhEdbTpmcB_VOjDpeEkcl3Q3NBVVi4wkOYUyhzsPLEJW2j5o4tC_fA/exec`
        const payload = {
            fullName: formData.get("fullName"),
            email: formData.get("email"),
            phoneNumber: formData.get("phoneNumber"),
            organisation: formData.get("organisation"),
            designation: formData.get("designation"),
            idcard: formData.get("idcard"),
        };
        console.log('payload: ', payload);
        console.log('endpoint: ', endpoint);

        // try {
        //     const res = await fetch(endpoint, {
        //         method: "POST",
        //         body: JSON.stringify(payload),
        //         headers: { 
        //             "Content-Type": "text/plain;charset=utf-8"
        //         },
        //     });

        //     if (res.ok) {
        //         toast.success("Registration successful! Check your email for confirmation.");
        //     }
        //     console.log('payload: ', payload);
        //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // } catch (err: any) {
        //     console.log('err: ', err)
        //     toast.error("Something went wrong. Please try again.");
        // }
    };
    const details = [
        'Cover key sessions and high-level discussions',
        'Engage with senior public officials and industry leaders',
        'Access official event materials and post-event insights',
    ]
    return (
        <section id="media" className={styles.about_section}>
            <div className={styles.about_container}>
                <div className={styles.about_label}>
                    <p>Media</p>
                </div>
                <div className={styles.about_text}>
                    <h1>MEDIA ACCESS & ACCREDITATION</h1>
                    <p>
                        Stay informed and be part of the conversations shaping the future of 
                        digital governance in Nigeria.
                    </p>
                </div>
                <div className={styles.register}>
                    <div className={styles.info}>
                        <h5>Media Access & Accreditation</h5>
                        <p>
                            We welcome specialised media professionals to cover this 
                            inaugural edition of the 
                            <strong> NATIONAL GOVTECH POLICY ROUNDTABLE</strong>. As this is 
                            a curated, high-level convening, media access will be granted on 
                            an accreditation basis to ensure a controlled and productive 
                            environment.<br />
                            Accredited media will have the opportunity to:
                        </p>
                        <ul className={styles.details}>
                            {details.map((detail, index) =>
                                <li key={index} className={styles.detail}>
                                    <span></span> {detail}
                                </li>
                            )}
                        </ul>
                        <p>
                            Kindly note that only accredited media professionals will be 
                            allowed physical access into the event premises.
                        </p>
                    </div>
                    <div className={styles.form_container}>
                        <div className={styles.form_content}>
                            <form onSubmit={handleSubmit} className={styles.form_wrapper}>
                                <div className={styles.group}>
                                    <div className={styles.name}>
                                        <label htmlFor="firstName">First Name</label>
                                        <InputField placeholder="Enter your first names" type="text"
                                            className={styles.input_field} name="fullName" id="fullname"
                                            required
                                        />
                                    </div>
                                    <div className={styles.name}>
                                        <label htmlFor="firstName">Other Names</label>
                                        <InputField placeholder="Enter other names" type="text"
                                            className={styles.input_field} name="fullName" id="fullname"
                                            required
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
                                <div className={styles.group_three}>
                                    <div className={styles.name}>
                                        <label htmlFor="organisation">media organisation</label>
                                        <InputField placeholder="Organization name"
                                            className={styles.input_field} name="organisation" id="organisation"
                                            required
                                        />
                                    </div>
                                    <div className={styles.name}>
                                        <label htmlFor="designation">Designation</label>
                                        <InputField placeholder="Enter your designation"
                                            className={styles.input_field} name="designation" id="designation"
                                            required
                                        />
                                    </div>
                                    <div className={styles.name_upload}>
                                        <label htmlFor="idcard">id card upload</label>
                                        <div className={styles.upload_container}>
                                            <h3>Upload ID</h3>
                                            <div className={styles.icon}>
                                                <Image alt="" fill src="/svgs/add_photo.svg" />
                                            </div>
                                        </div>
                                        <InputField placeholder="Upload ID" multiple={false}
                                            accept="image/*" type="file" id="idcard" required
                                            className={styles.input_field} name="idcard" 
                                        />
                                    </div>
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

export default Media