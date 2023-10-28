import { Flex, Text, Button, Container } from "@radix-ui/themes";

export default function Home() {
  return (
    <Container size="2">
      <Flex direction="column" gap="2">
        <Text>Hello from Radix Themes </Text>
        <Button>Let’s go</Button>
      </Flex>
    </Container>
  );
}
