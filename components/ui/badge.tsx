"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion, type HTMLMotionProps } from "framer-motion"

// ── Badge Variants ────────────────────────────────────────
const badgeVariants = cva(
  [
    "inline-flex items-center justify-center",
    "font-body text-caption md:text-small",
    "rounded-badge",
    "px-4 py-1.5",
    "transition-all duration-200 ease-out",
    "select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-[var(--color-beige)] text-[var(--color-graphite)]",
          "border border-[var(--color-taupe)]/20",
        ].join(" "),
        gold: [
          "bg-[var(--color-gold)]/10 text-[var(--color-gold-dark)]",
          "border border-[var(--color-gold)]/20",
        ].join(" "),
        outline: [
          "border border-[var(--color-taupe)]/30 text-[var(--color-graphite)]",
          "bg-transparent",
        ].join(" "),
        subtle: [
          "bg-[var(--color-graphite)]/5 text-[var(--color-graphite)]/70",
        ].join(" "),
      },
      size: {
        sm: "px-3 py-1 text-caption",
        md: "px-4 py-1.5 text-caption md:text-small",
        lg: "px-5 py-2 text-small",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

// ── Types ─────────────────────────────────────────────────
export interface BadgeProps
  extends Omit<HTMLMotionProps<"span">, "size">,
    VariantProps<typeof badgeVariants> {
  children: React.ReactNode
}

// ── Badge Component ───────────────────────────────────────
const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <motion.span
        ref={ref}
        className={cn(badgeVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </motion.span>
    )
  }
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }
