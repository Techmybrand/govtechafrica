import Image from "next/image";
import styles from "./Mission.module.scss";

const values = [
	{
		title: "Innovation",
		description: "We embrace innovation and creativity as catalysts for positive change and  continuous improvement."
	},
	{
		title: "Integrity",
		description: "We uphold the highest standards of integrity, transparency, and ethical  conduct in all our interactions."
	},
	{
		title: "Collaboration",
		description: "We believe in the power of collaboration and partnerships to achieve shared  goals and drive collective impact."
	},
	{
		title: "Empowerment",
		description: "We are committed to empowering governments and citizens with the tools  and knowledge they need to thrive in today’s digital age."
	},
	{
		title: "Impact",
		description: "We measure our success by the impact we create, both in terms of tangible  outcomes and positive societal change."
	}
];

const Mission = () => {
	return (
		<div className={styles.section} id="mision">
			<div className={styles.section_container}>
				<div className={styles.card}>
					<div className={styles.details}>
						<div className={styles.text}>
							<h3>
								Our <span>Mission</span>
							</h3>
							<p>
								We are on a mission to build thriving and resilient
								societies by providing state-of-the-art technology for
								African governments and public institutions. Our goal is
								simple: to improve transparency, drive efficiency, and
								enable government excellence.
							</p>
						</div>
						<div className={styles.row}>
							{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => (
								<div key={item} className={styles.line}></div>
							))}
						</div>
					</div>
					<div className={styles.image}>
						<Image src="/images/mission.png" priority fill alt="mission" sizes="100%" />
					</div>
				</div>
				<div className={styles.card}>
					<div className={styles.image}>
						<Image src="/images/vision.png" fill alt="vision" sizes="100vw" />
					</div>
					<div className={styles.details}>
						<div className={styles.text}>
							<h3>
								Our <span>Vision</span>
							</h3>
							<p>
								Our vision is to be the leading IT solutions provider and
								technology systems integrator helping African governments
								and public institutions scale up efficiency and governance
								through tailored automation.
							</p>
						</div>
						<div className={styles.row}>
							{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => (
								<div key={item} className={styles.line}></div>
							))}
						</div>
					</div>
					<div className={styles.grad}></div>
				</div>
				<div className={styles.long_card}>
					<div className={styles.text}>
						<h3>
							Our <span>Values</span>
						</h3>
					</div>
					<div className={styles.grid_row}>
						{values.map(value => (
							<div key={value.title} className={styles.small_card}>
								<div className={styles.small_card_text}>
									<h3>{value.title}</h3>
									<p>{value.description}</p>
								</div>
							</div>
						))}
					</div>
					<div className={styles.row}>
						<div className={styles.row}>
							{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => (
								<div key={item} className={styles.line}></div>
							))}
						</div>
						<div className={styles.row}>
							{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(item => (
								<div key={item} className={styles.line}></div>
							))}
						</div>
						<div className={styles.row}>
							{[0].map(item => (
								<div key={item} className={styles.line}></div>
							))}
						</div>
					</div>
					<div className={styles.grad}></div>
					<div className={styles.grad2}></div>
				</div>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Mission;
