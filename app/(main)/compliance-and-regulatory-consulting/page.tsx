import { Compliance } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "IT Compliance & Regulatory Consulting",
	description: `Comprehensive IT compliance, governance frameworks, and regulatory advisory services designed for African public sector institutions and digital infrastructure.`,
	alternates: {
		canonical: "https://govtechafrica.com/compliance-and-regulatory-consulting",
	},
	openGraph: {
		title: "IT Compliance & Regulatory Consulting | Govtech Africa",
		description: `Comprehensive IT compliance, governance frameworks, and regulatory advisory services designed for African public sector institutions.`,
		url: "https://govtechafrica.com/compliance-and-regulatory-consulting",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - IT Compliance & Regulatory Consulting",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "IT Compliance & Regulatory Consulting | Govtech Africa",
		description: `IT compliance and regulatory consulting for African public institutions.`,
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

export default function CompliancePage() {
	return <Compliance />;
}