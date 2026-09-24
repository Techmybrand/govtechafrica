import { NewHomeView } from "@/views";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Home",
	description: `Govtech Africa enables African governments to better serve citizens and businesses by leveraging technology and the digital economy.`,
	alternates: {
		canonical: "https://govtechafrica.com/new-home",
	},
	openGraph: {
		title: "Home | Govtech Africa",
		description: `African technology for Government Excellence. Automating government processes across Africa.`,
		url: "https://govtechafrica.com/new-home",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Govtech Africa | Automating Government Processes",
		description: `African technology for Government Excellence.`,
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

export default function NewHome() {
	return <NewHomeView />;
}