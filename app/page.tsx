import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TrustBar from '@/components/TrustBar';
import ServicesSection from '@/components/ServicesSection';
import FlourishApproach from '@/components/FlourishApproach';
import GoogleReviews from '@/components/GoogleReviews';
import FAQSection from '@/components/FAQSection';
import CalendlySection from '@/components/CalendlySection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustBar />
      <ServicesSection />
      <FlourishApproach />
      <GoogleReviews />
      <FAQSection />
      <CalendlySection />
      <Footer />
      </main>
  );
}
