"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  GraduationCap,
  Medal,
  FileCheck,
  Activity,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { fadeUp, staggerFast } from "@/lib/animations"

// ── Specialties Data ──────────────────────────────────────
const SPECIALTIES = [
  {
    icon: GraduationCap,
    title: "Formação de Excelência",
    description:
      "Biomédica Esteta com CRBM 13651. Formação sólida e atualização contínua nas melhores técnicas do mercado.",
  },
  {
    icon: Medal,
    title: "Anos de Experiência",
    description:
      "Anos dedicados à estética avançada, com centenas de procedimentos realizados com segurança e precisão.",
  },
  {
    icon: FileCheck,
    title: "Certificações",
    description:
      "Certificações nacionais e internacionais em harmonização facial, preenchimento e toxina botulínica.",
  },
  {
    icon: Activity,
    title: "Procedimentos Realizados",
    description:
      "Mais de 500 procedimentos realizados, cada um conduzido com protocolos individualizados e foco em resultados naturais.",
  },
]

// ── Specialties Card ──────────────────────────────────────
function SpecialtyCard({
  specialty,
  index,
}: {
  specialty: (typeof SPECIALTIES)[number]
  index: number
}) {
  const Icon = specialty.icon

  return (
    <motion.div variants={fadeUp} custom={index}>
      <Card
        variant="default"
        padding="lg"
        className="group flex h-full flex-col items-center text-center transition-all duration-300 hover:border-[var(--color-gold)]/40 hover:shadow-md"
      >
        {/* Icon */}
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-[18px] bg-[var(--color-gold)]/10 transition-colors duration-200 group-hover:bg-[var(--color-gold)]/20">
          <Icon className="h-7 w-7 text-[var(--color-gold-dark)]" />
        </div>

        {/* Title */}
        <h3 className="mb-3 font-heading text-h4 font-light text-[var(--color-graphite)]">
          {specialty.title}
        </h3>

        {/* Description */}
        <p className="font-body text-body leading-relaxed text-[var(--color-graphite)]/60 max-w-xs">
          {specialty.description}
        </p>
      </Card>
    </motion.div>
  )
}

// ── Specialties Section ───────────────────────────────────
export function SpecialtiesSection() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-off-white)] section-ns">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="glow-gold absolute -right-1/3 -top-1/3 h-[300px] w-[300px] rounded-full opacity-20 md:h-[500px] md:w-[500px] md:opacity-30" />
        <div className="glow-gold absolute -bottom-1/4 -left-1/4 h-[250px] w-[250px] rounded-full opacity-15 md:h-[400px] md:w-[400px] md:opacity-20" />
      </div>

      <div className="container-ns relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          className="mb-14 text-center md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerFast}
        >
          <motion.div variants={fadeUp}>
            <Badge variant="gold" size="md" className="mb-5">
              CREDENCIAIS
            </Badge>
          </motion.div>

          <motion.div variants={fadeUp}>
            <h2 className="font-heading text-h2 md:text-[3rem] lg:text-[3.25rem] font-light leading-[1.15] tracking-tight text-[var(--color-graphite)]">
              Por que escolher a
              <br />
              <span className="text-[var(--color-graphite)]/80">NS Estetica</span>
            </h2>
          </motion.div>
        </motion.div>

        {/* ── Specialties Grid ── */}
        <motion.div
          className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerFast}
        >
          {SPECIALTIES.map((specialty, index) => (
            <SpecialtyCard
              key={specialty.title}
              specialty={specialty}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}