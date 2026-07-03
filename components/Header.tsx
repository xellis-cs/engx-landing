"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#why-engx", label: "Why EngX" },
  { href: "#services", label: "Services" },
  { href: "#how-we-work", label: "How We Work" },
  { href: "#squad", label: "Build Your Squad" },
  { href: "#leadership", label: "Leadership" },
  { href: "#insights", label: "Insights" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-cream-light/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_rgba(26,37,64,0.10),0_8px_24px_rgba(26,37,64,0.08)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-4" aria-label="EngX — home">
          <Image
            src="/logo.png"
            alt="EngX logo"
            width={112}
            height={112}
            priority
            className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
          />
          <span className="hidden border-l border-navy/15 pl-4 leading-snug min-[900px]:block">
            <span className="block font-serif text-[15px] font-bold text-navy">
              EngX
            </span>
            <span className="block text-[12px] text-body">
              Your Partner for Intelligent Transformation
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13.5px] font-semibold text-navy/80 transition-colors hover:text-crimson"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-sm bg-crimson px-5 py-2.5 text-[13px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-crimson-bright hover:shadow-[0_6px_16px_rgba(154,41,57,0.35)]"
          >
            Start a Conversation
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-sm border border-navy/15 text-navy lg:hidden"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" />
            ) : (
              <path d="M2.5 5h15M2.5 10h15M2.5 15h15" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={`overflow-hidden bg-cream-light transition-[max-height] duration-500 ease-in-out lg:hidden ${
          open ? "max-h-[480px] border-t border-navy/10 shadow-[0_18px_32px_rgba(26,37,64,0.12)]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4" aria-label="Mobile">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-navy/8 py-3.5 text-[15px] font-semibold text-navy"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-sm bg-crimson px-5 py-3.5 text-center text-[14px] font-bold text-white"
          >
            Start a Conversation
          </a>
        </nav>
      </div>
    </header>
  );
}
