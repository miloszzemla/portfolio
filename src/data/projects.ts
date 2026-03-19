export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectImageRow {
  type: "single" | "double";
  images: ProjectImage[];
}

export interface ProcessStep {
  label: string;
  text: string;
}

export interface SolutionScreen {
  image: string;
  alt: string;
  caption: string;
}

export interface ResultMetric {
  icon: string;
  label: string;
  value: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  thumbnail: string;
  heroImage: string;
  meta: string;
  liveUrl?: string;
  // Problem
  problemStatement: string;
  problemMetrics?: string;
  designQuestion: string;
  // Process
  process: ProcessStep[];
  // Solution
  solutions: SolutionScreen[];
  // Results
  results: ResultMetric[];
  resultsNote?: string;
  // Testimonial
  testimonial?: Testimonial;
}

export const projects: Project[] = [
  {
    slug: "lisek",
    title: "Lisek App",
    subtitle: "Redesign doświadczenia zakupowego",
    description: "Lider polskiego rynku q-commerce z ponad 5 mln zamówień",
    tag: "Mobile App",
    thumbnail: "/assets/images/project-lisek.png",
    heroImage: "/assets/images/project-lisek.png",
    meta: "Lisek  ·  Q-Commerce  ·  2026  ·  Product Design",
    liveUrl: "#",
    problemStatement:
      "Lisek traci użytkowników po pierwszym zamówieniu. Retention 30d spada, a cart abandonment rośnie — użytkownicy nie wracają, bo powtarzalne zakupy wymagają za dużo kroków.",
    problemMetrics: "Retention 30d: 18%  ·  Cart abandonment: 67%",
    designQuestion:
      "Jak uprościć powtarzalne zakupy, żeby użytkownicy wracali?",
    process: [
      { label: "Discovery", text: "8 wywiadów z użytkownikami, analiza drop-off w funnelu zakupowym" },
      { label: "Insight", text: "Użytkownicy kupują te same produkty co tydzień, ale muszą szukać od zera" },
      { label: "Iteracja", text: "Testowałem 2 koncepty — quick reorder vs smart search" },
      { label: "Decyzja", text: "Quick reorder wygrał w testach użyteczności (CTR +32%)" },
    ],
    solutions: [
      {
        image: "/assets/images/project-lisek.png",
        alt: "Quick Reorder na home",
        caption: "Quick Reorder na home — 1 tap do ponownego zamówienia",
      },
      {
        image: "/assets/images/project-lisek.png",
        alt: "Live tracking",
        caption: "Live tracking — status dostawy widoczny cały czas",
      },
      {
        image: "/assets/images/project-lisek.png",
        alt: "Smart search",
        caption: "Smart search — historia + sugestie z AI",
      },
    ],
    results: [
      { icon: "📈", label: "Retention 30d", value: "+28%" },
      { icon: "🛒", label: "Cart abandonment", value: "-35%" },
      { icon: "⏱️", label: "Czas zamówienia", value: "90s → 55s" },
    ],
    testimonial: {
      quote:
        "Rouse zidentyfikował problem z retencją, który my widzieliśmy tylko w danych. Nowy flow realnie zmienił metryki.",
      author: "Jan Kowalski",
      role: "CPO at Lisek",
    },
  },
  {
    slug: "playmaker",
    title: "Playmaker.pro",
    subtitle: "Platform connecting talent with opportunities",
    description: "An app that matches job seekers with relevant postings",
    tag: "UX/UI Design",
    thumbnail: "/assets/images/project-playmaker.webp",
    heroImage: "/assets/images/project-playmaker.webp",
    meta: "Playmaker  ·  HR Tech  ·  2025  ·  Product Design",
    liveUrl: "#",
    problemStatement:
      "Job seekers spend hours scrolling irrelevant listings. Matching accuracy was low, leading to high bounce rates and poor engagement.",
    problemMetrics: "Avg. session: 2.1 min  ·  Match rate: 12%",
    designQuestion:
      "How might we surface the right opportunities faster to keep users engaged?",
    process: [
      { label: "Discovery", text: "Competitor audit + 6 user interviews with active job seekers" },
      { label: "Insight", text: "Users want fewer, better matches — not more listings" },
      { label: "Iteracja", text: "Tested swipe-based matching vs filtered feed" },
      { label: "Decyzja", text: "Filtered feed with smart tags won — users felt more in control" },
    ],
    solutions: [
      {
        image: "/assets/images/project-playmaker.webp",
        alt: "Smart matching feed",
        caption: "Smart matching feed — AI-powered relevance sorting",
      },
      {
        image: "/assets/images/project-playmaker.webp",
        alt: "Profile builder",
        caption: "Profile builder — skills-first approach for better matches",
      },
      {
        image: "/assets/images/project-playmaker.webp",
        alt: "Quick apply",
        caption: "Quick apply — 1-tap application with saved profile data",
      },
    ],
    results: [
      { icon: "📈", label: "Match rate", value: "+45%" },
      { icon: "⏱️", label: "Avg. session", value: "2.1 → 5.8 min" },
      { icon: "🎯", label: "Applications sent", value: "+62%" },
    ],
    testimonial: {
      quote:
        "The new matching algorithm and UX completely changed how our users interact with the platform.",
      author: "Adam Nowak",
      role: "CEO at Playmaker",
    },
  },
  {
    slug: "wishdrop",
    title: "Wishdrop",
    subtitle: "Collaborative wishlist & gifting platform",
    description: "Managing finances with tools for tracking expenses & budgeting",
    tag: "Mobile Design",
    thumbnail: "/assets/images/project-wishdrop.png",
    heroImage: "/assets/images/project-wishdrop.png",
    meta: "Wishdrop  ·  E-Commerce  ·  2025  ·  Mobile Design",
    liveUrl: "#",
    problemStatement:
      "Gift-giving is stressful — people buy things recipients don't want. Existing wishlists are scattered across platforms and hard to share.",
    designQuestion:
      "How to make wishlists social and effortless to share?",
    process: [
      { label: "Discovery", text: "Survey of 120 users on gifting habits + competitive analysis" },
      { label: "Insight", text: "People want to hint at gifts without being direct — subtlety matters" },
      { label: "Iteracja", text: "Tested public wishlist vs private hints to close friends" },
      { label: "Decyzja", text: "Hybrid approach — public lists + private 'nudge' feature" },
    ],
    solutions: [
      {
        image: "/assets/images/project-wishdrop.png",
        alt: "Wishlist creation",
        caption: "Wishlist creation — add from any store with browser extension",
      },
      {
        image: "/assets/images/project-wishdrop.png",
        alt: "Social sharing",
        caption: "Social sharing — share lists with friends or drop hints",
      },
      {
        image: "/assets/images/project-wishdrop.png",
        alt: "Gift coordination",
        caption: "Gift coordination — group gifting without spoiling the surprise",
      },
    ],
    results: [
      { icon: "📈", label: "User signups (month 1)", value: "2.4k" },
      { icon: "🎁", label: "Wishes created", value: "12k+" },
      { icon: "💬", label: "Shares per list", value: "3.2 avg" },
    ],
    resultsNote: "Wstępne dane po 6 tygodniach od launchu MVP.",
  },
  {
    slug: "olimpia",
    title: "Olimpia",
    subtitle: "Landing page redesign for conversion",
    description: "Boosting sales & engagement with landing page redesign",
    tag: "Web Design",
    thumbnail: "/assets/images/project-olimpia.webp",
    heroImage: "/assets/images/project-olimpia.webp",
    meta: "Olimpia  ·  Fitness  ·  2024  ·  Web Design",
    liveUrl: "#",
    problemStatement:
      "Olimpia's landing page had high traffic but low conversion — visitors weren't signing up for memberships.",
    problemMetrics: "Conversion rate: 1.8%  ·  Bounce rate: 72%",
    designQuestion:
      "How to turn page visitors into gym members?",
    process: [
      { label: "Discovery", text: "Heatmap analysis + A/B test audit of existing page" },
      { label: "Insight", text: "Users scrolled past pricing — CTA was buried below the fold" },
      { label: "Iteracja", text: "Tested hero-first CTA vs sticky pricing bar" },
      { label: "Decyzja", text: "Sticky pricing bar + social proof section above fold" },
    ],
    solutions: [
      {
        image: "/assets/images/project-olimpia.webp",
        alt: "New hero section",
        caption: "New hero — clear value prop with immediate CTA",
      },
      {
        image: "/assets/images/project-olimpia.webp",
        alt: "Pricing section",
        caption: "Sticky pricing bar — always visible, reduces friction",
      },
      {
        image: "/assets/images/project-olimpia.webp",
        alt: "Social proof",
        caption: "Social proof — member testimonials above the fold",
      },
    ],
    results: [
      { icon: "📈", label: "Conversion rate", value: "1.8% → 4.2%" },
      { icon: "📉", label: "Bounce rate", value: "72% → 48%" },
      { icon: "⏱️", label: "Time to CTA", value: "-60%" },
    ],
  },
  {
    slug: "roomzilla",
    title: "Roomzilla",
    subtitle: "Room booking system redesign",
    description: "An e-commerce website that sells yummy desserts online",
    tag: "Personal Project",
    thumbnail: "/assets/images/project-roomzilla.webp",
    heroImage: "/assets/images/project-roomzilla.webp",
    meta: "Roomzilla  ·  SaaS  ·  2024  ·  Web Design",
    liveUrl: "#",
    problemStatement:
      "Booking a meeting room in a large office takes too many clicks. Employees default to ad-hoc room grabs, causing conflicts.",
    designQuestion:
      "How to make room booking as fast as sending a message?",
    process: [
      { label: "Discovery", text: "Shadowed 12 employees booking rooms over 1 week" },
      { label: "Insight", text: "Most bookings are recurring — same room, same time, every week" },
      { label: "Iteracja", text: "Tested calendar-first vs map-first booking flow" },
      { label: "Decyzja", text: "Map-first with quick-repeat — visual + fast" },
    ],
    solutions: [
      {
        image: "/assets/images/project-roomzilla.webp",
        alt: "Map view",
        caption: "Map view — see available rooms at a glance",
      },
      {
        image: "/assets/images/project-roomzilla.webp",
        alt: "Quick booking",
        caption: "Quick booking — 2-tap reservation from floor plan",
      },
      {
        image: "/assets/images/project-roomzilla.webp",
        alt: "Recurring meetings",
        caption: "Recurring setup — one-time config, auto-books weekly",
      },
    ],
    results: [
      { icon: "⏱️", label: "Booking time", value: "3 min → 15s" },
      { icon: "📉", label: "Room conflicts", value: "-80%" },
      { icon: "📈", label: "Adoption rate", value: "92%" },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string): Project {
  const idx = projects.findIndex((p) => p.slug === slug);
  return projects[(idx + 1) % projects.length];
}
