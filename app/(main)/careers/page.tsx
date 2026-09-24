import { CareersView } from "@/views";
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Careers",
    description: `Join Govtech Africa"s team. Explore open roles and internships across product design, DevOps, data analysis,
        project management, and more — help us build resilient digital government across Africa.`,
    alternates: {
        canonical: "https://govtechafrica.com/careers",
    },
    openGraph: {
        title: "Careers | Govtech Africa",
        description: `Explore open positions and internships at Govtech Africa and help build the digital foundations of
            African governance.`,
        url: "https://govtechafrica.com/careers",
        siteName: "Govtech Africa",
        type: "website",
        images: [
            {
                url: "https://govtechafrica.com/images/opengraph_image.png",
                width: 1200,
                height: 630,
                alt: "Govtech Africa - Careers",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Careers | Govtech Africa",
        description: `Explore open positions and internships at Govtech Africa.`,
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

export default function CareersPage() {
    return <CareersView />
}