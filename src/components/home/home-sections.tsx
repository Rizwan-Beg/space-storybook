import { Link } from "@tanstack/react-router";
import { PackageX, ScanEye, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLink, DashList, DotGrid, HalfCircle, IndexNum, Reveal } from "@/components/site/primitives";
import { MediaFrame } from "@/components/site/split-feature";
import { PhoneMockup, type PhoneProduct } from "@/components/site/phone-mockup";
import heroRoom from "@/assets/hero-rug-room.jpg";
import livingRoom from "@/assets/living-terracotta.jpg";
import velvetChair from "@/assets/velvet-chair-closeup.jpg";
import bedroom from "@/assets/roomform-studio.jpg";
import rugLiving from "@/assets/roomform-hero.jpg";
import rugTop from "@/assets/rug-topdown.jpg";
import armchair from "@/assets/armchair-silo.jpg";
import greenChair from "@/assets/roomform-chair.jpg";
import lounge from "@/assets/lounge-burgundy.jpg";
import assistantRoom from "@/assets/roomform-assistant.jpg";
import { stats } from "@/data/site";

export const phoneProducts: PhoneProduct[] = [
  { name: "Wave Border Rug — Merlot", price: "$1,080", thumb: rugTop, variants: "3 sizes" },
  { name: "Linen Runner — Sand", price: "From $350", thumb: rugLiving, variants: "1 variant" },
  { name: "Velvet Lounge Chair — Moss", price: "From $1,100", thumb: greenChair, variants: "2 variants" },
];

