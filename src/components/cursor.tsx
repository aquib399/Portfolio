"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect } from "react";

export default function AnimatedCursor({ size = 20, activateHover = false }) {
  const [cursorState, setCursorState] = useState({
    clicked: false,
    hidden: false,
    linkHovered: false,
  });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const dotX = useSpring(mouseX, { stiffness: 300, damping: 25, mass: 0.5 });
  const dotY = useSpring(mouseY, { stiffness: 300, damping: 25, mass: 0.5 });

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

    const handleLinkHover = () =>
      setCursorState((prev) => ({ ...prev, linkHovered: true }));
    const handleLinkOut = () =>
      setCursorState((prev) => ({ ...prev, linkHovered: false }));

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    const highlightElements = document.querySelectorAll("a, h1");
    highlightElements.forEach((el) => {
      el.addEventListener("mouseover", handleLinkHover);
      el.addEventListener("mouseout", handleLinkOut);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      highlightElements.forEach((el) => {
        el.removeEventListener("mouseover", handleLinkHover);
        el.removeEventListener("mouseout", handleLinkOut);
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
          width: size,
          height: size,
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
            cursorState.linkHovered || activateHover
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
    </>
  );
}
