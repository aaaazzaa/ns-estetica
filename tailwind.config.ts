import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: "#F2E8E0",
          "off-white": "#F9F2EC",
          ivory: "#FFFFF0",
          beige: "#EDE0D6",
          taupe: "#D4C4B8",
          "gray-light": "#E8E5E1",
          "gray-warm": "#D4CFC8",
          gold: "#D4AF6C",
          "gold-light": "#E8D5A8",
          "gold-dark": "#B8954E",
          graphite: "#2C2C2C",
          "dark-soft": "#1A1A1A",
        },
        feedback: {
          success: "#7EBF8E",
          warning: "#E0C080",
          danger: "#D4998A",
          info: "#8AB8D4",
        },
      },
      fontFamily: {
        heading: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "300" }],
        h1: ["3.25rem", { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "300" }],
        h2: ["2.5rem", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "300" }],
        h3: ["2rem", { lineHeight: "1.25", letterSpacing: "-0.005em", fontWeight: "400" }],
        h4: ["1.5rem", { lineHeight: "1.3", letterSpacing: "0em", fontWeight: "400" }],
        h5: ["1.25rem", { lineHeight: "1.35", letterSpacing: "0em", fontWeight: "400" }],
        h6: ["1.125rem", { lineHeight: "1.4", letterSpacing: "0em", fontWeight: "500" }],
        subtitle: ["1.125rem", { lineHeight: "1.5", letterSpacing: "0.01em", fontWeight: "400" }],
        "body-lg": ["1.0625rem", { lineHeight: "1.65", letterSpacing: "0em" }],
        body: ["1rem", { lineHeight: "1.65", letterSpacing: "0em" }],
        small: ["0.875rem", { lineHeight: "1.5", letterSpacing: "0em" }],
        caption: ["0.75rem", { lineHeight: "1.45", letterSpacing: "0.02em" }],
        overline: ["0.6875rem", { lineHeight: "1.3", letterSpacing: "0.12em", fontWeight: "500" }],
      },
      borderRadius: {
        button: "14px",
        card: "20px",
        input: "14px",
        image: "24px",
        badge: "999px",
      },
      boxShadow: {
        xs: "0 1px 2px rgba(44,44,44,0.04)",
        sm: "0 1px 3px rgba(44,44,44,0.06), 0 1px 2px rgba(44,44,44,0.04)",
        md: "0 4px 8px rgba(44,44,44,0.05), 0 2px 4px rgba(44,44,44,0.03)",
        lg: "0 10px 20px rgba(44,44,44,0.05), 0 4px 8px rgba(44,44,44,0.03)",
        xl: "0 20px 40px rgba(44,44,44,0.06), 0 8px 16px rgba(44,44,44,0.03)",
        "glow-gold": "0 0 30px rgba(212,175,108,0.12)",
        "glow-soft": "0 0 60px rgba(212,175,108,0.06)",
      },
      spacing: {
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
        42: "10.5rem",
        50: "12.5rem",
        66: "16.5rem",
        70: "17.5rem",
        74: "18.5rem",
        78: "19.5rem",
        82: "20.5rem",
        86: "21.5rem",
        90: "22.5rem",
        94: "23.5rem",
        98: "24.5rem",
        100: "25rem",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.5s ease-out forwards",
        "glow-pulse": "glowPulse 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-glow": "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(212,175,108,0.08) 0%, transparent 70%)",
        "section-glow": "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(212,175,108,0.05) 0%, transparent 60%)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        md: "2rem",
        lg: "2rem",
        xl: "2rem",
      },
    },
  },
  plugins: [],
}

export default config
