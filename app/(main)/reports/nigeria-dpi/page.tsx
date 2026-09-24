import { DPI } from "@/components/Reports";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Nigeria DPI Report",
	description: `Comprehensive analysis on Nigeria's Digital Public Infrastructure (DPI) — key insights, implementation progress, and strategic lessons for Africa.`,
	alternates: {
		canonical: "https://govtechafrica.com/reports/nigeria-dpi",
	},
	openGraph: {
		title: "Nigeria DPI Report | Govtech Africa",
		description: `Comprehensive analysis on Nigeria's Digital Public Infrastructure (DPI) — insights and lessons for Africa.`,
		url: "https://govtechafrica.com/reports/nigeria-dpi",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: `https://images.ctfassets.net/l8vs8and02j3/6eAXoiTzPaEuE6aHX1e5EK/13d7aa28a7c20fe7f1598a5ee7bba553/dpi_readiness.png`,
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Nigeria DPI Report",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Nigeria DPI Report | Govtech Africa",
		description: `Digital Public Infrastructure in Nigeria: Analysis and strategic lessons.`,
		images: [
			{
				url: "https://images.ctfassets.net/l8vs8and02j3/6eAXoiTzPaEuE6aHX1e5EK/13d7aa28a7c20fe7f1598a5ee7bba553/dpi_readiness.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa",
			},
		],
		site: "https://x.com/govtech_africa",
	},
};

export default function ReportsPage() {
	return <DPI />;
}