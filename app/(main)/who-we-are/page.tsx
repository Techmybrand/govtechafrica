import { WhoWeAreView } from "@/views";
import type { Metadata } from "next";
 
export const metadata: Metadata = {
	title: "Who We Are",
	description: `Govtech Africa is on a mission to close the technology gap for African governments — through technology
		services, consulting, and digital solutions. Learn about our mission, vision, values, and team.`,
	alternates: {
		canonical: "https://govtechafrica.com/who-we-are",
	},
	openGraph: {
		title: "Who We Are | Govtech Africa",
		description: `We build the digital foundations that empower African governments — through services, consulting, and
			digital solutions.`,
		url: "https://govtechafrica.com/who-we-are",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Who We Are",
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: `Who We Are | Govtech Africa`,
		description: `Our mission, vision, and values driving digital transformation across African governments.`,
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

export default function WhoWeAre() {
	return <WhoWeAreView />;
}
