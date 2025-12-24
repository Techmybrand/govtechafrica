import { createClient } from 'contentful';
import { formatURL } from './formatUrl';

// const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
// const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const SPACE_ID = 'l8vs8and02j3';
const ACCESS_TOKEN = '35gHI-r8zPb11GTIwIBpmDLTez4DXxusXE-mpbdO_To';

if (!SPACE_ID || !ACCESS_TOKEN) {
  throw new Error("Contentful SPACE_ID and ACCESS_TOKEN must be defined in your environment variables.");
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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