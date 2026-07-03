"use client";

import {
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import XMark from "./icons/XMark";
import { frameworks, approachPrinciples, squadRoles } from "@/lib/data";

/* ------------------------------------------------------------------ */
/* Hooks                                                                */
/* ------------------------------------------------------------------ */

/**
 * Scroll-scrub: writes a 0→1 progress custom property (--p) on the element
 * as it travels up the viewport. The CSS defaults --p to 1, so without JS
 * (or with reduced motion) scenes rest in their final state.
 */
function useScrub(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 when the scene's top enters the viewport, 1 once it has risen
      // to 30% from the top — a comfortable "assembled by the time you
      // read it" window.
      const p = Math.min(1, Math.max(0, (vh - r.top) / (vh * 0.7)));
      el.style.setProperty("--p", p.toFixed(3));
    };
    const queue = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", queue, { passive: true });
    window.addEventListener("resize", queue, { passive: true });
    return () => {
      window.removeEventListener("scroll", queue);
      window.removeEventListener("resize", queue);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);
}

/** Tracks whether an element is in view (optionally latching once true). */
function useInView(
  ref: RefObject<HTMLElement | null>,
  { threshold = 0.35, once = false } = {},
) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold, once]);
  return inView;
}

/* ------------------------------------------------------------------ */
/* Scene 1 — Adaptive Intelligent Organisations: three planes scaling   */
/* under a governed-autonomy canopy. Separation is scroll-scrubbed.     */
/* ------------------------------------------------------------------ */

