"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { globalReach } from "@/lib/data";

/**
 * The global-reach map: pin-free world map with animated, data-driven pins
 * (drop in staggered, then idle bob; a halo pulses at each tip) and a
 * periodic light sweep — motion ported from the legacy site.
 *
 * Render states mirror Reveal.tsx: markup defaults to the animations simply
 * running (so no JS still shows an animated — or, under reduced motion, a
 * static — map); once hydrated, the pins hold until the map scrolls into
 * view, then drop.
 */
export default function WorldMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<"idle" | "hidden" | "shown">("idle");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    setState("hidden");
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const live = state !== "hidden"; // idle (no JS yet) or shown

  return (
    <div
      ref={ref}
      className="map-shine-wrap mx-auto max-w-3xl rounded-sm"
      role="img"
      aria-label="World map indicating the EngX network across Africa, Europe, North America, and Australia"
    >
      <Image
        src="/world-map.png"
        alt=""
        width={800}
        height={445}
        className="h-auto w-full"
        style={{
          animation: live ? "map-fade-in 1.4s var(--ease-out-soft) both" : "none",
          opacity: live ? undefined : 0,
        }}
      />
      {globalReach.markers.map((m, i) => (
        <span
          key={m.label}
          className="absolute"
          style={{ left: `${m.x}%`, top: `${m.y}%` }}
        >
          {/* halo pulsing outward from the pin tip */}
          <span
            aria-hidden
            className={`absolute left-0 top-0 h-3 w-3 rounded-full ${
              m.hq ? "bg-navy" : "bg-crimson"
            }`}
            style={{
              transform: "translate(-50%, -50%)",
              animation: live
                ? `pin-pulse 2.4s ease-in-out ${0.7 + i * 0.12}s infinite`
                : "none",
              opacity: live ? undefined : 0,
            }}
          />
          {/* teardrop pin, anchored at its tip */}
          <svg
            viewBox="0 0 24 32"
            aria-hidden
            className={`absolute left-0 top-0 h-7 w-auto drop-shadow-[0_3px_6px_rgba(26,37,64,0.35)] sm:h-8 ${
              m.hq ? "text-navy" : "text-crimson"
            }`}
            style={{
              transform: "translate(-50%, -100%)",
              animation: live
                ? `pin-drop 0.7s var(--ease-out-soft) ${0.35 + i * 0.12}s both`
                : "none",
              opacity: live ? undefined : 0,
            }}
          >
            <g
              style={{
                animation: live
                  ? `pin-bob 3s ease-in-out ${1.2 + i * 0.3}s infinite`
                  : "none",
              }}
            >
              <path
                fill="currentColor"
                d="M12 0C5.4 0 0 5.2 0 11.6 0 20.3 12 32 12 32s12-11.7 12-20.4C24 5.2 18.6 0 12 0Z"
              />
              <circle cx="12" cy="11.5" r="4.5" fill="var(--color-cream)" />
            </g>
          </svg>
        </span>
      ))}
    </div>
  );
}
