import { DataAndAI } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Data and AI",
	description: `Unlocking public sector insights, automating routine citizen workflows, and deploying ethical AI governance for African governments.`,
	alternates: {
		canonical: "https://govtechafrica.com/data-and-ai",
	},
	openGraph: {
		title: "Data and AI | Govtech Africa",
		description: `Unlocking public sector insights, automating routine citizen workflows, and deploying ethical AI governance for African governments.`,
		url: "https://govtechafrica.com/data-and-ai",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Data and AI",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Data and AI | Govtech Africa",
		description: `Advanced data analytics, machine learning, and AI solutions for African governments.`,
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

export default function DataAndAIPage() {
	return <DataAndAI />;
}