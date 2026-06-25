import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { CareerTimeline } from "@/components/sections/career-timeline";
import { Projects } from "@/components/sections/projects";
import { Research } from "@/components/sections/research";
import { BuildBackpack } from "@/components/sections/build-backpack";
import { Achievements } from "@/components/sections/achievements";
import { Summit } from "@/components/sections/summit";

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <CareerTimeline />
      <Projects />
      <Research />
      <BuildBackpack />
      <Achievements />
      <Summit />
    </div>
  );
}
