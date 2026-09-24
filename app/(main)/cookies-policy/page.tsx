import { CookiePolicy } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Cookie Policy",
	description: `Learn how Govtech Africa uses cookies and similar technologies on its website and how you can manage your preferences.`,
	alternates: {
		canonical: "https://govtechafrica.com/cookies-policy",
	},
	openGraph: {
		title: "Cookie Policy | Govtech Africa",
		description: `Learn how Govtech Africa uses cookies and similar technologies on its website and how you can manage your preferences.`,
		url: "https://govtechafrica.com/cookies-policy",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Cookie Policy",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Cookie Policy | Govtech Africa",
		description: `Understand how Govtech Africa manages cookies and user preferences.`,
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

export default function CookiesPolicyPage() {
	return <CookiePolicy />;
}