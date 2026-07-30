"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Check, ChevronRight, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/layout/navbar"
import {
  heroContent,
  heroItem,
  heroImage,
  floatingCard,
} from "@/lib/animations"

// ── Floating Stats ────────────────────────────────────────
const FLOATING_STATS = [
  { value: "+500", label: "Pacientes Atendidos" },
  { value: "Atendimento", label: "Humanizado" },
  { value: "Resultados", label: "Naturais" },
  { value: "Procedimentos", label: "Personalizados" },
]

// ── Trust Indicators ──────────────────────────────────────
const TRUST_INDICATORS = [
  "Atendimento Personalizado",
  "Resultados Naturais",
  "Ambiente Premium",
  "Procedimentos Seguros",
]

// ── Background Decorations ────────────────────────────────
function BackgroundDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Main glow — simplified on mobile */}
      <div className="glow-gold absolute -right-1/4 -top-1/4 h-[400px] w-[400px] rounded-full opacity-40 md:h-[800px] md:w-[800px] md:opacity-60" />
      <div className="glow-gold absolute -bottom-1/4 -left-1/4 h-[300px] w-[300px] rounded-full opacity-30 md:h-[600px] md:w-[600px] md:opacity-40" />

      {/* Abstract circles — desktop only */}
      <div className="absolute right-[10%] top-[15%] h-64 w-64 rounded-full border border-[var(--color-taupe)]/10 max-md:hidden" />
      <div className="absolute right-[5%] top-[10%] h-80 w-80 rounded-full border border-[var(--color-taupe)]/8 max-md:hidden" />
      <div className="absolute left-[5%] bottom-[20%] h-40 w-40 rounded-full border border-[var(--color-gold)]/8 max-md:hidden" />

      {/* Subtle dots pattern — desktop only */}
      <div className="absolute right-[20%] top-[40%] grid grid-cols-4 gap-3 opacity-[0.03] max-md:hidden">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="h-1.5 w-1.5 rounded-full bg-[var(--color-graphite)]" />
        ))}
      </div>

      {/* Gold accent line — desktop only */}
      <div className="absolute left-[8%] top-1/3 h-px w-20 bg-gradient-to-r from-transparent via-[var(--color-gold)]/30 to-transparent max-md:hidden" />
    </div>
  )
}

// ── Doctor Photo ──────────────────────────────────────────
function DoctorPhoto() {
  return (
    <div className="relative flex aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-none items-center justify-center overflow-hidden rounded-image bg-gradient-to-br from-[var(--color-beige)] to-[var(--color-taupe)]/30">
      {/* Background glow behind photo */}
      <div className="absolute -inset-4 bg-gradient-radial from-[var(--color-gold)]/10 via-transparent to-transparent opacity-60" />

      {/* Real photo — using next/image with LCP priority */}
      <Image
        src="/images/doutora.webp"
        alt="Dra. Naiara — Especialista em Estética Avançada"
        fill
        className="object-cover object-center"
        priority
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
      />

      {/* Inner frame */}
      <div className="absolute inset-4 rounded-[20px] border border-white/40" />

      {/* Floating Cards — hidden on mobile (shown as static grid below) */}
      <motion.div
        className="absolute -bottom-3 -left-3 z-10 max-md:hidden"
        initial="hidden"
        animate="visible"
        variants={floatingCard}
        custom={0}
      >
        <Card
          variant="glass"
          padding="sm"
          className="flex items-center gap-2.5 shadow-lg"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-gold)]/10">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="text-[var(--color-gold-dark)]"
            >
              <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-h5 font-light leading-none text-[var(--color-graphite)]">
              {FLOATING_STATS[0].value}
            </span>
            <span className="font-body text-caption text-[var(--color-graphite)]/60">
              {FLOATING_STATS[0].label}
            </span>
          </div>
        </Card>
      </motion.div>

      <motion.div
        className="absolute -right-2 top-1/4 z-10 max-md:hidden"
        initial="hidden"
        animate="visible"
        variants={floatingCard}
        custom={1}
      >
        <Card
          variant="glass"
          padding="sm"
          className="shadow-lg"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-beige)]">
              <Check className="h-4 w-4 text-[var(--color-graphite)]" />
            </div>
            <span className="font-body text-small text-[var(--color-graphite)]">
              {FLOATING_STATS[1].label}
            </span>
          </div>
        </Card>
      </motion.div>

      <motion.div
        className="absolute -right-4 bottom-[15%] z-10 max-md:hidden"
        initial="hidden"
        animate="visible"
        variants={floatingCard}
        custom={2}
      >
        <Card
          variant="glass"
          padding="sm"
          className="shadow-lg"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-gold)]/10">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                className="text-[var(--color-gold-dark)]"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="font-body text-small text-[var(--color-graphite)]">
              {FLOATING_STATS[2].label}
            </span>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

