import { ServicesView } from "@/views";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services",
    description: `Explore Govtech Africa's technology and consulting services — empowering African governments with custom
        software, cloud solutions, cybersecurity, data & AI, infrastructure, IT strategy, regulatory compliance, and
        capacity building.`,
    alternates: {
        canonical: "https://govtechafrica.com/what-we-do/services",
    },
    openGraph: {
        title: "Our Services",
        description: `Explore Govtech Africa's technology and consulting services — empowering African governments with
            custom software, cloud solutions, cybersecurity, data & AI, infrastructure, IT strategy, regulatory compliance,
            and capacity building.`,
        url: "https://govtechafrica.com/what-we-do/services",
        siteName: "Govtech Africa",
        type: "website",
        images: [
            {
                url: "https://govtechafrica.com/images/opengraph_image.png",
                width: 1200,
                height: 630,
                alt: "Govtech Africa - Technology and Consulting Services",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Services",
        description: `Explore Govtech Africa's technology and consulting services — empowering African governments with
            custom software, cloud solutions, cybersecurity, data & AI, infrastructure, IT strategy, regulatory compliance,
            and capacity building.`,
        images: [
            {
                url: "https://govtechafrica.com/images/opengraph_image.png",
                width: 1200,
                height: 630,
                alt: "Govtech Africa - Technology and Consulting Services",
            }
        ],
        site: "https://x.com/govtech_africa",
    },
};

export default function WhatWeDoServicesPage() {
    return <ServicesView />;
}