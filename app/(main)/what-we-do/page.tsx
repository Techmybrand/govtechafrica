import { WhatWeDoView } from "@/views";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "What We Do",
	// description:
	// 	`Explore Govtech Africa's services and consulting services — custom software, cloud, cybersecurity, data & AI, 
	// 	network infrastructure, IT strategy, and capacity building for African governments and public institutions.`,
	description: `Govtech Africa delivers technology services and consulting for African governments, alongside a growing 
		suite of digital solutions built to drive government excellence`,
	alternates: {
		canonical: "https://govtechafrica.com/what-we-do",
	},
	openGraph: {
		title: "What We Do | Govtech Africa",
		description: `Govtech Africa delivers technology services and consulting for African governments, alongside a growing 
			suite of digital solutions built to drive government excellence`,
		url: "https://govtechafrica.com/what-we-do",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: 'https://govtechafrica.com/images/opengraph_image.png',
				width: 1200,
				height: 630,
				alt: 'Govtech Africa - What We Do',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: "What We Do | Govtech Africa",
		description: `Govtech Africa delivers technology services and consulting for African governments, alongside a growing 
			suite of digital solutions built to drive government excellence`,
		images: [
			{
				url: 'https://govtechafrica.com/images/opengraph_image.png',
				width: 1200,
				height: 630,
				alt: 'Govtech Africa',
			}
		],
		site: 'https://x.com/govtech_africa',
	},
};

export default function WhatWeDo() {
	return <WhatWeDoView />;
}
