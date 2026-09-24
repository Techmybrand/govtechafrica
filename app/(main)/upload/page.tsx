import { UploadView } from "@/views";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Upload",
	description: `Resource and publication management portal for Govtech Africa.`,
	alternates: {
		canonical: "https://govtechafrica.com/upload",
	},
	robots: {
		index: false,
		follow: false,
	},
};

export default function UploadPage() {
	return <UploadView />;
}
