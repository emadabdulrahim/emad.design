import { Flex, Text, Container, Link, Heading } from "@radix-ui/themes";
import styles from "./home.module.css";

export default function Home() {
  return (
    <Container size="2" height="100%" className={styles.container} p="4">
      <Flex direction="column" gap="3" justify={"center"} height="100%">
        <Heading
          size="4"
          color="gray"
          style={{ fontFamily: "var(--font-geist-mono)" }}
        >
          Hello
        </Heading>

        <Text size="4">
          Emad 'Moody' Abdulrahim — Design Engineer based in beautiful San
          Francisco. I’m currently crafting beautiful and thoughtful interfaces
          at <Link href="//ashbyhq.com">Ashby.</Link>
        </Text>
      </Flex>
    </Container>
  );
}
