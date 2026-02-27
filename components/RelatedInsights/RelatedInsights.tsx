"use client";
import React, { useEffect } from "react";
import { ResearchCard } from "@/shared";
import { useGetContentful } from "@/hooks";
import { BlogDetailsProps } from "@/interfaces";
import styles from "./RelatedInsights.module.scss"

const RelatedInsights = () => {
    const { fetchBlogs, blogs } = useGetContentful();
    useEffect(() => {
        fetchBlogs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className={styles.research_container}>
            <div className={styles.text}>
                <h1>Related Insights</h1>
            </div>
            <div className={styles.research_wrapper}>
                {blogs?.slice(0, 4)?.map((blog: BlogDetailsProps, index: number) => {
                    return (
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