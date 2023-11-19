import { Box, Container, Flex, Text } from "@radix-ui/themes";

export function Footer() {
  return (
    <Box
      style={{
        borderTop: "1px solid var(--gray-5)",
      }}
      p="4"
    >
      <Container size="2">
        <Flex gap="1" align={"center"} justify={"center"}>
          <Text size="4">🇵🇸</Text>
          <Text color="gray">Ornament of the world.</Text>
        </Flex>
      </Container>
    </Box>
  );
}
