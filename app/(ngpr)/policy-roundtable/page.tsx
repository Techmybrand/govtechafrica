import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'National Govtech Policy Roundtable 2026',
    description: `Digital First Governance: Rethinking How Nigerian Governments Serve, Engage and Deliver.`,
    keywords: [
        'Govtech Africa',
        'Policy Round-table',
        'Policy Round table',
        'National Govtech Policy Round-table',
        'National Govtech',
    ],
    openGraph: {
        title: 'National Govtech Policy Roundtable 2026',
        description: 'Register to attend the premier govtech policy event in Africa.',
        images: [
            {
                url: 'https://govtechafrica.com/policy_opengraph.png',
                width: 1200,
                height: 630,
                alt: 'Govtech Policy Roundtable 2026',
            },
        ],
        siteName: 'GovTech Africa',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        images: ['https://govtechafrica.com/policy_opengraph.png'],
    },
};

import { PolicyRoundTableView } from "@/views";

export default function PolicyRoundTablePage() {
    return <PolicyRoundTableView />
}