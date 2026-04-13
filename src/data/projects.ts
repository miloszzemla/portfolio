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

export interface UserQuote {
  text: string;
  author: string;
}

export interface ResearchInsight {
  text: string;
  stat?: string;
}

export interface Iteration {
  version: string;
  title: string;
  description: string;
  wins: string[];
  fails: string[];
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface Learning {
  text: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string | string[];
  thumbnail: string;
  heroImage: string;
  meta: string;
  liveUrl?: string;
  // Role & Team
  role?: string;
  team?: TeamMember[];
  timeline?: string;
  platform?: string;
  services?: string;
  // Problem
  problemStatement: string;
  problemMetrics?: string;
  designQuestion: string;
  userQuote?: UserQuote;
  // Research
  researchMethods?: string[];
  researchInsights?: ResearchInsight[];
  // Iterations
  iterations?: Iteration[];
  // Process (legacy — kept for backward compat)
  process: ProcessStep[];
  // Solution
  solutions: SolutionScreen[];
  // Results
  results: ResultMetric[];
  resultsNote?: string;
  // Testimonial
  testimonial?: Testimonial;
  // Learnings
  learnings?: Learning[];
  // Scope / Accomplishments
  scope?: { title: string; description: string }[];
  // Before/After comparison
  beforeAfter?: { before: string; after: string; alt?: string };
  // Coming soon
  comingSoon?: boolean;
}

export const projects: Project[] = [
  {
    slug: "lisek",
    title: "Lisek App",
    subtitle: "Redesign of Lisek's key surfaces as the app scaled past 5M+ orders.",
    description: "Redesign of Lisek's key surfaces as the app scaled past 5M+ orders.",
    tag: ["Mobile App", "Web App"],
    thumbnail: "/assets/images/lisek_cover.webp",
    heroImage: "/assets/images/lisek_cover.webp",
    meta: "Lisek  ·  Q-Commerce  ·  2026  ·  Product Design",
    // Role & Team
    role: "Product Designer",
    team: [
      { name: "Miłosz", role: "Product Designer" },
      { name: "PM", role: "Product Manager" },
      { name: "2 devs", role: "Developers" },
      { name: "Analityk", role: "Data Analyst" },
    ],
    timeline: "~4 miesiące",
    platform: "iOS & Android",
    services: "Product Design, Loyalty System Design",
    // Problem
    problemStatement:
      "Most users ordered sporadically — 1.4x/month. No loyalty mechanism. Price decided, not brand relationship.",
    problemMetrics: "Order frequency: 1.4/mo  ·  60d churn: 41%",
    designQuestion:
      "Reward frequency, not basket value.",
    userQuote: {
      text: "I have Zabka, Biedronka, Lidl apps — points everywhere that I never spend. I just want to pay less for what I buy regularly.",
      author: "Kasia, 28, switched from Lisek to Zabka",
    },
    // Research
    researchMethods: [
      "10 user interviews (heavy shoppers + churned)",
      "Cohort analysis — what separates 4+/mo users",
      "Benchmark of 6 loyalty programs",
    ],
    researchInsights: [
      { text: "Users ignore 'collect points' — rewards too distant", stat: "8/10" },
      { text: "Free delivery beats percentage discounts", stat: "#1" },
      { text: "Streak programs have 2x higher engagement than points", stat: "2x" },
    ],
    // Iterations
    iterations: [
      {
        version: "V1",
        title: "Classic points program",
        description: "1 PLN = 1 point. Rewards catalog. Familiar, but 12% engagement — users said 'another program I won't use'.",
        wins: [],
        fails: [],
      },
      {
        version: "V2",
        title: "Streak-based",
        description: "Order 3x/week → free delivery next week. 3x engagement vs V1, but weekly cycle too rigid. Breaking streak = frustration.",
        wins: [],
        fails: [],
      },
      {
        version: "V3",
        title: "Hybrid — Streak + Tiers + Instant Rewards",
        description: "Flexible weekly streak + tier system + instant perks after every order. Streak recovery instead of punishment.",
        wins: [],
        fails: [],
      },
    ],
    // Process — empty, covered by Research + Iterations
    process: [],
    scope: [
      {
        title: "End-to-end app redesign",
        description: "Redesigned core screens — home, search, product detail, cart and checkout — improving usability and visual consistency.",
      },
      {
        title: "User research & testing",
        description: "Conducted 10 interviews with heavy shoppers and churned users, ran cohort analysis, and benchmarked 6 competing loyalty programs to validate every design decision.",
      },
      {
        title: "Design system foundations",
        description: "Created reusable component library and design tokens, reducing design-to-dev handoff time and ensuring consistency across teams.",
      },
      {
        title: "Data-informed decisions",
        description: "Worked with analytics team to define KPIs, run cohort analysis, and validate each iteration with real user data before scaling.",
      },
    ],
    beforeAfter: {
      before: "/assets/images/lisek-before.webp",
      after: "/assets/images/lisek-after.webp",
      alt: "Lisek app before and after redesign",
    },
    solutions: [
      {
        image: "/assets/images/project-lisek.png",
        alt: "Home with streak progress bar",
        caption: "Streak progress on home — always visible, in context of purchase decision",
      },
      {
        image: "/assets/images/project-lisek.png",
        alt: "Loyalty profile with tiers",
        caption: "Loyalty profile — current tier, benefits, reward history",
      },
      {
        image: "/assets/images/project-lisek.png",
        alt: "Post-checkout instant reward",
        caption: "Instant reward after checkout — tangible, not abstract points",
      },
    ],
    results: [
      { icon: "📈", label: "Częstotliwość zamówień", value: "+64%" },
      { icon: "📉", label: "Churn 60d", value: "-12pp" },
      { icon: "💰", label: "AOV", value: "+8%" },
    ],
    resultsNote: "8-week soft launch on 15% of user base.",
    learnings: [
      { text: "Reward frequency, not basket value. Streaks beat points in q-commerce." },
      { text: "Instant gratification wins. Free juice now > 500 points redeemed later." },
      { text: "Never punish a broken streak. 'Second life' turned frustration into gratitude." },
    ],
  },
  {
    slug: "lisek-loyalty",
    title: "Lisek Points",
    subtitle: "Program lojalnościowy — Streak + Tiers + Instant Rewards",
    description: "System lojalnościowy oparty na strekach dla lidera polskiego q-commerce z 5M+ zamówień. Wzrost częstotliwości zamówień o 64%.",
    tag: "Mobile App",
    thumbnail: "/assets/images/lisek_cover_misje.webp",
    heroImage: "/assets/images/lisek_cover_misje.webp",
    meta: "Lisek  ·  Q-Commerce  ·  2026  ·  Product Design",
    role: "Product Designer",
    team: [
      { name: "Miłosz", role: "Product Designer" },
      { name: "PM", role: "Product Manager" },
      { name: "2 devs", role: "Developers" },
      { name: "Analityk", role: "Data Analyst" },
    ],
    timeline: "~4 miesiące",
    platform: "iOS & Android",
    services: "Product Design, Loyalty System Design",
    problemStatement:
      "Lisek ma 5M+ zamówień, ale większość użytkowników zamawia sporadycznie — średnio 1.4 zamówienia na miesiąc. Brak mechanizmu, który nagradza regularność. Cena decyduje, nie relacja z marką.",
    problemMetrics: "Częstotliwość: 1.4/mies.  ·  Churn 60d: 41%  ·  Brak programu lojalnościowego",
    designQuestion:
      "Jak zbudować system lojalnościowy, który nagradza częstotliwość zakupów, a nie tylko wartość koszyka?",
    userQuote: {
      text: "Mam apkę Żabki, Biedronki, Lidla — wszędzie jakieś punkty, których nigdy nie wydaję. Nie chcę kolejnego programu, chcę po prostu płacić mniej za to, co kupuję regularnie.",
      author: "Kasia, 28 lat, przeszła z Liska na Żabkę",
    },
    researchMethods: [
      "10 wywiadów z użytkownikami (heavy shoppers + churned users)",
      "Analiza kohortowa — co odróżnia użytkowników 4+/mies. od reszty",
      "Benchmark 6 programów lojalnościowych (Starbucks Rewards, Żappka, Biedronka, Bolt, Uber One, Amazon Fresh)",
    ],
    researchInsights: [
      { text: "Użytkownicy nie reagują na 'zbieraj punkty' — nagrody zbyt odległe", stat: "8/10" },
      { text: "Najsilniejszy motywator to darmowa dostawa, nie rabaty procentowe", stat: "#1" },
      { text: "Użytkownicy 4+/mies. mają wyższy AOV (+22%) — to nawyk, nie cena", stat: "+22%" },
      { text: "Programy z paskiem postępu (streak) mają 2x wyższy engagement niż punktowe", stat: "2x" },
    ],
    iterations: [
      {
        version: "V1",
        title: "Klasyczny program punktowy",
        description: "1 zł = 1 punkt. Katalog nagród. Prosty do zrozumienia, ale 12% engagement — użytkownicy mówili 'kolejny program, którego nie będę używać'.",
        wins: ["Prosty do zrozumienia"],
        fails: ["12% engagement", "Użytkownicy nie widzieli wartości"],
      },
      {
        version: "V2",
        title: "Streak-based — 'Twój tydzień'",
        description: "Zamów 3x w tygodniu → darmowa dostawa na cały następny tydzień. Widoczny progress bar na home.",
        wins: ["3x wyższy engagement vs V1", "Zasady gry zrozumiałe w 5 sekund", "Efekt FOMO z paska postępu"],
        fails: ["Tygodniowy cykl za mało elastyczny", "Kara za przerwanie streaka frustruje"],
      },
      {
        version: "V3",
        title: "Hybrid — Streak + Tiers + Instant Rewards",
        description: "Elastyczny weekly streak + tier system (Lisek → Lis → Złoty Lis) + instant perks po każdym zamówieniu. Streak recovery zamiast kary.",
        wins: ["Najwyższy engagement", "Natychmiastowa gratyfikacja", "Brak frustracji z przerwania"],
        fails: [],
      },
    ],
    process: [],
    solutions: [
      {
        image: "/assets/images/project-lisek.png",
        alt: "Home z progress barem streaka",
        caption: "Pasek streaka na home — zawsze widoczny, w kontekście decyzji zakupowej. Nie ukryty w zakładce.",
      },
      {
        image: "/assets/images/project-lisek.png",
        alt: "Profil lojalnościowy z tierami",
        caption: "Profil lojalnościowy — aktualny tier, benefity, historia nagród. Zero zbędnych animacji.",
      },
      {
        image: "/assets/images/project-lisek.png",
        alt: "Moment nagrody po checkout",
        caption: "Natychmiastowa nagroda po zamówieniu — 'Darmowy sok dodany!' Namacalna, nie abstrakcyjne punkty.",
      },
      {
        image: "/assets/images/project-lisek.png",
        alt: "Streak recovery",
        caption: "Drugie życie zamiast kary — 'Złóż zamówienie do piątku i streak wraca'. Fair play.",
      },
    ],
    results: [
      { icon: "📈", label: "Częstotliwość zamówień", value: "+64%" },
      { icon: "📉", label: "Churn 60d", value: "-12pp" },
      { icon: "💰", label: "AOV", value: "+8%" },
      { icon: "⭐", label: "NPS programu", value: "47" },
    ],
    resultsNote: "Dane po 8 tygodniach soft launch na 15% bazy użytkowników. Full rollout w toku.",
    testimonial: {
      quote: "Program lojalnościowy był naszym brakującym puzzlem. Miłosz zaprojektował system, który nie czuje się jak kolejna karta lojalnościowa — użytkownicy mówią, że to 'gra, w którą chcą grać'.",
      author: "Marta Wiśniewska",
      role: "Head of Product, Lisek",
    },
    learnings: [
      { text: "Nagradzaj częstotliwość, nie kwotę. W q-commerce wartość klienta to regularność. Streak działa lepiej niż punkty." },
      { text: "Natychmiastowa gratyfikacja > odroczona nagroda. 'Darmowy sok teraz' motywuje bardziej niż '500 punktów zamień na 10 zł za miesiąc'." },
      { text: "Kara za przerwanie to najgorszy pattern. 'Drugie życie' zamiast kary zmieniło sentyment z frustracji na wdzięczność." },
      { text: "Widoczność > głębokość. Progress bar na home (nie w ukrytej zakładce) zwiększył engagement o 3x." },
    ],
  },
  {
    slug: "playmaker",
    title: "Playmaker.pro",
    subtitle: "Platform connecting talent with opportunities",
    description: "An app that matches job seekers with relevant postings",
    tag: "Web App",
    thumbnail: "/assets/images/playmaker_cover.webp",
    heroImage: "/assets/images/playmaker_cover.webp",
    meta: "Playmaker  ·  HR Tech  ·  2025  ·  Product Design",
    liveUrl: "#",
    role: "Product Designer",
    services: "UX/UI Design, Product Strategy",
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
    slug: "topdraw",
    title: "TopDraw",
    subtitle: "Collectible card marketplace for TCG community",
    description: "Marketplace for buying, selling and trading collectible cards with real-time pricing and community features.",
    tag: "Web App",
    thumbnail: "/assets/images/topdraw_cover.webp",
    heroImage: "/assets/images/topdraw_cover.webp",
    meta: "TopDraw  ·  Marketplace  ·  2026  ·  Product Design",
    comingSoon: true,
    role: "Product Designer",
    services: "Product Design, Web Design",
    platform: "Web",
    problemStatement:
      "TCG collectors lack a trusted, dedicated marketplace. Existing options are fragmented across forums, social media and general platforms like eBay.",
    designQuestion:
      "Build a marketplace collectors actually trust.",
    process: [],
    solutions: [
      {
        image: "/assets/images/topdraw_cover.webp",
        alt: "Card marketplace homepage",
        caption: "Homepage with search, browse sets, and fresh listings",
      },
      {
        image: "/assets/images/topdraw_cover.webp",
        alt: "Card detail page",
        caption: "Card detail with price history, listings, and condition grades",
      },
    ],
    results: [
      { icon: "🃏", label: "Cards listed", value: "2.4k+" },
      { icon: "👥", label: "Active sellers", value: "180+" },
      { icon: "⚡", label: "Avg. listing time", value: "<30s" },
    ],
    resultsNote: "Early metrics from beta launch.",
  },
  {
    slug: "wishdrop",
    title: "Wishdrop",
    subtitle: "Collaborative wishlist & gifting platform",
    description: "Managing finances with tools for tracking expenses & budgeting",
    tag: "Mobile Design",
    thumbnail: "",
    heroImage: "",
    meta: "Wishdrop  ·  E-Commerce  ·  2025  ·  Mobile Design",
    liveUrl: "#",
    role: "Product Designer",
    services: "Mobile Design, Product Design",
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
    thumbnail: "",
    heroImage: "",
    meta: "Olimpia  ·  Fitness  ·  2024  ·  Web Design",
    liveUrl: "#",
    role: "Web Designer",
    services: "Web Design, Conversion Optimization",
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
    thumbnail: "",
    heroImage: "",
    meta: "Roomzilla  ·  SaaS  ·  2024  ·  Web Design",
    liveUrl: "#",
    role: "Product Designer",
    services: "Product Design, Web Design",
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
  {
    slug: "lisek-bazaar",
    title: "Lisek Bazaar",
    subtitle: "Marketplace Expansion — From Groceries to Everything",
    description: "Non-grocery marketplace inside Poland's leading q-commerce app. New revenue stream, same delivery promise.",
    tag: "Mobile App",
    thumbnail: "",
    heroImage: "",
    meta: "Lisek  ·  Marketplace  ·  2026  ·  Product Design",
    role: "Product Designer",
    services: "Product Design, Mobile Design",
    platform: "iOS & Android",
    problemStatement:
      "Lisek's revenue depended entirely on groceries. Users wanted more, competitors were expanding. No marketplace infrastructure existed in the app.",
    designQuestion:
      "Turn a grocery app into a marketplace without breaking the core experience.",
    process: [],
    iterations: [
      {
        version: "V1",
        title: "Categories-first browsing",
        description: "Grid of product categories as the primary entry point. Familiar e-commerce pattern adapted to Lisek's visual language.",
        wins: [],
        fails: [],
      },
      {
        version: "V2",
        title: "Order & delivery flow",
        description: "Separate delivery timelines for marketplace items. Users see grocery and non-grocery orders split clearly — no confusion.",
        wins: [],
        fails: [],
      },
    ],
    solutions: [
      {
        image: "/assets/images/lisek-cover.png",
        alt: "Bazaar category browsing",
        caption: "Category grid — familiar browsing adapted to Lisek's design system",
      },
      {
        image: "/assets/images/lisek-cover.png",
        alt: "Bazaar order confirmation",
        caption: "Split delivery view — marketplace items with separate delivery timeline",
      },
    ],
    results: [
      { icon: "🛍️", label: "Categories launched", value: "20+" },
      { icon: "📦", label: "New product vertical", value: "Non-grocery" },
      { icon: "🚀", label: "Time to market", value: "3 months" },
    ],
    resultsNote: "Launched as new tab in Lisek app.",
    learnings: [
      { text: "Marketplace inside a grocery app works — if delivery expectations are set clearly." },
      { text: "Category browsing beats search for discovery in a new vertical." },
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

// --- i18n helpers ---
import { projectTranslations } from "@/i18n/project-translations";
import type { Language } from "@/i18n/translations";

function deepMerge<T>(base: T, override: Partial<T>): T {
  const result = { ...base } as Record<string, unknown>;
  for (const key of Object.keys(override)) {
    const val = (override as Record<string, unknown>)[key];
    if (val === undefined) continue;
    if (Array.isArray(val)) {
      result[key] = val;
    } else if (val && typeof val === "object" && !Array.isArray(val)) {
      result[key] = deepMerge(
        (base as Record<string, unknown>)[key] as object,
        val as Partial<object>
      );
    } else {
      result[key] = val;
    }
  }
  return result as T;
}

export function getTranslatedProject(project: Project, lang: Language): Project {
  const t = projectTranslations[project.slug];
  if (!t) return project;
  const override = t[lang];
  if (!override) return project;
  return deepMerge(project, override as Partial<Project>);
}

export function getTranslatedProjects(lang: Language): Project[] {
  return projects.map((p) => getTranslatedProject(p, lang));
}
