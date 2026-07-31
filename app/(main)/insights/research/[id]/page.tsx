/* eslint-disable */
import type { Metadata, ResolvingMetadata } from "next";
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

export async function generateMetadata({ params }: ResearchPageProps, parent: ResolvingMetadata): Promise<Metadata> {
    const { id } = params;
    const getBlogs = await getResearchPosts();
    const arrayOfBlogs = getBlogs?.map((blog: any) => ({
        ...blog?.fields,
        publishedAt: formatDate(blog?.sys?.createdAt),
    })) as BlogDetailsProps[];

    const blog = arrayOfBlogs?.find((b: BlogDetailsProps) =>  b?.slug?.toLowerCase() === id.toLowerCase());

    if (!blog) {
        return {
            title: "Not Found | Govtech Africa",
            description: "The page you are looking for does not exist.",
        };
    }

    const previousImages = (await parent).openGraph?.images || [];
    const imageUrl = blog?.thumbnail?.fields?.file?.url ? (blog.thumbnail.fields.file.url.startsWith("//")
        ? `https:${blog.thumbnail.fields.file.url}` : blog.thumbnail.fields.file.url) : undefined;

    return {
        title: `${blog.title} | Govtech Africa`,
        description: blog.description || "African technology for Government Excellence",
        openGraph: {
            title: `${blog.title} | Govtech Africa`,
            description: blog.description || "African technology for Government Excellence",
            url: `https://govtechafrica.com/insights/research/${id}`,
            type: "article",
            images: imageUrl ? [{ url: imageUrl, alt: blog.title }] : previousImages,
        },
        authors: [
            {
                name: (blog.authors?.[0] + ", " + blog.authors?.[1] + ", " + blog.authors?.[2] + ", " + blog.authors?.[3]),
                url: blog.links?.[0] || undefined
            }
        ],
        twitter: {
            card: "summary_large_image",
            title: `${blog.title} | Govtech Africa`,
            description: blog.description || "African technology for Government Excellence",
            images: imageUrl ? [imageUrl] : [],
        },
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

    const blog = arrayOfBlogs?.find((b: BlogDetailsProps) => b?.slug?.toLowerCase() === id.toLowerCase());
    if (!blog) notFound();

    const relatedContent = arrayOfBlogs?.filter((relatedBlog) =>
        relatedBlog?.type === blog?.type && relatedBlog?.slug !== blog?.slug
    ) ?? [];
    const getArticleType = blog?.type?.toLowerCase();
    const articleType = getArticleType.replace(" ", "-");
    
    const contentToShow = relatedContent.length ? relatedContent.slice(0, 4) :
        arrayOfBlogs?.reverse().filter((relatedBlog) => relatedBlog?.slug !== blog?.slug).slice(0, 4);

    return <ResearchDetails blog={blog} contentToShow={contentToShow} articleType={articleType} queryArticleType={queryArticleType} />;
}