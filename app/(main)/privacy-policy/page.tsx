import { PrivacyPolicy } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Privacy Policy",
	description: `Govtech Africa's Privacy & Data Protection Policy explaining how we collect, use, and protect personal data in compliance with the Nigeria Data Protection Act and international standards.`,
	alternates: {
		canonical: "https://govtechafrica.com/privacy-policy",
	},
	openGraph: {
		title: "Privacy Policy | Govtech Africa",
		description: `Govtech Africa's Privacy & Data Protection Policy explaining how we collect, use, and protect personal data.`,
		url: "https://govtechafrica.com/privacy-policy",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Privacy Policy",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Privacy Policy | Govtech Africa",
		description: `Our commitment to data privacy, protection, and compliance across all digital operations.`,
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

export default function PrivacyPolicyPage() {
	return <PrivacyPolicy />;
}