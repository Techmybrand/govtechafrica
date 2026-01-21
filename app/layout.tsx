import type { Metadata } from "next";
import "@/styles/index.scss";
import { Footer, Header, PreLoader } from "@/shared";
import { AppProvider } from "@/context/AppContext";

export const metadata: Metadata = {
	title: "Govtech Africa",
	description: "African technology for Government Excellence"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.png" sizes="any" />
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
