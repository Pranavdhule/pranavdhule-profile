import { Award, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { certifications } from "@/data/profile";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Certifications"
          title="Learning and activities"
          description="Courses and technical activities that shaped how I work."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={`${cert.name}-${i}`} delay={i * 0.06}>
              <div className="glass h-full rounded-2xl p-6 transition-shadow hover:shadow-glow">
                <span className="inline-flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                  <Award className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-sm font-semibold">{cert.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
                <p className="mt-0.5 text-xs text-muted-foreground">{cert.date}</p>
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:underline"
                  >
                    View credential
                    <ExternalLink className="size-3.5" aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
