"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { publications } from "@/lib/data";

export default function Insights() {
  const [subscribed, setSubscribed] = useState(false);
  const { featured, pipeline } = publications;

  return (
    <section id="insights" className="section-pad bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Insights & Publications"
          title={
            <>
              Thinking you can <em className="text-crimson">put to work</em>.
            </>
          }
          intro="Books, white papers, and research from the EngX team — the same methodology we deploy on engagements, written down."
        />

        {/* Featured book */}
        <Reveal className="mt-14">
          <div className="grid overflow-hidden rounded-sm border border-navy/10 bg-white lg:grid-cols-[380px_1fr]">
            {/* Stylised cover */}
            <div className="flex items-center justify-center bg-navy-deep px-10 py-12">
              <div className="relative w-56 max-w-full rounded-[3px] bg-navy p-7 shadow-[18px_24px_40px_rgba(0,0,0,0.45)] ring-1 ring-cream/15">
                <div className="mb-14 border-b border-gold/40 pb-3">
                  <span className="eyebrow !text-[9px] text-gold">EngX Press</span>
                </div>
                <p className="text-[11px] uppercase tracking-[0.18em] text-cream/60">
                  A Practitioner&apos;s Guide
                </p>
                <h3 className="mt-2 font-serif text-[26px] font-semibold leading-tight text-cream">
                  The Art of Opportunity
                </h3>
                <svg viewBox="0 0 100 40" className="mt-6 w-16" aria-hidden>
                  <path d="M8 36 Q 50 22 92 4" stroke="#b03346" strokeWidth="7" strokeLinecap="round" fill="none" />
                  <path d="M14 6 Q 52 20 86 34" stroke="#f7f3ee" strokeWidth="7" strokeLinecap="round" fill="none" />
                </svg>
                <p className="mt-12 text-[11px] text-cream/55">{featured.author}</p>
              </div>
            </div>

            <div className="px-7 py-9 sm:px-11 sm:py-11">
              <span className="eyebrow rounded-full bg-crimson/10 px-3.5 py-1.5 !text-[10.5px] text-crimson">
                {featured.tag}
              </span>
              <h3 className="mt-5 font-serif text-[30px] font-semibold leading-tight text-navy">
                {featured.title}
              </h3>
              <p className="mt-1 text-[15px] font-semibold text-tan">{featured.subtitle}</p>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-body">
                {featured.blurb}
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {featured.meta.map((m) => (
                  <li key={m} className="text-[13px] font-semibold text-navy/60">
                    {m}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <span className="font-serif text-[30px] font-semibold text-navy">
                  {featured.price}
                  <small className="ml-1 text-[13px] font-sans font-semibold text-body">ZAR</small>
                </span>
                <a
                  href="#contact"
                  className="rounded-sm bg-navy px-7 py-3.5 text-[14px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-deep hover:shadow-[0_8px_22px_rgba(26,37,64,0.3)]"
                >
                  Order Your Copy
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Pipeline */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pipeline.map((p, i) => (
            <Reveal key={p.title} delay={i * 80} className="h-full">
              <article className="flex h-full flex-col rounded-sm border border-navy/10 bg-cream-light px-6 py-7 transition-all duration-300 hover:-translate-y-1 hover:border-navy/25 hover:shadow-[0_14px_30px_rgba(26,37,64,0.10)]">
                <span className="eyebrow !text-[10px] text-crimson">{p.type}</span>
                <h4 className="mt-3 font-serif text-[19px] font-semibold leading-snug text-navy">
                  {p.title}
                </h4>
                <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-body">
                  {p.blurb}
                </p>
                <p className="mt-5 text-[12px] font-bold uppercase tracking-[0.14em] text-tan">
                  In the pipeline
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Newsletter */}
        <Reveal className="mt-16">
          <div className="rounded-sm bg-navy px-7 py-10 text-center text-cream sm:px-12">
            <h3 className="font-serif text-[24px] font-semibold">
              Get notified when we publish
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-[14px] leading-relaxed text-cream/70">
              One email when a new book, white paper, or research brief drops. No noise.
            </p>
            {subscribed ? (
              <p className="mt-7 font-serif text-[17px] font-semibold text-gold">
                You&apos;re on the list — thank you.
              </p>
            ) : (
              <form
                className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubscribed(true);
                }}
              >
                <label className="sr-only" htmlFor="newsletter-email">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  className="flex-1 rounded-sm border border-cream/25 bg-navy-deep px-4 py-3.5 text-[14px] text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-sm bg-crimson px-7 py-3.5 text-[14px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-crimson-bright"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
