import { CloudServices } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Cloud Services",
	description: `Scalable sovereign cloud solutions, hybrid cloud migrations, and managed cloud infrastructure designed specifically for African government operations.`,
	alternates: {
		canonical: "https://govtechafrica.com/cloud-services",
	},
	openGraph: {
		title: "Cloud Services | Govtech Africa",
		description: `Scalable sovereign cloud solutions, hybrid cloud migrations, and managed cloud infrastructure for African governments.`,
		url: "https://govtechafrica.com/cloud-services",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Cloud Services",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Cloud Services | Govtech Africa",
		description: `Sovereign and hybrid cloud solutions designed for African government operations.`,
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

export default function CloudServicesPage() {
	return <CloudServices />;
}