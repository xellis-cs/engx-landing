"use client";

import { useEffect, useRef, useState } from "react";
import ChatIcon from "./icons/ChatIcon";
import { site } from "@/lib/site";

/**
 * Floating assistant button, ported from the legacy site's "Pietie" FAB.
 * Presentational only: the chatbot itself is a roadmap item
 * (docs/ARCHITECTURE.md), so the panel says so and hands off to the
 * contact section — no fake chat backend.
 */
export default function ChatFab() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Close on Escape or on click outside the panel.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        btnRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !btnRef.current?.contains(t)) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <div className="fixed bottom-5 right-5 z-40 print:hidden sm:bottom-6 sm:right-6">
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label={site.assistant}
          className="absolute bottom-[calc(100%+12px)] right-0 w-[290px] overflow-hidden rounded-sm border border-cream/15 bg-navy-deep shadow-[0_16px_48px_rgba(11,18,34,0.45)]"
          style={{ animation: "msg-in 0.35s var(--ease-out-soft) both" }}
        >
          <div className="flex items-center gap-2.5 border-b border-cream/10 px-4 py-3">
            <span
              aria-hidden
              className="h-2 w-2 rounded-full bg-[#5fd98a]"
              style={{ animation: "pdot 2s infinite" }}
            />
            <span className="text-[13px] font-bold text-cream">
              {site.assistant}
            </span>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="ml-auto flex h-10 w-10 items-center justify-center text-[20px] leading-none text-cream/60 transition-colors hover:text-cream"
            >
              &times;
            </button>
          </div>
          <div className="px-4 py-4">
            <p
              className="rounded-sm bg-navy px-3.5 py-3 text-[13px] leading-relaxed text-cream/85"
              style={{ animation: "msg-in 0.5s var(--ease-out-soft) 0.15s both" }}
            >
              Goeie dag. I&apos;m {site.assistant} — I&apos;ll be answering
              questions about EngX here soon. Until then, a partner will
              gladly take yours directly.
            </p>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 block rounded-sm bg-crimson px-4 py-2.5 text-center text-[13px] font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-crimson-bright"
              style={{ animation: "msg-in 0.5s var(--ease-out-soft) 0.3s both" }}
            >
              Talk to a Partner
            </a>
          </div>
        </div>
      )}

      <button
        ref={btnRef}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={`${site.assistant} — coming soon`}
        className="flex items-center gap-2.5 rounded-full bg-navy-deep py-3 pl-4 pr-5 text-[13px] font-semibold text-cream shadow-[0_8px_24px_rgba(11,18,34,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(11,18,34,0.4)]"
        style={{ animation: "fab-rise 0.7s var(--ease-out-soft) 0.6s both" }}
      >
        <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-tan to-crimson">
          <ChatIcon className="h-3.5 w-3.5 text-navy-night" />
          <span
            aria-hidden
            className="absolute -bottom-px -right-px h-2 w-2 rounded-full border-2 border-navy-deep bg-[#5fd98a]"
            style={{ animation: "pdot 2s infinite" }}
          />
        </span>
        <span className="max-[420px]:hidden">Ask {site.assistant}</span>
      </button>
    </div>
  );
}
