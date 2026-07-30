"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  Sparkles,
  Eye,
  Heart,
  Droplets,
  ScanFace,
  Feather,
  ArrowRight,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  fadeUp,
  staggerContainer,
  staggerFast,
} from "@/lib/animations"
import { cn } from "@/lib/utils"

// ── Service Data ──────────────────────────────────────────
const SERVICES = [
  {
    icon: Sparkles,
    title: "Harmonização Facial",
    description:
      "Planejamento individualizado para equilibrar proporções e realçar a beleza natural do rosto com resultados sutis e elegantes.",
  },
  {
    icon: Eye,
    title: "Preenchimento Facial",
    description:
      "Restauração de volumes e contornos com ácido hialurônico, promovendo um aspecto rejuvenescido sem perder a naturalidade.",
  },
  {
    icon: Heart,
    title: "Toxina Botulínica",
    description:
      "Suavização de linhas de expressão de forma segura e precisa, mantendo a expressividade e a harmonia do rosto.",
  },
  {
    icon: Droplets,
    title: "Bioestimuladores de Colágeno",
    description:
      "Estimulação da produção natural de colágeno para firmar, levantar e devolver viço à pele com resultados progressivos.",
  },
  {
    icon: ScanFace,
    title: "Lipoenzimática",
    description:
      "Técnica minimamente invasiva para modelagem corporal, redução de gordura localizada e definição do contorno facial.",
  },
  {
    icon: Feather,
    title: "Peeling e Tratamentos de Pele",
    description:
      "Renovação celular profunda para uniformizar o tom, tratar manchas e recuperar a luminosidade natural da pele.",
  },
]

// ── Service Card ──────────────────────────────────────────
function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number]
  index: number
}) {
  const Icon = service.icon

  return (
    <motion.div variants={fadeUp} custom={index}>
      <Card
        variant="default"
        padding="lg"
        className="group relative h-full flex flex-col transition-all duration-300 hover:border-[var(--color-gold)]/40 hover:shadow-md"
      >
        {/* Icon Badge */}
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[18px] bg-[var(--color-gold)]/10">
          <Icon className="h-6 w-6 text-[var(--color-gold-dark)]" />
        </div>

        {/* Title */}
        <h3 className="mb-3 font-heading text-h4 font-light text-[var(--color-graphite)]">
          {service.title}
        </h3>

        {/* Description */}
        <p className="font-body text-body leading-relaxed text-[var(--color-graphite)]/60">
          {service.description}
        </p>

        {/* Hover indicator */}
        <div className="mt-auto pt-4">
          <span className="inline-flex items-center gap-1.5 font-body text-small text-[var(--color-gold-dark)] opacity-0 transition-all duration-300 group-hover:opacity-100">
            Saiba mais
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </span>
        </div>
      </Card>
    </motion.div>
  )
}

// ── Services Section ──────────────────────────────────────
export function ServicesSection() {
  return (
    <section
      id="procedimentos"
      className="relative overflow-hidden bg-[var(--color-cream)] section-ns"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="glow-gold absolute -left-1/3 top-1/3 h-[300px] w-[300px] rounded-full opacity-30 md:h-[500px] md:w-[500px] md:opacity-40" />
      </div>

      <div className="container-ns relative z-10">
        {/* ── Section Header ── */}
        <motion.div
          className="mb-14 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeUp}>
            <Badge variant="gold" size="md" className="mb-5">
              NOSSOS SERVIÇOS
            </Badge>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          >
            <h2 className="font-heading text-h2 md:text-[3rem] lg:text-[3.5rem] font-light leading-[1.15] tracking-tight text-[var(--color-graphite)] max-w-2xl">
              Tratamentos
              <br />
              <span className="text-[var(--color-graphite)]/80">Especializados</span>
            </h2>

            <a
              href="#contato"
              className="group flex items-center gap-1.5 font-body text-small text-[var(--color-graphite)]/50 transition-colors hover:text-[var(--color-gold-dark)] shrink-0"
            >
              Ver todos
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
            </a>
          </motion.div>
        </motion.div>

        {/* ── Services Grid ── */}
        <motion.div
          className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerFast}
        >
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>

        {/* ── Mobile CTA ── */}
        <motion.div
          className="mt-10 text-center sm:hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Button variant="outline" size="md" className="group">
            Ver todos os tratamentos
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}