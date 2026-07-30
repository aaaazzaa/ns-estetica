"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { motion, type HTMLMotionProps } from "framer-motion"

// ── Button Variants ──────────────────────────────────────
const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "font-body text-small md:text-body font-medium",
    "rounded-button",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-cream)]",
    "disabled:pointer-events-none disabled:opacity-50",
    "select-none",
  ].join(" "),
  {
    variants: {
      variant: {
        // ── Solid dark ──
        primary: [
          "bg-[var(--color-graphite)] text-white",
          "hover:bg-[var(--color-dark-soft)]",
          "active:bg-[var(--color-graphite)]",
          "shadow-sm hover:shadow-md",
        ].join(" "),

        // ── Solid gold ──
        secondary: [
          "bg-[var(--color-gold)] text-[var(--color-dark-soft)]",
          "hover:bg-[var(--color-gold-dark)] hover:text-white",
          "active:bg-[var(--color-gold-dark)]",
          "shadow-sm hover:shadow-md",
        ].join(" "),

        // ── Gold outline (accent) ──
        accent: [
          "border border-[var(--color-gold)]/50 text-[var(--color-gold-dark)] bg-transparent",
          "hover:bg-[var(--color-gold)] hover:text-white hover:border-[var(--color-gold)]",
          "active:bg-[var(--color-gold-dark)] active:border-[var(--color-gold-dark)]",
        ].join(" "),

        // ── Light (for dark backgrounds) ──
        light: [
          "bg-white text-[var(--color-graphite)] border border-white/20",
          "hover:bg-[var(--color-cream)]",
          "active:bg-[var(--color-beige)]",
          "shadow-sm hover:shadow-md",
        ].join(" "),

        // ── Taupe outline (subtle) ──
        outline: [
          "border border-[var(--color-taupe)]/40 text-[var(--color-graphite)] bg-transparent",
          "hover:border-[var(--color-gold)]/60 hover:bg-[var(--color-gold)]/5 hover:text-[var(--color-gold-dark)]",
          "active:bg-[var(--color-gold)]/10",
        ].join(" "),

        // ── Ghost ──
        ghost: [
          "text-[var(--color-graphite)] bg-transparent",
          "hover:bg-[var(--color-beige)]/60",
          "active:bg-[var(--color-beige)]",
        ].join(" "),

        // ── Link ──
        link: [
          "text-[var(--color-graphite)] underline-offset-4 hover:underline bg-transparent",
          "hover:text-[var(--color-gold-dark)]",
        ].join(" "),
      },
      size: {
        sm: "h-9 px-4 text-caption",
        md: "h-12 px-6 md:px-8",
        lg: "h-14 px-8 md:px-10 text-body-lg",
        xl: "h-16 px-10 md:px-12 text-body-lg",
        icon: "h-12 w-12",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

// ── Types ─────────────────────────────────────────────────
export interface ButtonProps
  extends Omit<HTMLMotionProps<"button">, "size">,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode
  isLoading?: boolean
}

// ── Button Component ─────────────────────────────────────
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      isLoading,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth, className }))}
        disabled={disabled || isLoading}
        whileHover={disabled ? undefined : { scale: 1.02 }}
        whileTap={disabled ? undefined : { scale: 0.98 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg
              className="h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            <span>Carregando…</span>
          </span>
        ) : (
          children
        )}
      </motion.button>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }