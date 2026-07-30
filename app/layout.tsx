import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"

// ── Fonts ─────────────────────────────────────────────────
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-cormorant",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
})

// ── Metadata ──────────────────────────────────────────────
export const metadata: Metadata = {
  title: "NS Estetica — Dra. Naiara Soares | Harmonização Facial em Itaúna e Rio Manso",
  description:
    "Harmonização Facial, Preenchimento, Toxina Botulínica e Estética Avançada. Resultados naturais com a biomédica esteta Dra. Naiara Soares — CRBM 13651.",
  keywords: [
    "harmonização facial",
    "estética avançada",
    "preenchimento facial",
    "toxina botulínica",
    "biomédica esteta",
    "Itaúna",
    "Rio Manso",
    "NS Estetica",
    "Dra Naiara Soares",
  ],
  openGraph: {
    title: "NS Estetica — Dra. Naiara Soares",
    description:
      "Harmonização Facial e Estética Avançada com resultados naturais. Atendimento em Itaúna e Rio Manso.",
    locale: "pt_BR",
    type: "website",
  },
}

// ── Root Layout ───────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-[var(--color-cream)] antialiased">
        {children}
      </body>
    </html>
  )
}
