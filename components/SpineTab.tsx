import { cn } from "@/lib/utils";

interface SpineTabProps {
  label: string;
  theme?: "red" | "cream" | "dark" | "card" | "white";
  side?: "left" | "right";
  className?: string;
}

export function SpineTab({
  label,
  theme = "cream",
  side = "left",
  className = ""
}: SpineTabProps) {
  const themeClasses = {
    cream: "bg-background text-primary border-border",
    red: "bg-primary text-primary-foreground border-border",
    dark: "bg-retro-dark text-foreground border-border",
    card: "bg-card text-foreground border-border",
    white: "bg-card text-foreground border-border"
  }[theme];

  const sideClasses = side === "left" ? "border-r-2" : "border-l-2";

  return (
    <div
      className={cn(
        "hidden items-center justify-center px-3 py-6 select-none md:flex",
        sideClasses,
        themeClasses,
        className
      )}
      aria-hidden="true"
    >
      <span className="font-display-condensed vertical-spine-text text-2xl font-bold tracking-widest whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}
