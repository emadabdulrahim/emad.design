import { Box, Container, Flex, Link, Separator, Text } from "@radix-ui/themes";
import { ToggleThemeButton } from "./ToggleTheme";

export function Footer() {
  return (
    <Box
      style={{
        borderTop: "1px solid var(--gray-5)",
        fontFamily: "var(--font-geist-mono)",
      }}
      p="4"
    >
      <Container size="2">
        <Flex justify={"between"}>
          <Text size="2" color="gray">
            Be kind.
          </Text>
          <Flex gap="4" align="center">
            <Link href="" color="gray" size="2">
              Twitter
            </Link>
            <Text size="2" color="gray">
              •
            </Text>
            <Link href="" color="gray" size="2">
              GitHub
            </Link>
            <Separator orientation="vertical" />
            <ToggleThemeButton></ToggleThemeButton>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
