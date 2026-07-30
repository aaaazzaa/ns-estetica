"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

// ── Navigation Links ──────────────────────────────────────
const NAV_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Procedimentos", href: "#procedimentos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Resultados", href: "#resultados" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
] as const

// ── Navbar ────────────────────────────────────────────────
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Track scroll position for glass effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-[var(--color-cream)]/90 md:glass border-b border-[var(--color-taupe)]/10 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav
        className="container-ns flex h-20 items-center justify-between"
        aria-label="Navegação principal"
      >
        {/* ── Logo ── */}
        <a
          href="#hero"
          className="relative z-10 flex items-center gap-2"
          aria-label="NS Estetica — Início"
        >
          <span className="font-heading text-xl md:text-2xl font-light tracking-tight text-[var(--color-graphite)]">
            NS
          </span>
          <span className="hidden h-5 w-px bg-[var(--color-taupe)]/40 sm:block" />
          <span className="hidden font-body text-caption text-[var(--color-graphite)]/60 sm:block">
            Estética
          </span>
        </a>

        {/* ── Desktop Links ── */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-3 py-2 font-body text-small text-[var(--color-graphite)]/70 transition-colors duration-200 hover:text-[var(--color-graphite)]"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[var(--color-gold)]/60 transition-all duration-300 group-hover:w-4" />
            </a>
          ))}
        </div>

        {/* ── Desktop CTA ── */}
        <div className="hidden items-center gap-4 lg:flex">
          <a href="https://wa.me/5531997739997" target="_blank" rel="noopener noreferrer">
            <Button variant="primary" size="sm" className="h-10 px-5 text-small text-white">
              Agendar Avaliação
            </Button>
          </a>
        </div>

        {/* ── Mobile Hamburger ── */}
        <button
          className="relative z-10 flex h-10 w-10 items-center justify-center rounded-button transition-colors hover:bg-[var(--color-beige)] lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X className="h-5 w-5 text-[var(--color-graphite)]" />
          ) : (
            <Menu className="h-5 w-5 text-[var(--color-graphite)]" />
          )}
        </button>
      </nav>

      {/* ── Mobile Menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="glass-strong fixed inset-x-0 top-0 flex flex-col items-center justify-center gap-8 overflow-hidden lg:hidden"
          >
            <nav className="flex flex-col items-center gap-6">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                  onClick={() => setMobileOpen(false)}
                  className="font-heading text-h3 font-light text-[var(--color-graphite)] transition-colors hover:text-[var(--color-gold-dark)]"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              <a href="#contato" onClick={() => setMobileOpen(false)}>
                <Button variant="primary" size="lg" className="w-64 text-white">
                  Agendar Avaliação
                </Button>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
