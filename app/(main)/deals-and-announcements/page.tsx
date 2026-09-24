import { DealsAndAnnouncements } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Deals and Announcements",
	description: `Track the latest investments, partnerships, and funding rounds shaping Africa's GovTech ecosystem.`,
	alternates: {
		canonical: "https://govtechafrica.com/deals-and-announcements",
	},
	openGraph: {
		title: "Deals and Announcements | Govtech Africa",
		description: `Track the latest investments, partnerships, and funding rounds shaping Africa's GovTech ecosystem.`,
		url: "https://govtechafrica.com/deals-and-announcements",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Deals and Announcements",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Deals and Announcements | Govtech Africa",
		description: `Track the latest investments, partnerships, and funding rounds shaping Africa's GovTech ecosystem.`,
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

export default function DealsAndAnnouncementsPage() {
    return <DealsAndAnnouncements />;
}