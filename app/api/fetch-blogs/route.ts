/* eslint-disable */
import { NextResponse } from "next/server";
import { getResearchPosts } from "@/utils/contentful";
import { formatDate } from "@/utils/formatUrl";

export async function GET() {
    try {
        const getBlogs = await getResearchPosts();
        const arrayOfBlogs = getBlogs?.map((blog: any) => ({
            ...blog?.fields,
            publishedAt: formatDate(blog?.sys?.createdAt),
        }));
        
        return NextResponse.json(arrayOfBlogs);
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}
