/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect, useMemo } from "react";

export default function AnimatedCursor({ size = 15, activateHover = false }) {
  if (process.env.NODE_ENV === "development") return null;

  const isMobile = useMemo(
    () => typeof window !== "undefined" && window.innerWidth <= 768,
    [],
  );

  if (isMobile) return null;

  const [cursorState, setCursorState] = useState({
    clicked: false,
    hidden: false,
    highlighted: false,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const config = { stiffness: 500, damping: 35, mass: 0.5 };
  const dotX = useSpring(mouseX, config);
  const dotY = useSpring(mouseY, config);

  useEffect(() => {
    const onMouseMove = (e: { clientX: number; clientY: number }) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const onMouseDown = () =>
      setCursorState((prev) => ({ ...prev, clicked: true }));
    const onMouseUp = () =>
      setCursorState((prev) => ({ ...prev, clicked: false }));
    const onMouseLeave = () =>
      setCursorState((prev) => ({ ...prev, hidden: true }));
    const onMouseEnter = () =>
      setCursorState((prev) => ({ ...prev, hidden: false }));

    const handleHighlightElementsHover = () =>
      setCursorState((prev) => ({ ...prev, highlighted: true }));
    const handleHighlightElementsOut = () =>
      setCursorState((prev) => ({ ...prev, highlighted: false }));

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    const highlightElements = document.querySelectorAll("a, h1, button");
    highlightElements.forEach((el) => {
      el.addEventListener("mouseover", handleHighlightElementsHover);
      el.addEventListener("mouseout", handleHighlightElementsOut);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      highlightElements.forEach((el) => {
        el.removeEventListener("mouseover", handleHighlightElementsHover);
        el.removeEventListener("mouseout", handleHighlightElementsOut);
      });
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: String(size * 0.066) + "vw",
          height: String(size * 0.066) + "vw",
          pointerEvents: "none",
          zIndex: 999,
          mixBlendMode: "difference",
          x: dotX,
          y: dotY,
          transformOrigin: "4.5px 0.79px",
          transform: "translate(-4.5px, -0.79px)",
          fill: "#fff",
        }}
        animate={{
          scale:
            cursorState.highlighted || activateHover
              ? cursorState.clicked
                ? 1.5
                : 2
              : 1,
          opacity: cursorState.hidden ? 0 : 1,
        }}
        transition={{
          scale: { type: "spring" },
          opacity: { duration: 0.05 },
        }}
      >
        <path d="M4.5.79v22.42l6.56-6.57h9.29L4.5.79z" />
      </motion.svg>
    </>
  );
}
