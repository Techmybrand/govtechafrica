import { NetworkInfrastructure } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Network Infrastructure Design & Implementation",
	description: `Robust network architecture, mission-critical connectivity, and secure digital infrastructure solutions engineered for African government institutions.`,
	alternates: {
		canonical: "https://govtechafrica.com/network-infrastructure",
	},
	openGraph: {
		title: "Network Infrastructure Design & Implementation | Govtech Africa",
		description: `Robust network architecture, mission-critical connectivity, and secure digital infrastructure solutions for African government institutions.`,
		url: "https://govtechafrica.com/network-infrastructure",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Network Infrastructure Design & Implementation",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Network Infrastructure Design & Implementation | Govtech Africa",
		description: `Robust network architecture and mission-critical connectivity for public institutions.`,
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

export default function NetworkInfrastructurePage() {
	return <NetworkInfrastructure />;
}