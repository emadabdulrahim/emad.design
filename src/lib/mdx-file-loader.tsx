import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";

interface FrontmatterAttr {
  title: string;
  date: string;
  summary: string;
  ogImage?: string;
  tags?: string[];
}

const contentDir = path.join(process.cwd(), "src/app/content");

/* 
  1. function to read the directory, return a collection of files:
   - file name (aka post name)

  2. function that takes in a collection of file paths, and a slug, returns the complied MDX for that slug
*/

export const getPostSlugs = () => {
  const contentSlugArray = fs.readdirSync(contentDir);
  return contentSlugArray.map((slug) => slug.replace(/\.mdx$/, ""));
};

export const getPostBySlug = async (slug: string) => {
  const filePath = path.join(contentDir, `${slug}.mdx`);

  const fileContent = fs.readFileSync(filePath);

  return await compileMDX<FrontmatterAttr>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });
};
