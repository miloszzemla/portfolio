import type { Project } from "@/data/projects";

type TranslatableProject = Omit<Project, "slug" | "thumbnail" | "heroImage" | "liveUrl">;

// Deep partial — every field is optional for overrides
type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };

type ProjectOverride = DeepPartial<TranslatableProject>;

export const projectTranslations: Record<string, { en: ProjectOverride; pl: ProjectOverride }> = {
  lisek: {
    en: {
      subtitle: "Shopping experience redesign",
      description: "Leader of Polish q-commerce market with over 5M orders",
      tag: "Mobile App",
      meta: "Lisek  \u00b7  Q-Commerce  \u00b7  2026  \u00b7  Product Design",
      role: "Product Designer",
      services: "Product Design, Mobile Design",
      problemStatement:
        "Lisek loses users after the first order. 30-day retention drops and cart abandonment rises \u2014 users don\u2019t come back because repeat purchases require too many steps.",
      problemMetrics: "30d Retention: 18%  \u00b7  Cart abandonment: 67%",
      designQuestion:
        "How to simplify repeat purchases so users keep coming back?",
      userQuote: {
        text: "I shop every 2\u20133 days, always the same stuff. And yet every time I have to search from scratch.",
        author: "Ania, 32, mother of two",
      },
      researchMethods: [
        "Competitive analysis \u2014 5 q-commerce apps (Jokr, Gorillas, Getir, \u017babka, Glovo)",
        "8 user interviews (heavy grocery shoppers, ages 25\u201340)",
        "Drop-off analysis in the purchase funnel + heatmaps",
      ],
      researchInsights: [
        { text: "They buy the same ~15 products on repeat", stat: "7/8" },
        { text: "Browsing categories is the biggest frustration", stat: "6/8" },
        { text: "They want real-time courier tracking", stat: "8/8" },
        { text: "They prefer a list over a catalog as entry point", stat: "5/8" },
      ],
      iterations: [
        {
          version: "V1",
          title: "Catalog-first \u2014 classic store",
          description: "Standard e-commerce flow: categories \u2192 products \u2192 cart \u2192 checkout.",
          wins: ["Familiar pattern, low barrier to entry"],
          fails: [
            "Too many taps for repeat purchases",
            "Users: \u2018it\u2019s like every other app\u2019",
          ],
        },
        {
          version: "V2",
          title: "List-first + Quick Reorder",
          description: "Entry point is a shopping list, not the catalog. Smart reorder based on history.",
          wins: [
            "Average order time: 48s (vs 90s in V1)",
            "Users: \u2018that\u2019s exactly what I needed\u2019",
          ],
          fails: ["New users without history didn\u2019t know where to start"],
        },
        {
          version: "V3",
          title: "Hybrid \u2014 smart onboarding + list-first",
          description: "New users get popular baskets as starters. Returning users see their lists.",
          wins: [
            "Solves the cold start problem",
            "Task completion rate: 93%",
            "Keeps V2 speed for returning users",
          ],
          fails: [],
        },
      ],
      process: [
        { label: "Discovery", text: "8 user interviews, drop-off analysis in purchase funnel" },
        { label: "Insight", text: "Users buy the same products every week but have to search from scratch" },
        { label: "Iteration", text: "Tested 2 concepts \u2014 quick reorder vs smart search" },
        { label: "Decision", text: "Quick reorder won in usability tests (CTR +32%)" },
      ],
      solutions: [
        {
          image: "/assets/images/project-lisek.png",
          alt: "Quick Reorder on home",
          caption: "Quick Reorder on home \u2014 1 tap to reorder",
        },
        {
          image: "/assets/images/project-lisek.png",
          alt: "Live tracking",
          caption: "Live tracking \u2014 delivery status visible at all times",
        },
        {
          image: "/assets/images/project-lisek.png",
          alt: "Smart search",
          caption: "Smart search \u2014 history + AI suggestions",
        },
      ],
      results: [
        { icon: "\ud83d\udcc8", label: "30d Retention", value: "+28%" },
        { icon: "\ud83d\uded2", label: "Cart abandonment", value: "-35%" },
        { icon: "\u23f1\ufe0f", label: "Order time", value: "90s \u2192 55s" },
      ],
      testimonial: {
        quote:
          "Rouse identified the retention problem we only saw in data. The new flow genuinely moved the metrics.",
        author: "Jan Kowalski",
        role: "CPO at Lisek",
      },
      learnings: [
        { text: "In q-commerce \u2018simple\u2019 \u2260 \u2018few features\u2019 \u2014 simple = zero decisions to make" },
        { text: "Personalization > discovery in the context of repeat purchases" },
        { text: "Cold start problem is real \u2014 popular baskets as starters solve it elegantly" },
      ],
      resultsNote: undefined,
    },
    pl: {
      subtitle: "Redesign do\u015bwiadczenia zakupowego",
      description: "Lider polskiego rynku q-commerce z ponad 5 mln zam\u00f3wie\u0144",
      tag: "Aplikacja mobilna",
      meta: "Lisek  \u00b7  Q-Commerce  \u00b7  2026  \u00b7  Product Design",
      role: "Product Designer",
      services: "Product Design, Mobile Design",
      problemStatement:
        "Lisek traci u\u017cytkownik\u00f3w po pierwszym zam\u00f3wieniu. Retention 30d spada, a cart abandonment ro\u015bnie \u2014 u\u017cytkownicy nie wracaj\u0105, bo powtarzalne zakupy wymagaj\u0105 za du\u017co krok\u00f3w.",
      problemMetrics: "Retention 30d: 18%  \u00b7  Cart abandonment: 67%",
      designQuestion:
        "Jak upro\u015bci\u0107 powtarzalne zakupy, \u017ceby u\u017cytkownicy wracali?",
      userQuote: {
        text: "Robi\u0119 zakupy co 2-3 dni, zawsze to samo. A i tak za ka\u017cdym razem musz\u0119 szuka\u0107 od zera.",
        author: "Ania, 32 lata, matka dw\u00f3jki dzieci",
      },
      researchMethods: [
        "Analiza konkurencji \u2014 5 aplikacji q-commerce (Jokr, Gorillas, Getir, \u017babka, Glovo)",
        "8 wywiad\u00f3w z u\u017cytkownikami (heavy grocery shoppers, 25-40 lat)",
        "Analiza drop-off w funnelu zakupowym + heatmapy",
      ],
      researchInsights: [
        { text: "Kupuj\u0105 te same ~15 produkt\u00f3w w k\u00f3\u0142ko", stat: "7/8" },
        { text: "Przegl\u0105danie kategorii to najwi\u0119ksza frustracja", stat: "6/8" },
        { text: "Chc\u0105 widzie\u0107 gdzie jest kurier w real-time", stat: "8/8" },
        { text: "Wol\u0105 list\u0119 ni\u017c katalog jako punkt wej\u015bcia", stat: "5/8" },
      ],
      iterations: [
        {
          version: "V1",
          title: "Catalog-first \u2014 klasyczny sklep",
          description: "Standardowy e-commerce flow: kategorie \u2192 produkty \u2192 koszyk \u2192 checkout.",
          wins: ["Znajomy wzorzec, niski pr\u00f3g wej\u015bcia"],
          fails: [
            "Za du\u017co tap\u00f3w do powtarzalnych zakup\u00f3w",
            "U\u017cytkownicy: \u2018to jest jak ka\u017cda inna apka\u2019",
          ],
        },
        {
          version: "V2",
          title: "List-first + Quick Reorder",
          description: "Punkt wej\u015bcia to lista zakup\u00f3w, nie katalog. Smart reorder na podstawie historii.",
          wins: [
            "\u015aredni czas zam\u00f3wienia: 48s (vs 90s w V1)",
            "U\u017cytkownicy: \u2018o to mi chodzi\u0142o\u2019",
          ],
          fails: ["Nowi u\u017cytkownicy bez historii nie wiedzieli od czego zacz\u0105\u0107"],
        },
        {
          version: "V3",
          title: "Hybrid \u2014 smart onboarding + list-first",
          description: "Nowi u\u017cytkownicy dostaj\u0105 popularne koszyki jako starter. Powracaj\u0105cy widz\u0105 swoje listy.",
          wins: [
            "Rozwi\u0105zuje problem cold start",
            "Task completion rate: 93%",
            "Zachowuje szybko\u015b\u0107 V2 dla powracaj\u0105cych",
          ],
          fails: [],
        },
      ],
      process: [
        { label: "Discovery", text: "8 wywiad\u00f3w z u\u017cytkownikami, analiza drop-off w funnelu zakupowym" },
        { label: "Insight", text: "U\u017cytkownicy kupuj\u0105 te same produkty co tydzie\u0144, ale musz\u0105 szuka\u0107 od zera" },
        { label: "Iteracja", text: "Testowa\u0142em 2 koncepty \u2014 quick reorder vs smart search" },
        { label: "Decyzja", text: "Quick reorder wygra\u0142 w testach u\u017cyteczno\u015bci (CTR +32%)" },
      ],
      solutions: [
        {
          image: "/assets/images/project-lisek.png",
          alt: "Quick Reorder na home",
          caption: "Quick Reorder na home \u2014 1 tap do ponownego zam\u00f3wienia",
        },
        {
          image: "/assets/images/project-lisek.png",
          alt: "Live tracking",
          caption: "Live tracking \u2014 status dostawy widoczny ca\u0142y czas",
        },
        {
          image: "/assets/images/project-lisek.png",
          alt: "Smart search",
          caption: "Smart search \u2014 historia + sugestie z AI",
        },
      ],
      results: [
        { icon: "\ud83d\udcc8", label: "Retention 30d", value: "+28%" },
        { icon: "\ud83d\uded2", label: "Cart abandonment", value: "-35%" },
        { icon: "\u23f1\ufe0f", label: "Czas zam\u00f3wienia", value: "90s \u2192 55s" },
      ],
      testimonial: {
        quote:
          "Rouse zidentyfikowa\u0142 problem z retencj\u0105, kt\u00f3ry my widzieli\u015bmy tylko w danych. Nowy flow realnie zmieni\u0142 metryki.",
        author: "Jan Kowalski",
        role: "CPO at Lisek",
      },
      learnings: [
        { text: "W q-commerce \u2018prosty\u2019 \u2260 \u2018ma\u0142o funkcji\u2019 \u2014 prosty = zero decyzji do podj\u0119cia" },
        { text: "Personalizacja > discovery w kontek\u015bcie powtarzalnych zakup\u00f3w" },
        { text: "Cold start problem jest realny \u2014 popular baskets jako starter rozwi\u0105zuj\u0105 go elegancko" },
      ],
      resultsNote: undefined,
    },
  },

  playmaker: {
    en: {
      subtitle: "Platform connecting talent with opportunities",
      description: "An app that matches job seekers with relevant postings",
      tag: "UX/UI Design",
      role: "Product Designer",
      services: "UX/UI Design, Product Strategy",
      problemStatement:
        "Job seekers spend hours scrolling irrelevant listings. Matching accuracy was low, leading to high bounce rates and poor engagement.",
      problemMetrics: "Avg. session: 2.1 min  \u00b7  Match rate: 12%",
      designQuestion:
        "How might we surface the right opportunities faster to keep users engaged?",
      process: [
        { label: "Discovery", text: "Competitor audit + 6 user interviews with active job seekers" },
        { label: "Insight", text: "Users want fewer, better matches \u2014 not more listings" },
        { label: "Iteration", text: "Tested swipe-based matching vs filtered feed" },
        { label: "Decision", text: "Filtered feed with smart tags won \u2014 users felt more in control" },
      ],
      solutions: [
        { image: "/assets/images/project-playmaker.webp", alt: "Smart matching feed", caption: "Smart matching feed \u2014 AI-powered relevance sorting" },
        { image: "/assets/images/project-playmaker.webp", alt: "Profile builder", caption: "Profile builder \u2014 skills-first approach for better matches" },
        { image: "/assets/images/project-playmaker.webp", alt: "Quick apply", caption: "Quick apply \u2014 1-tap application with saved profile data" },
      ],
      results: [
        { icon: "\ud83d\udcc8", label: "Match rate", value: "+45%" },
        { icon: "\u23f1\ufe0f", label: "Avg. session", value: "2.1 \u2192 5.8 min" },
        { icon: "\ud83c\udfaf", label: "Applications sent", value: "+62%" },
      ],
      testimonial: {
        quote: "The new matching algorithm and UX completely changed how our users interact with the platform.",
        author: "Adam Nowak",
        role: "CEO at Playmaker",
      },
    },
    pl: {
      subtitle: "Platforma \u0142\u0105cz\u0105ca talenty z mo\u017cliwo\u015bciami",
      description: "Aplikacja dopasowuj\u0105ca kandydat\u00f3w do ofert pracy",
      tag: "UX/UI Design",
      role: "Product Designer",
      services: "UX/UI Design, Strategia Produktu",
      problemStatement:
        "Osoby szukaj\u0105ce pracy sp\u0119dzaj\u0105 godziny na przegl\u0105daniu nieistotnych ofert. Niska trafno\u015b\u0107 dopasowa\u0144 prowadzi\u0142a do wysokiego bounce rate i s\u0142abego zaanga\u017cowania.",
      problemMetrics: "\u015ar. sesja: 2.1 min  \u00b7  Trafno\u015b\u0107 dopasowa\u0144: 12%",
      designQuestion:
        "Jak szybciej pokazywa\u0107 trafne oferty, \u017ceby u\u017cytkownicy byli zaanga\u017cowani?",
      process: [
        { label: "Discovery", text: "Audyt konkurencji + 6 wywiad\u00f3w z aktywnie szukaj\u0105cymi pracy" },
        { label: "Insight", text: "U\u017cytkownicy chc\u0105 mniej, ale lepszych dopasowa\u0144 \u2014 nie wi\u0119cej ofert" },
        { label: "Iteracja", text: "Testowanie swipe-matchingu vs filtrowanego feedu" },
        { label: "Decyzja", text: "Filtrowany feed ze smart tagami wygra\u0142 \u2014 u\u017cytkownicy czuli wi\u0119ksz\u0105 kontrol\u0119" },
      ],
      solutions: [
        { image: "/assets/images/project-playmaker.webp", alt: "Smart matching feed", caption: "Smart matching feed \u2014 sortowanie AI wed\u0142ug trafno\u015bci" },
        { image: "/assets/images/project-playmaker.webp", alt: "Kreator profilu", caption: "Kreator profilu \u2014 podej\u015bcie skills-first dla lepszych dopasowa\u0144" },
        { image: "/assets/images/project-playmaker.webp", alt: "Szybka aplikacja", caption: "Szybka aplikacja \u2014 1 tap z zapisanymi danymi profilu" },
      ],
      results: [
        { icon: "\ud83d\udcc8", label: "Trafno\u015b\u0107 dopasowa\u0144", value: "+45%" },
        { icon: "\u23f1\ufe0f", label: "\u015ar. sesja", value: "2.1 \u2192 5.8 min" },
        { icon: "\ud83c\udfaf", label: "Wys\u0142ane aplikacje", value: "+62%" },
      ],
      testimonial: {
        quote: "Nowy algorytm dopasowa\u0144 i UX ca\u0142kowicie zmieni\u0142y spos\u00f3b interakcji u\u017cytkownik\u00f3w z platform\u0105.",
        author: "Adam Nowak",
        role: "CEO at Playmaker",
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
        { image: "/assets/images/project-wishdrop.png", alt: "Wishlist creation", caption: "Wishlist creation \u2014 add from any store with browser extension" },
        { image: "/assets/images/project-wishdrop.png", alt: "Social sharing", caption: "Social sharing \u2014 share lists with friends or drop hints" },
        { image: "/assets/images/project-wishdrop.png", alt: "Gift coordination", caption: "Gift coordination \u2014 group gifting without spoiling the surprise" },
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
        { image: "/assets/images/project-wishdrop.png", alt: "Tworzenie listy", caption: "Tworzenie listy \u2014 dodawanie z dowolnego sklepu przez rozszerzenie przegl\u0105darki" },
        { image: "/assets/images/project-wishdrop.png", alt: "Udost\u0119pnianie", caption: "Udost\u0119pnianie \u2014 dzielenie si\u0119 listami z przyjaci\u00f3\u0142mi lub podsuwanie pomys\u0142\u00f3w" },
        { image: "/assets/images/project-wishdrop.png", alt: "Koordynacja prezent\u00f3w", caption: "Koordynacja prezent\u00f3w \u2014 grupowe kupowanie bez psowania niespodzianki" },
      ],
      results: [
        { icon: "\ud83d\udcc8", label: "Rejestracje (miesi\u0105c 1)", value: "2.4k" },
        { icon: "\ud83c\udf81", label: "Utworzone \u017cyczenia", value: "12k+" },
        { icon: "\ud83d\udcac", label: "Udost\u0119pnienia na list\u0119", value: "\u015br. 3.2" },
      ],
      resultsNote: "Wst\u0119pne dane po 6 tygodniach od launchu MVP.",
    },
  },

  olimpia: {
    en: {
      subtitle: "Landing page redesign for conversion",
      description: "Boosting sales & engagement with landing page redesign",
      tag: "Web Design",
      role: "Web Designer",
      services: "Web Design, Conversion Optimization",
      problemStatement:
        "Olimpia\u2019s landing page had high traffic but low conversion \u2014 visitors weren\u2019t signing up for memberships.",
      problemMetrics: "Conversion rate: 1.8%  \u00b7  Bounce rate: 72%",
      designQuestion:
        "How to turn page visitors into gym members?",
      process: [
        { label: "Discovery", text: "Heatmap analysis + A/B test audit of existing page" },
        { label: "Insight", text: "Users scrolled past pricing \u2014 CTA was buried below the fold" },
        { label: "Iteration", text: "Tested hero-first CTA vs sticky pricing bar" },
        { label: "Decision", text: "Sticky pricing bar + social proof section above fold" },
      ],
      solutions: [
        { image: "/assets/images/project-olimpia.webp", alt: "New hero section", caption: "New hero \u2014 clear value prop with immediate CTA" },
        { image: "/assets/images/project-olimpia.webp", alt: "Pricing section", caption: "Sticky pricing bar \u2014 always visible, reduces friction" },
        { image: "/assets/images/project-olimpia.webp", alt: "Social proof", caption: "Social proof \u2014 member testimonials above the fold" },
      ],
      results: [
        { icon: "\ud83d\udcc8", label: "Conversion rate", value: "1.8% \u2192 4.2%" },
        { icon: "\ud83d\udcc9", label: "Bounce rate", value: "72% \u2192 48%" },
        { icon: "\u23f1\ufe0f", label: "Time to CTA", value: "-60%" },
      ],
    },
    pl: {
      subtitle: "Redesign landing page pod konwersj\u0119",
      description: "Wzrost sprzeda\u017cy i zaanga\u017cowania dzi\u0119ki redesignowi landing page",
      tag: "Web Design",
      role: "Web Designer",
      services: "Web Design, Optymalizacja Konwersji",
      problemStatement:
        "Landing page Olimpii mia\u0142 du\u017cy ruch, ale nisk\u0105 konwersj\u0119 \u2014 odwiedzaj\u0105cy nie zapisywali si\u0119 na cz\u0142onkostwo.",
      problemMetrics: "Konwersja: 1.8%  \u00b7  Bounce rate: 72%",
      designQuestion:
        "Jak zamieni\u0107 odwiedzaj\u0105cych stron\u0119 w cz\u0142onk\u00f3w si\u0142owni?",
      process: [
        { label: "Discovery", text: "Analiza heatmap + audyt test\u00f3w A/B istniej\u0105cej strony" },
        { label: "Insight", text: "U\u017cytkownicy scrollowali obok cennika \u2014 CTA by\u0142o ukryte poni\u017cej foldu" },
        { label: "Iteracja", text: "Testowanie CTA w hero vs sticky pricing bar" },
        { label: "Decyzja", text: "Sticky pricing bar + sekcja social proof powy\u017cej foldu" },
      ],
      solutions: [
        { image: "/assets/images/project-olimpia.webp", alt: "Nowa sekcja hero", caption: "Nowe hero \u2014 czytelna propozycja warto\u015bci z natychmiastowym CTA" },
        { image: "/assets/images/project-olimpia.webp", alt: "Sekcja cennika", caption: "Sticky pricing bar \u2014 zawsze widoczny, redukuje tarcie" },
        { image: "/assets/images/project-olimpia.webp", alt: "Social proof", caption: "Social proof \u2014 opinie cz\u0142onk\u00f3w powy\u017cej foldu" },
      ],
      results: [
        { icon: "\ud83d\udcc8", label: "Konwersja", value: "1.8% \u2192 4.2%" },
        { icon: "\ud83d\udcc9", label: "Bounce rate", value: "72% \u2192 48%" },
        { icon: "\u23f1\ufe0f", label: "Czas do CTA", value: "-60%" },
      ],
    },
  },

  roomzilla: {
    en: {
      subtitle: "Room booking system redesign",
      description: "Streamlining meeting room reservations for large offices",
      tag: "Web App",
      role: "Product Designer",
      services: "Product Design, Web Design",
      problemStatement:
        "Booking a meeting room in a large office takes too many clicks. Employees default to ad-hoc room grabs, causing conflicts.",
      designQuestion:
        "How to make room booking as fast as sending a message?",
      process: [
        { label: "Discovery", text: "Shadowed 12 employees booking rooms over 1 week" },
        { label: "Insight", text: "Most bookings are recurring \u2014 same room, same time, every week" },
        { label: "Iteration", text: "Tested calendar-first vs map-first booking flow" },
        { label: "Decision", text: "Map-first with quick-repeat \u2014 visual + fast" },
      ],
      solutions: [
        { image: "/assets/images/project-roomzilla.webp", alt: "Map view", caption: "Map view \u2014 see available rooms at a glance" },
        { image: "/assets/images/project-roomzilla.webp", alt: "Quick booking", caption: "Quick booking \u2014 2-tap reservation from floor plan" },
        { image: "/assets/images/project-roomzilla.webp", alt: "Recurring meetings", caption: "Recurring setup \u2014 one-time config, auto-books weekly" },
      ],
      results: [
        { icon: "\u23f1\ufe0f", label: "Booking time", value: "3 min \u2192 15s" },
        { icon: "\ud83d\udcc9", label: "Room conflicts", value: "-80%" },
        { icon: "\ud83d\udcc8", label: "Adoption rate", value: "92%" },
      ],
    },
    pl: {
      subtitle: "Redesign systemu rezerwacji sal",
      description: "Usprawnienie rezerwacji sal konferencyjnych w du\u017cych biurach",
      tag: "Aplikacja webowa",
      role: "Product Designer",
      services: "Product Design, Web Design",
      problemStatement:
        "Rezerwacja sali w du\u017cym biurze wymaga zbyt wielu klikni\u0119\u0107. Pracownicy domy\u015blnie zajmuj\u0105 sale ad-hoc, co powoduje konflikty.",
      designQuestion:
        "Jak sprawi\u0107, \u017ceby rezerwacja sali by\u0142a tak szybka jak wys\u0142anie wiadomo\u015bci?",
      process: [
        { label: "Discovery", text: "Obserwacja 12 pracownik\u00f3w rezerwuj\u0105cych sale przez 1 tydzie\u0144" },
        { label: "Insight", text: "Wi\u0119kszo\u015b\u0107 rezerwacji jest cykliczna \u2014 ta sama sala, ta sama godzina, co tydzie\u0144" },
        { label: "Iteracja", text: "Testowanie kalendarz-first vs mapa-first" },
        { label: "Decyzja", text: "Mapa-first z quick-repeat \u2014 wizualny + szybki" },
      ],
      solutions: [
        { image: "/assets/images/project-roomzilla.webp", alt: "Widok mapy", caption: "Widok mapy \u2014 dost\u0119pne sale na pierwszy rzut oka" },
        { image: "/assets/images/project-roomzilla.webp", alt: "Szybka rezerwacja", caption: "Szybka rezerwacja \u2014 2 tapi\u0119cia z planu pi\u0119tra" },
        { image: "/assets/images/project-roomzilla.webp", alt: "Spotkania cykliczne", caption: "Cykliczne spotkania \u2014 jednorazowa konfiguracja, automatyczna rezerwacja co tydzie\u0144" },
      ],
      results: [
        { icon: "\u23f1\ufe0f", label: "Czas rezerwacji", value: "3 min \u2192 15s" },
        { icon: "\ud83d\udcc9", label: "Konflikty sal", value: "-80%" },
        { icon: "\ud83d\udcc8", label: "Wska\u017anik adopcji", value: "92%" },
      ],
    },
  },
};
