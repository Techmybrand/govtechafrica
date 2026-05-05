"use client";
import React, { useEffect } from "react";
import { ResearchCard, Button, BackgrounderCard, ExpertTakeCard, PolicyBriefCard } from "@/shared";
import { useGetContentful } from "@/hooks";
import { BlogDetailsProps } from "@/interfaces";
import styles from "./RelatedInsights.module.scss"

const RelatedInsights = () => {
    const { fetchBlogs, sortedBlogs } = useGetContentful();
    useEffect(() => {
        fetchBlogs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className={styles.research_container}>
            <div className={styles.text_wrapper}>
                <div className={styles.text}>
                    <h1>Explore Insights</h1>
                    <Button className={styles.explore_btn} href="/insights">
                        See more
                    </Button>
                </div>
            </div>
            <div className={styles.research_wrapper}>
                {sortedBlogs?.slice(0, 4)?.map((blog: BlogDetailsProps, index: number) => {
                    const getType = blog?.type?.toLowerCase();
                    const type = getType?.replace(' ', '-');
                    const isExpertTake = getType === "perspective" ||
                        getType === "opinion-piece" ||
                        getType === "insight";
                    const isPolicyBrief = getType === "policy brief" || getType === "case study";

                    return blog?.type === 'backgrounder' ? (
                        <BackgrounderCard key={index} title={blog?.title}
                            image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                            slug={blog?.slug}
                            date={blog?.date}
                            publishedAt={blog?.publishedAt}
                        />
                    ) : isExpertTake ? (
                        <ExpertTakeCard key={index} title={blog?.title}
                            image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                            slug={blog?.slug}
                            date={blog?.date}
                            publishedAt={blog?.publishedAt}
                            author={blog?.authors?.[0]}
                            type={type}
                        />
                    ) : isPolicyBrief ? (
                        <PolicyBriefCard key={index} title={blog?.title}
                            image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                            slug={blog?.slug} description={blog?.description}
                            type={type}
                        />
                    ) : (
                        <ResearchCard key={index} title={blog?.title}
                            image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                            alt={`https:${blog?.thumbnail?.fields?.description}`}
                            description={blog?.description}
                            btnText={blog?.type}
                            slug={blog?.slug}
                        />
                    )
                }
                )}
            </div>
            <div className={styles.divider}></div>
        </div>
    )
}

export default RelatedInsights