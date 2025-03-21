"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface MultiFlipTextProps {
  text: string;
  holdDuration?: number;
  className?: string;
}

export default function MultiFlipText({
  text,
  holdDuration = 3.5,
  className,
}: MultiFlipTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sentences = text.split(" ");

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const sentenceElements = containerRef.current.querySelectorAll(
      ".section__title__sentence",
    );
    gsap.set(sentenceElements, { autoAlpha: 0 });
    gsap.set(sentenceElements[0], { autoAlpha: 1 });

    const mainTimeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 0.2,
      onRepeat: () => {
        gsap.set(sentenceElements, { autoAlpha: 0 });
        gsap.set(sentenceElements[0], { autoAlpha: 1 });
      },
    });

    sentenceElements.forEach((sentence, index) => {
      const chars = sentence.querySelectorAll(".section__title__char");
      const nextIndex = (index + 1) % sentenceElements.length;

      const sentenceTimeline = gsap.timeline();

      gsap.set(chars, {
        opacity: 0,
        y: 30,
        rotateX: -90,
      });

      sentenceTimeline.to(chars, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: "back.out(1.7)",
      });

      sentenceTimeline.to({}, { duration: holdDuration });

      sentenceTimeline.to(chars, {
        opacity: 0,
        y: -30,
        rotateX: 90,
        duration: 0.5,
        stagger: 0.02,
        ease: "back.in(1.7)",
      });

      sentenceTimeline.add(() => {
        gsap.set(sentenceElements[nextIndex], { autoAlpha: 1 });
      });

      mainTimeline.add(sentenceTimeline);
    });

    return () => {
      mainTimeline.kill();
    };
  }, [sentences, holdDuration]);

  return (
    <div className="section relative inline-block" ref={containerRef}>
      <h3 className={cn("font-paytoneOne text-center uppercase", className)}>
        <div className="relative">
          <span className="invisible flex">
            {sentences
              .reduce((longest, current) =>
                current.length > longest.length ? current : longest,
              )
              .split("")
              .map((char, charIndex) => (
                <div key={charIndex} className="section__title__char mx-[1px]">
                  {char}
                </div>
              ))}
          </span>

          {sentences.map((sentence, index) => (
            <span
              key={index}
              className="section__title__sentence absolute top-[100%] left-1/2 flex -translate-x-1/2 -translate-y-1/2"
            >
              {sentence.split("").map((char, charIndex) => (
                <div key={charIndex} className="section__title__char mx-[1px]">
                  {char}
                </div>
              ))}
            </span>
          ))}
        </div>
      </h3>
    </div>
  );
}
