import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { education } from "@/data/profile";

export function Education() {
  return (
    <section id="education" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Education" title="Academic background" />
        <div className="mx-auto mt-14 grid max-w-3xl gap-5">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.07}>
              <div className="glass flex gap-5 rounded-2xl p-6">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                  <GraduationCap className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{item.degree}</h3>
                  <p className="mt-1 text-sm text-primary">{item.institution}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
