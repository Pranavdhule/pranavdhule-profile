import { SectionTitle } from "@/components/SectionTitle";
import { SkillCard } from "@/components/SkillCard";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Skills"
          title="Technical toolkit"
          description="The languages, frameworks and tools I use to take a problem from raw data to a working application."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <SkillCard key={group.category} category={group.category} items={group.items} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
