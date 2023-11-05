import { getPostBySlug } from "@/lib/mdx-file-loader";
import * as React from "react";
import { Flex, Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import { ParamsProps } from "@/lib/types";

export default async function PostPage({ params }: ParamsProps) {
  if (!params || !params.slug) {
    notFound();
  }
  const slug = params.slug;
  const { content, frontmatter } = await getPostBySlug(slug);
  console.log("🚀 ~ file: page.tsx:13 ~ PostPage ~ frontmatter:", frontmatter);

  return (
    <React.Fragment>
      <Heading>{frontmatter.title}</Heading>
      <Flex direction={"column"} gap="5">
        {content}
      </Flex>
    </React.Fragment>
  );
}
