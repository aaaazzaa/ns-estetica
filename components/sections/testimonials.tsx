"use client"

import React, { useState, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { fadeUp, staggerFast } from "@/lib/animations"
import { cn } from "@/lib/utils"

// ── Testimonial Data ──────────────────────────────────────
const TESTIMONIALS = [
  {
    quote:
      "A Dra. Naiara é simplesmente incrível. Sempre tive receio de procedimentos estéticos, mas ela me passou tanta segurança que hoje é um dos melhores investimentos que faço por mim. O resultado é natural, exatamente como eu queria.",
    author: "Marina Campos",
    role: "Itaúna - MG",
    stars: 5,
  },
  {
    quote:
      "Resultado mais natural do que eu imaginava ser possível. A precisão e o cuidado da Dra. Naiara fazem toda a diferença. Me sinto mais confiante e ao mesmo tempo igual a mim mesma — que é o mais importante.",
    author: "Juliana Alves",
    role: "Belo Horizonte - MG",
    stars: 5,
  },
  {
    quote:
      "Faço acompanhamento há mais de um ano e cada procedimento supera minhas expectativas. Profissional exemplar, ambiente acolhedor e resultados que me devolveram a autoestima. Recomendo de olhos fechados.",
    author: "Ana Paula Martins",
    role: "Rio Manso - MG",
    stars: 5,
  },
  {
    quote:
      "Nunca imaginei que um procedimento minimamente invasivo pudesse ter um resultado tão bonito. A Dra. Naiara tem mãos de artista e um olhar clínico apurado. Saí da consulta me sentindo renovada.",
    author: "Carla Mendes",
    role: "Itaúna - MG",
    stars: 5,
  },
]

// ── Star Rating ───────────────────────────────────────────
function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-[var(--color-gold)] text-[var(--color-gold)]"
        />
      ))}
    </div>
  )
}

