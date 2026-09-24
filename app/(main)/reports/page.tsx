import { ReportsView } from "@/views";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Reports",
	description: `Access in-depth research reports, case studies, and policy whitepapers on digital transformation, public sector technologies, and DPI across Africa.`,
	alternates: {
		canonical: "https://govtechafrica.com/reports",
	},
	openGraph: {
		title: "Reports | Govtech Africa",
		description: `Access in-depth research reports, case studies, and policy whitepapers on digital transformation in Africa.`,
		url: "https://govtechafrica.com/reports",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Reports",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Reports | Govtech Africa",
		description: `In-depth research reports and case studies on digital governance in Africa.`,
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

export default function ReportsPage() {
	return <ReportsView />;
}