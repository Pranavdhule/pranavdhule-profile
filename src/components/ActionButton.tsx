import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "motion/react";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const actionVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-gradient-brand text-primary-foreground shadow-glow",
        outline: "glass text-foreground hover:text-primary",
        ghost: "text-muted-foreground hover:bg-secondary hover:text-foreground",
      },
      size: {
        default: "",
        sm: "px-3.5 py-2 text-[13px]",
        lg: "px-6 py-3 text-base",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type ButtonProps = ComponentProps<typeof motion.button> & VariantProps<typeof actionVariants>;
type AnchorProps = ComponentProps<typeof motion.a> & VariantProps<typeof actionVariants>;

const hover = { scale: 1.02 };
const tap = { scale: 0.98 };

export function ActionButton({ className, variant, size, ...props }: ButtonProps) {
  return (
    <motion.button
      whileHover={hover}
      whileTap={tap}
      className={cn(actionVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export function ActionLink({ className, variant, size, ...props }: AnchorProps) {
  return (
    <motion.a
      whileHover={hover}
      whileTap={tap}
      className={cn(actionVariants({ variant, size }), className)}
      {...props}
    />
  );
}