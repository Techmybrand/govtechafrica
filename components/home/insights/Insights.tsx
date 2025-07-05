"use client";
import { Button } from "@/shared";
import { shortenTitle } from "@/utils/stringShortner";
import { useRouter } from "next/navigation";
import styles from "./Insights.module.scss";
interface insightProps {
	title: string;
	description: string;
	href?: string;
	image: string;
}

const insightList: insightProps[] = [
	{
		title: "Converged Cyber AI: A Paradigm Shift in Cybersecurity",
		description: `The advancement of generative AI capabilities presents enormous potential for 
			modernizing government operations but it also introduces new security gaps. While 
			automation allows developers to move from concept to minimum viable product faster 
			than ever, adversaries are developing similar AI-enabled techniques to discover and 
			exploit security vulnerabilities`,
		href: "",
		image: "/images/insight_image_1.jpg"
	},
	{
		title: "The intersection of AI governance and cybersecurity",
		description:
			"Learn about the impact of generative AI on cybersecurity planning and our proactive approach to AI implementation that focuses on governance and ethical use. You'll also hear about the dual nature of cloud computing, acknowledging its power for data accessibility and defensive capabilities and addressing the challenges of multi-cloud environments.",
		href: "",
		image: "/images/insight_image_2.jpg"
	},
	{
		title: "Federal House of Reps - Office of the Deputy Speaker",
		description:
			"We are an organisation powered by people. Meet the dynamic team of  experienced professionals driving Govtech Africa’s mission to build thriving  and resilient societies through technology",
		href: " ",
		image: "/images/insight_image_1.jpg"
	}
];
interface Props {
	isDivider?: boolean;
}

const Insights = ({ isDivider }: Props) => {
	const router = useRouter();
	return (
		<div className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.row}>
					<div className={styles.text}>
						<h3>Insights</h3>
					</div>
					<Button onClick={() => router.push("/insights")}>Explore</Button>
				</div>
				<div className={styles.slider_container}>
					{insightList
						.slice(0, 2)
						.map((insight: insightProps, index: number) => (
							<div
								data-index={index}
								key={insight.title}
								style={{ backgroundImage: `url(${insight.image})` }}
								className={styles.slide}
							>
								<div className={styles.details}>
									<h4>{shortenTitle(insight.title, 42)}</h4>
									<p>{insight.description}</p>
								</div>
								<Button className={styles.card_btn}>Explore</Button>
							</div>
						))}
				</div>
			</div>
			{isDivider && <div className={styles.divider}></div>}
		</div>
	);
};

export default Insights;
