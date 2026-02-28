"use client";
import React, { useEffect, useState } from "react";
import { Button, ResearchCard, RichText } from "@/shared";
import { useGetContentful } from "@/hooks";
import { formatDate } from "@/utils/formatUrl";
import { BlogDetailsProps } from "@/interfaces";
import { ChartLoader } from "@/shared/loaders";
import { useParams } from "next/navigation";
// import Link from "next/link";
import Image from "next/image";
import styles from "./ResearchDetails.module.scss";
import Link from "next/link";

const ResearchDetails = () => {
    const params = useParams();
    const { id } = params as { id: string };
    const { blogs, fetchBlogs } =  useGetContentful();
    const [blog, setBlog] = useState<BlogDetailsProps>();

    useEffect(() => {
        fetchBlogs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const fetchBlogDetails = () => {
            if (id && ( blogs && blogs?.length)) {
                const foundBlog = blogs?.find((blog: BlogDetailsProps) =>
                    // blog?.title?.toLowerCase().replace(":", '').replace(/\s+/g, '-')?.slice(0, 20)
                    blog?.slug?.toLowerCase()
                    ===
                    id.toLowerCase()
                    // id.slice(0, 20)
                );
                setBlog(foundBlog);
            }
        };
        fetchBlogDetails();
    }, [id, blogs]);
    console.log('blog: ', blog);
    const relatedContent = blogs?.filter((relatedBlog) => relatedBlog?.type === blog?.type) ?? [];
    // console.log('related: ', relatedContent);
    const contentToShow = relatedContent.length ? relatedContent.slice(0, 4) : blogs?.reverse()?.slice(0, 4)
    
  return (
    <main className={styles.details_container}>
        {blog === undefined ? (
            <div className={styles.loader}>
                <ChartLoader />
            </div>
        ) : (
            <article>
                <header className={styles.details_content}>
                    <div className={styles.details_header}>
                        <h3>{blog?.type}</h3>
                        <h1>{blog?.title}</h1>
                        <div className={styles.time_and_date}>
                            <h4>{blog?.readTime} mins read</h4>
                            <h4>{blog?.date ? formatDate(blog?.date) : blog?.publishedAt}</h4>
                        </div>
                    </div>
                    <div className={styles.image_and_authors}>
                        {blog?.bannerImage?.fields?.file?.url && (
                            <div className={styles.banner_image}>
                                <Image alt="" fill src={`https:${blog?.bannerImage?.fields?.file?.url}`}
                                    sizes="100%" loading="lazy"
                                />
                            </div>
                        )}
                        {blog?.authors?.length ? (
                            <div className={styles.written_by}>
                                <h2>WRITTEN BY</h2>
                                    <div className={styles.writer_details_container}>
                                        {blog?.authors?.map((author: string, index: number) => {
                                            const getRole = blog?.role[index];
                                            const getUrl = blog?.links[index];
                                            return (
                                                <div key={author} className={styles.writer_details}>
                                                    <h4>{author}</h4>
                                                    <h6>{getRole || 'Govtech research'}</h6>
                                                    <Link href={getUrl}>
                                                        <div className={styles.details_linkedin}>
                                                            <Image alt='' fill src='/svgs/linkedin.svg' />
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })}
                                    </div>
                            </div>
                        ): null}
                    </div>
                </header>
                <div className={styles.divider}></div>
                <section className={styles.details_content}>
                    <div className={styles.details_body}>
                        <div className={styles.research_details}>
                            {blog?.researchContent && <RichText content={blog?.researchContent} />}
                        </div>
                    </div>
                    <div className={styles.details_body_}>
                        {/* <Link href={`https:${blog?.pdf?.fields?.file?.url}`} target="_blank" rel="noopener noreferrer"> */}
                            {/* <Button className={styles.download_btn}>
                                Read the report
                            </Button> */}
                        {/* </Link> */}
                    </div>
                    {blog?.authors?.length ? (
                        <div className={styles.written_by_sm}>
                            <h2>WRITTEN BY</h2>
                            <div className={styles.line}></div>
                                <div className={styles.writer_details_container}>
                                    {blog?.authors?.map((author: string, index: number) => {
                                        const getRole = blog?.role[index];
                                        const getUrl = blog?.links[index];
                                        return (
                                            <div key={author} className={styles.writer_details}>
                                                <div className={styles.name_and_role}>
                                                    <h4>{author}</h4>
                                                    <h6>{getRole || 'Govtech research'}</h6>
                                                </div>
                                                <Link href={getUrl}>
                                                    <div className={styles.details_linkedin}>
                                                        <Image alt='' fill src='/svgs/linkedin.svg' />
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    }
                                    )}
                                </div>
                        </div>
                    ): null}
                    <div className={styles.related_insights}>
                        <div className={styles.insights_header}>
                            <h2>Related Insights</h2>
                            <Button className={styles.explore_btn} href="/insights">
                                Explore Insights
                            </Button>
                        </div>
                        <div className={styles.research_wrapper}>
                            {contentToShow?.map((blog: BlogDetailsProps, index: number) =>
                                <ResearchCard key={index} title={blog?.title}
                                    image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                                    alt={`https:${blog?.thumbnail?.fields?.description}`}
                                    description={blog?.description}
                                    btnText={blog?.type}
                                    slug={blog?.slug}
                                />
                            )}
                        </div>
                    </div>
                </section>
                <div className={styles.divider_green}></div>
            </article>
        )}
    </main>
  )
}

export default ResearchDetails