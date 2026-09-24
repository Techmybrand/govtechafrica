import { Cybersecurity } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Cybersecurity",
	description: `Proactive cybersecurity, cyber resilience, threat intelligence, and defense architectures built to protect government data, infrastructure, and public services.`,
	alternates: {
		canonical: "https://govtechafrica.com/cybersecurity",
	},
	openGraph: {
		title: "Cybersecurity | Govtech Africa",
		description: `Proactive cybersecurity, cyber resilience, and threat intelligence built to protect government data and infrastructure across Africa.`,
		url: "https://govtechafrica.com/cybersecurity",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Cybersecurity",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Cybersecurity | Govtech Africa",
		description: `Protecting government data and infrastructure across Africa with modern cybersecurity solutions.`,
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

export default function CybersecurityPage() {
	return <Cybersecurity />;
}