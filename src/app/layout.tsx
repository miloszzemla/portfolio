import type { Metadata } from "next";
import Script from "next/script";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Retune } from "retune";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { LanguageProvider } from "@/i18n/LanguageContext";
import ComingSoon from "@/components/ComingSoon";
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
