// ═══════════════════════════════════════════════════════════════
// Design Tokens — NS Estetica
// Luxo discreto · Elegância · Precisão estética
// ═══════════════════════════════════════════════════════════════

export const colors = {
  brand: {
    cream: "#F2E8E0",
    offWhite: "#F8F6F3",
    ivory: "#FFFFF0",
    beige: "#F5F0EB",
    taupe: "#D9D0C3",
    grayLight: "#E8E5E1",
    grayWarm: "#D4CFC8",
    gold: "#D4AF6C",
    goldLight: "#E8D5A8",
    goldDark: "#B8954E",
    graphite: "#2C2C2C",
    darkSoft: "#1A1A1A",
  },
  feedback: {
    success: "#7EBF8E",
    warning: "#E0C080",
    danger: "#D4998A",
    info: "#8AB8D4",
  },
} as const

export const fonts = {
  heading: "'Cormorant Garamond', Georgia, serif",
  body: "'Inter', system-ui, sans-serif",
} as const

export const fontWeights = {
  heading: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
  },
  body: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
  },
} as const

export const fontSize = {
  display: { size: "4rem", lineHeight: 1.1, letterSpacing: "-0.02em" },
  h1: { size: "3.25rem", lineHeight: 1.15, letterSpacing: "-0.015em" },
  h2: { size: "2.5rem", lineHeight: 1.2, letterSpacing: "-0.01em" },
  h3: { size: "2rem", lineHeight: 1.25, letterSpacing: "-0.005em" },
  h4: { size: "1.5rem", lineHeight: 1.3, letterSpacing: "0em" },
  h5: { size: "1.25rem", lineHeight: 1.35, letterSpacing: "0em" },
  h6: { size: "1.125rem", lineHeight: 1.4, letterSpacing: "0em" },
  subtitle: { size: "1.125rem", lineHeight: 1.5, letterSpacing: "0.01em" },
  bodyLg: { size: "1.0625rem", lineHeight: 1.65, letterSpacing: "0em" },
  body: { size: "1rem", lineHeight: 1.65, letterSpacing: "0em" },
  small: { size: "0.875rem", lineHeight: 1.5, letterSpacing: "0em" },
  caption: { size: "0.75rem", lineHeight: 1.45, letterSpacing: "0.02em" },
  overline: { size: "0.6875rem", lineHeight: 1.3, letterSpacing: "0.12em" },
} as const

export const radius = {
  button: "14px",
  card: "20px",
  input: "14px",
  image: "24px",
  badge: "999px",
} as const

export const shadows = {
  xs: "0 1px 2px rgba(44,44,44,0.04)",
  sm: "0 1px 3px rgba(44,44,44,0.06), 0 1px 2px rgba(44,44,44,0.04)",
  md: "0 4px 8px rgba(44,44,44,0.05), 0 2px 4px rgba(44,44,44,0.03)",
  lg: "0 10px 20px rgba(44,44,44,0.05), 0 4px 8px rgba(44,44,44,0.03)",
  xl: "0 20px 40px rgba(44,44,44,0.06), 0 8px 16px rgba(44,44,44,0.03)",
  glowGold: "0 0 30px rgba(212,175,108,0.12)",
  glowSoft: "0 0 60px rgba(212,175,108,0.06)",
} as const

export const spacing = {
  2: "0.125rem",
  4: "0.25rem",
  8: "0.5rem",
  12: "0.75rem",
  16: "1rem",
  20: "1.25rem",
  24: "1.5rem",
  32: "2rem",
  40: "2.5rem",
  48: "3rem",
  56: "3.5rem",
  64: "4rem",
  80: "5rem",
  96: "6rem",
  120: "7.5rem",
  160: "10rem",
} as const

export const breakpoints = {
  mobile: "640px",
  tablet: "768px",
  laptop: "1024px",
  desktop: "1280px",
  ultrawide: "1536px",
} as const

export const transitions = {
  fast: "200ms ease-out",
  normal: "250ms ease-out",
  slow: "300ms ease-out",
  smooth: "600ms cubic-bezier(0.25, 0.1, 0.25, 1)",
} as const
