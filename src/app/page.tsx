import { Flex, Text, Button, Container } from "@radix-ui/themes";

export default function Home() {
  return (
    <Container size="2">
      <Flex direction="column" gap="2">
        <Text size="9">Hello from Radix Themes </Text>
        <Text size="9" style={{ fontFamily: "system-ui" }}>
          Hello from Radix Themes{" "}
        </Text>
        <Button>Let’s go</Button>
      </Flex>
    </Container>
  );
}
