import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { leadership } from "@/lib/data";

export default function Leadership() {
  return (
    <section id="leadership" className="section-pad bg-cream-light">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Leadership"
          title={
            <>
              Partner-led from the first conversation to the{" "}
              <em className="text-crimson">final outcome</em>.
            </>
          }
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          {/* George Ellis profile */}
          <Reveal>
            <article className="h-full rounded-sm border border-navy/10 bg-white">
              <div className="grid sm:grid-cols-[200px_1fr]">
                {/* Monogram portrait placeholder — swap for a photo when available */}
                <div className="flex items-center justify-center bg-navy py-12 sm:py-0">
                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-2 border-gold/60">
                    <span className="font-serif text-4xl font-semibold text-gold">GE</span>
                  </div>
                </div>
                <div className="px-7 py-8 sm:px-9">
                  <h3 className="font-serif text-[26px] font-semibold text-navy">
                    {leadership.name}
                  </h3>
                  <p className="eyebrow mt-1 text-crimson">{leadership.role}</p>
                  <p className="mt-5 border-l-2 border-gold pl-4 font-serif text-[17px] italic leading-relaxed text-navy/80">
                    {leadership.headline}
                  </p>
                </div>
              </div>
              <div className="border-t border-navy/8 px-7 py-7 sm:px-9">
                {leadership.bio.map((para) => (
                  <p key={para.slice(0, 32)} className="mb-4 text-[14.5px] leading-relaxed text-body last:mb-0">
                    {para}
                  </p>
                ))}
              </div>
            </article>
          </Reveal>

          {/* Network + join */}
          <div className="flex flex-col gap-8">
            <Reveal delay={100}>
              <article className="rounded-sm border border-navy/10 bg-white px-8 py-8">
                <h3 className="font-serif text-[21px] font-semibold text-navy">
                  Backed by the EngX network
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-body">
                  Behind every partner sits a curated network of senior
                  specialists — more than 250 years of combined experience across
                  financial services, the public sector, telecommunications, and
                  beyond. Every expert is vetted, referenced, and deployed under
                  partner accountability.
                </p>
              </article>
            </Reveal>
            <Reveal delay={200}>
              <article className="flex-1 rounded-sm bg-navy px-8 py-8 text-cream">
                <p className="eyebrow mb-3 text-gold">For specialists</p>
                <h3 className="font-serif text-[21px] font-semibold">
                  Join our network
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-cream/75">
                  Senior consultants and subject-matter experts: bring your
                  expertise to engagements that match your depth — contract,
                  permanent, or both.
                </p>
                <a
                  href="#contact"
                  data-interest="network"
                  className="mt-6 inline-block rounded-sm border border-gold/50 px-6 py-3 text-[13.5px] font-bold text-gold transition-all hover:-translate-y-0.5 hover:bg-gold hover:text-navy"
                >
                  Apply to the Network
                </a>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
