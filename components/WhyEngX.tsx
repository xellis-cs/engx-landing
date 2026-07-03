import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { valueProps, leadership } from "@/lib/data";

export default function WhyEngX() {
  return (
    <section id="why-engx" className="section-pad bg-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Why EngX"
          title={
            <>
              Senior expertise, without the{" "}
              <em className="text-crimson">overhead of a big firm</em>.
            </>
          }
          intro="Our purpose is to help clients navigate complexity and achieve sustainable growth through the integration of human-centric design, advanced intelligence, and precision execution. The EngX network brings together specialists with more than 250 years of combined experience across markets and sectors — assembled per engagement, so you pay for outcomes, not overheads."
        />

        <div className="mt-14 grid gap-x-10 gap-y-0 md:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((vp, i) => (
            <Reveal key={vp.title} delay={(i % 3) * 80}>
              <div className="rule-top flex gap-5 py-7">
                <span className="font-serif text-[15px] font-semibold leading-7 text-tan">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="text-[16.5px] font-bold leading-snug text-navy">
                    {vp.title}
                  </h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-body">
                    {vp.blurb}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Partner-experience line */}
        <Reveal>
          <div className="mt-10 rounded-sm border border-navy/10 bg-cream-light px-6 py-7 sm:px-9">
            <p className="eyebrow mb-4 text-navy/50">{leadership.experienceLine}</p>
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {leadership.clients.map((c) => (
                <li
                  key={c}
                  className="font-serif text-[17px] font-semibold text-navy/70"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
