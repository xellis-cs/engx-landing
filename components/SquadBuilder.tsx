"use client";

import { useMemo, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { roleCategories, squadRoles, type RoleCategory } from "@/lib/data";

type Counts = Record<string, number>;

export default function SquadBuilder() {
  const [filter, setFilter] = useState<RoleCategory | "all">("all");
  const [counts, setCounts] = useState<Counts>({});
  const [submitted, setSubmitted] = useState(false);

  const visibleRoles = useMemo(
    () => squadRoles.filter((r) => filter === "all" || r.cat === filter),
    [filter],
  );
  const selected = squadRoles.filter((r) => (counts[r.key] ?? 0) > 0);
  const total = selected.reduce((sum, r) => sum + counts[r.key], 0);

  const adjust = (key: string, delta: number) =>
    setCounts((prev) => {
      const next = Math.max(0, (prev[key] ?? 0) + delta);
      const copy = { ...prev, [key]: next };
      if (next === 0) delete copy[key];
      return copy;
    });

  return (
    <section id="squad" className="section-pad bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Build Your Squad"
          title={
            <>
              Configure the team your project needs —{" "}
              <em className="text-crimson">we assemble it</em>.
            </>
          }
          intro="Select the roles that fit your project and how many of each you need. Our partners review your configuration against the EngX network of vetted subject-matter experts and come back within one business day."
        />

        {/* Category filter */}
        <Reveal className="mt-12">
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filter roles">
            {roleCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`rounded-full border px-4.5 py-2 text-[13px] font-semibold transition-colors ${
                  filter === c.id
                    ? "border-navy bg-navy text-cream"
                    : "border-navy/20 bg-transparent text-navy/75 hover:border-navy/50"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_360px]">
          {/* Role cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {visibleRoles.map((r) => {
              const count = counts[r.key] ?? 0;
              return (
                <div
                  key={r.key}
                  className={`flex flex-col justify-between rounded-sm border bg-white px-6 py-6 transition-all duration-200 ${
                    count > 0
                      ? "border-crimson/50 shadow-[0_10px_26px_rgba(154,41,57,0.12)]"
                      : "border-navy/10 hover:border-navy/25"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[15.5px] font-bold text-navy">{r.name}</h3>
                      <span className="eyebrow shrink-0 rounded-full bg-cream px-2.5 py-1 !text-[10px] text-tan">
                        {roleCategories.find((c) => c.id === r.cat)?.label}
                      </span>
                    </div>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-body">
                      {r.desc}
                    </p>
                  </div>
                  <div className="mt-5 flex items-center gap-3">
                    {count === 0 ? (
                      <button
                        onClick={() => adjust(r.key, 1)}
                        className="rounded-sm border border-navy/25 px-4 py-2 text-[13px] font-bold text-navy transition-colors hover:border-crimson hover:text-crimson"
                      >
                        + Add to squad
                      </button>
                    ) : (
                      <div className="flex items-center gap-1 rounded-sm border border-navy/20">
                        <button
                          onClick={() => adjust(r.key, -1)}
                          aria-label={`Remove one ${r.name}`}
                          className="h-10 w-10 text-[18px] font-bold text-navy transition-colors hover:text-crimson"
                        >
                          −
                        </button>
                        <span className="min-w-7 text-center text-[15px] font-bold text-navy">
                          {count}
                        </span>
                        <button
                          onClick={() => adjust(r.key, 1)}
                          aria-label={`Add one ${r.name}`}
                          className="h-10 w-10 text-[18px] font-bold text-navy transition-colors hover:text-crimson"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Summary panel */}
          <aside className="rounded-sm border border-navy/12 bg-navy px-7 py-8 text-cream lg:sticky lg:top-24">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-serif text-[20px] font-semibold">Your Squad</h3>
              <span className="rounded-full bg-crimson px-3 py-1 text-[12px] font-bold">
                {total} {total === 1 ? "person" : "people"}
              </span>
            </div>

            {selected.length === 0 ? (
              <p className="mt-6 text-[13.5px] leading-relaxed text-cream/60">
                No roles selected yet. Add any role to start shaping your team —
                or skip ahead and{" "}
                <a href="#contact" className="font-bold text-gold underline underline-offset-2">
                  describe the problem
                </a>{" "}
                instead.
              </p>
            ) : (
              <ul className="mt-6 divide-y divide-cream/12">
                {selected.map((r) => (
                  <li key={r.key} className="flex items-center justify-between py-2.5 text-[14px]">
                    <span className="text-cream/85">{r.name}</span>
                    <span className="font-bold text-gold">×{counts[r.key]}</span>
                  </li>
                ))}
              </ul>
            )}

            {submitted ? (
              <div className="mt-7 rounded-sm border border-gold/40 bg-navy-deep px-5 py-5 text-center">
                <p className="font-serif text-[17px] font-semibold text-gold">
                  Request received
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-cream/70">
                  We&apos;ll be in touch within one business day to discuss your
                  team configuration.
                </p>
              </div>
            ) : (
              <form
                className="mt-7 flex flex-col gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <label className="sr-only" htmlFor="squad-email">
                  Work email
                </label>
                <input
                  id="squad-email"
                  type="email"
                  required
                  placeholder="Work email"
                  className="rounded-sm border border-cream/25 bg-navy-deep px-4 py-3 text-[14px] text-cream placeholder:text-cream/40 focus:border-gold focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={total === 0}
                  className="rounded-sm bg-crimson px-5 py-3.5 text-[14px] font-bold text-white transition-all enabled:hover:-translate-y-0.5 enabled:hover:bg-crimson-bright disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Request This Squad
                </button>
                {selected.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setCounts({})}
                    className="text-[12.5px] font-semibold text-cream/50 underline-offset-2 hover:text-cream hover:underline"
                  >
                    Clear selection
                  </button>
                )}
              </form>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
