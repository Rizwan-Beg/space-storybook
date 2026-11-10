// Shared site content: navigation, footer, social proof. Brand and customer names are original.
import {
  Armchair,
  BookOpen,
  Boxes,
  Brush,
  Camera,
  Eraser,
  FileClock,
  Frame,
  Glasses,
  Grid3x3,
  HelpCircle,
  Info,
  Layers,
  LifeBuoy,
  MessageSquareText,
  Scale,
  ScanLine,
  ShoppingBag,
  Sofa,
  Sparkles,
  SquareStack,
  Trees,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export const BRAND = {
  name: "Roomform",
  email: "hello@roomform.studio",
  city: "Melbourne",
  region: "VIC Australia",
  tagline: "Spatial commerce platform · Made in Melbourne",
};

export type NavItem = { label: string; to: string; note: string; icon: LucideIcon };
export type NavGroup = { label: string; items: NavItem[]; footer?: { label: string; to: string } };

export const featureLinks: NavItem[] = [
  { label: "AI 3D Creator", to: "/features/ai-3d-creator", note: "3D models from product photos", icon: Boxes },
  { label: "Augmented Reality", to: "/features/augmented-reality", note: "View in AR, no app", icon: Glasses },
  { label: "HD Render", to: "/features/hd-render", note: "Room designs as finished photos", icon: Camera },
  { label: "Magic Eraser", to: "/features/magic-eraser", note: "Clear old furniture first", icon: Eraser },
  { label: "Shopify App", to: "/features/shopify", note: "Native app, synced catalog", icon: ShoppingBag },
  { label: "Spatial AI", to: "/features/spatial-ai", note: "Reads floors, walls and scale", icon: ScanLine },
];

export const productLinks: NavItem[] = [
  { label: "Room Visualizer", to: "/product/visualizer", note: "Products in the shopper's own room", icon: SquareStack },
  { label: "AI Shopping Assistant", to: "/product/ai-shopping-assistant", note: "Guides shoppers to the right piece", icon: MessageSquareText },
  { label: "Design Studio", to: "/product/ai-product-photography", note: "Studio images without a shoot", icon: Sparkles },
];

export const solutionLinks: NavItem[] = [
  { label: "Rugs", to: "/solutions/rugs", note: "Under the furniture, true size", icon: Grid3x3 },
  { label: "Furniture", to: "/solutions/furniture", note: "Sofas, chairs and tables in 3D", icon: Sofa },
  { label: "Flooring", to: "/solutions/flooring", note: "Whole-floor timber and tile swaps", icon: Layers },
  { label: "Wallpaper", to: "/solutions/wallpaper", note: "Pattern scale on the real wall", icon: Brush },
  { label: "Wall Art", to: "/solutions/wall-art", note: "Framed art at its real size", icon: Frame },
  { label: "Outdoor Furniture", to: "/solutions/outdoor-furniture", note: "Terraces, decks and gardens", icon: Trees },
];

export const resourceLinks: NavItem[] = [
  { label: "Blog", to: "/blog", note: "Guides for home retailers", icon: BookOpen },
  { label: "Case Studies", to: "/case-studies", note: "How retailers use Roomform", icon: Armchair },
  { label: "Help Center", to: "/help", note: "Answers for merchants", icon: LifeBuoy },
  { label: "Changelog", to: "/changelog", note: "What's new in the platform", icon: FileClock },
  { label: "Glossary", to: "/glossary", note: "Spatial commerce terms", icon: HelpCircle },
  { label: "How it works", to: "/how-it-works", note: "From one photo to checkout", icon: Workflow },
  { label: "Compare", to: "/compare", note: "Roomform side by side", icon: Scale },
  { label: "About", to: "/about", note: "Who we are", icon: Info },
];

export const navGroups: NavGroup[] = [
  { label: "Features", items: featureLinks, footer: { label: "All features", to: "/features" } },
  { label: "Products", items: productLinks, footer: { label: "Platform overview", to: "/product" } },
  { label: "Solutions", items: solutionLinks, footer: { label: "All solutions", to: "/solutions" } },
  { label: "Resources", items: resourceLinks },
];

export const footerColumns: { title: string; links: { label: string; to: string }[] }[] = [
  { title: "Roomform", links: [{ label: "Pricing", to: "/pricing" }, { label: "Contact", to: "/contact" }, { label: "Live demo", to: "/demo" }] },
  { title: "Features", links: featureLinks.map(({ label, to }) => ({ label, to })) },
  { title: "Solutions", links: solutionLinks.map(({ label, to }) => ({ label, to })) },
  { title: "Products", links: productLinks.map(({ label, to }) => ({ label, to })) },
  {
    title: "Resources",
    links: [
      { label: "Blog", to: "/blog" },
      { label: "Case Studies", to: "/case-studies" },
      { label: "Help Center", to: "/help" },
      { label: "Changelog / What's new", to: "/changelog" },
      { label: "Glossary", to: "/glossary" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "How it works", to: "/how-it-works" },
      { label: "Compare", to: "/compare" },
    ],
  },
];

export const clientLogos = [
  { name: "Hearth & Weft", style: "serif" },
  { name: "ATLAS RUG CO.", style: "wide" },
  { name: "Juniper Walls", style: "script" },
  { name: "MAISON ONDINE", style: "thin" },
  { name: "Kilim House", style: "serif" },
  { name: "NORTHBOUND", style: "bold" },
  { name: "Sorrel & Oak", style: "script" },
  { name: "FERNWOOD", style: "wide" },
  { name: "Tidal Living", style: "thin" },
  { name: "OSTARA HOME", style: "bold" },
] as const;

export type Testimonial = { quote: string; name: string; role: string; company: string };

export const testimonials: Testimonial[] = [
  {
    quote:
      "The team answers faster than any app developer we've worked with. They feel like part of our business, not just a plugin on our store.",
    name: "Daniel Okafor",
    role: "Owner",
    company: "Atlas Rug Co.",
  },
  {
    quote: "Roomform changed how we present our range online. Shoppers finally understand the size of what they're buying.",
    name: "Priya Raman",
    role: "Head of Ecommerce",
    company: "Northbound",
  },
  {
    quote:
      "They shaped the visualizer around our storefront and our customers, and it slotted into the site without a single hiccup. Setup took days, not months.",
    name: "Sofia Marchetti",
    role: "Owner",
    company: "Maison Ondine",
  },
  {
    quote:
      "We tested several visualizers before choosing Roomform. The images are crisp, the rugs sit properly under the furniture, and the pricing made the decision easy.",
    name: "Liam Hartley",
    role: "Director",
    company: "Kilim House",
  },
  {
    quote:
      "Integrating with our Shopify store was painless. We were live in under two weeks and the response from customers has been brilliant.",
    name: "Grace Whitfield",
    role: "Founder",
    company: "Sorrel & Oak",
  },
  {
    quote: "Easy to use, looks beautiful on mobile and the support is genuinely excellent.",
    name: "Tom Achterberg",
    role: "Owner",
    company: "Tidal Living",
  },
];

export const proofBadges = ["Live within 2 weeks", "5.0 stars on the Shopify App Store", "No app for shoppers"];

export const stats = [
  { value: "5+ min", label: "Average Visualizer session across retailers" },
  { value: "2 in 3", label: "Shoppers who use a photo of their own room" },
  { value: "5.0", label: "Star rating on the Shopify App Store" },
];

