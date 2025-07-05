"use client";
import { Button, InsightsCard } from "@/shared";
import { useRouter } from "next/navigation";
import { insightProps } from "@/interfaces";
import styles from "./Insights.module.scss";

const insightList: insightProps[] = [
	{
		title: "Converged Cyber AI: A Paradigm Shift in Cybersecurity",
		description:
			`The advancement of generative AI capabilities presents enormous potential for 
			modernizing government operations but it also introduces new security gaps. While 
			automation allows developers to move from concept to minimum viable product faster 
			than ever, adversaries are developing similar AI-enabled techniques to discover and 
			exploit security vulnerabilities`,
		href: "",
		image: '/images/insight_image_1.jpg',
		bgColor: '#FFFFFF1A',
	},
	{
		title: "The intersection of AI governance and cybersecurity",
		description:
			"Learn about the impact of generative AI on cybersecurity planning and our proactive approach to AI implementation that focuses on governance and ethical use. You'll also hear about the dual nature of cloud computing, acknowledging its power for data accessibility and defensive capabilities and addressing the challenges of multi-cloud environments.",
		href: "",
		image: '/images/insight_image_2.jpg',
		bgColor: '#13361B',
	},
	{
		title: "Federal House of Reps - Office of the Deputy Speaker",
		description:
			"We are an organisation powered by people. Meet the dynamic team of  experienced professionals driving Govtech Africa’s mission to build thriving  and resilient societies through technology",
		href: "",
		image: '/images/insight_image_1.jpg',
		bgColor: '#13361B'
	}
];
interface Props {
	isDivider?: boolean
}

const Insights = ({isDivider}: Props) => {
	const router = useRouter();
	return (
		<div className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.row}>
					<div className={styles.text}>
						<h3>Insights</h3>
					</div>
					<Button onClick={() => router.push('/insights')}>
						Explore
					</Button>
				</div>
				<div className={styles.slider_container}>
					{insightList.slice(0, 2).map((insight: insightProps, index: number) => (
						<InsightsCard key={index} insight={insight} index={index} />
					))}
				</div>
			</div>
			{isDivider && (
				<div className={styles.divider}></div>
			)}
		</div>
	);
};

export default Insights;
