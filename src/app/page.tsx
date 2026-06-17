import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { CaseStudy } from "@/components/case-study";
import { Skills } from "@/components/skills";
import { Parcours } from "@/components/parcours";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CaseStudy />
        <Skills />
        <Parcours />
        <Contact />
      </main>
    </>
  );
}
