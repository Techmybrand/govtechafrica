"use client";
import { useEffect } from "react";
import { BackgrounderCard } from "@/shared";
import { useGetContentful } from "@/hooks";
import { BlogDetailsProps } from "@/interfaces";
import styles from "./BackgroundersView.module.scss";

const BackgroundersView = () => {
    const { fetchBlogs, sortedBlogs } = useGetContentful();
    const backgrounders = sortedBlogs.filter((blog: BlogDetailsProps) => 
        blog.type.toLowerCase() === "backgrounder"
    );
	useEffect(() => {
		fetchBlogs();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
    return (
        <div className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.large_card}>
					<div className={styles.details}>
						<h2>Backgrounders</h2>
						<p>
							{backgrounders?.length} results
						</p>
					</div>
				</div>
				<div className={styles.divider}></div>
				{!backgrounders?.length ? (
					<p>No posts available.</p>
				) : (
					<div className={styles.research_wrapper}>
						{backgrounders?.map((blog: BlogDetailsProps, index: number) => {
							return (
								<BackgrounderCard key={index} title={blog?.title}
									image={`https:${blog?.thumbnail?.fields?.file?.url}`}
									slug={blog?.slug}
									date={blog?.date}
									publishedAt={blog?.publishedAt}
								/>
							)
						})}
					</div>
				)}
			</div>
		</div>
    )
}

export default BackgroundersView