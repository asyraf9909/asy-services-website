import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { StackMarquee } from "@/components/stack-marquee";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { Stats } from "@/components/stats";
import { Process } from "@/components/process";
import { Engagement } from "@/components/engagement";
import { Faq } from "@/components/faq";
import { Contact } from "@/components/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Hero />
        <StackMarquee />
        <Services />
        <Stats />
        <Work />
        <Process />
        <Engagement />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
