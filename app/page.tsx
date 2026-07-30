import { HeroSection } from "@/components/sections/hero"
import { ServicesSection } from "@/components/sections/services"
import { AboutSection } from "@/components/sections/about"
import { SpecialtiesSection } from "@/components/sections/specialties"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTABannerSection } from "@/components/sections/cta-banner"
import { FooterSection } from "@/components/sections/footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <SpecialtiesSection />
      <TestimonialsSection />
      <CTABannerSection />
      <FooterSection />
    </main>
  )
}
