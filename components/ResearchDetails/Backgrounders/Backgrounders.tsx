"use client";
import React from "react";
import styles from "./Backgrounders.module.scss";
import Image from "next/image";
import Link from "next/link";
import { RichText, ResearchCard, BackgrounderCard, Button } from "@/shared";
import { formatDate } from "@/utils/formatUrl";
import { BlogDetailsProps } from "@/interfaces";
interface BackgroundersProps {
  blog: BlogDetailsProps;
  contentToShow?: BlogDetailsProps[];
}

const Backgrounders = ({ blog, contentToShow }: BackgroundersProps) => {
  const currentUrl = new URL(window.location.href);
  currentUrl.hash = "";
  return (
    <article className={styles.backgrounders}>
      <header className={styles.details_content}>
        <div className={styles.details_header}>
          <div className={styles.breadcrumbs}>
            <Link href="/backgrounders">
              <p>Backgrounders</p>
            </Link>
            <div className={styles.chevron}>
              <Image alt="" fill src="/svgs/chevron.svg" />
            </div>
            <h3>{blog?.title}</h3>
          </div>
          <div className={styles.header_details}>
            {blog?.bannerImage?.fields?.file?.url && (
              <div className={styles.banner_image}>
                <Image alt="" fill src={`https:${blog?.bannerImage?.fields?.file?.url}`}
                  sizes="100%" loading="lazy"
                />
              </div>
            )}
            <div className={styles.name_type_and_date}>
              <div className={styles.tag_and_name}>
                <div className={styles.tag}>
                  BACKGROUNDER
                </div>
                <h1>{blog?.title}</h1>
              </div>
              <div className={styles.time_and_date}>
                {/* <h4>{blog?.readTime} mins read</h4> */}
                <h4>Date: {blog?.date ? formatDate(blog?.date) : blog?.publishedAt}</h4>
                <Link href={`${currentUrl.href}#credits`}>
                  <h4>Credits</h4>
                </Link>
              </div>
            </div>
          </div>
        </div>

      </header>

      <div className={styles.divider}></div>

      <section className={styles.details_content}>
        <div className={styles.main_layout}>
          <aside className={styles.sidebar}>
            <div className={styles.table_of_contents_sticky}>
              <h2 className={styles.h2}>Table of Contents</h2>
              <div className={styles.toc_content}>
                {blog?.tableOfContent?.length ? (
                  <ul>
                    {blog.tableOfContent.map((item, index) => (
                      <li key={index}>
                        <Link href={`${currentUrl.href}#topic${index + 1}`}>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No table of contents available.</p>
                )}
              </div>
            </div>
          </aside>

          <div className={styles.content_body}>
            <div className={styles.research_details}>
              {blog?.researchContent && <RichText content={blog?.researchContent} type="backgrounder" />}
            </div>

            {blog?.authors?.length ? (
              <div id="credits" className={styles.written_by_bottom}>
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
        </div>

        <div className={styles.related_insights}>
          <div className={styles.insights_header}>
            <h2>Related Insights</h2>
          </div>
          <div className={styles.research_wrapper}>
            {contentToShow?.map((relatedBlog: BlogDetailsProps, index: number) =>
              relatedBlog?.type.toLowerCase() === 'backgrounder' ? (
                <BackgrounderCard key={index} title={relatedBlog?.title}
                  image={`https:${relatedBlog?.thumbnail?.fields?.file?.url}`}
                  slug={relatedBlog?.slug} date={relatedBlog?.date}
                  publishedAt={relatedBlog?.publishedAt}
                />
              ) : (
                <ResearchCard key={index} title={relatedBlog?.title}
                  image={`https:${relatedBlog?.thumbnail?.fields?.file?.url}`}
                  alt={`https:${relatedBlog?.thumbnail?.fields?.description}`}
                  description={relatedBlog?.description}
                  btnText={relatedBlog?.type} slug={relatedBlog?.slug}
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

export default Backgrounders;