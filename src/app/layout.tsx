import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_NAME = "Oussaid Ben Mansour";
const SITE_DESC =
  "Développeur Frontend & Fullstack. Je conçois des applications web temps réel, performantes et soignées — WebRTC, React, Node.js.";
// TODO: remplacer par ton vrai domaine une fois déployé (ex: https://oussaid.vercel.app)
const SITE_URL = "https://oussaid.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Développeur Frontend & Fullstack`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESC,
  keywords: [
    "développeur",
    "frontend",
    "fullstack",
    "React",
    "Next.js",
    "WebRTC",
    "Node.js",
    "portfolio",
  ],
  authors: [{ name: SITE_NAME }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    title: `${SITE_NAME} — Développeur Frontend & Fullstack`,
    description: SITE_DESC,
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Développeur Frontend & Fullstack`,
    description: SITE_DESC,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-base text-foreground font-sans selection:bg-accent/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
