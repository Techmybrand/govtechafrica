"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RichText, ResearchCard, BackgrounderCard, ExpertTakeCard, Button, ReportCard } from "@/shared";
// import { formatDate } from "@/utils/formatUrl";
import { BlogDetailsProps } from "@/interfaces";
import styles from "./ExpertTakes.module.scss";

interface ExpertTakesProps {
  blog: BlogDetailsProps;
  contentToShow?: BlogDetailsProps[];
}

const ExpertTakes = ({ blog, contentToShow }: ExpertTakesProps) => {
    return (
        <article className={styles.backgrounders}>
            <header className={styles.details_content}>
                <div className={styles.details_header}>
                    <div className={styles.breadcrumbs}>
                        <Link href="/expert-takes">
                            <p>Expert Takes</p>
                        </Link>
                        <div className={styles.chevron}>
                            <Image alt="" fill src="/svgs/chevron_light.svg" />
                        </div>
                        <h3>{blog?.title}</h3>
                    </div>
                    <div className={styles.header_details}>
                        <div className={styles.name_type_and_date}>
                            <div className={styles.tag_and_name}>
                                <div className={styles.tag}>
                                    expert takes
                                </div>
                                <h1>{blog?.title}</h1>
                            </div>
                            <div className={styles.time_and_date}>
                                <h4>
                                    {blog?.description}
                                </h4>
                            </div>
                        </div>
                        {blog?.bannerImage?.fields?.file?.url && (
                            <div className={styles.banner_image}>
                                <Image alt="" fill sizes="100%" loading="lazy"
                                    src={`https:${blog?.bannerImage?.fields?.file?.url}`}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </header>

            <div className={styles.divider}></div>

            <section className={styles.details_content}>
                <div className={styles.content_body}>
                    <div className={styles.research_details}>
                        {blog?.researchContent && <RichText content={blog?.researchContent} />}
                    </div>

                    {blog?.authors?.length ? (
                        <div className={styles.written_by_bottom}>
                            <h2>WRITTEN BY</h2>
                            <div className={styles.line}></div>
                            <div className={styles.writer_details_container}>
                                {blog?.authors?.map((author: string, index: number) => {
                                    const getRole = blog?.role?.length ? blog?.role[index] : 'Govtech Research';
                                    const getUrl = blog?.links?.length ? blog?.links[index] : '/';
                                    return (
                                        <div key={author} className={styles.writer_details}>
                                            <div className={styles.name_and_role}>
                                                <h4>{author}</h4>
                                                <h6>{getRole}</h6>
                                            </div>
                                            {blog?.links?.length && (
                                                <Link href={getUrl ?? '/'} target="_blank">
                                                    <div className={styles.details_linkedin}>
                                                        <Image alt="linkedin" fill src="/svgs/linkedin.svg" />
                                                    </div>
                                                </Link>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    ) : null}
                </div>

                <div className={styles.related_insights}>
                    <div className={styles.insights_header}>
                        <h2>Related Insights</h2>
                    </div>
                    <div className={styles.research_wrapper}>
                        {contentToShow?.map((relatedBlog: BlogDetailsProps, index: number) =>
                            (relatedBlog?.type.toLowerCase() === 'perspective' || 
                                relatedBlog?.type.toLowerCase() === "opinion piece" || 
                                relatedBlog?.type.toLowerCase() === "insight"
                            ) ? (
                                <ExpertTakeCard key={index} title={relatedBlog?.title}
                                    image={`https:${relatedBlog?.thumbnail?.fields?.file?.url}`}
                                    slug={relatedBlog?.slug}
                                    date={relatedBlog?.date} publishedAt={relatedBlog?.publishedAt}
                                />
                            ) : relatedBlog?.type.toLowerCase() === "backgrounder" ? (
                                <BackgrounderCard key={index} title={relatedBlog?.title}
                                    image={`https:${relatedBlog?.thumbnail?.fields?.file?.url}`}
                                    slug={relatedBlog?.slug}
                                    date={relatedBlog?.date} publishedAt={relatedBlog?.publishedAt}
                                />
                            ) : relatedBlog?.type.toLowerCase() === "report" ? (
                                <ReportCard key={index} title={relatedBlog?.title}
                                    image={`https:${relatedBlog?.thumbnail?.fields?.file?.url}`}
                                    slug={relatedBlog?.slug} date={relatedBlog?.date}
                                    publishedAt={relatedBlog?.publishedAt}
                                    externalUrl={relatedBlog?.externalUrl}
                                />
                            ) : (
                                <ResearchCard key={index} title={relatedBlog?.title}
                                    image={`https:${relatedBlog?.thumbnail?.fields?.file?.url}`}
                                    alt={`https:${relatedBlog?.thumbnail?.fields?.description}`}
                                    description={relatedBlog?.description}
                                    btnText={relatedBlog?.type}
                                    slug={relatedBlog?.slug}
                                />
                            )
                        )}
                    </div>
                    <Button className={styles.explore_btn} href="/insights">
                        See more
                    </Button>
                </div>
            </section>
            <div className={styles.divider_green}></div>
        </article>
    )
}

export default ExpertTakes