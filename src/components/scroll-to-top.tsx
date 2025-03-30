"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 1900);
    };
    toggleVisibility();
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  function scrollToTop() {
    const duration = 1500;
    const start = window.scrollY || document.documentElement.scrollTop;
    const startTime = performance.now();
    const animateScroll = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easing =
        progress < 0.5
          ? 4 * progress * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo({
        top: start * (1 - easing),
      });

      if (elapsedTime < duration) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          title="Scroll to top"
          aria-label="Scroll to top"
          onClick={scrollToTop}
          className="bg-foreground/80 text-background fixed right-[1.5vw] bottom-[0.5vh] aspect-square size-7 cursor-pointer rounded-full transition-all hover:ring-2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
