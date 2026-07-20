"use client";
import React from "react";
import { formatDate } from "@/utils/formatUrl";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./ReportCard.module.scss";

interface ReportCardProps {
    image: string;
    title: string;
    slug: string;
    date?: string;
    publishedAt?: string;
    externalUrl?: string;
}

const ReportCard = ({ image, title, slug, date, publishedAt, externalUrl }: ReportCardProps) => {
    const router = useRouter();
    const handleNavigate = () => {
        if (externalUrl) {
            router.push(externalUrl);
        } else {
            router.push(`/insights/research/${slug}?type=report`);
        }
    }
    return (
        <article className={styles.card_container}
            onClick={handleNavigate}
        >
            <div className={styles.bottom_section}>
                <div className={styles.image_wrapper}>
                    <Image alt={title} fill src={image} loading="lazy" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
            </div>
            <div className={styles.top_section}>
                <div className={styles.title_and_date}>
                    <Link href={`${externalUrl ? externalUrl : `/insights/research/${slug}?type=report`}`}>
                        <h2 className={styles.title}>
                            {title}
                        </h2>
                    </Link>
                    <p className={styles.date}>
                        {date ? formatDate(date) : publishedAt || ''}
                    </p>
                </div>
                <div className={styles.tag}>
                    REPORT
                </div>
            </div>
        </article>
    )
}

export default ReportCard