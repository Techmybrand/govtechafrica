import type { Metadata } from "next";
import "@/styles/index.scss";
import { Footer, Header, PreLoader } from "@/shared";
import { AppProvider } from "@/context/AppContext";

export const metadata: Metadata = {
	title: `Govtech Africa | Automating government processes`,
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
	openGraph: {
		title: `Govtech Africa | Automating government processes`,
		description: `African technology for Government Excellence`,
		url: 'https://govtechafrica.com',
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
  	metadataBase: new URL('https://govtechafrica.com'),
	twitter: {
		card: 'summary_large_image',
		title: `Govtech Africa | Automating government processes`,
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
			</head>
			<body>
				<PreLoader />
				<AppProvider>
					<Header />
					{children}
					<Footer />
				</AppProvider>
			</body>
		</html>
	);
}
