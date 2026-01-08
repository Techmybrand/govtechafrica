"use client";
import React, { useEffect } from "react";
import { ResearchCard } from "@/shared";
import { useGetContentful } from "@/hooks";
import { BlogDetailsProps } from "@/interfaces";
import styles from "./Research.module.scss";

const Research = () => {
    const { fetchBlogs, blogs } = useGetContentful();

	useEffect(() => {
        fetchBlogs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className={styles.research_container}>
            <div className={styles.research_wrapper}>
                {blogs?.map((blog: BlogDetailsProps, index: number) => {
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
                    return (
                        <ResearchCard key={index} title={blog?.title}
                            // image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                            image={index === 0 ? "/images/research_1.png" : "/images/research_2.png"}
                            alt={`https:${blog?.thumbnail?.fields?.description}`}
                            description={paragraph}
                            btnText={blog?.type}
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