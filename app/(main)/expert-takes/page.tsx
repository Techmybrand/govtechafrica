import { ExpertTakesView } from "@/views";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Expert Takes",
	description: `Perspectives, insights, and analysis from leading technology experts and public sector leaders driving African digital governance.`,
	alternates: {
		canonical: "https://govtechafrica.com/expert-takes",
	},
	openGraph: {
		title: "Expert Takes | Govtech Africa",
		description: `Perspectives, insights, and analysis from leading technology experts and public sector leaders driving African digital governance.`,
		url: "https://govtechafrica.com/expert-takes",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Expert Takes",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Expert Takes | Govtech Africa",
		description: `Perspectives and analysis from technology and public sector leaders in Africa.`,
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

export default function ExpertTakesPage() {
	return <ExpertTakesView />;
}