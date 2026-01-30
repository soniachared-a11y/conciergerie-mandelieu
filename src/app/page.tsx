import {
  Header,
  Hero,
  PartnersMarquee,
  ConciergerieServices,
  FleetServicesMarquee,
  Stats,
  CheminVersExcellence,
  CoverageMap,
  HowItWorks,
  TestimonialsCarousel,
  FAQ,
  ContactSection,
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
      <CheminVersExcellence />
      <CoverageMap />
      <HowItWorks />
      <TestimonialsCarousel />
      <FAQ />
      <ContactSection />
      <Footer />
    </div>
  );
}
