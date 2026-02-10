import type { Metadata, Viewport } from "next";
import "@/styles/index.scss";
import { Footer, Header, PreLoader } from "@/shared";
import React from "react";
import Providers from "@/Providers";
import Script from "next/script";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://govtechafrica.com";

export const viewport: Viewport = {
	width: "device-width",
	initialScale: 1,
	maximumScale: 5,
	// themeColor: [
	// 	{ media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
	// 	{ media: "(prefers-color-scheme: dark)", color: "#000000" },
	// ],
};

export const metadata: Metadata = {
	metadataBase: new URL(baseUrl),
	title: `Govtech Africa | Automating Government Processes`,
	description: `African technology for Government Excellence`,
	keywords: [
		'Govtech Africa',
		'Government technology Africa',
		'Digital transformation public sector Africa',
		'African digital governance conference',
		'Gov-a-thon Africa',
		'Public sector innovation Africa',
		'Tech for governance Africa',
		'Smart governance Africa',
		'African government digitisation',
		'How to digitize government services in Africa',
		'GovTech innovation in Africa',
		'Public sector digital solutions Africa',
		'Smart city and e-governance Africa',
		'Africa GovTech policy forum',
		'AI in public sector Africa',
		'Digital ID and infrastructure in African governance',
	],
	authors: [{ name: "Govtech Africa" }],
	creator: "Govtech Africa",
	publisher: "Govtech Africa",
	openGraph: {
		title: `Govtech Africa | Automating Government Processes`,
		description: `African technology for Government Excellence`,
		url: baseUrl,
		type: 'website',
		siteName: 'Govtech Africa',
		images: [
			{
				url: 'https://govtechafrica.com/images/opengraph_image.png',
				width: 800,
				height: 418,
				alt: 'Govtech Africa',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: `Govtech Africa | Automating Government Processes`,
		description: `African technology for Government Excellence`,
		images: [
			{
				url: 'https://govtechafrica.com/images/opengraph_image.png',
				// width: 1200,
				// height: 630,
				width: 800,
				height: 418,
				alt: 'Govtech Africa',
			}
		]
	},
	alternates: {
		canonical: baseUrl,
	},
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any" />
				{/* <Script id="gtag-consent" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('consent', 'default', {
							'analytics_storage': 'denied',
							'functionality_storage': 'denied',
							'ad_storage': 'denied',
							'ad_user_data': 'denied',
							'ad_personalization': 'denied'
						});
					`}
				</Script> */}
				<Script async src="https://www.googletagmanager.com/gtag/js?id=G-2CVY7FBLX3"></Script>
				<Script id="gtag-init" strategy="afterInteractive">
					{`
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-2CVY7FBLX3');
					`}
				</Script>
			</head>
			<body>
				<PreLoader />
				<Providers>
					<React.Fragment>
						<Header />
						{children}
						<Footer />
					</React.Fragment>
				</Providers>
			</body>
		</html>
	);
}
