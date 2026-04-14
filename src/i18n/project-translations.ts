import type { Project } from "@/data/projects";

type TranslatableProject = Omit<Project, "slug" | "thumbnail" | "heroImage" | "liveUrl" | "tag"> & { tag?: string | string[] };

// Deep partial — every field is optional for overrides
type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };

type ProjectOverride = DeepPartial<TranslatableProject>;

export const projectTranslations: Record<string, { en: ProjectOverride; pl: ProjectOverride }> = {
  lisek: {
    en: {
      subtitle: "End-to-end redesign of a q-commerce app that has surpassed 5 million orders.",
      description: "Redesigned Lisek\u2019s app end to end \u2014 from home feed and search to product pages, cart, and checkout \u2014 lifting order frequency, retention, and average order value across iOS, Android, and web.",
      tag: ["Mobile App", "Web App"],
      meta: "Lisek  \u00b7  Q-Commerce  \u00b7  2026  \u00b7  Product Design",
      role: "Product Designer",
      services: "Product Design, UI, UX, User Research, Competitive Analysis",
      problemStatement:
        "Most users ordered sporadically \u2014 1.4x/month. No loyalty mechanism. Price decided, not brand relationship.",
      problemMetrics: "Order frequency: 1.4/mo  \u00b7  60d churn: 41%",
      designQuestion:
        "Reward frequency, not basket value.",
      userQuote: {
        text: "I have Zabka, Biedronka, Lidl apps \u2014 points everywhere that I never spend. I just want to pay less for what I buy regularly.",
        author: "Kasia, 28, switched from Lisek to Zabka",
      },
      researchMethods: [
        "10 user interviews (heavy shoppers + churned)",
        "Cohort analysis \u2014 what separates 4+/mo users",
        "Benchmark of 6 loyalty programs",
      ],
      researchInsights: [
        { text: "Users ignore 'collect points' \u2014 rewards too distant", stat: "8/10" },
        { text: "Free delivery beats percentage discounts", stat: "#1" },
        { text: "Streak programs have 2x higher engagement than points", stat: "2x" },
      ],
      iterations: [
        {
          version: "V1",
          title: "Classic points program",
          description: "1 PLN = 1 point. Rewards catalog. Familiar, but 12% engagement \u2014 users said 'another program I won't use'.",
          wins: [],
          fails: [],
        },
        {
          version: "V2",
          title: "Streak-based",
          description: "Order 3x/week \u2192 free delivery next week. 3x engagement vs V1, but weekly cycle too rigid. Breaking streak = frustration.",
          wins: [],
          fails: [],
        },
        {
          version: "V3",
          title: "Hybrid \u2014 Streak + Tiers + Instant Rewards",
          description: "Flexible weekly streak + tier system + instant perks after every order. Streak recovery instead of punishment.",
          wins: [],
          fails: [],
        },
      ],
      process: [],
      solutions: [
        {
          image: "/assets/images/lisek-design-system.webp",
          alt: "Lisek design system \u2014 global color tokens and color palette",
          caption: "Design system foundations \u2014 global color tokens ensuring consistency across the entire product",
        },
        {
          image: "/assets/images/lisek-typography.webp",
          alt: "Lisek design system \u2014 typography and font styles",
          caption: "Typography system \u2014 Inter font with consistent sizing across all platforms",
        },
        {
          image: "/assets/images/lisek-components.webp",
          alt: "Lisek design system \u2014 component states and variants",
          caption: "Component library \u2014 all states, sizes, and variants documented in Figma",
        },
      ],
      results: [
        { icon: "\ud83d\udcc8", label: "Order frequency", value: "+64%" },
        { icon: "\ud83d\udcc9", label: "60d churn", value: "-12pp" },
        { icon: "\ud83d\udcb0", label: "AOV", value: "+8%" },
      ],
      learnings: [
        { text: "Reward frequency, not basket value. Streaks beat points in q-commerce." },
        { text: "Instant gratification wins. Free juice now > 500 points redeemed later." },
        { text: "Never punish a broken streak. 'Second life' turned frustration into gratitude." },
      ],
      resultsNote: undefined,
    },
    pl: {
      subtitle: "Kompleksowy redesign aplikacji q-commerce, kt\u00f3ra przekroczy\u0142a 5 milion\u00f3w zam\u00f3wie\u0144.",
      description: "Przeprojektowanie aplikacji Liska od pocz\u0105tku do ko\u0144ca \u2014 od home feedu i wyszukiwarki po karty produkt\u00f3w, koszyk i checkout \u2014 podnosz\u0105c cz\u0119stotliwo\u015b\u0107 zam\u00f3wie\u0144, retencj\u0119 i \u015bredni\u0105 warto\u015b\u0107 koszyka na iOS, Android i web.",
      tag: ["Aplikacja mobilna", "Aplikacja webowa"],
      meta: "Lisek  \u00b7  Q-Commerce  \u00b7  2026  \u00b7  Product Design",
      role: "Product Designer",
      services: "Product Design, UI, UX, User Research, Competitive Analysis",
      problemStatement:
        "Wi\u0119kszo\u015b\u0107 u\u017cytkownik\u00f3w zamawia\u0142a sporadycznie \u2014 1.4x/mies. Brak mechanizmu lojalno\u015bciowego. Decydowa\u0142a cena, nie relacja z mark\u0105.",
      problemMetrics: "Cz\u0119stotliwo\u015b\u0107: 1.4/mies.  \u00b7  Churn 60d: 41%",
      designQuestion:
        "Nagradzaj cz\u0119stotliwo\u015b\u0107, nie warto\u015b\u0107 koszyka.",
      userQuote: {
        text: "Mam apk\u0119 \u017babki, Biedronki, Lidla \u2014 wsz\u0119dzie jakie\u015b punkty, kt\u00f3rych nigdy nie wydaj\u0119. Chc\u0119 po prostu p\u0142aci\u0107 mniej za to, co kupuj\u0119 regularnie.",
        author: "Kasia, 28 lat, przesz\u0142a z Liska na \u017babk\u0119",
      },
      researchMethods: [
        "10 wywiad\u00f3w z u\u017cytkownikami (heavy shoppers + churned)",
        "Analiza kohortowa \u2014 co odr\u00f3\u017cnia u\u017cytkownik\u00f3w 4+/mies.",
        "Benchmark 6 program\u00f3w lojalno\u015bciowych",
      ],
      researchInsights: [
        { text: "U\u017cytkownicy ignoruj\u0105 'zbieraj punkty' \u2014 nagrody zbyt odleg\u0142e", stat: "8/10" },
        { text: "Darmowa dostawa bije rabaty procentowe", stat: "#1" },
        { text: "Programy ze strekami maj\u0105 2x wy\u017cszy engagement", stat: "2x" },
      ],
      iterations: [
        {
          version: "V1",
          title: "Klasyczny program punktowy",
          description: "1 z\u0142 = 1 punkt. Katalog nagr\u00f3d. 12% engagement \u2014 'kolejny program, kt\u00f3rego nie b\u0119d\u0119 u\u017cywa\u0107'.",
          wins: [],
          fails: [],
        },
        {
          version: "V2",
          title: "Streak-based",
          description: "Zam\u00f3w 3x/tydzie\u0144 \u2192 darmowa dostawa. 3x engagement vs V1, ale tygodniowy cykl za sztywny.",
          wins: [],
          fails: [],
        },
        {
          version: "V3",
          title: "Hybrid \u2014 Streak + Tiers + Instant Rewards",
          description: "Elastyczny streak + system tier\u00f3w + natychmiastowe nagrody po ka\u017cdym zam\u00f3wieniu. Recovery zamiast kary.",
          wins: [],
          fails: [],
        },
      ],
      process: [],
      solutions: [
        {
          image: "/assets/images/lisek-design-system.webp",
          alt: "Design system Liska \u2014 globalne tokeny kolor\u00f3w i paleta",
          caption: "Fundamenty design systemu \u2014 globalne tokeny kolor\u00f3w zapewniaj\u0105ce sp\u00f3jno\u015b\u0107 w ca\u0142ym produkcie",
        },
        {
          image: "/assets/images/lisek-screen.webp",
          alt: "Aplikacja Lisek \u2014 przeprojektowane ekrany",
          caption: "Przeprojektowane kluczowe ekrany \u2014 czystsza hierarchia, sp\u00f3jne wzorce",
        },
        {
          image: "/assets/images/lisek-hero.webp",
          alt: "Aplikacja Lisek \u2014 nowy home feed",
          caption: "Nowy home feed \u2014 spersonalizowany, czytelny, nastawiony na konwersj\u0119",
        },
      ],
      results: [
        { icon: "\ud83d\udcc8", label: "Cz\u0119stotliwo\u015b\u0107 zam\u00f3wie\u0144", value: "+64%" },
        { icon: "\ud83d\udcc9", label: "Churn 60d", value: "-12pp" },
        { icon: "\ud83d\udcb0", label: "AOV", value: "+8%" },
      ],
      learnings: [
        { text: "Nagradzaj cz\u0119stotliwo\u015b\u0107, nie kwot\u0119. Streki bij\u0105 punkty w q-commerce." },
        { text: "Natychmiastowa gratyfikacja wygrywa. Darmowy sok teraz > 500 punkt\u00f3w p\u00f3\u017aniej." },
        { text: "Nigdy nie karz za przerwany streak. 'Drugie \u017cycie' zamieni\u0142o frustracj\u0119 w wdzi\u0119czno\u015b\u0107." },
      ],
      resultsNote: "Dane po 8 tygodniach soft launch na 15% bazy.",
      scope: [
        {
          title: "Kompleksowy redesign aplikacji",
          description: "Przeprojektowanie kluczowych ekranów — home, wyszukiwarka, karta produktu, koszyk i checkout — poprawa użyteczności i spójności wizualnej.",
        },
        {
          title: "Badania użytkowników i testy",
          description: "10 wywiadów z heavy shopperami i churned users, analiza kohortowa oraz benchmark 6 konkurencyjnych programów lojalnościowych — każda decyzja poparta danymi.",
        },
        {
          title: "Fundamenty design systemu",
          description: "Stworzenie biblioteki komponentów i design tokenów, skracając czas hand-offu design→dev i zapewniając spójność między zespołami.",
        },
        {
          title: "Decyzje oparte na danych",
          description: "Współpraca z zespołem analitycznym — definicja KPI, analiza kohortowa i walidacja każdej iteracji na realnych danych przed skalowaniem.",
        },
      ],
      beforeAfter: {
        before: "/assets/images/lisek-before.webp",
        after: "/assets/images/lisek-after.webp",
        alt: "Aplikacja Lisek przed i po redesignie",
      },
    },
  },

  playmaker: {
    en: {
      title: "Playmaker.pro",
      subtitle: "+38% User Engagement After Full Redesign.",
      description: "Complete redesign of a virtual transfer market for football players — from legacy platform to a modern product connecting players, clubs and agents.",
      tag: "Web App",
      role: "Product Designer",
      services: "Wireframes, UX Research, UX Design, UI Design",
      problemStatement:
        "Playmaker operated on a legacy platform that looked and felt like 2015. Player profiles lacked key stats and performance data, making it hard for clubs to evaluate talent. No filtering, no comparison tools, no trust signals — scouts had to rely on gut feeling instead of data. Mobile experience was nonexistent, and user engagement was dropping quarter over quarter.",
      problemMetrics: "Bounce rate: 68%  ·  Avg. session: 1.8 min  ·  Profile completion: 34%",
      designQuestion:
        "How do we turn an outdated listing board into a data-driven transfer market that both players and clubs actually trust?",
      researchInsights: [
        { text: "Scouts leave within 90 seconds if a player profile has no video or stats — they need data to justify decisions to their board.", stat: "No player stats" },
        { text: "Profile completion sits at 34% — the registration form is too complex and feels like bureaucracy. Players abandon it before showcasing their real potential.", stat: "Complex registration" },
        { text: "Contact limited to email or phone only — no in-app messaging, no contact forms. Reaching clubs, players or scouts meant leaving the platform entirely.", stat: "No direct contact" },
      ],
      process: [
        { label: "Discovery", text: "Competitive audit + 8 interviews with players, scouts and agents" },
        { label: "Insight", text: "Both sides want data and trust signals — not just a listing board" },
        { label: "Iteration", text: "Tested profile-first vs. feed-first information architecture" },
        { label: "Decision", text: "Profile-first approach with rich data won — scouts need depth, not volume" },
      ],
      solutions: [
        { image: "/assets/images/playmaker-old.webp", alt: "Playmaker wireframes — early-stage layout exploration", caption: "Early wireframes — mapping out the information architecture and core user flows before visual design." },
        { image: "/assets/images/project-playmaker.webp", alt: "Profile builder", caption: "Profile builder — skills-first approach for better matches" },
        { image: "/assets/images/project-playmaker.webp", alt: "Quick apply", caption: "Quick apply — 1-tap application with saved profile data" },
      ],
      results: [
        { icon: "📈", label: "User engagement", value: "+38%" },
        { icon: "📋", label: "Profile completion", value: "34% → 71%" },
        { icon: "⏱️", label: "Avg. session time", value: "1.8 → 4.2 min" },
      ],
      testimonial: {
        quote: "The redesign completely changed how players and clubs interact on our platform. We finally have a product people trust.",
        author: "Playmaker Team",
        role: "Playmaker.pro",
      },
    },
    pl: {
      title: "Playmaker.pro",
      subtitle: "+38% User Engagement po pełnym redesignie.",
      description: "Kompletny redesign wirtualnego rynku transferowego dla piłkarzy — od przestarzałej platformy do nowoczesnego produktu łączącego zawodników, kluby i agentów.",
      tag: "Aplikacja webowa",
      role: "Product Designer",
      services: "Wireframes, UX Research, UX Design, UI Design",
      problemStatement:
        "Playmaker działał na przestarzałej platformie rodem z 2015 roku. Profile zawodników nie miały kluczowych statystyk i danych o wydajności, co utrudniało klubom ocenę talentu. Brak filtrowania, narzędzi porównawczych i sygnałów zaufania — skauci musieli polegać na intuicji zamiast na danych. Brak wersji mobilnej, a zaangażowanie użytkowników spadało kwartał do kwartału.",
      problemMetrics: "Bounce rate: 68%  ·  Śr. sesja: 1.8 min  ·  Wypełnienie profilu: 34%",
      designQuestion:
        "Jak zmienić przestarzałą tablicę ogłoszeń w oparty na danych rynek transferowy, któremu ufają zarówno zawodnicy, jak i kluby?",
      researchInsights: [
        { text: "Skauci opuszczają profil w ciągu 90 sekund, jeśli nie ma wideo ani statystyk — potrzebują danych, żeby uzasadnić decyzję przed zarządem.", stat: "Brak statystyk" },
        { text: "Wypełnienie profilu na poziomie 34% — formularz rejestracji jest zbyt skomplikowany i wygląda jak biurokracja. Zawodnicy porzucają go, zanim pokażą swój prawdziwy potencjał.", stat: "Skomplikowana rejestracja" },
        { text: "Kontakt ograniczony do maila lub telefonu — brak wiadomości w aplikacji, brak formularzy kontaktowych. Dotarcie do klubów, zawodników czy skautów wymagało opuszczenia platformy.", stat: "Brak kontaktu" },
      ],
      process: [
        { label: "Discovery", text: "Audyt konkurencji + 8 wywiadów z zawodnikami, skautami i agentami" },
        { label: "Insight", text: "Obie strony chcą danych i sygnałów zaufania — nie kolejnej tablicy ogłoszeń" },
        { label: "Iteracja", text: "Testowanie architektury profile-first vs feed-first" },
        { label: "Decyzja", text: "Profile-first z bogatymi danymi wygrało — skauci potrzebują głębi, nie ilości" },
      ],
      solutions: [
        { image: "/assets/images/playmaker-old.webp", alt: "Wireframes Playmaker — wczesna eksploracja layoutu", caption: "Wczesne wireframes — mapowanie architektury informacji i kluczowych user flows przed visual designem." },
        { image: "/assets/images/project-playmaker.webp", alt: "Kreator profilu", caption: "Kreator profilu — podejście skills-first dla lepszych dopasowań" },
        { image: "/assets/images/project-playmaker.webp", alt: "Szybka aplikacja", caption: "Szybka aplikacja — 1 tap z zapisanymi danymi profilu" },
      ],
      results: [
        { icon: "📈", label: "Zaangażowanie", value: "+38%" },
        { icon: "📋", label: "Wypełnienie profilu", value: "34% → 71%" },
        { icon: "⏱️", label: "Śr. czas sesji", value: "1.8 → 4.2 min" },
      ],
      testimonial: {
        quote: "Redesign kompletnie zmienił sposób, w jaki zawodnicy i kluby korzystają z naszej platformy. W końcu mamy produkt, któremu ludzie ufają.",
        author: "Zespół Playmaker",
        role: "Playmaker.pro",
      },
    },
  },

  wishdrop: {
    en: {
      subtitle: "Collaborative wishlist & gifting platform",
      description: "A social wishlist platform that makes gifting effortless",
      tag: "Mobile Design",
      role: "Product Designer",
      services: "Mobile Design, Product Design",
      problemStatement:
        "Gift-giving is stressful \u2014 people buy things recipients don\u2019t want. Existing wishlists are scattered across platforms and hard to share.",
      designQuestion:
        "How to make wishlists social and effortless to share?",
      process: [
        { label: "Discovery", text: "Survey of 120 users on gifting habits + competitive analysis" },
        { label: "Insight", text: "People want to hint at gifts without being direct \u2014 subtlety matters" },
        { label: "Iteration", text: "Tested public wishlist vs private hints to close friends" },
        { label: "Decision", text: "Hybrid approach \u2014 public lists + private \u2018nudge\u2019 feature" },
      ],
      solutions: [
        { image: "/assets/images/project-wishdrop.webp", alt: "Wishlist creation", caption: "Wishlist creation \u2014 add from any store with browser extension" },
        { image: "/assets/images/project-wishdrop.webp", alt: "Social sharing", caption: "Social sharing \u2014 share lists with friends or drop hints" },
        { image: "/assets/images/project-wishdrop.webp", alt: "Gift coordination", caption: "Gift coordination \u2014 group gifting without spoiling the surprise" },
      ],
      results: [
        { icon: "\ud83d\udcc8", label: "User signups (month 1)", value: "2.4k" },
        { icon: "\ud83c\udf81", label: "Wishes created", value: "12k+" },
        { icon: "\ud83d\udcac", label: "Shares per list", value: "3.2 avg" },
      ],
      resultsNote: "Preliminary data from 6 weeks after MVP launch.",
    },
    pl: {
      subtitle: "Wsp\u00f3\u0142dzielona lista \u017cycze\u0144 i platforma prezentowa",
      description: "Spo\u0142eczna platforma list \u017cycze\u0144, kt\u00f3ra u\u0142atwia dawanie prezent\u00f3w",
      tag: "Mobile Design",
      role: "Product Designer",
      services: "Mobile Design, Product Design",
      problemStatement:
        "Dawanie prezent\u00f3w jest stresuj\u0105ce \u2014 ludzie kupuj\u0105 rzeczy, kt\u00f3rych odbiorcy nie chc\u0105. Istniej\u0105ce listy \u017cycze\u0144 s\u0105 rozproszone po platformach i trudne do udost\u0119pnienia.",
      designQuestion:
        "Jak sprawi\u0107, \u017ceby listy \u017cycze\u0144 by\u0142y spo\u0142eczne i \u0142atwe do udost\u0119pnienia?",
      process: [
        { label: "Discovery", text: "Ankieta 120 u\u017cytkownik\u00f3w o zwyczajach prezentowych + analiza konkurencji" },
        { label: "Insight", text: "Ludzie chc\u0105 sugerowa\u0107 prezenty bez bycia bezpo\u015brednimi \u2014 subtelno\u015b\u0107 ma znaczenie" },
        { label: "Iteracja", text: "Testowanie publicznej listy vs prywatnych podpowiedzi dla bliskich" },
        { label: "Decyzja", text: "Podej\u015bcie hybrydowe \u2014 publiczne listy + prywatna funkcja \u2018nudge\u2019" },
      ],
      solutions: [
        { image: "/assets/images/project-wishdrop.webp", alt: "Tworzenie listy", caption: "Tworzenie listy \u2014 dodawanie z dowolnego sklepu przez rozszerzenie przegl\u0105darki" },
        { image: "/assets/images/project-wishdrop.webp", alt: "Udost\u0119pnianie", caption: "Udost\u0119pnianie \u2014 dzielenie si\u0119 listami z przyjaci\u00f3\u0142mi lub podsuwanie pomys\u0142\u00f3w" },
        { image: "/assets/images/project-wishdrop.webp", alt: "Koordynacja prezent\u00f3w", caption: "Koordynacja prezent\u00f3w \u2014 grupowe kupowanie bez psowania niespodzianki" },
      ],
      results: [
        { icon: "\ud83d\udcc8", label: "Rejestracje (miesi\u0105c 1)", value: "2.4k" },
        { icon: "\ud83c\udf81", label: "Utworzone \u017cyczenia", value: "12k+" },
        { icon: "\ud83d\udcac", label: "Udost\u0119pnienia na list\u0119", value: "\u015br. 3.2" },
      ],
      resultsNote: "Wst\u0119pne dane po 6 tygodniach od launchu MVP.",
    },
  },

  topdraw: {
    en: {
      subtitle: "Collectible card marketplace for TCG community",
      description: "Marketplace for buying, selling and trading collectible cards with real-time pricing and community features.",
      tag: "Web App",
      role: "Product Designer",
      services: "Product Design, Web Design",
      platform: "Web",
      problemStatement:
        "TCG collectors lack a trusted, dedicated marketplace. Existing options are fragmented across forums, social media and general platforms like eBay.",
      designQuestion:
        "Build a marketplace collectors actually trust.",
      solutions: [
        { image: "/assets/images/topdraw_cover.webp", alt: "Card marketplace homepage", caption: "Homepage with search, browse sets, and fresh listings" },
        { image: "/assets/images/topdraw_cover.webp", alt: "Card detail page", caption: "Card detail with price history, listings, and condition grades" },
      ],
      results: [
        { icon: "\ud83c\udccf", label: "Cards listed", value: "2.4k+" },
        { icon: "\ud83d\udc65", label: "Active sellers", value: "180+" },
        { icon: "\u26a1", label: "Avg. listing time", value: "<30s" },
      ],
      resultsNote: "Early metrics from beta launch.",
    },
    pl: {
      subtitle: "Marketplace kart kolekcjonerskich dla spo\u0142eczno\u015bci TCG",
      description: "Marketplace do kupowania, sprzedawania i wymiany kart kolekcjonerskich z cenami w czasie rzeczywistym i funkcjami spo\u0142eczno\u015bciowymi.",
      tag: "Aplikacja webowa",
      role: "Product Designer",
      services: "Product Design, Web Design",
      platform: "Web",
      problemStatement:
        "Kolekcjonerzy kart TCG nie maj\u0105 zaufanego, dedykowanego marketplace\u2019u. Istniej\u0105ce opcje s\u0105 rozproszone po forach, social mediach i og\u00f3lnych platformach jak eBay.",
      designQuestion:
        "Zbudowa\u0107 marketplace, kt\u00f3remu kolekcjonerzy naprawd\u0119 ufaj\u0105.",
      solutions: [
        { image: "/assets/images/topdraw_cover.webp", alt: "Strona g\u0142\u00f3wna marketplace", caption: "Strona g\u0142\u00f3wna z wyszukiwark\u0105, przegl\u0105daniem set\u00f3w i nowymi ofertami" },
        { image: "/assets/images/topdraw_cover.webp", alt: "Strona karty", caption: "Szczeg\u00f3\u0142y karty z histori\u0105 cen, ofertami i ocen\u0105 stanu" },
      ],
      results: [
        { icon: "\ud83c\udccf", label: "Wystawione karty", value: "2.4k+" },
        { icon: "\ud83d\udc65", label: "Aktywni sprzedawcy", value: "180+" },
        { icon: "\u26a1", label: "\u015ar. czas wystawienia", value: "<30s" },
      ],
      resultsNote: "Wst\u0119pne dane z fazy beta.",
    },
  },

  "lisek-loyalty": {
    en: {
      subtitle: "Loyalty Program \u2014 Streak + Tiers + Instant Rewards",
      description: "Streak-based loyalty system for Poland\u2019s leading q-commerce app with 5M+ orders. Order frequency up 64%.",
      tag: "Mobile App",
      role: "Product Designer",
      services: "Product Design, Loyalty System Design",
      platform: "iOS & Android",
      problemStatement:
        "Lisek has 5M+ orders, but most users order sporadically \u2014 1.4x/month. No mechanism to reward regularity. Price decided, not brand relationship.",
      problemMetrics: "Frequency: 1.4/mo  \u00b7  60d churn: 41%  \u00b7  No loyalty program",
      designQuestion:
        "How to build a loyalty system that rewards purchase frequency, not just basket value?",
      userQuote: {
        text: "I have Zabka, Biedronka, Lidl apps \u2014 points everywhere that I never spend. I don\u2019t want another program, I just want to pay less for what I buy regularly.",
        author: "Kasia, 28, switched from Lisek to Zabka",
      },
      researchMethods: [
        "10 user interviews (heavy shoppers + churned users)",
        "Cohort analysis \u2014 what separates 4+/mo users from the rest",
        "Benchmark of 6 loyalty programs (Starbucks Rewards, Zappka, Biedronka, Bolt, Uber One, Amazon Fresh)",
      ],
      researchInsights: [
        { text: "Users ignore \u2018collect points\u2019 \u2014 rewards too distant", stat: "8/10" },
        { text: "Strongest motivator is free delivery, not percentage discounts", stat: "#1" },
        { text: "4+/mo users have higher AOV (+22%) \u2014 it\u2019s habit, not price", stat: "+22%" },
        { text: "Progress bar (streak) programs have 2x higher engagement than points-based", stat: "2x" },
      ],
      iterations: [
        {
          version: "V1",
          title: "Classic points program",
          description: "1 PLN = 1 point. Rewards catalog. Simple to understand, but 12% engagement \u2014 users said \u2018another program I won\u2019t use\u2019.",
          wins: ["Simple to understand"],
          fails: ["12% engagement", "Users didn\u2019t see the value"],
        },
        {
          version: "V2",
          title: "Streak-based \u2014 \u2018Your Week\u2019",
          description: "Order 3x/week \u2192 free delivery for the entire next week. Visible progress bar on home.",
          wins: ["3x higher engagement vs V1", "Rules understood in 5 seconds", "FOMO effect from progress bar"],
          fails: ["Weekly cycle too rigid", "Breaking streak causes frustration"],
        },
        {
          version: "V3",
          title: "Hybrid \u2014 Streak + Tiers + Instant Rewards",
          description: "Flexible weekly streak + tier system (Lisek \u2192 Lis \u2192 Golden Lis) + instant perks after every order. Streak recovery instead of punishment.",
          wins: ["Highest engagement", "Instant gratification", "No frustration from breaking"],
          fails: [],
        },
      ],
      solutions: [
        { image: "/assets/images/project-lisek.webp", alt: "Home with streak progress bar", caption: "Streak bar on home \u2014 always visible, in context of purchase decision. Not hidden in a tab." },
        { image: "/assets/images/project-lisek.webp", alt: "Loyalty profile with tiers", caption: "Loyalty profile \u2014 current tier, benefits, reward history. Zero unnecessary animations." },
        { image: "/assets/images/project-lisek.webp", alt: "Post-checkout reward moment", caption: "Instant reward after order \u2014 \u2018Free juice added!\u2019 Tangible, not abstract points." },
        { image: "/assets/images/project-lisek.webp", alt: "Streak recovery", caption: "Second life instead of punishment \u2014 \u2018Place an order by Friday and your streak is back\u2019. Fair play." },
      ],
      results: [
        { icon: "\ud83d\udcc8", label: "Order frequency", value: "+64%" },
        { icon: "\ud83d\udcc9", label: "60d churn", value: "-12pp" },
        { icon: "\ud83d\udcb0", label: "AOV", value: "+8%" },
        { icon: "\u2b50", label: "Program NPS", value: "47" },
      ],
      resultsNote: "Data after 8-week soft launch on 15% of user base. Full rollout in progress.",
      testimonial: {
        quote: "The loyalty program was our missing puzzle piece. Milosz designed a system that doesn\u2019t feel like another loyalty card \u2014 users say it\u2019s \u2018a game they want to play\u2019.",
        author: "Marta Wi\u015bniewska",
        role: "Head of Product, Lisek",
      },
      learnings: [
        { text: "Reward frequency, not basket value. In q-commerce, customer value is regularity. Streaks beat points." },
        { text: "Instant gratification > delayed reward. \u2018Free juice now\u2019 motivates more than \u2018redeem 500 points for 10 PLN next month\u2019." },
        { text: "Punishment for breaking is the worst pattern. \u2018Second life\u2019 instead of penalty turned frustration into gratitude." },
        { text: "Visibility > depth. Progress bar on home (not in a hidden tab) increased engagement 3x." },
      ],
    },
    pl: {},
  },

  "lisek-bazaar": {
    en: {
      subtitle: "Marketplace Expansion \u2014 From Groceries to Everything",
      description: "Non-grocery marketplace inside Poland\u2019s leading q-commerce app. New revenue stream, same delivery promise.",
      tag: "Mobile App",
      role: "Product Designer",
      services: "Product Design, Mobile Design",
      platform: "iOS & Android",
      problemStatement:
        "Lisek\u2019s revenue depended entirely on groceries. Users wanted more, competitors were expanding. No marketplace infrastructure existed in the app.",
      designQuestion:
        "Turn a grocery app into a marketplace without breaking the core experience.",
      iterations: [
        {
          version: "V1",
          title: "Categories-first browsing",
          description: "Grid of product categories as the primary entry point. Familiar e-commerce pattern adapted to Lisek\u2019s visual language.",
          wins: [],
          fails: [],
        },
        {
          version: "V2",
          title: "Order & delivery flow",
          description: "Separate delivery timelines for marketplace items. Users see grocery and non-grocery orders split clearly \u2014 no confusion.",
          wins: [],
          fails: [],
        },
      ],
      solutions: [
        { image: "/assets/images/lisek-cover.webp", alt: "Bazaar category browsing", caption: "Category grid \u2014 familiar browsing adapted to Lisek\u2019s design system" },
        { image: "/assets/images/lisek-cover.webp", alt: "Bazaar order confirmation", caption: "Split delivery view \u2014 marketplace items with separate delivery timeline" },
      ],
      results: [
        { icon: "\ud83d\uded2", label: "Categories launched", value: "20+" },
        { icon: "\ud83d\udce6", label: "New product vertical", value: "Non-grocery" },
        { icon: "\ud83d\ude80", label: "Time to market", value: "3 months" },
      ],
      resultsNote: "Launched as new tab in Lisek app.",
      learnings: [
        { text: "Marketplace inside a grocery app works \u2014 if delivery expectations are set clearly." },
        { text: "Category browsing beats search for discovery in a new vertical." },
      ],
    },
    pl: {
      subtitle: "Ekspansja Marketplace \u2014 Od Zakup\u00f3w Spo\u017cywczych do Wszystkiego",
      description: "Marketplace non-grocery wewn\u0105trz wiod\u0105cej polskiej aplikacji q-commerce. Nowe \u017ar\u00f3d\u0142o przychodu, ta sama obietnica dostawy.",
      tag: "Aplikacja mobilna",
      role: "Product Designer",
      services: "Product Design, Mobile Design",
      platform: "iOS & Android",
      problemStatement:
        "Przychody Liska zale\u017ca\u0142y wy\u0142\u0105cznie od zakup\u00f3w spo\u017cywczych. U\u017cytkownicy chcieli wi\u0119cej, konkurencja si\u0119 rozwija\u0142a. W aplikacji nie istnia\u0142a infrastruktura marketplace.",
      designQuestion:
        "Zamieni\u0107 aplikacj\u0119 spo\u017cywcz\u0105 w marketplace bez psucia g\u0142\u00f3wnego do\u015bwiadczenia.",
      iterations: [
        {
          version: "V1",
          title: "Przegl\u0105danie po kategoriach",
          description: "Siatka kategorii produkt\u00f3w jako g\u0142\u00f3wny punkt wej\u015bcia. Znany wz\u00f3r e-commerce zaadaptowany do j\u0119zyka wizualnego Liska.",
          wins: [],
          fails: [],
        },
        {
          version: "V2",
          title: "Flow zam\u00f3wienia i dostawy",
          description: "Oddzielne terminy dostawy dla produkt\u00f3w marketplace. U\u017cytkownicy widz\u0105 zam\u00f3wienia spo\u017cywcze i non-grocery rozdzielone \u2014 zero zamieszania.",
          wins: [],
          fails: [],
        },
      ],
      solutions: [
        { image: "/assets/images/lisek-cover.webp", alt: "Przegl\u0105danie kategorii Bazaar", caption: "Siatka kategorii \u2014 znajome przegl\u0105danie zaadaptowane do design systemu Liska" },
        { image: "/assets/images/lisek-cover.webp", alt: "Potwierdzenie zam\u00f3wienia Bazaar", caption: "Widok podzielonej dostawy \u2014 produkty marketplace z oddzielnym terminem dostawy" },
      ],
      results: [
        { icon: "\ud83d\uded2", label: "Uruchomione kategorie", value: "20+" },
        { icon: "\ud83d\udce6", label: "Nowa wertykala produkt\u00f3w", value: "Non-grocery" },
        { icon: "\ud83d\ude80", label: "Time to market", value: "3 miesi\u0105ce" },
      ],
      resultsNote: "Uruchomione jako nowa zak\u0142adka w aplikacji Lisek.",
      learnings: [
        { text: "Marketplace wewn\u0105trz aplikacji spo\u017cywczej dzia\u0142a \u2014 je\u015bli oczekiwania dostawcze s\u0105 jasno ustawione." },
        { text: "Przegl\u0105danie kategorii bije wyszukiwanie przy odkrywaniu nowej wertykali." },
      ],
    },
  },

};
