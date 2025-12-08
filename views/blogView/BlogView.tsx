import fs from "fs";
import path from "path";
import styles from "./BlogView.module.scss";
import Image from "next/image";
import { Button } from "@/shared";
import { shortenTitle } from "@/utils/stringShortner";
import { posts as insightsList } from "@/mock/navLists.mock";
import { formatURL } from "@/utils/formatUrl";

type Post = {
	id: number;
	title: string;
	content: string;
	category: string;
	description: string;
	banner: string;
};

export default function BlogView() {
	const filePath = path.join(process.cwd(), "data", "posts.json");
	const posts: Post[] = fs.existsSync(filePath)
		? (JSON.parse(fs.readFileSync(filePath, "utf8")) as Post[]) : [];
	console.log(posts);

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
				{!insightsList.length ? (
					<p>No posts available.</p>
				) : (
					<div className={styles.row}>
						{insightsList.map((post, index: number) => (
							<div key={index} className={styles.card}>
								<div className={styles.grad}></div>
								<div className={styles.image}>
									<Image src={post.image} fill alt={post.title} />
								</div>
								<div className={styles.details}>
									<h5>{post.tag}</h5>
									<h3>{shortenTitle(post.title, 30)}</h3>
									<p>{shortenTitle(post.description, 100)}</p>
									<Button
										className={styles.button}
										href={post.tag === 'insight' ? 
											`/insights/${formatURL(post.title)}` 
											: 
											`/insights/research/${formatURL(post.title)}`}
									>
										Explore
									</Button>
								</div>
							</div>
						))}
						{/* <Research />
						<Insights /> */}
					</div>
				)}
			</div>
			<div className={styles.divider}></div>
		</div>
	);
}
