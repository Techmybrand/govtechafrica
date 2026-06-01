"use client";
import { useEffect } from "react";
import { ResearchCard } from "@/shared";
import { useGetContentful } from "@/hooks";
import { BlogDetailsProps } from "@/interfaces";
import styles from "./ArticlesView.module.scss";

const ArticlesView = () => {
  const { fetchBlogs, sortedBlogs } = useGetContentful();
  const articles = sortedBlogs.filter((blog: BlogDetailsProps) =>
    blog.type.toLowerCase() === "article"
  );
  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.large_card}>
					<div className={styles.details}>
						<h2>Articles</h2>
						<p>
							{articles?.length} results
						</p>
					</div>
				</div>
				<div className={styles.divider}></div>
				{!articles?.length ? (
					<p>No posts available.</p>
				) : (
					<div className={styles.research_wrapper}>
						{articles?.map((blog: BlogDetailsProps, index: number) => {
							return (
								<ResearchCard key={index} title={blog?.title}
									image={`https:${blog?.thumbnail?.fields?.file?.url}`}
									slug={blog?.slug} publishedAt={blog?.publishedAt}
									btnText={blog?.type} description={blog?.description}
									researchType={blog?.type}
								/>
							)
						})}
					</div>
				)}
			</div>
		</div>
  )
}

export default ArticlesView