// ── Hero Section ──────────────────────────────────────────
export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[var(--color-cream)]"
    >
      {/* ── Background ── */}
      <BackgroundDecorations />

      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Main Content ── */}
      <div className="container-ns relative z-10 flex min-h-screen items-center pt-24 pb-12 md:pt-32 md:pb-16">
        <div className="grid w-full items-start gap-8 md:gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* ── Left Content (7 cols) — FIRST on mobile ── */}
          <motion.div
            className="flex flex-col items-center text-center lg:col-span-7 lg:items-start lg:text-left"
            variants={heroContent}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={heroItem}>
              <Badge variant="gold" size="md" className="mb-4 md:mb-6">
                Biomédica Esteta • CRBM 13651
              </Badge>
            </motion.div>

            {/* Headline — responsive size */}
            <motion.div variants={heroItem} className="mb-2 md:mb-3">
              <h1 className="font-heading text-[2.5rem] sm:text-[3rem] md:text-[4.5rem] lg:text-[5rem] font-light leading-[1.08] tracking-tight text-[var(--color-graphite)]">
                Dra. Naiara
                <br />
                Soares
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={heroItem} className="mb-3 md:mb-4">
              <p className="font-heading text-[1.25rem] sm:text-h4 md:text-h3 font-light text-[var(--color-graphite)]/75">
                Especialista em Harmonização Facial e Estética Avançada
              </p>
            </motion.div>

            {/* Hook */}
            <motion.div variants={heroItem} className="mb-6 md:mb-8 max-w-lg">
              <p className="font-body text-body md:text-body-lg leading-relaxed text-[var(--color-graphite)]/60">
                Resultados naturais que realçam sua beleza sem descaracterizar sua essência.
                Onde a precisão técnica encontra o cuidado individual que você merece.
              </p>
            </motion.div>

            {/* CTAs - stacked on mobile, side-by-side on sm+ */}
            <motion.div
              variants={heroItem}
              className="mb-8 md:mb-10 flex flex-col gap-3 sm:flex-row sm:gap-4 w-full sm:w-auto"
            >
              <a href="https://wa.me/5531997739997" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="w-full text-white">
                  Agendar Avaliação
                </Button>
              </a>
              <a href="#procedimentos" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="group w-full"
                >
                  Conheça os Procedimentos
                  <ChevronRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Button>
              </a>
            </motion.div>

            {/* Location CTA */}
            <motion.div variants={heroItem}>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Dra+Naiara+Soares+Av+Juscelino+Kubitscheck+1244+Alaita+Itauna+MG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-body text-small text-[var(--color-graphite)]/45 hover:text-[var(--color-gold-dark)] transition-colors"
              >
                <MapPin className="h-3.5 w-3.5" />
                Av. JK, 1244 — Loja 08, Alaíta, Itaúna - MG
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={heroItem} className="w-full">
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:flex sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
                {TRUST_INDICATORS.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2"
                  >
                    <div className="flex h-4 w-4 items-center justify-center rounded-full bg-[var(--color-gold)]/10">
                      <Check className="h-2.5 w-2.5 text-[var(--color-gold-dark)]" />
                    </div>
                    <span className="font-body text-caption sm:text-small text-[var(--color-graphite)]/60 whitespace-nowrap">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Photo (5 cols) — SECOND on mobile ── */}
          <motion.div
            className="relative flex items-center justify-center lg:col-span-5"
            variants={heroImage}
            initial="hidden"
            animate="visible"
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none">
              {/* Photo */}
              <DoctorPhoto />

              {/* Mobile floating stats — shown below photo */}
              <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2 sm:gap-3 md:hidden">
                {FLOATING_STATS.map((stat, i) => (
                  <Card
                    key={stat.label}
                    variant="glass"
                    padding="sm"
                    className="text-center py-3 px-2 sm:py-4 sm:px-3"
                    initial="hidden"
                    animate="visible"
                    variants={floatingCard}
                    custom={i}
                  >
                    <span className="font-heading text-h5 sm:text-h4 font-light text-[var(--color-graphite)]">
                      {stat.value}
                    </span>
                    <span className="block font-body text-caption text-[var(--color-graphite)]/60">
                      {stat.label}
                    </span>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Bottom Gradient Transition ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-[var(--color-cream)] via-[var(--color-cream)]/80 to-transparent" />
    </section>
  )
}