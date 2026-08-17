import { motion } from "motion/react";

const nodes = [
  { x: 20, y: 40 },
  { x: 20, y: 100 },
  { x: 20, y: 160 },
  { x: 110, y: 25 },
  { x: 110, y: 85 },
  { x: 110, y: 145 },
  { x: 110, y: 200 },
  { x: 200, y: 55 },
  { x: 200, y: 115 },
  { x: 200, y: 175 },
  { x: 285, y: 100 },
];

const edges: [number, number][] = [
  [0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 6], [2, 5], [2, 6], [2, 4],
  [3, 7], [3, 8], [4, 7], [4, 9], [5, 8], [5, 9], [6, 8], [6, 9],
  [7, 10], [8, 10], [9, 10],
];

export function NeuralVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        className="absolute inset-0 -z-10 rounded-full bg-gradient-brand opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div className="glass rounded-3xl p-6 shadow-glow">
        <svg
          viewBox="0 0 305 225"
          className="h-auto w-full"
          role="img"
          aria-label="Abstract animated neural network illustration"
        >
          <defs>
            <linearGradient id="edge" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.15" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.6" />
            </linearGradient>
          </defs>
          {edges.map(([a, b], i) => (
            <motion.line
              key={`${a}-${b}`}
              x1={nodes[a].x}
              y1={nodes[a].y}
              x2={nodes[b].x}
              y2={nodes[b].y}
              stroke="url(#edge)"
              strokeWidth={1}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.1, delay: 0.2 + i * 0.04, ease: "easeOut" }}
            />
          ))}
          {nodes.map((n, i) => (
            <motion.circle
              key={`${n.x}-${n.y}`}
              cx={n.x}
              cy={n.y}
              r={i === 10 ? 9 : 6}
              fill="var(--primary)"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: [0, 1, 0.9, 1], opacity: [0, 1, 0.75, 1] }}
              transition={{
                duration: 3.2,
                delay: i * 0.08,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>
        <div className="mt-5 grid grid-cols-3 gap-3 text-center">
          {["Input", "Hidden layers", "Prediction"].map((label) => (
            <div key={label} className="rounded-xl border border-border bg-secondary/40 px-2 py-2">
              <p className="text-[11px] font-medium tracking-wide text-muted-foreground uppercase">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}