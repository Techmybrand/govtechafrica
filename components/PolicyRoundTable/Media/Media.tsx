"use client";
import React, { useRef, useState } from "react";
import { InputField } from "@/shared";
import { BeatLoader } from "react-spinners";
import styles from "./Media.module.scss";
import Image from "next/image";
import toast from "react-hot-toast";

const Media = () => {
    const details = [
        'Cover key sessions and high-level discussions',
        'Engage with senior public officials and industry leaders',
        'Access official event materials and post-event insights',
    ]
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [fileName, setFileName] = useState<string>("");
    const [firstName, setFirstName] = useState<string>("");
    const [otherNames, setOtherNames] = useState<string>("");
    const [emailAddress, setEmailAddress] = useState<string>("");
    const [phoneNum, setPhoneNum] = useState<string>("");
    const [organisation, setOrganisation] = useState<string>("");
    const [designation, setDesignation] = useState<string>("");
    const fileToBase64 = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve((reader.result as string).split(',')[1]);
            reader.onerror = reject;
        });
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFileName(e.target.files[0].name);
        }
    };
    const handleIconClick = () => {
        if (inputRef.current) {
            inputRef.current.click();
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const fileInput = formData.get("idcard") as File;
        if (!fileInput) {
            toast.error("Please upload your ID card");
            return;
        }
        setLoading(true);

        try {
            const base64 = await fileToBase64(fileInput);

            const payload = {
                firstName: formData.get("firstName"),
                otherNames: formData.get("otherNames"),
                email: formData.get("email"),
                phoneNumber: formData.get("phoneNumber"),
                organisation: formData.get("organisation"),
                designation: formData.get("designation"),
                idCardBase64: base64,
                idCardName: fileInput.name,
            };

            const endpoint = `https://script.google.com/macros/s/AKfycbzcAo8SmU8VUuKvXvDCzGqsAzha53FisY9rqUCfEScl2qvNVKiTMnkbLgaGM7cfuFqv/exec`;

            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "text/plain;charset=utf-8" },
                body: JSON.stringify(payload),
            });

            const result = await res.json();

            if (res.ok && result.status === "success") {
                toast.success("Media registration submitted successfully!");
                setFileName("");
                setFirstName("");
                setOtherNames("");
                setEmailAddress("");
                setPhoneNum("");
                setOrganisation("");
                setDesignation("");
            } else if (result.status === "duplicate") {
                toast.error(result.message || "You have already registered with this email.");
            } else {
                toast.error("Submission failed. Please try again.");
            }
        } catch (err) {
            console.error(err);
            toast.error("Error uploading file. Please try again.");
        } finally {
            setLoading(false);
        }
    };

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
                        {/* <h5>Media Access & Accreditation</h5> */}
                        <p>
                            We welcome specialised media professionals to cover this 
                            inaugural edition of the 
                            <strong> NATIONAL GOVTECH POLICY ROUNDTABLE</strong>. As this is 
                            a curated, high-level convening, media access will be granted on 
                            an accreditation basis to ensure a controlled and productive 
                            environment.<br />
                            <br />
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
                                            className={styles.input_field} name="firstName" id="firstName"
                                            required value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.name}>
                                        <label htmlFor="otherNames">Other Names</label>
                                        <InputField placeholder="Enter other names" type="text"
                                            className={styles.input_field} name="otherNames" id="otherNames"
                                            required value={otherNames}
                                            onChange={(e) => setOtherNames(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className={styles.group}>
                                    <div className={styles.name}>
                                        <label htmlFor="email">Email Address</label>
                                        <InputField placeholder="Enter your email" type="email"
                                            className={styles.input_field} name="email" id="email"
                                            required value={emailAddress}
                                            onChange={(e) => setEmailAddress(e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.name}>
                                        <label htmlFor="phoneNumber">phone number</label>
                                        <InputField placeholder="Enter your phone number"
                                            className={styles.input_field} name="phoneNumber" id="phoneNumber"
                                            required value={phoneNum}
                                            onChange={(e) => setPhoneNum(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className={styles.group_three}>
                                    <div className={styles.name}>
                                        <label htmlFor="organisation">media organisation</label>
                                        <InputField placeholder="Organization name"
                                            className={styles.input_field} name="organisation" id="organisation"
                                            required value={organisation}
                                            onChange={(e) => setOrganisation(e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.name}>
                                        <label htmlFor="designation">Designation</label>
                                        <InputField placeholder="Enter your designation"
                                            className={styles.input_field} name="designation" id="designation"
                                            required value={designation}
                                            onChange={(e) => setDesignation(e.target.value)}
                                        />
                                    </div>
                                    <div className={styles.name_upload}>
                                        <label htmlFor="idcard">id card upload</label>
                                        <div className={styles.upload_container}>
                                            <h3>{fileName || 'Upload ID'}</h3>
                                            <div onClick={handleIconClick} className={styles.icon}>
                                                <Image alt="" fill src="/svgs/add_photo.svg" />
                                            </div>
                                        </div>
                                        <input multiple={false}
                                            accept="image/*" type="file" id="idcard" required
                                            className={styles.input_field} name="idcard"
                                            onChange={handleFileChange}
                                            ref={inputRef}
                                        />
                                    </div>
                                </div>
                                <button type="submit" disabled={loading}
                                    className={styles.submit_btn}
                                >
                                    <h3>
                                        {loading ?
                                            <BeatLoader color="white"></BeatLoader>
                                        : 
                                            "submit registration"
                                        }
                                    </h3>
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