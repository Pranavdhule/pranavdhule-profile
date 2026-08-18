import { ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { ActionButton, ActionLink } from "@/components/ActionButton";
import { SectionTitle } from "@/components/SectionTitle";
import { projects, type Project } from "@/data/projects";

function Detail({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="overflow-hidden"
    >
      <div className="mt-6 grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase text-primary">Problem</h4>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
          <h4 className="mt-5 text-xs font-semibold tracking-widest uppercase text-primary">Solution</h4>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.solution}</p>
          {project.notes?.length ? (
            <ul className="mt-5 space-y-1.5">
              {project.notes.map((note) => (
                <li key={note} className="rounded-lg border border-border bg-secondary/50 px-3 py-2 font-mono text-xs text-foreground">
                  {note}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div>
          <h4 className="text-xs font-semibold tracking-widest uppercase text-primary">Approach</h4>
          <ol className="mt-2 space-y-2">
            {project.methodology.map((step, i) => (
              <li key={step} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-md bg-secondary text-[11px] font-semibold text-foreground">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <h4 className="mt-5 text-xs font-semibold tracking-widest uppercase text-primary">Outcome</h4>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.results}</p>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
      className="glass rounded-3xl p-7 transition-shadow hover:shadow-glow sm:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-xl font-semibold">{project.title}</h3>
          <p className="mt-1 text-sm text-primary">{project.tagline}</p>
        </div>
        <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-[11px] font-medium tracking-widest text-muted-foreground uppercase">
          Project 0{index + 1}
        </span>
      </div>

      <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{project.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li key={t} className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1 text-xs font-medium">
            {t}
          </li>
        ))}
      </ul>

      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {project.features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
            <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gradient-brand" aria-hidden="true" />
            {f}
          </li>
        ))}
      </ul>

      {open ? <Detail project={project} /> : null}

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <ActionButton
          type="button"
          variant="outline"
          size="sm"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
        >
          {open ? "Hide details" : "View details"}
        </ActionButton>
        {project.github ? (
          <ActionLink href={project.github} target="_blank" rel="noreferrer noopener" variant="ghost" size="sm">
            <Github className="size-4" aria-hidden="true" />
            Code
          </ActionLink>
        ) : (
          <span className="text-xs text-muted-foreground">Repository link coming soon</span>
        )}
        {project.demo ? (
          <ActionLink href={project.demo} target="_blank" rel="noreferrer noopener" variant="ghost" size="sm">
            <ExternalLink className="size-4" aria-hidden="true" />
            Live demo
          </ActionLink>
        ) : null}
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Projects"
          title="Things I have built"
          description="Each project below started from a real problem and ended as a working, usable application."
        />
        <div className="mt-14 grid gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
