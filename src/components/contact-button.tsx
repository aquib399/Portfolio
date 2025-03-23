"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ContactButton({ className = "", text = "" }) {
  function handleSubmit() {
    console.log("Contact button clicked");
  }
  return (
    <Button
      onClick={handleSubmit}
      className={cn(
        "font-paytoneOne custom-shadow-button cursor-pointer rounded uppercase",
        className,
      )}
    >
      {text || "Contact"}
    </Button>
  );
}
