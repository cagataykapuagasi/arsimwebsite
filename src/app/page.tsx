import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { KeywordMarquee } from "@/components/sections/keyword-marquee";
import { Process } from "@/components/sections/process";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <KeywordMarquee />
        <Services />
        <Projects />
        <Process />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