// ── Testimonial Card ──────────────────────────────────────
function TestimonialCard({
  testimonial,
  index,
  compact,
}: {
  testimonial: (typeof TESTIMONIALS)[number]
  index: number
  compact?: boolean
}) {
  const initials = testimonial.author
    .replace(/[\[\]]/g, "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()

  return (
    <Card
      variant="default"
      padding={compact ? "md" : "lg"}
      className="flex h-full flex-col transition-all duration-300 hover:border-[var(--color-gold)]/30 hover:shadow-md"
    >
      {/* Quote icon */}
      <Quote className="mb-3 sm:mb-4 h-6 w-6 sm:h-8 sm:w-8 text-[var(--color-gold)]/30" />

      {/* Stars */}
      <StarRating count={testimonial.stars} />
      <div className="my-1" />

      {/* Text */}
      <p className={cn(
        "mb-4 sm:mb-6 flex-1 font-body leading-relaxed text-[var(--color-graphite)]/65 italic",
        compact ? "text-small" : "text-body"
      )}>
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-[var(--color-taupe)]/15">
        <div className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-[var(--color-beige)] text-[var(--color-graphite)] font-body text-caption sm:text-small font-medium">
          {initials}
        </div>
        <div>
          <p className="font-heading text-h6 font-normal text-[var(--color-graphite)]">
            {testimonial.author}
          </p>
          <p className="font-body text-caption text-[var(--color-graphite)]/50">
            {testimonial.role}
          </p>
        </div>
      </div>
    </Card>
  )
}

// ── Testimonials Section ──────────────────────────────────
export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [mobileIndex, setMobileIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Desktop carousel
  const maxDesktopIndex = TESTIMONIALS.length - 3

  const nextDesktop = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => Math.min(prev + 1, maxDesktopIndex))
  }, [maxDesktopIndex])

  const prevDesktop = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => Math.max(prev - 1, 0))
  }, [])

  // Mobile swipe handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }, [])

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current
    const threshold = 50
    if (Math.abs(diff) > threshold) {
      if (diff > 0 && mobileIndex < TESTIMONIALS.length - 1) {
        setMobileIndex((prev) => prev + 1)
      } else if (diff < 0 && mobileIndex > 0) {
        setMobileIndex((prev) => prev - 1)
      }
    }
  }, [mobileIndex])

  const canGoPrev = current > 0
  const canGoNext = current < maxDesktopIndex

  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden bg-[var(--color-cream)] section-ns"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="glow-gold absolute -left-1/4 top-0 h-[300px] w-[300px] rounded-full opacity-20 md:h-[500px] md:w-[500px] md:opacity-30" />
        <div className="glow-gold absolute -right-1/4 bottom-0 h-[250px] w-[250px] rounded-full opacity-15 md:h-[400px] md:w-[400px] md:opacity-20" />
      </div>

      <div className="container-ns relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          className="mb-10 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerFast}
        >
          <motion.div variants={fadeUp}>
            <Badge variant="gold" size="md" className="mb-4 md:mb-5">
              DEPOIMENTOS
            </Badge>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-1">
            <h2 className="font-heading text-[2rem] sm:text-h2 md:text-[3rem] lg:text-[3.25rem] font-light leading-[1.15] tracking-tight text-[var(--color-graphite)]">
              O que nossas pacientes
              <br />
              <span className="text-[var(--color-graphite)]/80">dizem</span>
            </h2>
          </motion.div>
        </motion.div>

        {/* ══════ DESKTOP CAROUSEL (3 cards) ══════ */}
        <div className="max-lg:hidden">
          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                  className="grid grid-cols-3 gap-8"
                >
                  {TESTIMONIALS.slice(current, current + 3).map(
                    (testimonial, i) => (
                      <TestimonialCard
                        key={current + i}
                        testimonial={testimonial}
                        index={current + i}
                      />
                    )
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Arrows + Dots */}
            <div className="mt-10 flex items-center justify-center gap-4">
              <button
                onClick={prevDesktop}
                disabled={!canGoPrev}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-taupe)]/30 transition-all duration-200",
                  canGoPrev
                    ? "hover:border-[var(--color-gold)]/50 hover:bg-[var(--color-gold)]/5 cursor-pointer"
                    : "opacity-30 cursor-not-allowed"
                )}
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="h-4 w-4 text-[var(--color-graphite)]" />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: maxDesktopIndex + 1 }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setDirection(i > current ? 1 : -1)
                      setCurrent(i)
                    }}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      i === current
                        ? "w-6 bg-[var(--color-gold)]"
                        : "w-2 bg-[var(--color-taupe)]/40 hover:bg-[var(--color-taupe)]/60"
                    )}
                    aria-label={`Ir para depoimento ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextDesktop}
                disabled={!canGoNext}
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-taupe)]/30 transition-all duration-200",
                  canGoNext
                    ? "hover:border-[var(--color-gold)]/50 hover:bg-[var(--color-gold)]/5 cursor-pointer"
                    : "opacity-30 cursor-not-allowed"
                )}
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="h-4 w-4 text-[var(--color-graphite)]" />
              </button>
            </div>
          </div>
        </div>

        {/* ══════ MOBILE / TABLET: swipeable carousel (1 card) ══════ */}
        <div className="lg:hidden">
          {/* Swipeable area */}
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mobileIndex}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                className="mx-auto max-w-md"
              >
                <TestimonialCard
                  testimonial={TESTIMONIALS[mobileIndex]}
                  index={mobileIndex}
                  compact
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile pagination dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setMobileIndex(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === mobileIndex
                    ? "w-6 bg-[var(--color-gold)]"
                    : "w-2 bg-[var(--color-taupe)]/40 hover:bg-[var(--color-taupe)]/60"
                )}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>

          {/* Swipe hint text */}
          <p className="mt-3 text-center font-body text-caption text-[var(--color-graphite)]/30">
            Deslize para navegar
          </p>
        </div>
      </div>
    </section>
  )
}