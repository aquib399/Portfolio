export default function WhatIDo() {
  return (
    <section className="w-full px-3 py-8 md:py-12">
      <div className="mx-auto max-w-xl space-y-3 text-xl leading-9 md:space-y-6 md:text-2xl">
        <p>
          Early in my career I focused on delivering projects on time, sometimes
          at the expense of code quality and long-term maintainability.
        </p>

        <p>
          I often relied on quick fixes and large, hard-to-navigate files that
          made updates slow and error-prone.
        </p>

        <p>
          Over time I shifted my approach: I balance delivery speed with clear
          structure and sustainable practices so the codebase remains easy to
          understand and evolve.
        </p>

        <p className="flex items-center gap-2">
          The outcome: <span className="font-semibold">cleaner code</span>,
          <span className="font-semibold">faster iterations</span>
          <span>✨</span>
        </p>

        <p>
          I prioritize modular components, consistent file organization, and
          readable tests — small habits that pay off during maintenance and
          scaling.
        </p>
      </div>
    </section>
  );
}
