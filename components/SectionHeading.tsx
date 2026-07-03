import Reveal from "./Reveal";

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  dark?: boolean;
}) {
  return (
    <Reveal className="max-w-3xl">
      <p className={`eyebrow mb-4 ${dark ? "text-gold" : "text-crimson"}`}>{eyebrow}</p>
      <h2 className={`text-headline font-serif font-semibold ${dark ? "text-cream" : "text-navy"}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-5 text-[17px] leading-relaxed ${dark ? "text-cream/75" : "text-body"}`}>
          {intro}
        </p>
      )}
    </Reveal>
  );
}
