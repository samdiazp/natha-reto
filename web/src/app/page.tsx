import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { PricingSection } from "@/components/pricing-section";
import { BonusSection } from "@/components/bonus-section";
import { BenefitsSection } from "@/components/benefits-section";
import { FAQSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { BeforeSection } from "@/components/before-section";
import { Info } from "@/components/info";
import { Us } from "@/components/us";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <BeforeSection />
      <Info />
      <PricingSection />
      <Us />
      <FAQSection />
      <Footer />
    </main>
  );
}
