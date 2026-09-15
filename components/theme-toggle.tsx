"use client";

import { IconMoon, IconSun } from "./Icons";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface ToggleThemeProps {
  className?: string;
}

export function ToggleTheme({ className }: ToggleThemeProps) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      title="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={cn(
        "border-border bg-card text-foreground hover:bg-primary hover:text-primary-foreground relative flex cursor-pointer items-center justify-center border-2 p-2 shadow-[2px_2px_0px_0px_var(--border)] transition-all duration-200 select-none active:translate-x-0.5 active:translate-y-0.5",
        className
      )}
    >
      <IconSun size={18} className="hidden dark:block" />
      <IconMoon size={18} className="block dark:hidden" />
    </button>
  );
}
