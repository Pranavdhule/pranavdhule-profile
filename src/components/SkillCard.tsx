import { motion } from "motion/react";

export function SkillCard({
  category,
  items,
  index,
}: {
  category: string;
  items: string[];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className="glass h-full rounded-2xl p-6 transition-shadow hover:shadow-glow"
    >
      <div className="flex items-center gap-3">
        <span className="h-6 w-1 rounded-full bg-gradient-brand" aria-hidden="true" />
        <h3 className="text-sm font-semibold tracking-wide uppercase">{category}</h3>
      </div>
      <ul className="mt-5 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
          >
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}