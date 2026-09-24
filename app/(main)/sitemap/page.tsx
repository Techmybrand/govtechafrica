import { SiteMap } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Site Map",
	description: `View the complete sitemap and navigational directory of Govtech Africa's website and platforms.`,
	alternates: {
		canonical: "https://govtechafrica.com/site-map",
	},
	openGraph: {
		title: "Site Map | Govtech Africa",
		description: `View the complete sitemap and navigational directory of Govtech Africa's website.`,
		url: "https://govtechafrica.com/site-map",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Site Map",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Site Map | Govtech Africa",
		description: `Complete sitemap and directory of Govtech Africa.`,
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

export default function SiteMapPage() {
	return <SiteMap />;
}