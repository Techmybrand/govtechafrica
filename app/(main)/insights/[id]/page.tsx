import fs from "fs";
import path from "path";
// import styles from "./styles.module.scss";
import { InsightDetails } from "@/components";
interface Post {
	id: string;
	title: string;
	content: string;
}

export async function generateStaticParams(): Promise<{ id: string }[]> {
	const filePath: string = path.join(process.cwd(), "data", "posts.json");

	const posts: Post[] = fs.existsSync(filePath)
		? (JSON.parse(fs.readFileSync(filePath, "utf8")) as Post[])
		: [];

	return posts.map(post => ({
		id: post.id
	}));
}

interface PostPageProps {
	params: {
		id: string;
	};
}

export default async function PostPage({ params }: PostPageProps) {
	// const filePath: string = path.join(process.cwd(), "data", "posts.json");
	// const posts: Post[] = fs.existsSync(filePath)
	// 	? (JSON.parse(fs.readFileSync(filePath, "utf8")) as Post[])
	// 	: [];

	// const post: Post | undefined = posts.find(post => post.id === params.id);

	// if (!post) {
	// 	return <div>Post not found</div>;
	// }
	console.log(params.id)

	return (
		// <div className={styles.section}>
		// 	<div className={styles.section_container}>
		// 		<div className={styles.grad}></div>
		// 		<h1 className={styles.title}>{post.title}</h1>
		// 		<div className={styles.divider1}></div>
		// 		<div dangerouslySetInnerHTML={{ __html: post.content }}></div>
		// 	</div>
		// 	<div className={styles.divider}></div>
		// </div>
		<InsightDetails />
	);
}
