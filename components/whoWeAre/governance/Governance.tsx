'use client';
import { Button } from "@/shared";
import { useRouter } from "next/navigation";
import styles from "./Governance.module.scss";

const Governance = () => {
	const router = useRouter();
	return (
		<div className={styles.section} id="team">
			<div className={styles.section_container}>
				<div className={styles.text}>
					<h2>It’s all about inclusive governance</h2>
					<h3>
						We believe we can build a future where{" "}
						<span>governance is inclusive, accountable, and responsive.</span>{" "}
						We also believe in the transformative power of{" "}
						<span>African ingenuity and innovation.</span>
					</h3>
				</div>
				<div className={styles.card}>
					<div className={styles.card_text}>
						<h3>
							Meet The <span>Team</span>
						</h3>
						<p>
							We are an organisation powered by people. Meet the dynamic
							team of experienced professionals driving Govtech Africa’s
							mission to build thriving and resilient societies through
							technology
						</p>
					</div>
					<Button onClick={() => router.push('/teams')} className={styles.button}>
						Visit
					</Button>
				</div>
				<div className={styles.grad_1}></div>
				<div className={styles.grad_2}></div>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Governance;
