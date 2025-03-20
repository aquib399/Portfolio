"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface SlideUpAnimationProps {
  text: string;
  holdDuration?: number;
}

export default function SlideUpAnimation({
  text,
  holdDuration = 4,
}: SlideUpAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll(
      ".section__title__char",
    );

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
    });

    gsap.set(chars, {
      opacity: 0,
      scale: 0,
      y: 100,
    });

    tl.to(chars, {
      duration: 0.5,
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
    <div className="section relative flex min-h-48 items-center justify-center bg-black p-12 text-white">
      <code className="absolute top-0 left-0 w-full border-b border-[#0d0d0d] p-0 px-6">
        Slide Up
      </code>
      <h1
        className="section__title section__title--2 text-4xl uppercase"
        ref={containerRef}
      >
        <div className="section__title__word font-paytoneOne inline-block tracking-wider">
          {renderCharacters(text)}
        </div>
      </h1>
    </div>
  );
}
