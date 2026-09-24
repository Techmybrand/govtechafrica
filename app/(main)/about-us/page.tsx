import { AboutUs } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Us",
	description: `Learn about Govtech Africa, our vision, mission, and how we empower African governments through world-class technology and digital transformation.`,
	alternates: {
		canonical: "https://govtechafrica.com/about-us",
	},
	openGraph: {
		title: "About Us | Govtech Africa",
		description: `Learn about Govtech Africa, our vision, mission, and how we empower African governments through world-class technology.`,
		url: "https://govtechafrica.com/about-us",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - About Us",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "About Us | Govtech Africa",
		description: `Empowering African governments through technology and digital transformation.`,
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

export default function AboutUsPage() {
	return <AboutUs />;
}