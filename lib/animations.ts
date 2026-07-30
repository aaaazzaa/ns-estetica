import { Variants, Transition } from "framer-motion"

// ── Transitions ────────────────────────────────────────────
export const smoothTransition: Transition = {
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1],
}

export const springTransition: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 1,
}

export const gentleTransition: Transition = {
  duration: 0.8,
  ease: [0.22, 0.03, 0.26, 1],
}

// ── Fade Variants ──────────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: smoothTransition },
}

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// ── Scale Variants ─────────────────────────────────────────
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// ── Stagger ────────────────────────────────────────────────
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
}

// ── Navbar ────────────────────────────────────────────────
export const navbarVariants: Variants = {
  hidden: { y: -100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export const navbarScrollVariants: Variants = {
  top: {
    backgroundColor: "rgba(250, 248, 245, 0)",
    backdropFilter: "blur(0px)",
    boxShadow: "0 0 0 rgba(44,44,44,0)",
  },
  scrolled: {
    backgroundColor: "rgba(250, 248, 245, 0.85)",
    backdropFilter: "blur(12px)",
    boxShadow: "0 1px 3px rgba(44,44,44,0.04)",
  },
}

// ── Hero ───────────────────────────────────────────────────
export const heroContent: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

export const heroItem: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export const heroImage: Variants = {
  hidden: { opacity: 0, scale: 1.05, x: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 },
  },
}

// ── Floating Cards ─────────────────────────────────────────
export const floatingCard: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      delay: 0.8 + i * 0.15,
    },
  }),
}

// ── Hover ──────────────────────────────────────────────────
export const hoverScale = {
  whileHover: { scale: 1.02, transition: { duration: 0.2, ease: "easeOut" } },
  whileTap: { scale: 0.98 },
}
