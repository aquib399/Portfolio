interface SpineTabProps {
  label: string;
  theme?: "red" | "cream" | "dark" | "white";
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
    cream: "bg-[#F4EFEA] text-[#E53826] border-[#111111]",
    red: "bg-[#E53826] text-[#F4EFEA] border-[#111111]",
    dark: "bg-[#191817] text-[#F4EFEA] border-[#111111]",
    white: "bg-white text-[#111111] border-[#111111]"
  }[theme];

  const sideClasses = side === "left" ? "border-r-2" : "border-l-2";

  return (
    <div
      className={`hidden items-center justify-center px-3 py-6 select-none md:flex ${sideClasses} ${themeClasses} ${className}`}
      aria-hidden="true"
    >
      <span className="font-display-condensed vertical-spine-text text-2xl font-bold tracking-widest whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}
