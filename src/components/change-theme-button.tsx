"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MoonIcon, SunIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

export default function ChangeThemeButton() {
  const { setTheme, theme } = useTheme();

  const iconVariants = {
    hidden: { opacity: 0, rotate: -360, scale: 0 },
    visible: { opacity: 1, rotate: 0, scale: 1 },
    exit: { opacity: 0, rotate: 360, scale: 0 },
  };
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
  }, []);
  if (!mounted) return null;

  return (
    <TooltipProvider disableHoverableContent>
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <Button
            className="bg-background size-9 rounded-full"
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <AnimatePresence mode="wait">
              {theme === "dark" ? (
                <motion.div
                  key="sun"
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <SunIcon />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  <MoonIcon />
                </motion.div>
              )}
            </AnimatePresence>
            <span className="sr-only">Switch Theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="font-semibold">
          Switch Theme
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
