import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Research } from "@/components/sections/research";
import { Skills } from "@/components/sections/skills";
import { Achievements } from "@/components/sections/achievements";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Research />
      <Skills />
      <Achievements />
      <Contact />
    </div>
  );
}
