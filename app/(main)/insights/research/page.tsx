import { ResearchView } from "@/views";
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: "Research & Insights",
	description: `Govtech Africa's research hub — backgrounders, articles, policy insights, and reports on digital governance,
		public sector innovation, and technology adoption across Africa.`,
	alternates: {
		canonical: "https://govtechafrica.com/insights/research",
	},
	openGraph: {
		title: "Research & Insights | Govtech Africa",
		description: `Govtech Africa's research hub — backgrounders, articles, policy insights, and reports on digital governance,
			public sector innovation, and technology adoption across Africa.`,
		url: "https://govtechafrica.com/insights/research",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Research & Insights",
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: "Research & Insights | Govtech Africa",
		description: `Govtech Africa's research hub — backgrounders, articles, policy insights, and reports on digital governance,
			public sector innovation, and technology adoption across Africa.`,
		images: [
			{
				url: 'https://govtechafrica.com/images/opengraph_image.png',
				width: 1200,
				height: 630,
				alt: 'Govtech Africa',
			}
		],
		site: 'https://x.com/govtech_africa',
	},
};

export default function ResearchPage() {
	return <ResearchView />;
}
