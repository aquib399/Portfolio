import Link from "next/link";
import HomepageHero from "./hero";

export default function Home() {
  return (
    <main>
      <Link
        href={
          "mailto:aquibalam399@gmail.com?subject=Hello%20Aquib&body=I%20would%20like%20to%20discuss%20a%20project%20with%20you."
        }
        className="text-muted-foreground hover:text-foreground fixed top-[60%] left-[calc(1vw-64px)] z-50 -translate-y-[60%] rotate-90 transform text-xs duration-100 sm:left-[calc(1vw-72px)] sm:text-sm"
      >
        aquibalam399@gmail.com
      </Link>
      <HomepageHero />
    </main>
  );
}
