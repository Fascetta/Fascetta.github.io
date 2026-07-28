import type { Metadata } from "next";
import { Instrument_Serif, Plus_Jakarta_Sans } from "next/font/google";

import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/data/site";

import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Christian Bianchi — Adaptive & Multimodal AI Research",
  description:
    "Christian Bianchi is an AI researcher working on weight-space adaptation, meta-learning, model composition, vision-language-action policies, and adaptive multimodal agents.",
  applicationName: "Christian Bianchi Research Portfolio",
  keywords: [
    "Christian Bianchi",
    "Adaptive AI",
    "Multimodal AI",
    "Weight-space adaptation",
    "Meta-learning",
    "Vision-language-action",
    "Embodied AI",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Christian Bianchi — Adaptive & Multimodal AI Research",
    description:
      "Research portfolio focused on weight-space adaptation, meta-learning, model composition, and embodied multimodal agents.",
    url: siteConfig.url,
    siteName: "Christian Bianchi",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christian Bianchi — Adaptive & Multimodal AI Research",
    description:
      "Research portfolio focused on weight-space adaptation, meta-learning, model composition, and embodied multimodal agents.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${instrumentSerif.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
