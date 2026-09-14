"use client";

import { useEffect, useState } from "react";

const FAIL_GIF_COUNT = 30;

export default function NotFoundClient() {
  const [src, setSrc] = useState("/asset/fail/fail-1.gif");

  useEffect(() => {
    const timer = setTimeout(() => {
      const num = Math.floor(Math.random() * FAIL_GIF_COUNT) + 1;
      setSrc(`/asset/fail/fail-${num}.gif`);
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative grid h-screen w-full place-items-center overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-no-repeat brightness-75 max-sm:bg-contain sm:bg-size-[100%_100%]"
        style={{ backgroundImage: `url("${src}")` }}
      />

      <h1 className="z-10 text-xl text-white">404 Page Not Found</h1>
    </section>
  );
}