function AioScene() {
  const ref = useRef<HTMLDivElement>(null);
  useScrub(ref);
  const { aio } = frameworks;

  return (
    <div
      ref={ref}
      className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
      style={{ "--p": 1 } as React.CSSProperties}
    >
      {/* Isometric stack */}
      <div className="relative mx-auto h-[300px] w-full max-w-[420px] sm:h-[340px]">
        <p className="eyebrow absolute left-1/2 top-0 -translate-x-1/2 whitespace-nowrap text-gold/90">
          {aio.canopy}
        </p>
        <span
          aria-hidden
          className="absolute left-1/2 top-8 h-8 w-px -translate-x-1/2 bg-gradient-to-b from-gold/60 to-transparent"
        />
        <div
          className="absolute inset-0 top-6"
          style={{ perspective: "1100px" }}
          aria-hidden
        >
          {aio.planes.map((plane, i) => (
            <div
              key={plane.title}
              className={`absolute left-1/2 top-1/2 h-40 w-40 rounded-sm border sm:h-48 sm:w-48 ${
                i === 0
                  ? "border-crimson-bright/70 bg-crimson/15"
                  : i === 1
                    ? "border-gold/60 bg-navy-soft/40"
                    : "border-cream/40 bg-navy-soft/25"
              }`}
              style={{
                transform: `translate(-50%, -50%) rotateX(56deg) rotateZ(-42deg) translateZ(calc((${1 - i}) * var(--p) * 58px))`,
                boxShadow: "0 0 40px rgba(36,52,92,0.35)",
              }}
            >
              <span className="absolute left-3 top-2.5 font-serif text-[13px] font-semibold text-cream/70">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Copy */}
      <div>
        <p className="eyebrow mb-3 text-crimson-bright brightness-150">
          {aio.kicker}
        </p>
        <h3 className="text-title font-serif font-semibold text-cream">
          {aio.title}
        </h3>
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-cream/75">
          {aio.blurb}
        </p>
        <ul className="mt-8">
          {aio.planes.map((plane, i) => (
            <li key={plane.title} className="border-t border-cream/12 py-4">
              <div className="flex gap-4">
                <span className="font-serif text-[14px] font-semibold leading-6 text-tan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="text-[15px] font-bold text-cream">
                    {plane.title}
                  </h4>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-cream/65">
                    {plane.blurb}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Scene 2 — The continuous learning loop: six principles orbiting the  */
/* client. Comets ride the ring (legacy `orbit`); the active principle  */
/* advances automatically while the scene is on screen.                 */
/* ------------------------------------------------------------------ */

const RING = { c: 280, r: 170 };

function nodePos(i: number) {
  const angle = (i / approachPrinciples.length) * Math.PI * 2 - Math.PI / 2;
  return {
    x: RING.c + RING.r * Math.cos(angle),
    y: RING.c + RING.r * Math.sin(angle),
  };
}

function LoopScene() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const [active, setActive] = useState(0);

  // Auto-advance while on screen; manual selection restarts the timer.
  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(
      () => setActive((a) => (a + 1) % approachPrinciples.length),
      3500,
    );
    return () => clearInterval(id);
  }, [inView, active]);

  const principle = approachPrinciples[active];

  return (
    <div ref={ref} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <svg
        viewBox="0 0 560 560"
        className="mx-auto w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[460px]"
        aria-hidden
      >
        {/* ring + orbiting comets */}
        <circle
          cx={RING.c}
          cy={RING.c}
          r={RING.r}
          fill="none"
          stroke="rgb(247 243 238 / 0.12)"
          strokeWidth="2"
        />
        <circle
          cx={RING.c}
          cy={RING.c}
          r={RING.r}
          fill="none"
          stroke="var(--color-tan)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="90 978"
          opacity="0.85"
          style={{ animation: "orbit 7s linear infinite" }}
        />
        <circle
          cx={RING.c}
          cy={RING.c}
          r={RING.r}
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="46 1022"
          opacity="0.4"
          style={{ animation: "orbit 7s linear infinite reverse" }}
        />

        {/* centre: the client, gently pulsing */}
        <g
          style={{
            animation: "clients-pulse 3.2s ease-in-out infinite",
            transformOrigin: "center",
            transformBox: "fill-box",
          }}
        >
          <circle
            cx={RING.c}
            cy={RING.c}
            r="42"
            fill="var(--color-navy-soft)"
            stroke="var(--color-gold)"
            strokeOpacity="0.5"
          />
          <text
            x={RING.c}
            y={RING.c + 5}
            textAnchor="middle"
            fill="var(--color-cream)"
            fontSize="15"
            fontWeight="700"
            fontFamily="var(--font-sans)"
          >
            Clients
          </text>
        </g>

        {/* principle nodes */}
        {approachPrinciples.map((p, i) => {
          const pos = nodePos(i);
          const isActive = i === active;
          return (
            <g
              key={p.title}
              onClick={() => setActive(i)}
              className="cursor-pointer"
              style={{
                transition: "transform 0.3s var(--ease-out-soft)",
                transformOrigin: `${pos.x}px ${pos.y}px`,
                transform: isActive ? "scale(1.15)" : undefined,
              }}
            >
              {isActive && (
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r="27"
                  fill="none"
                  stroke="var(--color-gold)"
                  strokeWidth="1.5"
                  style={{
                    animation: "hint-pulse 2.4s ease-in-out infinite",
                    transformOrigin: `${pos.x}px ${pos.y}px`,
                  }}
                />
              )}
              <circle
                cx={pos.x}
                cy={pos.y}
                r="24"
                fill={isActive ? "var(--color-crimson)" : "var(--color-navy-soft)"}
                stroke="rgb(247 243 238 / 0.25)"
                style={{ transition: "fill 0.3s ease" }}
              />
              <text
                x={pos.x}
                y={pos.y + 5}
                textAnchor="middle"
                fill="var(--color-cream)"
                fontSize="14"
                fontWeight="600"
                fontFamily="var(--font-serif)"
              >
                {String(i + 1).padStart(2, "0")}
              </text>
            </g>
          );
        })}
      </svg>

      <div>
        <p className="eyebrow mb-3 text-crimson-bright brightness-150">
          {frameworks.loop.kicker}
        </p>
        <h3 className="text-title font-serif font-semibold text-cream">
          {frameworks.loop.title}
        </h3>
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-cream/75">
          {frameworks.loop.blurb}
        </p>

        {/* active principle detail */}
        <div key={active} className="svc-fade mt-8 border-t border-cream/12 pt-6">
          <p className="font-serif text-[14px] font-semibold text-gold">
            {String(active + 1).padStart(2, "0")}
          </p>
          <h4 className="mt-1 text-[16px] font-bold text-cream">
            {principle.title}
          </h4>
          <p className="mt-2 max-w-lg text-[13.5px] leading-relaxed text-cream/65">
            {principle.blurb}
          </p>
        </div>

        {/* all six, selectable */}
        <div className="mt-6 flex flex-wrap gap-2" role="tablist" aria-label="Learning loop principles">
          {approachPrinciples.map((p, i) => (
            <button
              key={p.title}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`rounded-full border px-3.5 py-2 text-[12px] font-semibold transition-colors ${
                i === active
                  ? "border-crimson-bright bg-crimson text-white"
                  : "border-cream/20 text-cream/70 hover:border-cream/50 hover:text-cream"
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Scene 3 — Squads: scattered specialists converge around the outcome. */
/* ------------------------------------------------------------------ */

/** Deterministic scatter offsets (px) and formation positions (%). */
const SQUAD_KEYS = [
  "project-director",
  "enterprise-architect",
  "ai-engineer",
  "data-scientist",
  "change-manager",
  "design-engineer",
  "scrum-master",
  "devops",
];
const SCATTER: [number, number][] = [
  [-150, -80], [130, -110], [-180, 30], [170, 70],
  [-100, 120], [150, -20], [-40, -140], [70, 130],
];

function SquadScene() {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState<"idle" | "scattered" | "formed">("idle");

  // idle→scattered→formed, decided inside the observer callback: before JS
  // the squad renders formed; if it's below the fold on hydration it
  // scatters, then converges when scrolled into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPhase("formed");
          observer.disconnect();
        } else {
          setPhase((p) => (p === "idle" ? "scattered" : p));
        }
      },
      { threshold: 0.45 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const formed = phase !== "scattered";

  const roles = SQUAD_KEYS.map(
    (k) => squadRoles.find((r) => r.key === k)!,
  ).filter(Boolean);
  const { squad } = frameworks;

  return (
    <div ref={ref} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className="order-last lg:order-first">
        <p className="eyebrow mb-3 text-crimson-bright brightness-150">
          {squad.kicker}
        </p>
        <h3 className="text-title font-serif font-semibold text-cream">
          {squad.title}
        </h3>
        <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-cream/75">
          {squad.blurb}
        </p>
        <a
          href="#squad"
          className="mt-8 inline-block rounded-sm bg-crimson px-7 py-3.5 text-[14px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-crimson-bright hover:shadow-[0_10px_28px_rgba(154,41,57,0.45)]"
        >
          {squad.cta}&nbsp;&rarr;
        </a>
      </div>

      {/* Convergence stage */}
      <div
        className="relative mx-auto h-[320px] w-full max-w-[460px] sm:h-[360px]"
        aria-hidden
      >
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <XMark className="mx-auto h-12 w-12 text-crimson-bright/80" />
          <p className="mt-1.5 font-serif text-[15px] italic text-cream/85">
            {squad.center}
          </p>
        </div>
        {roles.map((role, i) => {
          const angle = (i / roles.length) * Math.PI * 2 - Math.PI / 2;
          const left = 50 + 41 * Math.cos(angle);
          const top = 50 + 40 * Math.sin(angle);
          const [sx, sy] = SCATTER[i];
          return (
            <span
              key={role.key}
              className="absolute whitespace-nowrap rounded-full border px-3 py-1.5 text-[11.5px] font-semibold"
              style={{
                left: `${left}%`,
                top: `${top}%`,
                transform: formed
                  ? "translate(-50%, -50%)"
                  : `translate(-50%, -50%) translate(${sx}px, ${sy}px)`,
                opacity: formed ? 1 : 0.25,
                borderColor: formed
                  ? "rgb(201 168 106 / 0.45)"
                  : "rgb(247 243 238 / 0.15)",
                background: "var(--color-navy)",
                color: "rgb(247 243 238 / 0.9)",
                transition: `transform 0.9s var(--ease-out-soft) ${i * 70}ms, opacity 0.9s ease ${i * 70}ms, border-color 0.9s ease ${i * 70}ms`,
              }}
            >
              {role.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export default function Frameworks() {
  return (
    <section
      id="frameworks"
      className="section-pad overflow-hidden bg-navy-night text-cream"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow={frameworks.eyebrow}
          title={
            <>
              {frameworks.title} <em className="text-gold">{frameworks.titleEm}</em>.
            </>
          }
          intro={frameworks.intro}
        />

        <div className="mt-20 flex flex-col gap-24 sm:gap-32">
          <Reveal>
            <AioScene />
          </Reveal>
          <Reveal>
            <LoopScene />
          </Reveal>
          <Reveal>
            <SquadScene />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
