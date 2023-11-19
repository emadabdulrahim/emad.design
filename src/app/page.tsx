import { Flex, Text, Container, Heading, Link } from "@radix-ui/themes";
import styles from "./page.module.css";
import { LogoArabic } from "@/components/LogoArabic";

export default function Home() {
  return (
    <Container
      size="2"
      height="100%"
      className={styles.container}
      px="4"
      py="9"
    >
      <Flex direction="column" gap="8" height="100%">
        <Flex justify={"center"} direction={"column"}>
          <LogoArabic className={styles.logo}></LogoArabic>
          <Text align={"center"} className={styles.caption} color="gray">
            Currently under construction.
          </Text>
        </Flex>
        <Flex direction={"column"} gap="4">
          <Text size="4">
            Project 75 is an initiative to honor all Arabs, with initial focus
            on Palestinians, who were killed by Israelis. The project aims to
            document the personal stories of Palestinian suffering since the
            1948 Nakba—Catastrophe.
          </Text>
          <Text size="4">
            The stories of each Palestinian need to be told, shared, honored,
            and remembered. This will be done through crowdsourcing, with a
            system in place to verify and fact-check each story. Besides text,
            the stories will include photos, videos, and audio recordings as
            available.
          </Text>
          <Text size="4">
            The project will be open source, and will be available in both
            Arabic and English.
          </Text>
        </Flex>
        <Flex direction={"column"} gap="4">
          <Heading as="h2">How can you help</Heading>
          <Text>
            We need individuals with the following skills and for the following
            tasks:
          </Text>
          <Flex asChild gap="2" direction={"column"}>
            <ul>
              <li>
                Palestinians and anyone who knows a story of one of the victims
              </li>
              <li>
                Arabic and English speakers to translate the stories from Arabic
                to English and vice versa
              </li>
              <li>
                Researchers to fact-check the stories and verify the information
                provided
              </li>
              <li>
                Developers to help build the website and a system similiar to
                Wikipedia
              </li>
            </ul>
          </Flex>
        </Flex>
        <Flex direction={"column"} gap="4">
          <Heading as="h2">Contact</Heading>
          <Text>
            If you are interested in helping, please contact us at{" "}
            <Link href="mailto:hello@mashrou75.org">hello@mashrou75.org.</Link>
          </Text>
        </Flex>
      </Flex>
    </Container>
  );
}
