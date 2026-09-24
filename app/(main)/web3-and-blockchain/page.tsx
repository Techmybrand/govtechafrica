import { Web3 } from "@/components";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Web3 & Blockchain Technology",
	description: `Leveraging decentralized technologies, smart contracts, and verifiable credentials for transparent, tamper-proof public sector operations in Africa.`,
	alternates: {
		canonical: "https://govtechafrica.com/web3-and-blockchain",
	},
	openGraph: {
		title: "Web3 & Blockchain Technology | Govtech Africa",
		description: `Leveraging decentralized technologies, smart contracts, and verifiable credentials for transparent, tamper-proof public sector operations in Africa.`,
		url: "https://govtechafrica.com/web3-and-blockchain",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Web3 & Blockchain Technology",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Web3 & Blockchain Technology | Govtech Africa",
		description: `Leveraging decentralized technologies and blockchain for transparent public sector operations in Africa.`,
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

export default function Web3Page() {
	return <Web3 />;
}