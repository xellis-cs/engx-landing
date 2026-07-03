import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "EngX — Your Partner for Intelligent Transformation",
  description:
    "EngX assembles senior specialist squads — strategy, data & AI, transformation, and forensics — deployed fast and accountable for measurable outcomes. Human-centric. AI-powered. Outcome-driven.",
  openGraph: {
    title: "EngX — Your Partner for Intelligent Transformation",
    description:
      "Senior specialist squads, assembled around your outcome. Human-centric. AI-powered. Outcome-driven.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Font variable classes live on <html>: Tailwind's @theme font tokens are
    // defined at :root and resolve var(--font-*) there, so the variables must
    // exist on the root element itself.
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable} scroll-smooth`}>
      <body className="bg-cream font-sans text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
