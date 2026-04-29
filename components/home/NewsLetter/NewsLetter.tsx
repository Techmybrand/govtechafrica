"use client";
import React, { useState } from "react";
import styles from "./NewsLetter.module.scss";
import { InputField } from "@/shared";
import { BeatLoader } from "react-spinners";
import Image from "next/image";
import toast from "react-hot-toast";

const NewsLetter = () => {
    const [formData, setFormData] = useState<{ fullName: string; email: string }>({ fullName: '', email: '' });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">('idle');
    const [message, setMessage] = useState<string>('');
    const isLoading = status === "loading";
    // console.log('form data: ', formData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // const handleSubmit = async () => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');
        try {
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (!res.ok) {
                setStatus('error');
                setMessage(data.error || 'Something went wrong. Please try again.');
                return;
            }
            setStatus('success');
            toast.success('Subsription successful!')
            setFormData(
                { fullName: '', email: '' });
            // eslint-disable-next-line
        } catch (error: any) {
            setStatus('error');
            setMessage('Network error. Please check your connection and try again.');
            toast.error(message);
            console.log("API Error: ", error)
        }
    };
    if (status === 'success') {
        return (
        <div className="newsletter-success">
            <div className="newsletter-success__icon">✓</div>
            <h3>{`You're subscribed!`}</h3>
            <p>
                Welcome to the Govtech Africa community. Check your inbox for a
                welcome email from us.
            </p>
            <button className="newsletter-btn newsletter-btn--ghost"
                onClick={() => setStatus('idle')}
            >
                Close
            </button>
        </div>
        );
    }

    return (
        <div className={styles.newsletter_section}>
            <div className={styles.newsletter_container}>
                <div className={styles.newsletter_content}>
                    <div className={styles.image}>
                        <Image alt="" fill src="/images/newsletter.png" />
                    </div>
                    <form onSubmit={(e) => handleSubmit(e)} className={styles.newsletter_text_and_ctas}>
                        <h1>Subscribe to Our Newsletter</h1>
                        <div className={styles.ctas}>
                            <h3>Subscribe to our Newsletter for latest updates</h3>
                            <InputField onChange={handleChange} required
                                className={styles.input_field}
                                placeholder="Enter your full name" name="fullName"
                            />
                            <InputField onChange={handleChange} required
                                className={styles.input_field}
                                placeholder="Enter your email" name="email"
                            />
                        </div>
                        <button disabled={isLoading} type="submit"
                            className={styles.subscribe_btn}
                        >
                            {isLoading ? (
                                <BeatLoader color="white"></BeatLoader>
                            ) : (
                                <p>Subscribe</p>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewsLetter

// I'm trying to create a newsletter setup using brevo for this govtechafrica.com project but I have no idea how it should work. I have a newsletter section on the home page where users are required to enter their full name and email to get registered for the newsletter. I have also created a brevo account with the official email. I need a way to connect the setup to the project so that every user who signs up is automatically added to the database(I'm open to the idea of using google sheets as a database) of subscribed users and receives a newsletter as at when sent out. The logic also has to take into account whenever a user clicks on "unsubscribe", the email accompanying the said is removed from the database or list of users and no longer receives the newsletter. I also need a way to incorporate or add a custom template which would have both the logo and social media icons with the corresponding links to the social media platforms. Lastly, if all these can be done properly using Google Scripts/Sheets and the emails sent out using google mail(Gmail), I'd also like to see that as well