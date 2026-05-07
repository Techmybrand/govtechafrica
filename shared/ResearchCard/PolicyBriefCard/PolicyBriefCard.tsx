"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Logo } from "@/shared";
import styles from "./PolicyBriefCard.module.scss";
interface PolicyBriefCardProps {
    image: string;
    title: string;
    slug: string;
    type?: string;
    description?: string;
    btnText?: string;
}

const PolicyBriefCard = ({ image, title, slug, description, btnText }: PolicyBriefCardProps) => {
    const router = useRouter();
    const typeQuery = 'policy-brief';
    const displayTag = btnText || 'POLICY BRIEF';
    return (
        <article className={styles.card_container}
            onClick={() => router.push(`/insights/research/${slug}?type=${typeQuery}`)}
        >
            <div className={styles.top_section}>
                <div className={styles.logo_wrapper}>
                    <Logo className={styles.logo} />
                </div>
                <div className={styles.tag}>
                    {displayTag}
                </div>
            </div>
            <div className={styles.middle_section}>
                <div className={styles.image_wrapper}>
                    <Image alt={title} fill src={image} sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                </div>
                <div className={styles.title_wrapper}>
                    <Link href={`/insights/research/${slug}?type=${typeQuery}`}>
                        <h2 className={styles.title}>
                            {title}
                        </h2>
                    </Link>
                    <p>{description?.slice(0, 90)}...</p>
                </div>
            </div>
        </article>
    )
}

export default PolicyBriefCard;