import { StrategyConsulting } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Strategy Consulting & Advisory",
	description: `Strategic digital transformation roadmaps, technology policy advisory, and institutional reform planning 
		for African governments.`,
	alternates: {
		canonical: "https://govtechafrica.com/strategy-consulting-and-advisory",
	},
	openGraph: {
		title: "Strategy Consulting & Advisory | Govtech Africa",
		description: `Strategic digital transformation roadmaps and technology policy advisory for African governments.`,
		url: "https://govtechafrica.com/strategy-consulting-and-advisory",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Strategy Consulting & Advisory",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Strategy Consulting & Advisory | Govtech Africa",
		description: `Strategy consulting and digital transformation advisory for the public sector.`,
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa",
			},
		],
		site: "https://x.com/govtech_africa",
	},
};

export default function StrategyConsultingPage() {
	return <StrategyConsulting />;
}