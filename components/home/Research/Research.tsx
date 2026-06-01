"use client";
import React, { useEffect } from "react";
import { ResearchCard, BackgrounderCard, ExpertTakeCard, PolicyBriefCard } from "@/shared";
import { useGetContentful } from "@/hooks";
import { BlogDetailsProps } from "@/interfaces";
import styles from "./Research.module.scss";

const Research = () => {
    const { fetchBlogs, sortedBlogs } = useGetContentful();
    useEffect(() => {
        fetchBlogs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.research_container}>
            <div className={styles.research_wrapper}>
                {sortedBlogs?.slice(0, 8)?.map((blog: BlogDetailsProps, index: number) => {
                    let paragraph = '';
                    let wordCount = 0;
                    if (blog?.researchContent?.content) {
                        for (const content of blog?.researchContent?.content) {
                            if (content?.nodeType === 'paragraph' &&
                                Array.isArray(content?.content) &&
                                content?.content.length > 0 &&
                                content?.content[0]?.nodeType === 'text' &&
                                content?.content[0]?.value
                            ) {
                                const text = content?.content[0]?.value;
                                const words = text?.trim().split(/\s+/).length;
                                wordCount += words;
                                paragraph += text + ' ';
                                if (wordCount > 100) {
                                    paragraph = paragraph?.slice(0, 140) + '...';
                                    break;
                                }
                            }
                        }
                    }
                    const type = blog?.type?.toLowerCase();
                    const getResearchType = type?.replace(' ', '_');
                    const isExpertTake = type === "perspective" ||
                        type === "opinion piece" || type === "insight";
                    const isPolicyBrief = type === "policy brief" || type === "case study";

                    return blog?.type === 'backgrounder' ? (
                        <BackgrounderCard key={index} title={blog?.title}
                            image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                            slug={blog?.slug} date={blog?.date}
                            publishedAt={blog?.publishedAt}
                        />
                    ) : isExpertTake ? (
                        <ExpertTakeCard key={index} title={blog?.title}
                            image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                            slug={blog?.slug} date={blog?.date}
                            type={type} author={blog?.authors?.[0]}
                            publishedAt={blog?.publishedAt}
                        />
                    ) : isPolicyBrief ? (
                        <PolicyBriefCard key={index} title={blog?.title}
                            image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                            slug={blog?.slug} description={blog?.description}
                            type={type} btnText={blog?.type}
                        />
                    ) : (
                        <ResearchCard key={index} title={blog?.title}
                            image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                            alt={`https:${blog?.thumbnail?.fields?.description}`}
                            description={blog?.description || paragraph}
                            btnText={blog?.type} slug={blog?.slug}
                            researchType={getResearchType}
                        />
                    )
                }
                )}
            </div>
            <div className={styles.divider}></div>
        </div>
    )
}

export default Research