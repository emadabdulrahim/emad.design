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
        <Flex justify={"center"}>
          <Text size="2">
            🇵🇸 <Text color="gray">Oranament of the world.</Text>
          </Text>
        </Flex>
      </Container>
    </Box>
  );
}
