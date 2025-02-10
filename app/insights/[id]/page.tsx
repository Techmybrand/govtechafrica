import fs from "fs";
import path from "path";
import styles from "./styles.module.scss";

// Define the Post type
interface Post {
	id: string;
	title: string;
	content: string;
}

// Generate static params for all posts
export async function generateStaticParams(): Promise<{ id: string }[]> {
	const filePath: string = path.join(process.cwd(), "data", "posts.json");

	const posts: Post[] = fs.existsSync(filePath)
		? (JSON.parse(fs.readFileSync(filePath, "utf8")) as Post[])
		: [];

	return posts.map(post => ({
		id: post.id
	}));
}

// Props type for PostPage component
interface PostPageProps {
	params: {
		id: string;
	};
}

// Dynamic post page component
export default async function PostPage({ params }: PostPageProps) {
	const filePath: string = path.join(process.cwd(), "data", "posts.json");

	const posts: Post[] = fs.existsSync(filePath)
		? (JSON.parse(fs.readFileSync(filePath, "utf8")) as Post[])
		: [];

	const post: Post | undefined = posts.find(post => post.id === params.id);

	if (!post) {
		return <div>Post not found</div>;
	}

	return (
		<div className={styles.section}>
			<div className={styles.section_container}>
				<div className={styles.grad}></div>
				<h1 className={styles.title}>{post.title}</h1>
				<div className={styles.divider1}></div>
				<div dangerouslySetInnerHTML={{ __html: post.content }}></div>
			</div>
			<div className={styles.divider}></div>
		</div>
	);
}
