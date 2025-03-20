"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

interface IntroAnimationProps {
  sentences: string[];
  holdDuration?: number;
}

export default function IntroAnimation({
  sentences,
  holdDuration = 3.5,
}: IntroAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const mainTimeline = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
    });

    const sentenceElements = containerRef.current.querySelectorAll(
      ".section__title--0 .section__title__sentence",
    );

    sentenceElements.forEach((sentence) => {
      const sentenceTimeline = gsap.timeline();
      const chars = sentence.querySelectorAll(".section__title__char");

      sentenceTimeline.from(chars, {
        opacity: 0,
        y: 30,
        rotateX: -90,
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

      sentenceTimeline.to({}, { duration: 0.5 });

      mainTimeline.add(sentenceTimeline);
    });

    return () => {
      mainTimeline.kill();
    };
  }, [holdDuration, sentences]);

  const renderCharacters = (word: string) => {
    return word.split("").map((char, index) => (
      <div key={index} className="section__title__char">
        {char}
      </div>
    ));
  };

  return (
    <div
      className="section relative flex min-h-48 items-center justify-center bg-black p-12 text-white"
      ref={containerRef}
    >
      <code className="absolute top-0 left-0 w-full border-b border-[#0d0d0d] p-0 px-6">
        Intro
      </code>
      <h1 className="section__title section__title--0 text-center text-4xl uppercase">
        <div className="section__title__container relative">
          {sentences.map((sentence, index) => (
            <span
              key={index}
              className="section__title__sentence font-paytoneOne absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 tracking-wider"
            >
              {renderCharacters(sentence)}
            </span>
          ))}
        </div>
      </h1>
    </div>
  );
}
