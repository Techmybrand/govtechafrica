import { SupportServices } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "IT Support Services",
	description: `Comprehensive remote support, system maintenance, and operational IT assistance engineered for African public sector institutions.`,
	alternates: {
		canonical: "https://govtechafrica.com/support-services",
	},
	openGraph: {
		title: "IT Support Services | Govtech Africa",
		description: `Comprehensive remote support, system maintenance, and operational IT assistance engineered for African public sector institutions.`,
		url: "https://govtechafrica.com/support-services",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - IT Support Services",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "IT Support Services | Govtech Africa",
		description: `Enterprise IT remote support and maintenance for government agencies.`,
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

export default function SupportServicesPage() {
	return <SupportServices />;
}