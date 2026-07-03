import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import WorldMap from "./WorldMap";
import { globalReach, stats } from "@/lib/data";

/**
 * Closing wide shot: the animated world map. SA-founded, globally delivered —
 * the last thing a reader sees before the contact section.
 */
export default function GlobalReach() {
  return (
    <section id="global-reach" className="section-pad bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Global Reach"
          title={
            <>
              Engineered in South Africa,{" "}
              <em className="text-crimson">delivered anywhere</em>.
            </>
          }
        />

        <div className="mt-14">
          <WorldMap />
        </div>

        <Reveal>
          <p className="mx-auto mt-10 max-w-xl text-center font-serif text-[21px] italic leading-relaxed text-navy">
            {globalReach.statement}
          </p>
          <p className="mt-3 text-center text-[13px] text-body">
            {stats[0].value} {stats[0].label.toLowerCase()}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
