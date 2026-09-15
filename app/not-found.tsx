"use client";

import { useEffect, useState } from "react";

const FAIL_GIF_COUNT = 40;
const STORAGE_KEY = "fail-gif-bag";

const basePath = "/fail";

function shuffle<T>(array: T[]): T[] {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function getNextGif(): number {
  const stored = sessionStorage.getItem(STORAGE_KEY);

  let bag: number[] = stored ? JSON.parse(stored) : [];

  // Refill only when every GIF has been used.
  if (bag.length === 0) {
    bag = shuffle(
      Array.from({ length: FAIL_GIF_COUNT }, (_, index) => index + 1)
    );
  }

  const next = bag.pop()!;

  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(bag));

  return next;
}

export default function NotFoundClient() {
  const [src, setSrc] = useState<string>();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSrc(`${basePath}/fail-${getNextGif()}.gif`);
  }, []);

  return (
    <section className="relative grid h-screen w-full place-items-center overflow-hidden">
      {/* <span className="fixed top-10 left-10 z-50000 text-5xl text-white">
        {src}
      </span> */}
      {src && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-center bg-no-repeat brightness-75 max-sm:bg-contain sm:bg-size-[100%_100%]"
          style={{ backgroundImage: `url("${src}")` }}
        />
      )}

      <h1 className="z-10 font-sans text-[14vw] text-white/40">
        404 Page Not Found
      </h1>
    </section>
  );
}
