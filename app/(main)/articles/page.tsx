import { ArticlesView } from "@/views";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Articles",
	description: `Read featured articles and in-depth commentary on government technology, public sector digitization, and 
		African digital sovereignty.`,
	alternates: {
		canonical: "https://govtechafrica.com/articles",
	},
	openGraph: {
		title: "Articles | Govtech Africa",
		description: `Read featured articles and in-depth commentary on government technology and public sector digitization in Africa.`,
		url: "https://govtechafrica.com/articles",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Articles",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Articles | Govtech Africa",
		description: `Articles and commentary on government technology and digital transformation in Africa.`,
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

export default function ArticlesPage() {
	return <ArticlesView />;
}