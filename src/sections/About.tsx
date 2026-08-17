import { BrainCircuit, Code2, Database, LineChart } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionTitle } from "@/components/SectionTitle";
import { highlights } from "@/data/profile";

const icons = [Code2, BrainCircuit, LineChart, Database];

const capabilities = [
  "Build machine learning models",
  "Work with real-world datasets",
  "Develop Python applications",
  "Create data-driven solutions",
  "Build web apps with Flask & Streamlit",
  "Work with SQL databases",
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="About"
          title="Engineering practical intelligence"
          description="A Computer Engineering graduate focused on Artificial Intelligence, Machine Learning, Deep Learning, Python, Data Analytics and Software Development."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="glass rounded-3xl p-7 sm:p-9">
            <div className="space-y-4 leading-relaxed text-muted-foreground">
              <p>
                I study and build at the intersection of data and software. My work so far has been
                about taking a real problem, finding or preparing the data behind it, and shipping a
                working application on top of a model rather than stopping at a notebook.
              </p>
              <p>
                That means cleaning messy datasets, comparing model families, reasoning about the
                metric that actually matters for the use case, and wrapping the result in an
                interface a non-technical user can operate.
              </p>
              <p>
                I am currently looking for entry-level opportunities in AI/ML engineering, data
                science, Python development and software engineering where I can keep learning from
                production systems and experienced teams.
              </p>
            </div>

            <ul className="mt-8 grid gap-2.5 sm:grid-cols-2">
              {capabilities.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span
                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-gradient-brand"
                    aria-hidden="true"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => {
              const Icon = icons[i % icons.length]!;
              return (
                <Reveal key={item.title} delay={i * 0.07}>
                  <div className="glass h-full rounded-2xl p-5 transition-shadow hover:shadow-glow">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-4 text-sm font-semibold">{item.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}