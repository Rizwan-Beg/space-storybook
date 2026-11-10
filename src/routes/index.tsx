import { createFileRoute } from "@tanstack/react-router";
import { pageMeta } from "@/lib/seo";
import {
  AssistantStory,
  FlatImagesSection,
  HomeHero,
  PlatformBento,
  ProblemSection,
  StatsSection,
  VisualizerStory,
} from "@/components/home/home-sections";
import { LogoMarquee } from "@/components/site/logo-marquee";
import { Testimonials } from "@/components/site/testimonials";
import { CtaPanel } from "@/components/site/cta-panel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({
      title: "Roomform — Your products, in their own room",
      description:
        "A room visualizer for rugs, furniture, flooring, wallpaper and wall art, at true size from one photo. Plus an AI shopping assistant, 3D creator and design studio.",
    }),
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HomeHero />
      <ProblemSection />
      <FlatImagesSection />
      <LogoMarquee />
      <AssistantStory />
      <VisualizerStory />
      <StatsSection />
      <PlatformBento />
      <Testimonials />
      <CtaPanel />
    </>
  );
}
