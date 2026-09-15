import { cn } from "@/lib/utils";

interface SpineTabProps {
  label: string;
  theme?:
    | "primary"
    | "secondary"
    | "card"
    | "background"
    | "red"
    | "cream"
    | "dark"
    | "white";
  side?: "left" | "right";
  className?: string;
}

export function SpineTab({
  label,
  theme = "background",
  side = "left",
  className = ""
}: SpineTabProps) {
  const themeClasses: Record<string, string> = {
    primary: "bg-primary text-primary-foreground border-border",
    secondary: "bg-secondary text-secondary-foreground border-border",
    background: "bg-background text-primary border-border",
    card: "bg-card text-card-foreground border-border",
    cream: "bg-background text-primary border-border",
    red: "bg-primary text-primary-foreground border-border",
    dark: "bg-card text-card-foreground border-border",
    white: "bg-card text-card-foreground border-border"
  };

  const selectedThemeClass = themeClasses[theme] ?? themeClasses.background;

  const sideClasses = side === "left" ? "border-r-2" : "border-l-2";

  return (
    <div
      className={cn(
        "hidden items-center justify-center px-3 py-6 select-none md:flex",
        sideClasses,
        selectedThemeClass
      )}
      aria-hidden="true"
    >
      <span
        className={cn(
          "font-display-condensed vertical-spine-text text-5xl font-bold tracking-widest whitespace-nowrap",
          className
        )}
      >
        {label}
      </span>
    </div>
  );
}
