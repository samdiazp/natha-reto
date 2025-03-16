import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { PricingSection } from '@/components/pricing-section';
import { BonusSection } from '@/components/bonus-section';
import { BenefitsSection } from '@/components/benefits-section';
import { FAQSection } from '@/components/faq-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <HeroSection />
      <PricingSection />
      <BonusSection />
      <BenefitsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
