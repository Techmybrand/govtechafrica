/* eslint-disable */
import { ResearchDetails } from "@/components";
import { getResearchPosts } from "@/utils/contentful";
import { formatDate } from "@/utils/formatUrl";
import { BlogDetailsProps } from "@/interfaces";
import { notFound } from "next/navigation";

interface ResearchPageProps {
	params: {
		id: string;
	};
    searchParams?: {
        type?: string;
    };
}

export default async function ResearchPage({ params, searchParams }: ResearchPageProps) {
    const { id } = params;
    const queryArticleType = searchParams?.type || null;

    const getBlogs = await getResearchPosts();
    const arrayOfBlogs = getBlogs?.map((blog: any) => ({
        ...blog?.fields,
        publishedAt: formatDate(blog?.sys?.createdAt),
    })) as BlogDetailsProps[];

    const blog = arrayOfBlogs?.find((b: BlogDetailsProps) =>
        b?.slug?.toLowerCase() === id.toLowerCase()
    );

    if (!blog) {
        notFound();
    }

    const relatedContent = arrayOfBlogs?.filter((relatedBlog) => 
        relatedBlog?.type === blog?.type && relatedBlog?.slug !== blog?.slug
    ) ?? [];
    
    const contentToShow = relatedContent.length ? relatedContent.slice(0, 4) :
        arrayOfBlogs?.reverse().filter((relatedBlog) => relatedBlog?.slug !== blog?.slug).slice(0, 4);

    return <ResearchDetails blog={blog} contentToShow={contentToShow} queryArticleType={queryArticleType} />;
}