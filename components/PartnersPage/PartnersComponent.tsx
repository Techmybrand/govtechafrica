'use client';
import React from 'react';
import { Insights } from '../home';
import { InputField, TextArea } from '@/shared';
import Image from 'next/image';
import styles from './PartnersComponent.module.scss';

const PartnersComponent = () => {
    const items = [
		'/images/logo-1.png',
		'/images/logo-2.png',
		'/images/logo-3.png',
		'/images/logo-4.png',
  	]
  return (
    <div className={styles.capacity_building_section}>
        <div className={styles.divider}></div>
        <div className={styles.capacity_building_content}>
            <div className={styles.top_section}>
                <div className={styles.text}>
                    <h1>The Govtech Africa Partner Network</h1>
                    <h3 className={styles.subtext}>
                        Leidos suppliers are critical to the company and customer&apos;s success. 
                        Our Leidos Alliance members share our customer-focused commitments and 
                        encapsulate our mission to make the world safer, healthier, and more 
                        efficient through technology, engineering, and science.<br />
                        The Leidos Alliance builds connections through partnership and collaboration 
                        that drives innovation, advances technology and builds efficiency. The 
                        program leverages the deep expertise of our supplier base and ensures every 
                        solution delivers customer mission success and is comprised of three levels: 
                        Corporate Alliance, Technology Alliance, and Emerging Technology Partners.<br />
                        These companies have demonstrated proven, low-risk solutions with Leidos and 
                        on their own that have a significant benefit to the customer.
                    </h3>
                </div>
                <div className={styles.top_image}>
                    <Image alt='image' fill src='/svgs/partners.svg' />
                </div>
            </div>
            <div className={styles.partners_logo}>
                {items.map((item: string, index: number) =>
                    <div key={index} className={styles.logo_card}>
                        <div data-index={index} className={styles.logo}>
                            <Image alt='logo' fill src={item} sizes='100%' />
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.form_container}>
                <div className={styles.details}>
                    <h3>Why join?</h3>
                    <p>
                        Leidos, recognized as a member of the Fortune 500®, is a dynamic innovation 
                        company that is at the forefront of addressing the world’s most challenging 
                        issues in national security and health sectors. We are actively seeking to 
                        expand our partnerships with market leading OEMs, emerging technology 
                        start-ups, and Venture Capital Firms. For more information on the Leidos 
                        Alliance Partner Network, please contact us through the form below. 
                        Leidos will not consider solicitations from companies who do not meet the 
                        qualification criteria detailed above.
                    </p>
                </div>
                <form action="">
                    <InputField placeholder="FIRST NAME" />
                    <InputField placeholder="LAST NAME" />
                    <InputField placeholder="EMAIL ADDRESS" />
                    <InputField placeholder="COUNTRY" />
                    <InputField placeholder="COMPANY" />
                    <InputField placeholder="PARTNER CATEGORY" />
                    <TextArea placeholder="MESSAGE" className={styles.textarea} />
                    <div className={styles.button}>
                        <h6>Submit</h6>
                    </div>
                </form>
            </div>
            <Insights isDivider={false}  />
        </div>
        <div className={styles.divider_green}></div>
    </div>
  )
}

export default PartnersComponent