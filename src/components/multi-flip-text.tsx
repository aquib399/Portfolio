"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface MultiFlipTextProps {
  text: string;
  holdDuration?: number;
}

export default function MultiFlipText({
  text,
  holdDuration = 3.5,
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
      repeatDelay: 1,
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
    <div
      className="section relative flex items-center justify-center"
      ref={containerRef}
    >
      <h3 className="section__title section__title--0 font-paytoneOne text-center text-4xl uppercase">
        <div className="section__title__container relative w-fit whitespace-nowrap">
          {sentences.map((sentence, index) => (
            <span
              key={index}
              className="section__title__sentence inline-block transform"
            >
              {sentence.split("").map((char, charIndex) => (
                <div
                  key={charIndex}
                  className="section__title__char mx-[1px] inline-block"
                >
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
