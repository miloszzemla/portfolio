import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Retune } from "retune";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Milosz Zemla – Portfolio",
  description:
    "I'm Milosz Zemla, a designer who lives by design. Explore my portfolio of digital design, UX/UI, and product strategy work.",
  openGraph: {
    title: "Milosz Zemla – Portfolio",
    description:
      "I'm Milosz Zemla, a designer who lives by design.",
    images: ["/assets/images/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Milosz Zemla – Portfolio",
    description:
      "I'm Milosz Zemla, a designer who lives by design.",
    images: ["/assets/images/og-image.png"],
  },
  icons: {
    icon: "/assets/images/favicon.svg",
  },
};

// Set to false when portfolio is ready to go live
const COMING_SOON = true;

function ComingSoon() {
  return (
    <div className="relative min-h-screen bg-cream overflow-hidden">
      <div className="grid-bg" />

      {/* Hero area */}
      <div className="relative z-10 flex min-h-[85vh] flex-col justify-end pb-16 md:pb-24">
        <div className="w-[92%] max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between md:gap-12">
          {/* Left: heading */}
          <div>
            <div className="overflow-hidden flex items-center gap-3 md:gap-5 lg:gap-6">
              <div className="h-[32px] w-[32px] md:h-[56px] md:w-[56px] lg:h-[76px] lg:w-[76px] xl:h-[90px] xl:w-[90px] flex-shrink-0">
                <svg viewBox="0 0 110 110" className="h-full w-full">
                  <path d="M 0 0 L 110 0 L 110 110 L 0 110 Z" fill="transparent" />
                  <path
                    d="M 58.929 0 L 51.071 0 L 51.071 45.516 L 18.887 13.331 L 13.332 18.887 L 45.516 51.071 L 0 51.071 L 0 58.929 L 45.515 58.929 L 13.332 91.113 L 18.888 96.669 L 51.072 64.484 L 51.072 110 L 58.929 110 L 58.929 64.484 L 91.114 96.669 L 96.669 91.113 L 64.485 58.929 L 110 58.929 L 110 51.071 L 64.484 51.071 L 96.669 18.887 L 91.113 13.331 L 58.929 45.515 Z"
                    fill="rgb(21, 21, 21)"
                  />
                </svg>
              </div>
              <span className="font-space text-[44px] md:text-[56px] lg:text-[76px] xl:text-[96px] font-light leading-[1.08] tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5px] text-dark">
                Milosz Zemla
              </span>
            </div>
            <span className="font-space block text-[44px] md:text-[56px] lg:text-[76px] xl:text-[96px] font-bold leading-[1.08] tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5px] text-dark">
              Product Designer
            </span>
            <div className="flex items-center gap-3 md:gap-4 mt-1">
              <span className="font-space text-[44px] md:text-[56px] lg:text-[76px] xl:text-[96px] font-bold leading-[1.08] tracking-[-2px] md:tracking-[-4px] lg:tracking-[-5px] text-dark">
                &amp; Builder.
              </span>
              <span className="inline-flex items-center gap-1.5 md:gap-2 rounded-none bg-white border-2 border-dark text-dark px-3 py-1.5 md:px-5 md:py-2.5 text-[11px] md:text-[14px] font-medium tracking-[-0.2px] flex-shrink-0 rotate-[-6deg]">
                &#x2728; AI-native
              </span>
            </div>
          </div>

          {/* Right: coming soon info */}
          <div className="mt-8 md:mt-0 md:pb-2 lg:pb-3 flex flex-col gap-4 max-w-[360px] lg:max-w-[400px]">
            <span className="inline-flex self-start items-center gap-2 bg-dark text-cream px-4 py-2 text-[13px] md:text-[14px] font-medium tracking-[-0.2px]">
              <span className="inline-block h-[6px] w-[6px] rounded-full bg-green-400 animate-pulse" />
              Website coming soon
            </span>
            <div className="flex flex-col gap-1">
              <a
                href="mailto:miloszzemla@gmail.com"
                className="font-dm text-[16px] md:text-[18px] font-medium leading-[1.5] tracking-[-0.4px] text-dark transition-opacity hover:opacity-60"
              >
                miloszzemla@gmail.com
              </a>
              <a
                href="tel:+48698205063"
                className="font-dm text-[16px] md:text-[18px] font-medium leading-[1.5] tracking-[-0.4px] text-dark transition-opacity hover:opacity-60"
              >
                +48 698 205 063
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 w-[92%] max-w-[1400px] mx-auto">
        <div className="h-[2px] w-full bg-dark" />
        <div className="flex items-center justify-between py-4">
          <span className="font-dm text-[14px] md:text-[16px] font-medium text-dark/50">
            Warsaw, Poland
          </span>
          <span className="font-dm text-[14px] md:text-[16px] font-medium text-dark/50">
            &copy; {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body>
        <LanguageProvider>
          {COMING_SOON ? <ComingSoon /> : children}
        </LanguageProvider>
        <Retune />
        <Analytics />
        <SpeedInsights />
        <Script id="hotjar" strategy="afterInteractive">
          {`(function(h,o,t,j,a,r){h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};h._hjSettings={hjid:6679016,hjsv:6};a=o.getElementsByTagName('head')[0];r=o.createElement('script');r.async=1;r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;a.appendChild(r);})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
        </Script>
      </body>
    </html>
  );
}