export function HomeHero() {
  return (
    <section className="relative flex min-h-[640px] items-center overflow-hidden bg-ink text-ink-foreground md:h-[100svh] md:max-h-[1000px]">
      <img
        src={heroRoom}
        alt="Sunlit living room with a burgundy wave-edged rug placed on an oak floor"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover animate-hero-zoom"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/35 to-transparent" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/40 to-transparent" />
      <div className="container-site relative pt-24">
        <div className="max-w-xl animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <h1 className="display-hero">Your products, in their own room</h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-muted">
            A room visualizer for rugs, furniture, flooring, wallpaper and wall art, at true size from one photo.
          </p>
          <div className="mt-8 flex flex-wrap gap-2.5">
            <Button asChild variant="light" size="pill">
              <Link to="/contact">Book a Demo</Link>
            </Button>
            <Button asChild variant="glass" size="pill">
              <Link to="/demo">Try the live demo</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

const problems = [
  { icon: ShoppingCart, title: "Abandoned Carts", body: "Planned purchases get abandoned when the shopper can't decide between sizes, colours or styles." },
  { icon: ScanEye, title: "Shoppers Can't Visualize in Context", body: "Customers can't always picture how a product will look alongside their existing pieces, or how it will fit in their space." },
  { icon: PackageX, title: "Returns Eat Your Margin", body: "A sofa that arrives too big comes back, and big items cost the most to ship twice." },
];

export function ProblemSection() {
  return (
    <section className="relative overflow-hidden bg-lavender section-pad">
      <div aria-hidden="true" className="absolute inset-0 grid-lines" />
      <div className="container-site relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="display-lg">A product photo can't show size</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Product photos can't show scale, so shoppers hesitate, abandon the cart or send the product back.
          </p>
        </Reveal>
        <div className="mx-auto mt-16 grid max-w-[60rem] gap-4 md:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="group h-full rounded-3xl bg-surface/80 p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <div className="flex items-start justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-soft text-primary transition-transform group-hover:scale-105">
                    <p.icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <IndexNum n={i + 1} className="text-muted-foreground" />
                </div>
                <h3 className="mt-7 text-lg font-medium">{p.title}</h3>
                <p className="mt-2 body-sm">{p.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FlatImagesSection() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground section-pad">
      <div aria-hidden="true" className="absolute left-[10%] top-6 h-72 w-36 rounded-r-full bg-ink-foreground/5" />
      <div className="container-site relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="display-xl">Great products deserve more than flat images.</h2>
          <p className="mt-6 text-ink-muted">Shoppers can't tell from a photo whether it fits or matches, so they hesitate.</p>
          <div className="mt-6 flex justify-center">
            <DashList
              tone="ink"
              className="text-left"
              items={[
                "3D models generated from the product photos you already have",
                "True-scale placement in the shopper's own room, from one photo",
                "Native Shopify app. Visualizer typically live within 2 weeks",
              ]}
            />
          </div>
        </Reveal>
        <Reveal delay={120} className="relative mx-auto mt-14 max-w-[58rem]">
          <DotGrid className="absolute -bottom-12 -right-8 text-ink-foreground/25" />
          <MediaFrame
            src={livingRoom}
            alt="Living room with a rust velvet sofa and side tables, created in the Roomform visualizer"
            width={1600}
            height={912}
            caption="Created with Roomform"
            className="relative aspect-[16/9]"
          />
        </Reveal>
        <div className="mt-12 text-center">
          <ArrowLink to="/product/visualizer" tone="ink">
            How it works
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}

export function AssistantStory() {
  return (
    <section className="relative overflow-hidden bg-lavender section-pad">
      <div className="container-site grid items-center gap-14 md:grid-cols-2">
        <Reveal className="relative">
          <DotGrid className="absolute -bottom-6 -left-8" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-card">
            <img src={velvetChair} alt="Orange velvet lounge chair" className="h-full w-full object-cover" loading="lazy" width={1024} height={1280} />
            <div className="absolute inset-0 flex items-center justify-center">
              <PhoneMockup room={bedroom} products={phoneProducts} className="scale-[0.82] md:scale-90" tilt />
            </div>
          </div>
        </Reveal>
        <Reveal delay={120} className="relative">
          <HalfCircle className="-right-10 -top-24 w-[20rem] bg-pink-soft" />
          <h2 className="display-lg relative">Every shopper guided to the right product</h2>
          <p className="relative mt-6 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
            Shoppers ask in their own words or share a photo of their room, and get a short list with the reason each piece fits.
          </p>
          <DashList
            className="relative mt-7 max-w-md"
            items={[
              "Narrows a big catalog to the products that suit the room",
              "Hands off to the Visualizer to see it in their own room",
              "Shows you what shoppers asked for that you don't stock",
            ]}
          />
          <div className="relative mt-8">
            <ArrowLink to="/product/ai-shopping-assistant">Explore AI Assistant</ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function VisualizerStory() {
  return (
    <section className="relative overflow-hidden bg-ink text-ink-foreground section-pad">
      <div className="container-site grid items-center gap-14 md:grid-cols-2">
        <Reveal className="relative">
          <HalfCircle className="-left-16 -top-16 w-[22rem] bg-ink-foreground/5" />
          <h2 className="display-lg relative max-w-sm">Style Your Products in Your Customer's Space</h2>
          <DashList
            tone="ink"
            className="relative mt-8 max-w-md"
            items={[
              "Place, move and swap products in a photo of their real room, at true scale",
              "Rugs slide under existing furniture; lamps sit on the floor, not above it",
              "Style several products together and add the whole look to cart",
            ]}
          />
          <div className="relative mt-8">
            <ArrowLink to="/product/visualizer" tone="ink">
              Explore Visualizer
            </ArrowLink>
          </div>
        </Reveal>
        <Reveal delay={120} className="relative flex justify-center py-6">
          <DotGrid className="absolute -bottom-2 right-0 text-ink-foreground/25" />
          <PhoneMockup room={rugLiving} products={phoneProducts} tilt className="animate-float" />
        </Reveal>
      </div>
    </section>
  );
}

export function StatsSection() {
  const [first, ...rest] = stats;
  return (
    <section className="relative overflow-hidden bg-lavender section-pad">
      <div aria-hidden="true" className="absolute inset-0 grid-lines" />
      <div aria-hidden="true" className="absolute -right-10 top-1/3 h-72 w-72 rounded-b-full bg-pink-soft/80" />
      <div className="container-site relative">
        <Reveal as="article" className="text-center">
          <p className="serif-italic mx-auto max-w-4xl text-[clamp(2.4rem,5.2vw,4.6rem)] leading-[1.05]">
            <span className="text-primary">{first.value}</span> average Visualizer session across retailers.
          </p>
        </Reveal>
        <div className="relative mx-auto mt-16 flex max-w-2xl flex-wrap justify-center gap-x-24 gap-y-10">
          <DotGrid className="absolute -left-24 top-0 hidden md:block" cols={4} rows={4} />
          {rest.map((s, i) => (
            <Reveal key={s.value} delay={i * 120}>
              <p className="font-display text-6xl font-light tracking-tight">{s.value}</p>
              <p className="mt-2 text-xs text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  title,
  body,
  link,
  className,
  tone,
  children,
}: {
  title: string;
  body: string;
  link: { label: string; to: string };
  className?: string;
  tone: "ink" | "pink" | "ivory" | "lavender";
  children?: React.ReactNode;
}) {
  const toneClass = {
    ink: "wash-ink-card",
    pink: "wash-pink-card",
    ivory: "bg-ivory border border-surface",
    lavender: "wash-lavender-card",
  }[tone];
  return (
    <article className={cn("group relative flex flex-col overflow-hidden rounded-[2rem] shadow-soft transition-shadow hover:shadow-card", toneClass, className)}>
      <div className="relative z-10 p-7 md:p-8">
        <h3 className={cn("display-sm", tone === "ink" && "md:text-[2.25rem]")}>{title}</h3>
        <p className={cn("mt-3 max-w-sm text-[0.85rem] leading-relaxed", tone === "ink" ? "text-ink-muted" : "text-muted-foreground")}>{body}</p>
        <ArrowLink to={link.to} tone="pink" className="mt-5 text-[0.78rem]">
          {link.label}
        </ArrowLink>
      </div>
      {children}
    </article>
  );
}

export function PlatformBento() {
  return (
    <section className="relative overflow-hidden bg-background section-pad">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-96 grid-lines" />
      <div className="container-site relative">
        <div className="grid gap-8 md:grid-cols-2">
          <Reveal className="relative">
            <div aria-hidden="true" className="absolute -left-5 top-1 h-20 w-20 rounded-full bg-primary/55" />
            <h2 className="display-lg relative max-w-md">One platform. Every stage of the buying journey.</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-muted-foreground md:pt-3">Find the right product. See it in the room. Buy it.</p>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-[1.1fr_1fr_1fr] md:grid-rows-[auto_auto]">
          <Reveal className="md:row-span-2">
            <BentoCard
              tone="ink"
              className="h-full min-h-[34rem] justify-between"
              title="AI Shopping Assistant"
              body="Guides each shopper from a big catalog to the right product, then hands off to the Visualizer. Shopper Insights shows you what they asked for that you don't stock."
              link={{ label: "Explore AI Assistant", to: "/product/ai-shopping-assistant" }}
            >
              <div className="relative mx-6 mb-6 mt-auto overflow-hidden rounded-2xl">
                <img src={assistantRoom} alt="Living room recommended by the assistant" className="aspect-[4/3] w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-surface/95 p-3 text-[0.72rem] text-foreground shadow-soft">
                  <span className="font-semibold">Assistant:</span> These three rugs suit your oak floor and linen sofa.
                </div>
              </div>
            </BentoCard>
          </Reveal>
          <Reveal delay={80}>
            <BentoCard
              tone="pink"
              className="h-full"
              title="Room Visualizer"
              body="Let shoppers place, style, and swap products in their actual room. No app, no friction."
              link={{ label: "Explore Visualizer", to: "/product/visualizer" }}
            >
              <img src={rugLiving} alt="Rug placed in a shopper's living room" className="mt-auto aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </BentoCard>
          </Reveal>
          <Reveal delay={160}>
            <BentoCard
              tone="ivory"
              className="h-full"
              title="AI 3D Creator"
              body="Turns your product photos into 3D models, with no 3D studio or scanning."
              link={{ label: "Explore 3D Creator", to: "/features/ai-3d-creator" }}
            >
              <div className="mx-7 mt-auto overflow-hidden rounded-t-2xl bg-surface">
                <img src={armchair} alt="Tan velvet swivel armchair shown as a 3D model" className="mx-auto aspect-square w-4/5 object-contain transition-transform duration-700 group-hover:rotate-[-4deg] group-hover:scale-105" loading="lazy" />
              </div>
            </BentoCard>
          </Reveal>
          <Reveal delay={120} className="md:col-span-2">
            <BentoCard
              tone="lavender"
              className="h-full"
              title="Studio-quality images without a photoshoot"
              body="Design Studio makes silo and lifestyle images from the product photos you already have."
              link={{ label: "Explore Design Studio", to: "/product/ai-product-photography" }}
            >
              <img src={lounge} alt="Burgundy velvet sofa in a styled lounge" className="mt-auto aspect-[21/9] w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            </BentoCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
