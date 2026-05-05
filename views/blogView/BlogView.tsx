"use client";
// import fs from "fs";
// import path from "path";
import { useEffect } from "react";
import { ResearchCard, BackgrounderCard, ExpertTakeCard, PolicyBriefCard } from "@/shared";
import { useGetContentful } from "@/hooks";
import { BlogDetailsProps } from "@/interfaces";
import styles from "./BlogView.module.scss";

// type Post = {
// 	id: number;
// 	title: string;
// 	content: string;
// 	category: string;
// 	description: string;
// 	banner: string;
// };

export default function BlogView() {
	// const filePath = path.join(process.cwd(), "data", "posts.json");
	// const posts: Post[] = fs.existsSync(filePath)
	// 	? (JSON.parse(fs.readFileSync(filePath, "utf8")) as Post[]) : [];
	// console.log(posts);
	const { fetchBlogs, sortedBlogs: insightsList } = useGetContentful();
	useEffect(() => {
		fetchBlogs();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.large_card}>
					<div className={styles.details}>
						<h2>Insights</h2>
						{/* <p>
							Elevating decision-making with secure and intelligent data
							processing, analytics and operational AI
						</p> */}
					</div>
					<div className={styles.grad}></div>
				</div>
				<div className={styles.divider1}></div>
				{!insightsList?.length ? (
					<p>No posts available.</p>
				) : (
					<div className={styles.research_wrapper}>
						{insightsList?.map((blog: BlogDetailsProps, index: number) => {
							const getType = blog?.type?.toLowerCase();
							const type = getType?.replace(' ', '-');
							const isExpertTake = getType === "perspective" ||
								getType === "opinion piece" ||
								getType === "insight";
							const isPolicyBrief = getType === "policy brief" || getType === "case study";

							return blog?.type === 'backgrounder' ? (
								<BackgrounderCard key={index} title={blog?.title}
									image={`https:${blog?.thumbnail?.fields?.file?.url}`}
									slug={blog?.slug}
									date={blog?.date}
									publishedAt={blog?.publishedAt}
								/>
							) : isExpertTake ? (
								<ExpertTakeCard key={index} title={blog?.title}
									image={`https:${blog?.thumbnail?.fields?.file?.url}`}
									slug={blog?.slug}
									date={blog?.date}
									publishedAt={blog?.publishedAt}
									author={blog?.authors?.[0]}
									type={type}
								/>
							) : isPolicyBrief ? (
								<PolicyBriefCard key={index} title={blog?.title}
									image={`https:${blog?.thumbnail?.fields?.file?.url}`}
									slug={blog?.slug} description={blog?.description}
									type={type}
								/>
							) : (
								<ResearchCard key={index} title={blog?.title}
									image={`https:${blog?.thumbnail?.fields?.file?.url}`}
									alt={`https:${blog?.thumbnail?.fields?.description}`}
									description={blog?.description}
									btnText={blog?.type}
									slug={blog?.slug}
								/>
							)
						})}
					</div>
				)}
			</div>
			<div className={styles.divider}></div>
		</div>
	);
}
