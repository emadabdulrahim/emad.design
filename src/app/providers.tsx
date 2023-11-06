"use client";
import { ChildrenProps } from "@/lib/types";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: ChildrenProps) {
  return (
    <ThemeProvider attribute="class">
      <Theme
        grayColor="sand"
        accentColor="orange"
        panelBackground="translucent"
        scaling="100%"
        radius="medium"
        style={{ height: "100%" }}
      >
        {children}
      </Theme>
    </ThemeProvider>
  );
}
