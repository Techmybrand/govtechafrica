"use client";
import React from "react";
import { formatDate } from "@/utils/formatUrl";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./ExpertTakeCard.module.scss";

interface ExpertTakeCardProps {
    image: string;
    title: string;
    slug: string;
    author?: string;
    date?: string;
    publishedAt?: string;
    type?: string;
}

const ExpertTakeCard = ({ image, title, slug, author, date, publishedAt }: ExpertTakeCardProps) => {
    const router = useRouter();
    const typeQuery = 'expert-take';
    return (
        <article className={styles.card_container}
            onClick={() => router.push(`/insights/research/${slug}?type=${typeQuery}`)}
        >
            <div className={styles.top_section}>
                <div className={styles.image_wrapper}>
                    <Image alt={title} fill src={image} sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                </div>
            </div>
            <div className={styles.middle_section}>
                <Link href={`/insights/research/${slug}?type=${typeQuery}`}>
                    <h2 className={styles.title}>
                        {title}
                    </h2>
                </Link>
            </div>
            <div className={styles.bottom_section}>
                <p className={styles.date}>
                    {date ? formatDate(date) : publishedAt || ''}
                </p>
                <div className={styles.author}>
                    <p>
                        {author ? `By ${author}` : 'Expert Take'}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default ExpertTakeCard;