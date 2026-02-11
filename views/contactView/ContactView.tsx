import React from "react";
import { Button, InputField, TextArea } from "@/shared";
import styles from "./ContactView.module.scss";

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
						{/* <p>
							We value your feedback and look forward to hearing from you.
						</p> */}
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
						<Button className={styles.button}>Send us a message</Button>
					</form>
				</div>
				<div className={styles.text}>
					<h3>
						For some, the word impossible ends discussions.{" "}
						<span>For us, it starts the conversation.</span>
					</h3>
				</div>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default ContactView;
