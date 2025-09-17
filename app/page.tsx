"use client";

import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { SupportedAssetsSection } from "./components/SupportedAssetsSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTASection } from "./components/FinalCTASection";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <FeaturesGrid />
      <SupportedAssetsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
