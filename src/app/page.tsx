import { Flex, Text, Container, Link } from "@radix-ui/themes";
import styles from "./home.module.css";

export default function Home() {
  return (
    <Container size="2" height="100%" className={styles.container} p="4">
      <Flex direction="column" gap="5" justify={"center"} height="100%">
        <Text
          size="4"
          color="gray"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          Hello, I’m Emad Abdulrahim, but you can call me Moody — it’s not just
          my disposition, it’s my nickname! I’m Design Engineer at{" "}
          <Link href="//ashbyhq.com">Ashby</Link>, based in San Francisco,
          designing and building quality user interfaces that look beauitful.
        </Text>
      </Flex>
    </Container>
  );
}
