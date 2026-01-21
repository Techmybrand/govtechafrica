"use client";
// import fs from "fs";
// import path from "path";
import { useEffect } from "react";
import { ResearchCard } from "@/shared";
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
	const { fetchBlogs, blogs: insightsList } = useGetContentful();
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
						<p>
							Elevating decision-making with secure and intelligent data
							processing, analytics and operational AI
						</p>
					</div>
					<div className={styles.grad}></div>
				</div>
				<div className={styles.divider1}></div>
				{!insightsList?.length ? (
					<p>No posts available.</p>
				) : (
					// <div className={styles.row}>
					// 	{insightsList.map((post, index: number) => (
					// 		<div key={index} className={styles.card}>
					// 			<div className={styles.grad}></div>
					// 			<div className={styles.image}>
					// 				<Image src={`https:${post?.thumbnail?.fields?.file?.url}`} fill 
					// 					alt={`https:${post?.thumbnail?.fields?.description}`}
					// 					sizes="100%"
					// 				/>
					// 			</div>
					// 			<div className={styles.details}>
					// 				<h5>{post.type}</h5>
					// 				{/* <h3>{shortenTitle(post.title, 30)}</h3> */}
					// 				<h3>{post.title}</h3>
					// 				<p>{post?.description}</p>
					// 				<Button
					// 					className={styles.button}
					// 					href={
					// 						// post.tag === 'insight' ? 
					// 						// `/insights/${formatURL(post.title)}` 
					// 						// :
					// 						`/insights/research/${formatURL(post.title)}`}
					// 				>
					// 					Explore
					// 				</Button>
					// 			</div>
					// 		</div>
					// 	))}
					// </div>
					<div className={styles.research_wrapper}>
						{insightsList?.map((blog: BlogDetailsProps, index: number) =>
							<ResearchCard key={index} title={blog?.title}
								image={`https:${blog?.thumbnail?.fields?.file?.url}`}
								alt={`https:${blog?.thumbnail?.fields?.description}`}
								description={blog?.description}
								btnText={blog?.type}
							/>
						)}
					</div>
				)}
			</div>
			<div className={styles.divider}></div>
		</div>
	);
}
