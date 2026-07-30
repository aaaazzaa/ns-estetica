"use client"

import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  Instagram,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  ExternalLink,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { fadeUp, staggerFast } from "@/lib/animations"

// ── Footer Data ───────────────────────────────────────────
const SOCIAL_LINKS = [
  { icon: Instagram, href: "https://www.instagram.com/dranaiarasoares/", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
]

const QUICK_LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#procedimentos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
]

const TREATMENT_LINKS = [
  { label: "Harmonização Facial", href: "#procedimentos" },
  { label: "Preenchimento Facial", href: "#procedimentos" },
  { label: "Toxina Botulínica", href: "#procedimentos" },
  { label: "Bioestimuladores", href: "#procedimentos" },
  { label: "Lipoenzimática", href: "#procedimentos" },
  { label: "Peeling", href: "#procedimentos" },
]

const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Av. JK, 1244 - Loja 08, Alaíta\nItaúna - MG",
    href: "https://www.google.com/maps/search/?api=1&query=Dra+Naiara+Soares+Av+Juscelino+Kubitscheck+1244+Alaita+Itauna+MG",
  },
  {
    icon: Phone,
    label: "(31) 99773-9997",
    href: "https://wa.me/5531997739997",
  },
  {
    icon: Mail,
    label: "contato@nsestetica.com.br",
    href: "mailto:contato@nsestetica.com.br",
  },
  {
    icon: Clock,
    label: "Seg a Sex: 8h — 18h",
    href: undefined,
  },
]

// ── Footer Column ─────────────────────────────────────────
function FooterColumn({
  title,
  children,
}: {
  title?: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-4">
      {title && (
        <h4 className="font-heading text-h5 font-normal text-white">
          {title}
        </h4>
      )}
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  )
}

function FooterLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      className="font-body text-small text-white/45 transition-colors duration-200 hover:text-[var(--color-gold)] w-fit"
    >
      {children}
    </a>
  )
}

// ── Footer Section ────────────────────────────────────────
export function FooterSection() {
  return (
    <footer id="contato" className="relative bg-[var(--color-dark-soft)]">
      {/* Top border accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--color-gold)]/20 to-transparent" />

      {/* ── Main Footer Content ── */}
      <div className="container-ns py-16 md:py-20 lg:py-24">
        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerFast}
        >
          {/* ── Column 1: Brand ── */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1"
          >
            <div>
              <Image
                src="/assets/img/logo.png"
                alt="Logo NS Estetica — Dra. Naiara Soares"
                width={56}
                height={56}
                className="h-11 w-auto md:h-14 object-contain"
              />
            </div>

            <p className="font-body text-small leading-relaxed text-white/45 max-w-xs">
              Resultados naturais guiados por precisão estética.
              Harmonização Facial e Estética Avançada em Itaúna e Rio Manso.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/35 transition-all duration-200 hover:border-[var(--color-gold)]/40 hover:text-[var(--color-gold)] hover:bg-[var(--color-gold)]/5"
                    aria-label={social.label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* ── Column 2: Quick Links ── */}
          <motion.div variants={fadeUp}>
            <FooterColumn title="Links">
              {QUICK_LINKS.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterColumn>
          </motion.div>

          {/* ── Column 3: Treatments ── */}
          <motion.div variants={fadeUp}>
            <FooterColumn title="Tratamentos">
              {TREATMENT_LINKS.map((link) => (
                <FooterLink key={link.label} href={link.href}>
                  {link.label}
                </FooterLink>
              ))}
            </FooterColumn>
          </motion.div>

          {/* ── Column 4: Contact ── */}
          <motion.div variants={fadeUp}>
            <FooterColumn title="Contato">
              {CONTACT_INFO.map((item) => {
                const Icon = item.icon
                const content = (
                  <div className="flex items-start gap-3 cursor-pointer group">
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-gold)]/50 group-hover:text-[var(--color-gold)] transition-colors" />
                    <span className="font-body text-small text-white/45 group-hover:text-white/70 transition-colors whitespace-pre-line">
                      {item.label}
                    </span>
                  </div>
                )
                return item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}

              {/* Google Maps button */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Dra+Naiara+Soares+Av+Juscelino+Kubitscheck+1244+Alaita+Itauna+MG"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-2 font-body text-caption text-[var(--color-gold)]/60 hover:text-[var(--color-gold)] transition-colors w-fit"
              >
                <ExternalLink className="h-3 w-3" />
                Abrir no Google Maps
              </a>
            </FooterColumn>
          </motion.div>

          {/* ── Column 5: Newsletter ── */}
          <motion.div variants={fadeUp}>
            <FooterColumn title="Newsletter">
              <p className="font-body text-small text-white/45 leading-relaxed">
                Receba novidades e dicas de estética.
              </p>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  className="h-11 w-full sm:w-auto flex-1 rounded-button border border-white/10 bg-white/5 px-4 font-body text-small text-white placeholder:text-white/25 outline-none transition-all duration-200 focus:border-[var(--color-gold)]/50 focus:bg-white/[0.08]"
                />
                <button
                  className="flex h-11 w-full sm:w-11 items-center justify-center rounded-button bg-[var(--color-gold)] text-[var(--color-dark-soft)] transition-all duration-200 hover:bg-[var(--color-gold-dark)] hover:text-white"
                  aria-label="Inscrever"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>

              <p className="font-body text-caption text-white/25">
                Prometemos não enviar spam.
              </p>
            </FooterColumn>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-white/5">
        <div className="container-ns flex flex-col items-center justify-between gap-2 py-6 sm:flex-row">
          <p className="font-body text-caption text-white/30">
            © {new Date().getFullYear()} NS Estetica. Todos os direitos
            reservados.
          </p>
          <p className="font-body text-caption text-white/20">
            Dra. Naiara Soares — CRBM 13651
          </p>
        </div>
      </div>
    </footer>
  )
}