"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, type HTMLMotionProps } from "framer-motion"

// ── Types ─────────────────────────────────────────────────
export interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  variant?: "default" | "elevated" | "glass" | "bordered"
  padding?: "none" | "sm" | "md" | "lg"
}

// ── Card Component ────────────────────────────────────────
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      children,
      variant = "default",
      padding = "md",
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default:
        "bg-white border border-[var(--color-taupe)]/15 shadow-sm",
      elevated:
        "bg-white border border-[var(--color-taupe)]/10 shadow-lg hover:shadow-xl",
      glass:
        "bg-white/60 backdrop-blur-md border border-white/20 shadow-sm",
      bordered:
        "bg-white border-2 border-[var(--color-taupe)]/20",
    }

    const paddingStyles = {
      none: "p-0",
      sm: "p-4 md:p-5",
      md: "p-6 md:p-8",
      lg: "p-8 md:p-10",
    }

    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-card transition-all duration-300 ease-out",
          variantStyles[variant],
          paddingStyles[padding],
          className
        )}
        whileHover={{ y: -2, transition: { duration: 0.2 } }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)
Card.displayName = "Card"

export { Card }
