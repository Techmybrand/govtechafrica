import { PolicyRoundTableView } from "@/views";
import type { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://govtechafrica.com/policy-roundtable"),
    title: 'National Govtech Policy Roundtable 2026',
    description: `Digital First Governance: Rethinking How Nigerian Governments Serve, Engage and Deliver.`,
    keywords: [
        'Govtech Africa',
        'Policy Round-table',
        'Policy Round table',
        'National Govtech Policy Roundtable',
        'National Govtech Policy Roundtable 2026',
        'National Govtech',
    ],
    openGraph: {
        title: 'National Govtech Policy Roundtable 2026',
        description: `Digital First Governance: Rethinking How Nigerian Governments Serve, 
            Engage and Deliver.`,
        url: "https://govtechafrica.com/policy-roundtable",
		type: 'website',
		siteName: 'Govtech Africa',
        images: [
            {
                url: 'https://govtechafrica.com/policy_opengraph.png',
                width: 1200,
                height: 630,
                alt: 'Govtech Policy Roundtable 2026',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'National Govtech Policy Roundtable 2026',
        description: `Digital First Governance: Rethinking How Nigerian Governments Serve, 
            Engage and Deliver.`,
        images: [
            'https://govtechafrica.com/policy_opengraph.png'
        ],
    },
};

export default function PolicyRoundTablePage() {
    return <PolicyRoundTableView />
}