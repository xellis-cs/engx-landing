"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import XMark from "./icons/XMark";
import { serviceLines } from "@/lib/data";

function CapabilityList({ id }: { id: string }) {
  const svc = serviceLines.find((s) => s.id === id)!;
  return (
    <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
      {svc.capabilities.map((c) => (
        <div key={c.name} className="border-l-2 border-crimson/60 pl-4">
          <h4 className="text-[15px] font-bold text-navy">{c.name}</h4>
          <p className="mt-1 text-[13.5px] leading-relaxed text-body">{c.blurb}</p>
        </div>
      ))}
    </div>
  );
}

export default function Services() {
  const [active, setActive] = useState(serviceLines[0].id);
  // Falls back to the first line so the desktop panel never renders empty
  // (mobile accordion allows collapsing everything via active === "").
  const activeSvc = serviceLines.find((s) => s.id === active) ?? serviceLines[0];

  return (
    <section id="services" className="section-pad bg-cream-light">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title={
            <>
              Seven service lines, designed to{" "}
              <em className="text-crimson">work together</em>.
            </>
          }
          intro="Each service line is a door into the same integrated team. Start where the pressure is highest — the capability behind it scales across the full business value chain."
        />

        {/* Desktop: master–detail */}
        <Reveal className="mt-14 hidden gap-10 lg:grid lg:grid-cols-[380px_1fr]">
          <div role="tablist" aria-label="Service lines" className="flex flex-col">
            {serviceLines.map((s) => {
              const isActive = s.id === activeSvc.id;
              return (
                <button
                  key={s.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(s.id)}
                  className={`rule-top group flex items-baseline gap-4 px-3 py-4.5 text-left transition-colors ${
                    isActive ? "bg-navy text-cream" : "hover:bg-navy/4"
                  }`}
                >
                  <span
                    className={`font-serif text-[14px] font-semibold ${
                      isActive ? "text-gold" : "text-tan"
                    }`}
                  >
                    {s.num}
                  </span>
                  <span
                    className={`text-[15.5px] font-bold leading-snug ${
                      isActive ? "text-cream" : "text-navy group-hover:text-crimson"
                    }`}
                  >
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-sm border border-navy/10 bg-white px-9 py-9">
            {/* Signature motif, threaded quietly behind the content */}
            <XMark className="pointer-events-none absolute -bottom-14 -right-10 h-64 w-64 text-navy/[0.04]" />
            {/* key re-mounts the panel so svc-fade runs on every tab switch */}
            <div key={activeSvc.id} className="svc-fade relative">
              <p className="eyebrow mb-2 text-tan">Service line {activeSvc.num}</p>
              <h3 className="text-title font-serif font-semibold text-navy">
                {activeSvc.title}
              </h3>
              <p className="mb-8 mt-3 max-w-xl text-[15px] leading-relaxed text-body">
                {activeSvc.summary}
              </p>
              <CapabilityList id={activeSvc.id} />
            </div>
          </div>
        </Reveal>

        {/* Mobile / tablet: accordion */}
        <div className="mt-12 lg:hidden">
          {serviceLines.map((s) => {
            const isOpen = s.id === active;
            return (
              <div key={s.id} className="rule-top">
                <button
                  onClick={() => setActive(isOpen ? "" : s.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-baseline gap-4 py-5 text-left"
                >
                  <span className="font-serif text-[14px] font-semibold text-tan">
                    {s.num}
                  </span>
                  <span className="flex-1 text-[16px] font-bold leading-snug text-navy">
                    {s.title}
                  </span>
                  <span
                    className={`text-[20px] leading-none text-crimson transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-400 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className={`pb-7 pl-9 pr-1 ${isOpen ? "svc-fade" : ""}`}>
                      <p className="mb-5 text-[14px] italic leading-relaxed text-body">
                        {s.summary}
                      </p>
                      <CapabilityList id={s.id} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
