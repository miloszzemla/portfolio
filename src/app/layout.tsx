import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
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
    icon: "/assets/images/favicon.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
