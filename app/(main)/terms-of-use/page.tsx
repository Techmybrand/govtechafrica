import { TermsOfUse } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Terms of Use",
	description: `Terms of Use governing your access to and use of Govtech Africa's website, platforms, and digital services.`,
	alternates: {
		canonical: "https://govtechafrica.com/terms-of-use",
	},
	openGraph: {
		title: "Terms of Use | Govtech Africa",
		description: `Terms of Use governing your access to and use of Govtech Africa's website, platforms, and digital services.`,
		url: "https://govtechafrica.com/terms-of-use",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Terms of Use",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Terms of Use | Govtech Africa",
		description: `Terms of Use governing your access to and use of Govtech Africa's website and services.`,
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

export default function TermsOfUsePage() {
	return <TermsOfUse />;
}