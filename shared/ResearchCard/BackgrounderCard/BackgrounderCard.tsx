"use client";
import React from "react";
import { formatDate } from "@/utils/formatUrl";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./BackgrounderCard.module.scss";

interface BackgrounderCardProps {
    image: string;
    title: string;
    slug: string;
    date?: string;
    publishedAt?: string;
}

const BackgrounderCard = ({ image, title, slug, date, publishedAt }: BackgrounderCardProps) => {
    const router = useRouter();
    return (
        <article className={styles.card_container}
            onClick={() => router.push(`/insights/research/${slug}?type=backgrounder`)}
            // className={styles.card_link}
        >
                <div className={styles.top_section}>
                    <div className={styles.tag}>
                        BACKGROUNDER
                    </div>
                    <Link href={`/insights/research/${slug}?type=backgrounder`}>
                        <h2 className={styles.title}>
                            {title}
                        </h2>
                    </Link>
                    <p className={styles.date}>
                        {date ? formatDate(date) : publishedAt || ''}
                    </p>
                </div>
                <div className={styles.bottom_section}>
                    <div className={styles.image_wrapper}>
                        <Image alt={title} fill src={image} sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                    </div>
                </div>
        </article>
    )
}

export default BackgrounderCard;