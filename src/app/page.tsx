import {
  Header,
  Hero,
  PartnersMarquee,
  ConciergerieServices,
  FleetServicesMarquee,
  HowItWorks,
  Stats,
  ChauffeurRegionSection,
  BentoFeatures,
  ComparisonPaymentSection,
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
      <ConciergerieServices />
      <FleetServicesMarquee />
      <Stats />
      <HowItWorks />
      <ChauffeurRegionSection />
      <BentoFeatures />
      <ComparisonPaymentSection />
      <CheminVersExcellence />
      <TestimonialsCarousel />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
