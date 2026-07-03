import Image from "next/image";
import { site } from "@/lib/site";

const footerLinks = [
  { href: "#why-engx", label: "Why EngX" },
  { href: "#services", label: "Services" },
  { href: "#how-we-work", label: "How We Work" },
  { href: "#squad", label: "Build Your Squad" },
  { href: "#leadership", label: "Leadership" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-night text-cream">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-4">
              <Image
                src="/logo.png"
                alt="EngX logo"
                width={96}
                height={96}
                className="h-12 w-12 rounded-sm bg-cream object-contain p-1"
              />
              <div>
                <p className="font-serif text-[22px] font-semibold leading-none">
                  Eng<span className="text-crimson-bright">X</span>
                </p>
                <p className="mt-1.5 text-[12.5px] text-cream/60">{site.motto}</p>
              </div>
            </div>
            <p className="mt-6 text-[13.5px] leading-relaxed text-cream/55">
              {site.tagline}. Senior specialist squads for strategy, data &amp; AI,
              transformation, and forensics — assembled around your outcome.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-12 gap-y-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
            {footerLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[13.5px] font-semibold text-cream/70 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="shrink-0">
            <a
              href={`mailto:${site.email}`}
              className="inline-block rounded-sm border border-cream/25 px-6 py-3 text-[13.5px] font-bold text-cream transition-all hover:-translate-y-0.5 hover:border-gold hover:text-gold"
            >
              {site.email}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/10 pt-6 text-[12px] text-cream/40 sm:flex-row sm:justify-between">
          <p>&copy; {site.year} EngX. All rights reserved.</p>
          <p>Registered in South Africa &middot; Serving clients globally</p>
        </div>
      </div>
    </footer>
  );
}
