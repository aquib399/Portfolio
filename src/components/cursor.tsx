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

  const dotX = useSpring(mouseX, { stiffness: 300, damping: 25, mass: 0.5 });
  const dotY = useSpring(mouseY, { stiffness: 300, damping: 25, mass: 0.5 });

  const hoveredDotX = useSpring(mouseX, {
    stiffness: 250,
    damping: 5,
    mass: 0.01,
  });
  const hoveredDotY = useSpring(mouseY, {
    stiffness: 250,
    damping: 5,
    mass: 0.01,
  });

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
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: String(size * 0.066) + "vw",
          height: String(size * 0.066) + "vw",
          backgroundColor: "#fff",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 999,
          mixBlendMode: "difference",
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale:
            cursorState.highlighted || activateHover
              ? cursorState.clicked
                ? 2
                : 3.5
              : 1,
          opacity: cursorState.hidden ? 0 : 1,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
          opacity: { duration: 0.1 },
        }}
      />
      <motion.div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: String(size * 0.066) + "vw",
          height: String(size * 0.066) + "vw",
          backgroundColor: "#fff",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 999,
          mixBlendMode: "difference",
          x: hoveredDotX,
          y: hoveredDotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: 1,
          opacity: cursorState.highlighted ? 1 : 0,
        }}
        transition={{
          scale: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
          opacity: { duration: 0.1 },
        }}
      />
    </>
  );
}
