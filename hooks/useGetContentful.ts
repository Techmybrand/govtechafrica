/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { BlogDetailsProps } from "@/interfaces";
import { getResearchPosts, getResearchPostByTitle } from "@/utils/contentful";
import { formatDate } from "@/utils/formatUrl";

const useGetContentful = () => {
	const [blogs, setBlogs] = useState<BlogDetailsProps[] | null>(null);
	const [blog, setBlog] = useState<any | null>(null);

	const fetchBlogs = async () => {
		const getBlogs = await getResearchPosts();
		const arrayOfBlogs = getBlogs?.map((blogs: any) => ({
			...blogs?.fields,
			publishedAt: formatDate(blogs?.sys?.createdAt),
		}));
		setBlogs(arrayOfBlogs);
	};

	const fetchBlog = async (params: string) => {
		// const blogPost = await getEntryBySlug(params);
		const blogPost = await getResearchPostByTitle(params);
		setBlog(blogPost);
	};
	const sortedBlogs = blogs ? [...blogs].sort((a, b) => {
        return new Date(b?.publishedAt).getTime() - new Date(a?.publishedAt).getTime();
    }) : [];

	return {
		blogs,
		blog,
		fetchBlogs,
		fetchBlog,
		sortedBlogs
	};
};

export default useGetContentful;
