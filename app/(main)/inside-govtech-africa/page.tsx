import { DealsAndAnnouncements } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Inside Govtech Africa",
	description: `Discover the latest updates, announcements, event recaps, policy milestones, deadlines, and accomplishments 
		happening directly across the Govtech Africa ecosystem.`,
	alternates: {
		canonical: "https://govtechafrica.com/inside-govtech-africa",
	},
	openGraph: {
		title: "Inside Govtech Africa | Govtech Africa",
		description: `Discover the latest updates, announcements, event recaps, policy milestones, deadlines, and 
			accomplishments happening directly across the Govtech Africa ecosystem.`,
		url: "https://govtechafrica.com/inside-govtech-africa",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Inside Govtech Africa",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Inside Govtech Africa | Govtech Africa",
		description: `Discover the latest updates, announcements, event recaps, policy milestones, deadlines, and 
			accomplishments happening directly across the Govtech Africa ecosystem.`,
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa",
			}
		],
		site: "https://x.com/govtech_africa",
	},
};

export default function InsideGovtechAfricaPage() {
    return <DealsAndAnnouncements />;
}