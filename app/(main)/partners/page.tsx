// import { PartnersComponent } from "@/components";
import { NotFoundView } from "@/views";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Partners",
	description: `Partner with Govtech Africa to build resilient, sovereign digital solutions for African governments and public institutions.`,
	alternates: {
		canonical: "https://govtechafrica.com/partners",
	},
	openGraph: {
		title: "Partners | Govtech Africa",
		description: `Partner with Govtech Africa to build resilient digital solutions for African governments.`,
		url: "https://govtechafrica.com/partners",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Partners",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Partners | Govtech Africa",
		description: `Partner with Govtech Africa to advance public sector digital transformation.`,
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

export default function PartnersPage() {
	return <NotFoundView />;
    // return <PartnersComponent />
}