import { ContactView } from "@/views";
import type { Metadata } from "next";
 
export const metadata: Metadata = {
	title: "Contact Us",
	description: `Get in touch with Govtech Africa for general inquiries and partnership requests. Let's co-create a more
		efficient, transparent, and digitally empowered Africa.`,
	alternates: {
		canonical: "https://govtechafrica.com/contact",
	},
	openGraph: {
		title: "Contact Us | Govtech Africa",
		description: `Reach out to discuss partnerships and how we can co-create a more efficient, transparent, and digitally
			empowered Africa.`,
		url: "https://govtechafrica.com/contact",
		siteName: "Govtech Africa",
		type: "website",
		images: [
			{
				url: "https://govtechafrica.com/images/opengraph_image.png",
				width: 1200,
				height: 630,
				alt: "Govtech Africa - Contact Us",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Contact Us | Govtech Africa",
		description: "Get in touch with Govtech Africa for general inquiries and partnership requests.",
		images: [
            {
                url: "https://govtechafrica.com/images/opengraph_image.png",
                width: 1200,
                height: 630,
                alt: "Govtech Africa",
            }
        ],
        site: "https://x.com/govtech_africa",
	},
};

export default function Contact() {
	return <ContactView />;
}
