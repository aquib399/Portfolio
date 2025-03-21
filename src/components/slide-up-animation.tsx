"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface SlideUpAnimationProps {
  text: string;
  holdDuration?: number;
  className?: string;
}

export default function SlideUpAnimation({
  text,
  holdDuration = 4,
  className,
}: SlideUpAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll(
      ".section__title__char",
    );

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 0,
    });

    gsap.set(chars, {
      opacity: 0,
      scale: 0,
      y: 100,
    });

    tl.to(chars, {
      duration: 0.2,
      opacity: 1,
      scale: 1,
      y: 0,
      stagger: 0.05,
      ease: "back.out(1.7)",
    });

    tl.to({}, { duration: holdDuration });

    tl.to(chars, {
      duration: 0.5,
      opacity: 0,
      scale: 0,
      y: -100,
      stagger: 0.05,
      ease: "back.in(1.7)",
    });

    return () => {
      tl.kill();
    };
  }, [holdDuration]);

  const renderCharacters = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="section__title__char inline-block">
        {char}
      </span>
    ));
  };

  return (
    <div className="relative flex w-auto items-center justify-center">
      <div className="section__title uppercase" ref={containerRef}>
        <h3
          className={cn("font-rye w-fit text-4xl whitespace-nowrap", className)}
        >
          {renderCharacters(text)}
        </h3>
      </div>
    </div>
  );
}
