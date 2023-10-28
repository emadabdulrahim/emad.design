import { getPostSlugs } from "@/lib/mdx-file-loader";
import { Container, Flex } from "@radix-ui/themes";
import Link from "next/link";

export default async function PostsPage() {
  const posts = await getPostSlugs();

  return (
    <Container size="2">
      <Flex direction={"column"} gap="5">
        {posts.map((post) => (
          <Link href={`/posts/${post}`} key={post}>
            {post}
          </Link>
        ))}
      </Flex>
    </Container>
  );
}
