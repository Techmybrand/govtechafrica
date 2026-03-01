"use client";
import React, { useEffect } from "react";
import { ResearchCard, Button } from "@/shared";
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
            <div className={styles.text_wrapper}>
                <div className={styles.text}>
                    <h1>Explore Insights</h1>
                    <Button className={styles.explore_btn} href="/insights">
                        See more
                    </Button>
                </div>
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