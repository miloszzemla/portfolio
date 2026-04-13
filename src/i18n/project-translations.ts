import type { Project } from "@/data/projects";

type TranslatableProject = Omit<Project, "slug" | "thumbnail" | "heroImage" | "liveUrl" | "tag"> & { tag?: string | string[] };

// Deep partial — every field is optional for overrides
type DeepPartial<T> = { [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K] };

type ProjectOverride = DeepPartial<TranslatableProject>;

export const projectTranslations: Record<string, { en: ProjectOverride; pl: ProjectOverride }> = {
  lisek: {
    en: {
      subtitle: "Loyalty Redesign — Driving Frequency & Retention Growth",
      description: "Streak-based loyalty system for Poland's leading q-commerce app with 5M+ orders.",
      tag: ["Mobile App", "Web App"],
      meta: "Lisek  \u00b7  Q-Commerce  \u00b7  2026  \u00b7  Product Design",
      role: "Product Designer",
      services: "Product Design, Loyalty System Design",
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
          image: "/assets/images/project-lisek.png",
          alt: "Home with streak progress bar",
          caption: "Streak progress on home \u2014 always visible, in context of purchase decision",
        },
        {
          image: "/assets/images/project-lisek.png",
          alt: "Loyalty profile with tiers",
          caption: "Loyalty profile \u2014 current tier, benefits, reward history",
        },
        {
          image: "/assets/images/project-lisek.png",
          alt: "Post-checkout instant reward",
          caption: "Instant reward after checkout \u2014 tangible, not abstract points",
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
      subtitle: "Loyalty Redesign — Driving Frequency & Retention Growth",
      description: "System lojalno\u015bciowy oparty na strekach dla lidera polskiego q-commerce z 5M+ zam\u00f3wie\u0144.",
      tag: ["Aplikacja mobilna", "Aplikacja webowa"],
      meta: "Lisek  \u00b7  Q-Commerce  \u00b7  2026  \u00b7  Product Design",
      role: "Product Designer",
      services: "Product Design, Loyalty System Design",
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
          image: "/assets/images/project-lisek.png",
          alt: "Home z progress barem streaka",
          caption: "Progress streaka na home \u2014 zawsze widoczny, w kontek\u015bcie decyzji zakupowej",
        },
        {
          image: "/assets/images/project-lisek.png",
          alt: "Profil lojalno\u015bciowy z tierami",
          caption: "Profil lojalno\u015bciowy \u2014 aktualny tier, benefity, historia nagr\u00f3d",
        },
        {
          image: "/assets/images/project-lisek.png",
          alt: "Nagroda po checkout",
          caption: "Natychmiastowa nagroda po checkout \u2014 namacalna, nie abstrakcyjne punkty",
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
    },
  },

  "lisek-loyalty": {
    en: {
      subtitle: "Loyalty Program — Streak + Tiers + Instant Rewards",
      description: "Streak-based loyalty system for Poland's leading q-commerce app with 5M+ orders. Order frequency up 64%.",
      tag: "Mobile App",
      meta: "Lisek  ·  Q-Commerce  ·  2026  ·  Product Design",
      role: "Product Designer",
      services: "Product Design, Loyalty System Design",
      problemStatement:
        "Lisek has 5M+ orders, but most users order sporadically — 1.4x/month average. No mechanism to reward regularity. Price decides, not brand relationship.",
      problemMetrics: "Frequency: 1.4/mo  ·  60d churn: 41%  ·  No loyalty program",
      designQuestion:
        "How to build a loyalty system that rewards purchase frequency, not just basket value?",
      userQuote: {
        text: "I have Zabka, Biedronka, Lidl apps — points everywhere that I never spend. I don't want another program, I just want to pay less for what I buy regularly.",
        author: "Kasia, 28, switched from Lisek to Zabka",
      },
      researchMethods: [
        "10 user interviews (heavy shoppers + churned users)",
        "Cohort analysis — what separates 4+/mo users from the rest",
        "Benchmark of 6 loyalty programs (Starbucks Rewards, Żappka, Biedronka, Bolt, Uber One, Amazon Fresh)",
      ],
      researchInsights: [
        { text: "Users don't react to 'collect points' — rewards feel too distant", stat: "8/10" },
        { text: "Strongest motivator is free delivery, not percentage discounts", stat: "#1" },
        { text: "4+/mo users have higher AOV (+22%) — it's habit, not price", stat: "+22%" },
        { text: "Progress bar (streak) programs have 2x higher engagement than points", stat: "2x" },
      ],
      iterations: [
        {
          version: "V1",
          title: "Classic points program",
          description: "1 PLN = 1 point. Rewards catalog. Simple to understand, but 12% engagement — users said 'another program I won't use'.",
          wins: ["Simple to understand"],
          fails: ["12% engagement", "Users didn't see value"],
        },
        {
          version: "V2",
          title: "Streak-based — 'Your Week'",
          description: "Order 3x/week → free delivery for the entire next week. Visible progress bar on home.",
          wins: ["3x higher engagement vs V1", "Rules understood in 5 seconds", "FOMO effect from progress bar"],
          fails: ["Weekly cycle not flexible enough", "Breaking streak = frustration"],
        },
        {
          version: "V3",
          title: "Hybrid — Streak + Tiers + Instant Rewards",
          description: "Flexible weekly streak + tier system (Lisek → Fox → Golden Fox) + instant perks after every order. Streak recovery instead of punishment.",
          wins: ["Highest engagement", "Instant gratification", "No frustration from breaking"],
          fails: [],
        },
      ],
      process: [],
      solutions: [
        {
          image: "/assets/images/project-lisek.png",
          alt: "Home with streak progress bar",
          caption: "Streak bar on home — always visible, in context of purchase decision. Not hidden in a tab.",
        },
        {
          image: "/assets/images/project-lisek.png",
          alt: "Loyalty profile with tiers",
          caption: "Loyalty profile — current tier, benefits, reward history. Zero unnecessary animations.",
        },
        {
          image: "/assets/images/project-lisek.png",
          alt: "Post-checkout reward moment",
          caption: "Instant reward after order — 'Free juice added!' Tangible, not abstract points.",
        },
        {
          image: "/assets/images/project-lisek.png",
          alt: "Streak recovery",
          caption: "Second life instead of punishment — 'Order by Friday and your streak is back'. Fair play.",
        },
      ],
      results: [
        { icon: "📈", label: "Order frequency", value: "+64%" },
        { icon: "📉", label: "60d churn", value: "-12pp" },
        { icon: "💰", label: "AOV", value: "+8%" },
        { icon: "⭐", label: "Program NPS", value: "47" },
      ],
      resultsNote: "Data from 8-week soft launch on 15% of user base. Full rollout in progress.",
      testimonial: {
        quote: "The loyalty program was our missing puzzle piece. Miłosz designed a system that doesn't feel like another loyalty card — users say it's 'a game they want to play'.",
        author: "Marta Wiśniewska",
        role: "Head of Product, Lisek",
      },
      learnings: [
        { text: "Reward frequency, not amount. In q-commerce, customer value is regularity. Streaks beat points." },
        { text: "Instant gratification > deferred reward. 'Free juice now' motivates more than '500 points = 10 PLN discount next month'." },
        { text: "Punishment for breaking is the worst pattern. 'Second life' instead of penalty turned frustration into gratitude." },
        { text: "Visibility > depth. Progress bar on home (not in a hidden tab) increased engagement by 3x." },
      ],
    },
    pl: {
      // Polish is the base language in projects.ts, minimal overrides needed
      tag: "Aplikacja mobilna",
    },
  },

  "lisek-bazaar": {
    en: {},
    pl: {
      subtitle: "Marketplace Expansion \u2014 Od Groceries do Wszystkiego",
      description: "Marketplace non-grocery wewn\u0105trz Liska. Nowy strumie\u0144 przychod\u00f3w, ta sama obietnica dostawy.",
      problemStatement:
        "Przychody Liska zale\u017ca\u0142y wy\u0142\u0105cznie od groceries. U\u017cytkownicy chcieli wi\u0119cej, konkurencja si\u0119 rozszerza\u0142a.",
      designQuestion:
        "Zmieni\u0107 apk\u0119 grocery w marketplace bez rozbijania core experience.",
      resultsNote: "Uruchomiony jako nowa zak\u0142adka w apce Lisek.",
    },
  },

  playmaker: {
    en: {
      subtitle: "Platform connecting talent with opportunities",
      description: "An app that matches job seekers with relevant postings",
      tag: "Web App",
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
      tag: "Aplikacja webowa",
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
