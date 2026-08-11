"use client";
import React, { useEffect, useRef } from "react";
import { useScroll, useSpring, useTransform, motion } from "framer-motion";
import { ResearchCard, Button, BackgrounderCard, ExpertTakeCard, PolicyBriefCard, ReportCard } from "@/shared";
import { useGetContentful } from "@/hooks";
import { BlogDetailsProps } from "@/interfaces";
import styles from "./RelatedInsights.module.scss";
interface RelatedInsightsProps {
    type?: "new" | "default";
}

const RelatedInsights = ({ type = "default" }: RelatedInsightsProps) => {
    const { fetchBlogs, sortedBlogs } = useGetContentful();
    useEffect(() => {
        fetchBlogs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const relatedInsightsRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: relatedInsightsRef,
        offset: ["start end", "end center"]
    });

    const rawY = useTransform(scrollYProgress, [0, 0.2], [300, 0]);
    const y = useSpring(rawY, {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    });
    const rawOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const opacity = useSpring(rawOpacity, {
        stiffness: 100,
        damping: 20,
        mass: 0.5
    });
    return (
        <motion.div style={{ opacity, y }} ref={relatedInsightsRef} className={styles.research_container}>
            <div className={styles.text_wrapper}>
                <div className={styles.text}>
                    <h1>{type === "new" ? 'Read Now!' : 'Explore Insights'}</h1>
                    <Button className={styles.explore_btn} href="/insights">
                        See more
                    </Button>
                </div>
            </div>
            <div className={styles.research_wrapper}>
                {sortedBlogs?.slice(0, 4)?.map((blog: BlogDetailsProps, index: number) => {
                    const getType = blog?.type?.toLowerCase();
                    const getResearchType = getType?.replace(' ', '-');
                    const isExpertTake = getType === "perspective" ||
                        getType === "opinion-piece" ||
                        getType === "insight";
                    const isReport = getType === "report";
                    const isPolicyBrief = getType === "policy brief" || getType === "case study";

                    return blog?.type === 'backgrounder' ? (
                        <BackgrounderCard key={index} title={blog?.title}
                            image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                            slug={blog?.slug} date={blog?.date} publishedAt={blog?.publishedAt}
                        />
                    ) : isExpertTake ? (
                        <ExpertTakeCard key={index} title={blog?.title}
                            image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                            slug={blog?.slug} date={blog?.date}
                            publishedAt={blog?.publishedAt}
                            author={blog?.authors?.[0]}
                            type={blog?.type}
                        />
                    ) : isPolicyBrief ? (
                        <PolicyBriefCard key={index} title={blog?.title}
                            image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                            slug={blog?.slug} type={blog?.type}
                            description={blog?.description}
                            btnText={blog?.type}
                        />
                    ) : isReport ? (
                        <ReportCard key={index} title={blog?.title} slug={blog?.slug} externalUrl={blog?.externalUrl}
                            image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                            date={blog?.date} publishedAt={blog?.publishedAt}
                        />
                    ) : (
                        <ResearchCard key={index} title={blog?.title}
                            image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                            alt={`https:${blog?.thumbnail?.fields?.description}`}
                            description={blog?.description}
                            slug={blog?.slug} btnText={blog?.type}
                            researchType={getResearchType}
                        />
                    )
                }
                )}
            </div>
            <div className={styles.divider}></div>
        </motion.div>
    )
}

export default RelatedInsights