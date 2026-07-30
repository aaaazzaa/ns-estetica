"use client"

import React from "react"
import { motion } from "framer-motion"
import { Phone, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { fadeUp } from "@/lib/animations"

// ── CTA Banner Section ────────────────────────────────────
export function CTABannerSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-graphite)] section-ns">
      {/* Subtle pattern overlay */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {/* Gold glow */}
        <div
          className="absolute -left-1/4 -top-1/2 h-[500px] w-[500px] md:h-[800px] md:w-[800px] rounded-full opacity-[0.06] md:opacity-[0.08]"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(212, 175, 108, 1) 0%, transparent 70%)",
          }}
        />

        {/* Grid dot pattern — desktop only */}
        <div className="absolute right-[10%] top-1/3 grid grid-cols-6 gap-3 opacity-[0.04] max-md:hidden">
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-white" />
          ))}
        </div>

        {/* Accent lines — desktop only */}
        <div className="absolute right-[15%] top-1/4 h-px w-24 bg-gradient-to-l from-[var(--color-gold)]/20 to-transparent max-md:hidden" />
        <div className="absolute bottom-1/3 left-[8%] h-px w-16 bg-gradient-to-r from-[var(--color-gold)]/15 to-transparent max-md:hidden" />
      </div>

      <div className="container-ns relative z-10">
        <motion.div
          className="mx-auto max-w-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeUp}
        >
          <div className="flex flex-col items-center text-center lg:flex-row lg:text-left lg:items-center lg:justify-between lg:gap-12">
            {/* ── Left: Icon + Text ── */}
            <div className="flex flex-col items-center gap-4 sm:gap-5 lg:flex-row lg:items-start lg:gap-6">
              {/* Icon */}
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 lg:h-16 lg:w-16 shrink-0 items-center justify-center rounded-[16px] sm:rounded-[20px] bg-[var(--color-gold)]/10">
                <Calendar className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 text-[var(--color-gold)]" />
              </div>

              {/* Texts */}
              <div>
                <h2 className="mb-2 sm:mb-3 font-heading text-[1.75rem] sm:text-h2 md:text-[2.75rem] font-light leading-[1.15] tracking-tight text-white">
                  Agende sua
                  <br />
                  <span className="text-[var(--color-gold)]">Avaliação</span>
                </h2>
                <p className="font-body text-body sm:text-body-lg leading-relaxed text-white/60 max-w-lg">
                  Descubra como a estética avançada pode realçar sua beleza
                  natural com segurança, elegância e resultados que falam por si.
                </p>
              </div>
            </div>

            {/* ── Right: CTA + Contact ── */}
            <div className="mt-6 sm:mt-8 flex flex-col items-center gap-3 sm:gap-4 lg:mt-0 lg:items-end shrink-0 w-full sm:w-auto">
              <a href="https://wa.me/5531997739997" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                variant="light"
                size="lg"
                className="group w-full sm:w-auto min-w-0 sm:min-w-[200px]"
              >
                Agendar Agora
                <Calendar className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
              </Button>
              </a>

              <a
                href="https://wa.me/5531997739997"
                className="group inline-flex items-center gap-2 font-body text-small text-white/50 transition-colors hover:text-[var(--color-gold)]"
              >
                <Phone className="h-3.5 w-3.5" />
                (37) 99999-9999
              </a>
            </div>
          </div>

          {/* ── Bottom separator line ── */}
          <div className="mx-auto mt-10 sm:mt-12 h-px max-w-xs bg-gradient-to-r from-transparent via-[var(--color-gold)]/15 to-transparent lg:mx-0 lg:max-w-full" />
        </motion.div>
      </div>
    </section>
  )
}