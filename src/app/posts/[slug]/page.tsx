import { getPostBySlug } from "@/lib/mdx-file-loader";
import { Container, Flex, Heading } from "@radix-ui/themes";

export default async function PostPage({ params }) {
  const { slug } = params;
  const { content, frontmatter } = await getPostBySlug(slug);

  return (
    <Container size="2">
      <Heading>{frontmatter.author}</Heading>
      <Flex direction={"column"} gap="5">
        {content}
      </Flex>
    </Container>
  );
}
