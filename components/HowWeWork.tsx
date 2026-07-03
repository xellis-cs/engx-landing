import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { squadTypes, approachPrinciples, bauServices } from "@/lib/data";

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="section-pad bg-navy-deep text-cream">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          eyebrow="How We Work"
          title={
            <>
              Two squads in concert — one clears the path,{" "}
              <em className="text-gold">one builds what lasts</em>.
            </>
          }
          intro="Every engagement is wrapped in customer-centric design and backed by an always-on layer of business-as-usual capacity, so tactical wins compound into structural maturity."
        />

        {/* The two squad types */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {squadTypes.map((sq, i) => (
            <Reveal key={sq.title} delay={i * 100}>
              <article className="group h-full rounded-sm border border-cream/12 bg-navy px-8 py-9 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] sm:px-10 sm:py-11">
                <p className="eyebrow mb-4 text-crimson-bright brightness-150">
                  {sq.kicker}
                </p>
                <h3 className="text-title font-serif font-semibold text-cream">
                  {sq.title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-cream/75">
                  {sq.blurb}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Operating principles */}
        <Reveal className="mt-20">
          <h3 className="eyebrow mb-8 text-cream/50">
            The principles behind every engagement
          </h3>
        </Reveal>
        <div className="grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
          {approachPrinciples.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 80}>
              <div className="border-t border-cream/12 py-6">
                <h4 className="text-[15.5px] font-bold text-cream">{p.title}</h4>
                <p className="mt-2 text-[13.5px] leading-relaxed text-cream/65">
                  {p.blurb}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* BAU strip */}
        <Reveal className="mt-16">
          <div className="rounded-sm border border-cream/12 bg-navy-night/60 px-7 py-8 sm:px-9">
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-serif text-[20px] font-semibold text-cream">
                Business-as-Usual Services
              </h3>
              <p className="text-[13px] text-cream/55">
                Always-on capacity for the work that can&apos;t wait.
              </p>
            </div>
            <ul className="grid gap-x-8 gap-y-5 sm:grid-cols-2 lg:grid-cols-5">
              {bauServices.map((b) => (
                <li key={b.title}>
                  <h5 className="text-[13.5px] font-bold text-gold">{b.title}</h5>
                  <p className="mt-1 text-[12.5px] leading-relaxed text-cream/60">
                    {b.blurb}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
