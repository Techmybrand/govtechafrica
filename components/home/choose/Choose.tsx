import Image from "next/image";
import styles from "./Choose.module.scss";

const chooseList = [
	{
		subTitle: "Industry Expertise",
		title: "20+ years combined experience",
		description:
			"Our coalition of renowned homegrown tech players bring over 20 years of  combined experiences and expertise in the tech and governance  ecosystems to the fore in delivering value to our clients."
	},
	{
		subTitle: "Proven Track Record",
		title: "60+ projects worked on",
		description:
			"Our experiences in handling e-government projects coupled with a deep  understanding of the unique challenges and opportunities within government  institutions position us to deliver seamlessly and excellently on every project that we’re briefed on."
	},
	{
		subTitle: "Project Delivery Timelines",
		title: "91% On-time Project Delivery Rate",
		description:
			"We pride ourselves on our stellar record of delivering projects in amazingly  timeous fashion. Our near-perfect on-time project delivery rate speaks  volumes to our dedication to professionalism and good work ethics."
	},
	{
		subTitle: "Client-Centered Approach",
		title: "100% client satisfaction",
		description:
			"Our commitment to partnerships and close collaborations with our  government clients allow us to develop customized IT systems and deliver  solutions that align with their specific needs and help them stay satisfied."
	}
];
const Choose = () => {
	return (
		<div className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.grad_1}></div>
				<div className={styles.grad_2}></div>
				<div className={styles.text}>
					<h3>
						Why<span> Choose govtech africa?</span>
					</h3>
				</div>
				<div className={styles.grid}>
					{chooseList.map(item => (
						<div className={styles.card} key={item.title}>
							<div className={styles.icon}>
								<Image src="/svgs/button-icon.svg" fill alt="" />
							</div>
							<div className={styles.details}>
								<p>{item.subTitle}</p>
								<h4>{item.title}</h4>
								<p>{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
};

export default Choose;
