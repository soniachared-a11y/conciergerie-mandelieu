import {
  Header,
  Hero,
  PartnersMarquee,
  Services,
  HowItWorks,
  Fleet,
  Stats,
  ExperienceOnBoard,
  CoverageMap,
  BentoFeatures,
  PaymentDemo,
  ComparisonTable,
  CheminVersExcellence,
  TestimonialsCarousel,
  FAQ,
  FinalCTA,
  Footer,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Header />
      <Hero />
      <PartnersMarquee />
      <Services />
      <HowItWorks />
      <Fleet />
      <Stats />
      <ExperienceOnBoard />
      <CoverageMap />
      <BentoFeatures />
      <PaymentDemo />
      <ComparisonTable />
      <CheminVersExcellence />
      <TestimonialsCarousel />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
