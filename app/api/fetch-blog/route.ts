import { NextRequest, NextResponse } from "next/server";
import { getResearchPostByTitle } from "@/utils/contentful";

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const slug = searchParams.get("slug");
    
    if (!slug) {
        return NextResponse.json({ error: "Slug parameter is required" }, { status: 400 });
    }

    try {
        const blogPost = await getResearchPostByTitle(slug);
        if (!blogPost) {
            return NextResponse.json({ error: "Blog not found" }, { status: 404 });
        }
        console.log("blogPost: ", blogPost);
        return NextResponse.json(blogPost);
    } catch (error) {
        console.error("Error fetching blog:", error);
        return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 });
    }
}
