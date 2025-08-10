import { FAQSection } from "@/components/sections/faq-section";
import FeaturesSection from "@/components/sections/features-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { PerformanceOptimizationSection } from "@/components/sections/performrnce";
import { PricingSection } from "@/components/sections/pricing-section";
import { RoiCalculatorSection } from "@/components/sections/roi";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { Chatbot } from "@/components/ui/chatbot";
import { Navigation } from "@/components/ui/navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:bg-gradient-to-br dark:from-black dark:via-black dark:to-black">
      <Navigation />
      <main>
        <HeroSection />
        <PerformanceOptimizationSection />
        <FeaturesSection />
        <PricingSection />
        <RoiCalculatorSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
