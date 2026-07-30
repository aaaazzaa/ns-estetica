"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Award,
  ShieldCheck,
  UserCheck,
  Clock,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { fadeUp, fadeLeft, fadeRight, staggerFast } from "@/lib/animations"

// ── Feature Data ──────────────────────────────────────────
const FEATURES = [
  {
    icon: Award,
    title: "Formação Especializada",
    description: "Biomédica Esteta com expertise em harmonização facial.",
  },
  {
    icon: ShieldCheck,
    title: "Protocolos Seguros",
    description: "Procedimentos minimamente invasivos com alto padrão.",
  },
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description: "Cada planejamento é único e feito sob medida.",
  },
  {
    icon: Clock,
    title: "Resultados Duradouros",
    description: "Técnicas avançadas para efeitos naturais e longevos.",
  },
]

// ── About Section ─────────────────────────────────────────
export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative overflow-hidden bg-[var(--color-cream)] section-ns"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="glow-gold absolute -right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full opacity-20 md:h-[600px] md:w-[600px] md:opacity-30" />
        <div className="absolute right-[15%] top-[20%] h-48 w-48 rounded-full border border-[var(--color-taupe)]/10 max-md:hidden" />
      </div>

      <div className="container-ns relative z-10">
        <div className="grid items-start gap-10 md:gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          {/* ── Left Column — Image ── */}
          <motion.div
            className="lg:col-span-6"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="relative flex aspect-[4/5] w-full max-w-sm mx-auto lg:max-w-none items-center justify-center overflow-hidden rounded-image bg-gradient-to-br from-[var(--color-beige)] to-[var(--color-taupe)]/30">
              {/* Glow behind */}
              <div className="absolute -inset-4 bg-gradient-radial from-[var(--color-gold)]/10 via-transparent to-transparent opacity-60" />

              {/* Real photo — next/image with lazy */}
              <Image
                src="/images/doutora.webp"
                alt="Consultório da Dra. Naiara — NS Estetica"
                fill
                className="object-cover object-center"
                loading="lazy"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 40vw"
              />

              {/* Inner frame */}
              <div className="absolute inset-4 rounded-[20px] border border-white/40" />

              {/* Accent */}
              <div className="absolute bottom-8 left-8 h-px w-16 bg-gradient-to-r from-[var(--color-gold)]/40 to-transparent" />
            </div>
          </motion.div>

          {/* ── Right Column — Content ── */}
          <motion.div
            className="lg:col-span-6"
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <Badge variant="gold" size="md" className="mb-4 md:mb-5">
              SOBRE
            </Badge>

            <h2 className="mb-4 md:mb-6 font-heading text-[2rem] sm:text-h2 md:text-[3rem] lg:text-[3.25rem] font-light leading-[1.15] tracking-tight text-[var(--color-graphite)]">
              Referência em Estética
              <br />
              <span className="text-[var(--color-graphite)]/80">
                Avançada em Itaúna e Rio Manso
              </span>
            </h2>

            <p className="mb-8 md:mb-10 font-body text-body md:text-body-lg leading-relaxed text-[var(--color-graphite)]/60 max-w-xl">
              Há anos, a Dra. Naiara Soares transforma a relação das suas
              pacientes com o próprio reflexo. Com um olhar preciso e mãos
              experientes, cada procedimento é desenhado para realçar o que
              cada rosto tem de único — respeitando a individualidade,
              valorizando a autoestima.
            </p>

            {/* ── 2×2 Features Grid ── */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              variants={staggerFast}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {FEATURES.map((feature) => {
                const Icon = feature.icon
                return (
                  <motion.div key={feature.title} variants={fadeUp} className="group">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-[14px] bg-[var(--color-gold)]/10 transition-colors duration-200 group-hover:bg-[var(--color-gold)]/20">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[var(--color-gold-dark)]" />
                      </div>
                      <div>
                        <h4 className="mb-1 font-heading text-h6 sm:text-h5 font-normal text-[var(--color-graphite)]">
                          {feature.title}
                        </h4>
                        <p className="font-body text-caption sm:text-small leading-relaxed text-[var(--color-graphite)]/55">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}