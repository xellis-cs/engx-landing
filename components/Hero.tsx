import Reveal from "./Reveal";
import XMark from "./icons/XMark";
import { stats } from "@/lib/data";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy-night text-cream">
      {/* Atmosphere: soft radial glows + fine grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[-15%] h-[560px] w-[560px] rounded-full bg-navy-soft/40 blur-[120px]" />
        <div className="absolute bottom-[-30%] left-[-10%] h-[480px] w-[480px] rounded-full bg-crimson/25 blur-[140px]" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.05]" aria-hidden>
          <defs>
            <pattern id="grid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M56 0H0v56" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        {/* Signature reveal: the X sweep draws itself in, then the traced
            mark settles at the crossing. Drifts slower than the copy on
            scroll where scroll timelines are supported. */}
        <div className="parallax-drift absolute bottom-0 right-0 h-[70%] max-lg:hidden">
          <svg
            className="h-full w-auto opacity-[0.10]"
            viewBox="0 0 400 400"
            fill="none"
            aria-hidden
          >
            <path
              d="M20 380 Q 200 240 380 20"
              stroke="#b03346"
              strokeWidth="26"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray={1}
              style={{ animation: "x-draw 1.1s var(--ease-out-soft) 0.2s both" }}
            />
            <path
              d="M60 40 Q 210 210 350 370"
              stroke="#f7f3ee"
              strokeWidth="26"
              strokeLinecap="round"
              pathLength={1}
              strokeDasharray={1}
              style={{ animation: "x-draw 1.1s var(--ease-out-soft) 0.55s both" }}
            />
          </svg>
          <XMark className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 text-crimson-bright/25 [animation:x-settle_0.9s_var(--ease-out-soft)_1.35s_both]" />
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:pt-44">
        <Reveal>
          <p className="eyebrow mb-6 text-gold">
            Human-Centric &middot; AI-Powered &middot; Outcome-Driven
          </p>
        </Reveal>
        <Reveal delay={90}>
          <h1 className="text-display max-w-4xl font-serif font-semibold">
            Specialist teams,{" "}
            <em className="text-gold">engineered</em> around your outcome.
          </h1>
        </Reveal>
        <Reveal delay={180}>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-cream/80 sm:text-xl">
            EngX gives you direct access to hand-picked squads of senior
            specialists — strategy, data &amp; AI, transformation, and forensics —
            mobilised in days and accountable for measurable results.
          </p>
        </Reveal>
        <Reveal delay={270}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#squad"
              className="rounded-sm bg-crimson px-8 py-4 text-center text-[15px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-crimson-bright hover:shadow-[0_10px_28px_rgba(154,41,57,0.45)]"
            >
              Build Your Squad
            </a>
            <a
              href="#contact"
              className="rounded-sm border border-cream/30 px-8 py-4 text-center text-[15px] font-bold text-cream transition-all hover:-translate-y-0.5 hover:border-cream/70 hover:bg-cream/5"
            >
              Talk to a Partner
            </a>
          </div>
        </Reveal>

        {/* Credibility strip */}
        <Reveal delay={360}>
          <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-cream/15 pt-8 sm:mt-20 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dd className="font-serif text-3xl font-semibold text-cream sm:text-4xl">
                  {s.value}
                </dd>
                <dt className="mt-1.5 max-w-[220px] text-[13px] leading-snug text-cream/60">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
