/* eslint-disable */
import { createClient } from 'contentful';
import { formatURL } from './formatUrl';

const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID!;
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_ACCESS_TOKEN!;

if (!SPACE_ID || !ACCESS_TOKEN) {
  console.error("Contentful SPACE_ID and ACCESS_TOKEN must be defined in your environment variables.");
}

export const createContentClient = () => {
  return createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
  });
};

const client = createContentClient();

export const getResearchPosts = async () => {
  const response = await client.getEntries({
    content_type: 'govtechAfricaResearch',
  });
  return response?.items?.map((item: any) => item);
};

export const getEntryBySlug = async (slug?: string) => {
  const response = await client.getEntries({
    content_type: 'govtechAfricaResearch',
    'fields.slug': slug,
  });
  return response.items[0]?.fields || null;
};

export async function getResearchPostByTitle(titleSlug: string) {
  const entries = await client.getEntries({
    content_type: 'govtechAfricaResearch',
    'fields.blogTitle[match]': titleSlug?.replace(/-/g, ' '),
  });
  const blog = entries?.items[0]?.fields || null;
  if (blog && formatURL(blog.blogTitle as string) === titleSlug) {
    return blog;
  }
  return blog;
}