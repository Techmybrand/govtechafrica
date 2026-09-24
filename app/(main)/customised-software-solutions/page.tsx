import { CustomisedSoftware } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Customised Software Solutions",
	description: `Bespoke enterprise software development, modern workflows, and system integration tailored to the specific needs of African governments and public institutions.`,
	alternates: {
		canonical: "https://govtechafrica.com/customised-software-solutions",
	},
	openGraph: {
		title: "Customised Software Solutions | Govtech Africa",
		description: `Bespoke enterprise software development tailored to the specific needs of African governments.`,
		url: "https://govtechafrica.com/customised-software-solutions",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Customised Software Solutions",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Customised Software Solutions | Govtech Africa",
		description: `Bespoke software solutions built for African public sector operations.`,
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

export default function CustomisedSoftwarePage() {
	return <CustomisedSoftware />;
}