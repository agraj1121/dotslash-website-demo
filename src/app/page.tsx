import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { RoadmapSection } from "@/components/roadmap-section";
import { UpdatesSection } from "@/components/updates-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <RoadmapSection />
      <UpdatesSection />
    </>
  );
}
