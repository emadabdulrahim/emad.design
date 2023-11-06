"use client";

import { IconButton } from "@radix-ui/themes";
import { IconMoon, IconSunHigh } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export function ToggleThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <IconButton
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      size="1"
      variant="soft"
      color="gray"
    >
      {theme === "light" ? (
        <IconSunHigh size={16}></IconSunHigh>
      ) : (
        <IconMoon size={16}></IconMoon>
      )}
    </IconButton>
  );
}
