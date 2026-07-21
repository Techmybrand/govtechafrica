import React from "react";
import { Button, ResearchCard, BackgrounderCard, RichText, ExpertTakeCard, ReportCard } from "@/shared";
import { formatDate } from "@/utils/formatUrl";
import { BlogDetailsProps } from "@/interfaces";
import { ChartLoader } from "@/shared/loaders";
import Backgrounders from "./Backgrounders/Backgrounders";
import ExpertTakes from "./ExpertTakes/ExpertTakes";
import Reports from "./Reports/Reports";
import Image from "next/image";
import Link from "next/link";
import styles from "./ResearchDetails.module.scss";
interface ResearchDetailsProps {
    blog?: BlogDetailsProps;
    contentToShow: BlogDetailsProps[];
    queryArticleType: string | null;
}

const ResearchDetails = ({ blog, contentToShow, queryArticleType }: ResearchDetailsProps) => {

    return (
        <main data-type={queryArticleType} className={styles.details_container}>
            {blog === undefined ? (
                <div className={styles.loader}>
                    <ChartLoader />
                </div>
            ) : queryArticleType === "backgrounder" ? (
                <Backgrounders blog={blog} contentToShow={contentToShow} />
            ) : queryArticleType === "expert-take" ? (
                <ExpertTakes blog={blog} contentToShow={contentToShow} />
            ) : queryArticleType === "report" ? (
                <Reports blog={blog} contentToShow={contentToShow} />
            ) : (
                <article>
                    <header className={styles.details_content}>
                        <div className={styles.details_header}>
                            <h3>{blog?.type}</h3>
                            <h1>{blog?.title}</h1>
                            <div className={styles.time_and_date}>
                                <h4>
                                    {blog?.readTime === "1" ? `${blog?.readTime} min read` : `${blog?.readTime} mins read`}
                                </h4>
                                <h4>{blog?.date ? formatDate(blog?.date) : blog?.publishedAt}</h4>
                            </div>
                        </div>
                        <div className={styles.image_and_authors}>
                            {blog?.bannerImage?.fields?.file?.url && (
                                <div className={styles.banner_image}>
                                    <Image alt="" fill src={`https:${blog?.bannerImage?.fields?.file?.url}`}
                                        sizes="100%" priority
                                    />
                                </div>
                            )}
                            {blog?.authors?.length ? (
                                <div className={styles.written_by}>
                                    <h2 className={styles.h2}>WRITTEN BY</h2>
                                    <div className={styles.writer_details_container}>
                                        {blog?.authors?.map((author: string, index: number) => {
                                            const getRole = blog?.role?.length ? blog?.role[index] : 'Govtech Research';
                                            const getUrl = blog?.links?.length ? blog?.links[index] : '/';
                                            return (
                                                <div key={author} className={styles.writer_details}>
                                                    <h4>{author}</h4>
                                                    <h6>{getRole}</h6>
                                                    {blog?.links?.length && (
                                                        <Link href={getUrl ?? '/'} target="_blank">
                                                            <div className={styles.details_linkedin}>
                                                                <Image alt='' fill src='/svgs/linkedin.svg' />
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
                    </header>
                    <div className={styles.divider}></div>
                    <section className={styles.details_content}>
                        <div className={styles.details_body}>
                            <div className={styles.research_details}>
                                {blog?.researchContent && (
                                    <RichText content={blog?.researchContent} />
                                )}
                            </div>
                        </div>
                        {blog?.pdf?.fields?.file?.url && (
                            <div className={styles.details_body_}>
                                <Link href={`https:${blog?.pdf?.fields?.file?.url}`}
                                    target="_blank" download rel="noopener noreferrer"
                                >
                                    <div className={styles.download_btn}>
                                        Download {blog?.type}
                                    </div>
                                </Link>
                            </div>
                        )}
                        {blog?.authors?.length ? (
                            <div className={styles.written_by_sm}>
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
                                                            <Image alt='' fill src='/svgs/linkedin.svg' />
                                                        </div>
                                                    </Link>
                                                )}
                                            </div>
                                        )
                                    }
                                    )}
                                </div>
                            </div>
                        ) : null}
                        <div className={styles.related_insights}>
                            <div className={styles.insights_header}>
                                <h2>Related Insights</h2>
                            </div>
                            <div className={styles.research_wrapper}>
                                {contentToShow?.map((blog: BlogDetailsProps, index: number) =>(
                                    blog?.type.toLowerCase() === 'perspective' || blog?.type.toLowerCase() === "opinion piece" || 
                                    blog?.type.toLowerCase() === "insight"
                                ) ? (
                                    <ExpertTakeCard key={index} title={blog?.title}
                                        image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                                        slug={blog?.slug}
                                        date={blog?.date} publishedAt={blog?.publishedAt}
                                    />
                                ) : blog?.type.toLowerCase() === "backgrounder" ? (
                                    <BackgrounderCard key={index} title={blog?.title}
                                        image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                                        slug={blog?.slug}
                                        date={blog?.date} publishedAt={blog?.publishedAt}
                                    />
                                ) : blog?.type.toLowerCase() === "report" ? (
                                    <ReportCard key={index} title={blog?.title}
                                        image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                                        slug={blog?.slug} date={blog?.date}
                                        publishedAt={blog?.publishedAt}
                                        externalUrl={blog?.externalUrl}
                                    />
                                ) : (
                                    <ResearchCard key={index} title={blog?.title}
                                        image={`https:${blog?.thumbnail?.fields?.file?.url}`}
                                        alt={`https:${blog?.thumbnail?.fields?.description}`}
                                        description={blog?.description}
                                        btnText={blog?.type}
                                        slug={blog?.slug}
                                    />
                                ))}
                            </div>
                            <Button className={styles.explore_btn} href="/insights">
                                See more
                            </Button>
                        </div>
                    </section>
                    <div className={styles.divider_green}></div>
                </article>
            )}
        </main>
    )
}

export default ResearchDetails