import { InterviewsView } from "@/views";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Interviews",
	description: `Interviews with African government leaders, innovators, and policymakers on digital transformation and
        public sector modernization.`,
	alternates: {
		canonical: "https://govtechafrica.com/interviews",
	},
	openGraph: {
		title: "Interviews | Govtech Africa",
		description: `Interviews with African government leaders, innovators, and policymakers on digital transformation and
            public sector modernization.`,
		url: "https://govtechafrica.com/interviews",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Interviews",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Interviews | Govtech Africa",
		description: "Interviews with African government leaders and innovators.",
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

export default function InterviewsPage() {
    return <InterviewsView />
}