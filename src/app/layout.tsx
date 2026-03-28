import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "600", "700"],
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
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-cream px-6">
      <div className="grid-bg" />
      <div className="flex max-w-[600px] flex-col items-center gap-8 text-center">
        <h1 className="text-[64px] font-bold leading-[1.1] tracking-[-3px] text-dark">
          Milosz Zemla
        </h1>
        <div className="h-[2px] w-24 bg-dark" />
        <p className="text-[24px] font-medium leading-[1.5] tracking-[-0.8px] text-dark/60">
          Portfolio coming soon
        </p>
        <div className="flex flex-col items-center gap-3">
          <a
            href="mailto:miloszzemla@gmail.com"
            className="text-[20px] font-medium leading-[1.5] tracking-[-0.6px] text-dark transition-opacity hover:opacity-60"
          >
            miloszzemla@gmail.com
          </a>
          <a
            href="tel:+48698205063"
            className="text-[20px] font-medium leading-[1.5] tracking-[-0.6px] text-dark transition-opacity hover:opacity-60"
          >
            +48 698 205 063
          </a>
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
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>
          {COMING_SOON ? <ComingSoon /> : children}
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
