import { TechEvents } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Tech Events Design & Delivery",
	description: `Curating high-impact technology summits, gov-a-thons, and public sector innovation workshops across Africa.`,
	alternates: {
		canonical: "https://govtechafrica.com/tech-events",
	},
	openGraph: {
		title: "Tech Events Design & Delivery | Govtech Africa",
		description: `Curating high-impact technology summits, gov-a-thons, and public sector innovation workshops across Africa.`,
		url: "https://govtechafrica.com/tech-events",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Tech Events Design & Delivery",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Tech Events Design & Delivery | Govtech Africa",
		description: `Designing and delivering high-impact public sector tech summits and gov-a-thons.`,
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

export default function TechEventsPage() {
	return <TechEvents />;
}