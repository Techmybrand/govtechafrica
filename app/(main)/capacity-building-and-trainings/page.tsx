import { CapacityBuilding } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Capacity Building & Trainings",
	description: `Empowering civil servants and public sector IT personnel with specialized digital skills, cybersecurity 
		training, and tech leadership workshops across Africa.`,
	alternates: {
		canonical: "https://govtechafrica.com/capacity-building-and-trainings",
	},
	openGraph: {
		title: "Capacity Building & Trainings | Govtech Africa",
		description: `Empowering civil servants and public sector personnel with specialized digital skills and tech leadership workshops across Africa.`,
		url: "https://govtechafrica.com/capacity-building-and-trainings",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Capacity Building & Trainings",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Capacity Building & Trainings | Govtech Africa",
		description: `Specialized digital skills training and tech workshops for the public sector.`,
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

export default function CapacityBuildingPage() {
	return <CapacityBuilding />;
}