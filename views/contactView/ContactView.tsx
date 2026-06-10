"use client";
import React from "react";
import { NewsLetter } from "@/components/home";
import { Button, InputField, TextArea } from "@/shared";
import styles from "./ContactView.module.scss";
import Image from "next/image";
import { socialMediaLinks } from "@/mock/navLists.mock";
import Link from "next/link";

const ContactView = () => {
	return (
		<div className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.card}>
					<div className={styles.details}>
						<h2>Contact Us</h2>
						<p>
							Transforming governance through technology requires a collective effort. Reach out to
							discuss how we can co-create a more efficient, transparent and digitally empowered Africa.
						</p>
					</div>
				</div>
				<div className={styles.large_card}>
					<div className={styles.details}>
						<h3>Drop us a line</h3>
						<p>
							We value your feedback and look forward 
							to hearing from you.
						</p>
					</div>
					<form action="">
						<InputField placeholder="INQUIRY TYPE" />
						<InputField placeholder="FIRST NAME" />
						<InputField placeholder="LAST NAME" />
						<InputField placeholder="EMAIL ADDRESS" />
						<InputField placeholder="PHONE NUMBER" />
						<InputField placeholder="COMPANY/ORGANIZATION" />
						<InputField placeholder="ROLE/FUNCTION" />
						<InputField placeholder="COUNTRY/REGION" />
						<TextArea placeholder="MESSAGE" className={styles.textarea} />
						<Button className={styles.button}>
							Send us a message
						</Button>
					</form>
				</div>
				<div className={styles.general_inquiries}>
					<div className={styles.inquiry_details}>
						<h3>General Inquiries</h3>
						<p>
							Reach out to us directly
						</p>
					</div>
					<div className={styles.inquiry_channels}>
						<div className={styles.phone_channel}>
							<div className={styles.icon}>
								<Image fill alt=""
									src="/svgs/telephone_icon.svg"
								/>
							</div>
							<p>Benjamin Uche</p>
							<Link href='tel:+234 900 000 0000'
								target="_blank" rel="noreferrer"
							>
								<h6>+234 900 000 0000</h6>
							</Link>
							<p>Benjamin Uche</p>
							<Link href='tel:+234 900 000 0000'
								target="_blank" rel="noreferrer"
							>
								<h6>+234 900 000 0000</h6>
							</Link>
						</div>
						<div className={styles.email_channel}>
							<div className={styles.msg_icon}>
								<Image fill alt=""
									src="/svgs/message.svg"
								/>
							</div>
							<p>Benjamin Uche</p>
							<Link target="_blank" rel="noreferrer"
								href='mailto:benjaminuche@govtechafrica.com'
							>
								<h6>benjaminuche@govtechafrica.com</h6>
							</Link>
							<p>Admin</p>
							<Link target="_blank" rel="noreferrer"
								href='mailto:admin@govtechafrica.com'
							>
								<h6>admin@govtechafrica.com</h6>
							</Link>
						</div>
						<div className={styles.socials_channel}>
							<div className={styles.socials}>
								{socialMediaLinks.slice(0, 3).map((social, index: number) => (
									<Link
										href={social.href}
										target="_blank"
										rel="noreferrer"
										className={styles.social}
										key={index}
									>
										<Image
											src={social.icon}
											alt={social.label}
											fill
											sizes="100%"
										/>
									</Link>
								))}
							</div>
							<p>Follow us at</p>
							<h6>Govtech Africa</h6>
						</div>
					</div>
				</div>
			</div>
			<NewsLetter />
		</div>
	);
};

export default ContactView;
