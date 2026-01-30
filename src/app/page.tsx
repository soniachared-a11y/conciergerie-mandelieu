import {
  Header,
  Hero,
  PartnersMarquee,
  ConciergerieServices,
  FleetServicesMarquee,
  HowItWorks,
  Stats,
  ChauffeurRegionSection,
  CheminVersExcellence,
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
      <Stats />
      <ChauffeurRegionSection />
      <HowItWorks />
      <CheminVersExcellence />
      <TestimonialsCarousel />
      <FAQ />
      <Footer />
    </div>
  );
}
