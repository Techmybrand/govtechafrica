import { BackgroundersView } from "@/views";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Backgrounders",
	description: `Concise backgrounders, policy context, and technical overviews on digital public infrastructure and
		government modernisation in Africa.`,
	alternates: {
		canonical: "https://govtechafrica.com/backgrounders",
	},
	openGraph: {
		title: "Backgrounders | Govtech Africa",
		description: `Concise backgrounders, policy context, and technical overviews on digital public infrastructure in Africa.`,
		url: "https://govtechafrica.com/backgrounders",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Backgrounders",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Backgrounders | Govtech Africa",
		description: `Policy context and technical overviews on digital public infrastructure in Africa.`,
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

export default function BackgroundersPage() {
	return <BackgroundersView />;
}