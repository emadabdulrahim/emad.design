import type { Metadata } from "next";
import "./globals.css";
import { GeistSans, GeistMono } from "geist/font";
import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import clsx from "clsx";
import { Providers } from "./providers";
import { Box, Flex } from "@radix-ui/themes";
import { Footer } from "@/components/Footer";
import { ContainerProps } from "@/lib/types";

export const metadata: Metadata = {
  title: "Project 75",
  description:
    "An initiative to honor all Palestinians who were victims since 1948.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={clsx(GeistSans.variable, GeistMono.variable)}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}

function Layout({ children }: ContainerProps) {
  return (
    <Flex direction={"column"} height={"100%"}>
      <Box asChild style={{ flex: 1 }}>
        <main>{children}</main>
      </Box>
      <Footer />
    </Flex>
  );
}
