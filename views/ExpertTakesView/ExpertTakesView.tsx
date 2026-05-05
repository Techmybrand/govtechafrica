"use client";
import { useEffect } from "react";
import { ExpertTakeCard } from "@/shared";
import { useGetContentful } from "@/hooks";
import { BlogDetailsProps } from "@/interfaces";
import styles from "./ExpertTakesView.module.scss";

const ExpertTakesView = () => {
	const { fetchBlogs, sortedBlogs } = useGetContentful();
	const expertTakes = sortedBlogs.filter((blog: BlogDetailsProps) =>
		blog.type.toLowerCase() === "perspective" ||
		blog.type.toLowerCase() === "opinion piece" ||
		blog.type.toLowerCase() === "insight"
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
						<h2>Expert Takes</h2>
						<p>
							{expertTakes?.length} results
						</p>
					</div>
				</div>
				<div className={styles.divider}></div>
				{!expertTakes?.length ? (
					<p>No posts available.</p>
				) : (
					<div className={styles.research_wrapper}>
						{expertTakes?.map((blog: BlogDetailsProps, index: number) => {
							const type = blog?.type?.toLowerCase()?.replace(' ', '-');
							return (
								<ExpertTakeCard key={index} title={blog?.title}
									image={`https:${blog?.thumbnail?.fields?.file?.url}`}
									slug={blog?.slug} date={blog?.date}
									publishedAt={blog?.publishedAt} author={blog?.authors?.[0]}
									type={type}
								/>
							)
						})}
					</div>
				)}
			</div>
		</div>
	)
}

export default ExpertTakesView