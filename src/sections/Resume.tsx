import { Download, FileText } from "lucide-react";
import { ActionLink } from "@/components/ActionButton";
import { Reveal } from "@/components/Reveal";
import { profile } from "@/data/profile";

export function Resume() {
  return (
    <section id="resume" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="glass relative overflow-hidden rounded-3xl p-8 text-center sm:p-12">
          <span
            className="pointer-events-none absolute inset-x-0 -top-24 mx-auto size-64 rounded-full bg-gradient-brand opacity-20 blur-3xl"
            aria-hidden="true"
          />
          <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-secondary text-primary">
            <FileText className="size-6" aria-hidden="true" />
          </span>
          <h2 className="mt-5 font-display text-2xl font-semibold sm:text-3xl">Resume</h2>
          <p className="mx-auto mt-3 max-w-xl leading-relaxed text-muted-foreground">
            Download a one-page summary of my education, skills and projects.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <ActionLink href={profile.resumeUrl} download size="lg">
              <Download className="size-4" aria-hidden="true" />
              Download Resume
            </ActionLink>
            <ActionLink href={`mailto:${profile.email}`} variant="outline" size="lg">
              Email me
            </ActionLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
