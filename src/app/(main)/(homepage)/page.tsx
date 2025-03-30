import Testimonials from "./testimonials";
import Skills from "@/components/skills";
import WhatIDo from "./what-i-do";
import HomepageHero from "./hero";
import WhoAmI from "./who-am-i";

export default function Home() {
  return (
    <main>
      <HomepageHero />
      <WhoAmI />
      <WhatIDo />
      <Skills />
      <Testimonials />
    </main>
  );
}
