import { InfrastructureProcurement } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "IT Infrastructure Procurement & Supply",
	description: `End-to-end hardware procurement, technology sourcing, and reliable supply chain solutions designed for
		large-scale government IT projects.`,
	alternates: {
		canonical: "https://govtechafrica.com/infrastructure-procurement-and-supply",
	},
	openGraph: {
		title: "IT Infrastructure Procurement & Supply | Govtech Africa",
		description: `End-to-end hardware procurement and supply chain solutions for large-scale government IT projects.`,
		url: "https://govtechafrica.com/infrastructure-procurement-and-supply",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - IT Infrastructure Procurement & Supply",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "IT Infrastructure Procurement & Supply | Govtech Africa",
		description: `Procurement and supply chain solutions for government IT infrastructure.`,
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

export default function InfrastructureProcurementPage() {
	return <InfrastructureProcurement />;
}