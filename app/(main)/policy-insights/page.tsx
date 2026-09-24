import { PolicyInsightsView } from "@/views";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Policy Insights",
	description: `Actionable policy insights, strategic briefs, and regulatory analysis driving digital transformation across African governments.`,
	alternates: {
		canonical: "https://govtechafrica.com/policy-insights",
	},
	openGraph: {
		title: "Policy Insights | Govtech Africa",
		description: `Actionable policy insights, strategic briefs, and regulatory analysis driving digital transformation across African governments.`,
		url: "https://govtechafrica.com/policy-insights",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Policy Insights",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Policy Insights | Govtech Africa",
		description: `Policy insights and strategic briefs on African digital governance.`,
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

export default function PolicyInsightsPage() {
	return <PolicyInsightsView />;
}