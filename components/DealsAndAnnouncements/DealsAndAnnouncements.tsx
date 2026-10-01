"use client";
import React, { useState } from "react";
// import Link from "next/link";
import styles from "./DealsAndAnnouncements.module.scss";
import { dealsAndAnnouncementsArray } from "@/mock/navLists.mock";

const filterCategories = ["All", "Updates", "Events", "Deadlines", "Roundtable"];

const PhotoPlaceholder = () => (
    <div className={styles.placeholder_container}>
        <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.placeholder_icon}
        >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
        </svg>
        <span className={styles.placeholder_text}>PHOTO / VIDEO</span>
    </div>
);

const DealsAndAnnouncements = () => {
    const [activeFilter, setActiveFilter] = useState<string>("All");
    const [visibleCount, setVisibleCount] = useState<number>(6);
    const dealsAndAnnoucements = dealsAndAnnouncementsArray;

    const filteredAnnouncements = dealsAndAnnoucements.filter((item) => {
        // if (item.pinned) return false;
        if (activeFilter === "All") return true;
        return item.category.toLowerCase() === activeFilter.toLowerCase();
    });

    // const pinnedItem = dealsAndAnnoucements.find((item) => item.pinned === true);

    const displayedAnnouncements = filteredAnnouncements.slice(0, visibleCount);
    const hasMore = filteredAnnouncements.length > visibleCount;

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    const getBadgeClass = (tagType?: string, tag?: string) => {
        const type = (tagType || tag || "").toLowerCase();
        if (type.includes("roundtable")) return styles.badge_roundtable;
        if (type.includes("deadline")) return styles.badge_deadline;
        if (type.includes("event")) return styles.badge_event;
        return styles.badge_update;
    };

    return (
        <div className={styles.announcements_section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Inside Govtech Africa</h1>
                    <p className={styles.subtitle}>
                        Every update, announcement, and event recap from across the Govtech Africa ecosystem — all in one feed.
                    </p>
                </div>

                <div className={styles.divider} />
                <div className={styles.controls_row}>
                    <div className={styles.filter_group}>
                        {filterCategories.map((cat) => (
                            <button
                                key={cat}
                                className={`${styles.filter_btn} ${activeFilter === cat ? styles.active : ""}`}
                                onClick={() => {
                                    setActiveFilter(cat);
                                    setVisibleCount(6);
                                }}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    <button className={styles.sort_btn}>
                        <span>Newest first</span>
                    </button>
                </div>

                {/* Pinned Item logic commented out as requested */}
                {/*
                {(activeFilter === "All" || activeFilter === "Events" || activeFilter === "Updates" || activeFilter === "Deadlines" || activeFilter === "Roundtable") && pinnedItem && (
                    <div className={styles.pinned_card}>
                        <div className={styles.pinned_content}>
                            <div className={styles.pinned_badge}>
                                <span className={styles.pinned_dot} />
                                <span className={styles.pinned_text}>PINNED</span>
                            </div>
                            <h2 className={styles.pinned_title}>{pinnedItem.title}</h2>
                            <p className={styles.pinned_description}>{pinnedItem.description}</p>
                            {pinnedItem.url && (
                                <Link href={pinnedItem.url} className={styles.pinned_btn}>
                                    <span>Read More</span>
                                    <span className={styles.arrow}>→</span>
                                </Link>
                            )}
                        </div>
                        <div className={styles.pinned_graphic}>
                            <div className={styles.graphic_inner}>
                                <div className={styles.center_pulse} />
                            </div>
                        </div>
                    </div>
                )}
                */}

                <div className={styles.cards_grid}>
                    {displayedAnnouncements.map((item) => (
                        <article key={item.id} className={styles.feed_card}>
                            <div className={styles.card_top}>
                                <span className={`${styles.badge} ${getBadgeClass(item.tagType, item.tag)}`}>
                                    {item.tag.toUpperCase()}
                                </span>
                            </div>

                            <div className={styles.card_media}>
                                <PhotoPlaceholder />
                            </div>

                            <div className={styles.card_content}>
                                <h2 className={styles.card_title}>{item.title}</h2>
                                <p className={styles.card_description}>{item.description}</p>
                            </div>

                            <div className={styles.card_footer}>
                                <span className={styles.meta_date}>{item.date}</span>
                                <span className={styles.meta_dot}>•</span>
                                <span className={styles.meta_type}>
                                    {item.readTime || item.category || item.tag}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>

                {hasMore && (
                    <div className={styles.load_more_wrapper}>
                        <button className={styles.load_more_btn} onClick={handleLoadMore}>
                            Load more posts
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DealsAndAnnouncements;