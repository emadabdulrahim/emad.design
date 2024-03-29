import { Container } from "@radix-ui/themes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container size="2">{children}</Container>;
}
