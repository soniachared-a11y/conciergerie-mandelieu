import {
  Header,
  Hero,
  PartnersMarquee,
  ConciergerieServices,
  FleetServicesMarquee,
  ChauffeurRegionSection,
  Stats,
  CheminVersExcellence,
  HowItWorks,
  TestimonialsCarousel,
  FAQ,
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
      <HowItWorks />
      <ChauffeurRegionSection />
      <Stats />
      <CheminVersExcellence />
      <TestimonialsCarousel />
      <FAQ />
      <Footer />
    </div>
  );
}
