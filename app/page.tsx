import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { StatsTicker } from "@/components/stats-ticker"
import { Capabilities } from "@/components/capabilities"
import { Process } from "@/components/process"
import { GlobalSection } from "@/components/global-section"
import { CareerSection } from "@/components/career-section"
import { IntegrationsTicker } from "@/components/integrations-ticker"
import { WhyJoin } from "@/components/why-join"
import { DevelopmentSection } from "@/components/development-section"
import { PerformanceSection } from "@/components/performance-section"
import { CareerLadder } from "@/components/career-ladder"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <StatsTicker />
      <Capabilities />
      <Process />
      <GlobalSection />
      <CareerSection />
      <IntegrationsTicker />
      <WhyJoin />
      <DevelopmentSection />
      <PerformanceSection />
      <CareerLadder />
      <CTASection />
      <Footer />
    </main>
  )
}
