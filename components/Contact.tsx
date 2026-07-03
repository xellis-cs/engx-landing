"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { contactInterests } from "@/lib/data";
import { site } from "@/lib/site";

const inputCls =
  "w-full rounded-sm border border-navy/20 bg-white px-4 py-3 text-[14.5px] text-ink placeholder:text-ink/35 focus:border-crimson focus:outline-none focus:ring-2 focus:ring-crimson/15";
const labelCls = "mb-1.5 block text-[12.5px] font-bold uppercase tracking-[0.08em] text-navy/70";

function Success({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy text-2xl text-gold">
        ✓
      </div>
      <h4 className="mt-5 font-serif text-[22px] font-semibold text-navy">{title}</h4>
      <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-body">{body}</p>
    </div>
  );
}

export default function Contact() {
  const [tab, setTab] = useState<"business" | "network">("business");
  const [sent, setSent] = useState<{ business: boolean; network: boolean }>({
    business: false,
    network: false,
  });

  const markSent = (which: "business" | "network") =>
    setSent((s) => ({ ...s, [which]: true }));

  return (
    <section id="contact" className="section-pad bg-sand/45">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
          {/* Left: pitch */}
          <div>
            <SectionHeading
              eyebrow="Start a Conversation"
              title={
                <>
                  Tell us where it hurts. We&apos;ll bring the{" "}
                  <em className="text-crimson">right people</em>.
                </>
              }
              intro="No discovery-phase theatre. Describe the challenge, and a partner — not a salesperson — will come back to you within one business day."
            />
            <Reveal delay={150}>
              <dl className="mt-10 space-y-6 border-t border-navy/15 pt-8">
                <div>
                  <dt className="eyebrow text-navy/50">Email</dt>
                  <dd className="mt-1">
                    <a
                      href={`mailto:${site.email}`}
                      className="font-serif text-[19px] font-semibold text-navy underline-offset-4 hover:text-crimson hover:underline"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow text-navy/50">Based in</dt>
                  <dd className="mt-1 text-[15px] text-body">
                    South Africa — with partners, clients, and specialists across the globe.
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          {/* Right: forms */}
          <Reveal delay={100}>
            <div className="rounded-sm border border-navy/10 bg-white shadow-[0_24px_60px_rgba(26,37,64,0.10)]">
              <div className="grid grid-cols-2" role="tablist" aria-label="Contact forms">
                {(
                  [
                    ["business", "Business Enquiry"],
                    ["network", "Join Our Network"],
                  ] as const
                ).map(([id, label]) => (
                  <button
                    key={id}
                    role="tab"
                    aria-selected={tab === id}
                    onClick={() => setTab(id)}
                    className={`px-4 py-4 text-[13.5px] font-bold transition-colors ${
                      tab === id
                        ? "bg-white text-crimson"
                        : "bg-cream text-navy/55 hover:text-navy"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div className="px-6 py-7 sm:px-9 sm:py-9">
                {tab === "business" &&
                  (sent.business ? (
                    <Success
                      title="Message sent"
                      body="Thank you for reaching out — a partner will get back to you within one business day."
                    />
                  ) : (
                    <form
                      className="space-y-5"
                      onSubmit={(e) => {
                        e.preventDefault();
                        markSent("business");
                      }}
                    >
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className={labelCls} htmlFor="b-name">Full name</label>
                          <input id="b-name" required className={inputCls} placeholder="Jane Smith" autoComplete="name" />
                        </div>
                        <div>
                          <label className={labelCls} htmlFor="b-company">Company</label>
                          <input id="b-company" className={inputCls} placeholder="Acme (Pty) Ltd" autoComplete="organization" />
                        </div>
                      </div>
                      <div>
                        <label className={labelCls} htmlFor="b-email">Work email</label>
                        <input id="b-email" type="email" required className={inputCls} placeholder="jane@company.com" autoComplete="email" />
                      </div>
                      <div>
                        <label className={labelCls} htmlFor="b-interest">What can we help with?</label>
                        <select id="b-interest" className={inputCls}>
                          {contactInterests.map((i) => (
                            <option key={i}>{i}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className={labelCls} htmlFor="b-msg">Message</label>
                        <textarea
                          id="b-msg"
                          required
                          rows={4}
                          className={inputCls}
                          placeholder="Briefly describe your challenge or goal…"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full rounded-sm bg-crimson px-6 py-4 text-[14.5px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-crimson-bright hover:shadow-[0_10px_26px_rgba(154,41,57,0.35)]"
                      >
                        Send Message
                      </button>
                    </form>
                  ))}

                {tab === "network" &&
                  (sent.network ? (
                    <Success
                      title="Application received"
                      body="Thank you for your interest in joining EngX — we'll review your details and reach out shortly."
                    />
                  ) : (
                    <form
                      className="space-y-5"
                      onSubmit={(e) => {
                        e.preventDefault();
                        markSent("network");
                      }}
                    >
                      <div className="grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className={labelCls} htmlFor="n-name">Full name</label>
                          <input id="n-name" required className={inputCls} placeholder="Jane Smith" autoComplete="name" />
                        </div>
                        <div>
                          <label className={labelCls} htmlFor="n-years">Years of experience</label>
                          <input id="n-years" type="number" min={0} max={60} className={inputCls} placeholder="12" />
                        </div>
                      </div>
                      <div>
                        <label className={labelCls} htmlFor="n-email">Email</label>
                        <input id="n-email" type="email" required className={inputCls} placeholder="jane@email.com" autoComplete="email" />
                      </div>
                      <div>
                        <label className={labelCls} htmlFor="n-linkedin">LinkedIn profile</label>
                        <input id="n-linkedin" type="url" className={inputCls} placeholder="https://linkedin.com/in/…" />
                      </div>
                      <fieldset>
                        <legend className={labelCls}>Engagement preference</legend>
                        <div className="grid grid-cols-3 gap-2">
                          {["Contract", "Permanent", "Either"].map((opt) => (
                            <label
                              key={opt}
                              className="cursor-pointer rounded-sm border border-navy/20 px-3 py-2.5 text-center text-[13px] font-semibold text-navy/75 transition-colors has-checked:border-crimson has-checked:bg-crimson/5 has-checked:text-crimson"
                            >
                              <input type="radio" name="n-pref" value={opt} required className="sr-only" />
                              {opt}
                            </label>
                          ))}
                        </div>
                      </fieldset>
                      <div>
                        <label className={labelCls} htmlFor="n-msg">Tell us about yourself</label>
                        <textarea
                          id="n-msg"
                          required
                          rows={4}
                          className={inputCls}
                          placeholder="Your background, sectors you've worked in, and why you'd like to join…"
                        />
                      </div>
                      <p className="text-[12.5px] leading-relaxed text-body">
                        Have a CV ready? Send it to{" "}
                        <a href={`mailto:${site.email}`} className="font-bold text-crimson">
                          {site.email}
                        </a>{" "}
                        after submitting — a secure upload portal is on the way.
                      </p>
                      <button
                        type="submit"
                        className="w-full rounded-sm bg-navy px-6 py-4 text-[14.5px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-navy-deep hover:shadow-[0_10px_26px_rgba(26,37,64,0.35)]"
                      >
                        Submit Application
                      </button>
                    </form>
                  ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
