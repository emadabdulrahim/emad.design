"use client";
import { ChildrenProps } from "@/lib/types";
import { Theme } from "@radix-ui/themes";

export function Providers({ children }: ChildrenProps) {
  return (
    <Theme
      grayColor="olive"
      accentColor="grass"
      panelBackground="translucent"
      scaling="100%"
      radius="medium"
      style={{ height: "100%" }}
    >
      {children}
    </Theme>
  );
}
