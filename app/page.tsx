"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { ProblemsSection } from "@/components/landing/problems-section";
import { FeaturesSection } from "@/components/landing/features-section";
import { ComparisonSection } from "@/components/landing/comparison-section";
import { IndustryAlertSection } from "@/components/landing/industry-alert-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { ROICalculatorSection } from "@/components/landing/roi-calculator-section";
import { PricingSection } from "@/components/landing/pricing-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FinalCTASection } from "@/components/landing/final-cta-section";
import { Footer } from "@/components/landing/footer";

export default function CVLabLanding() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  const handleAcceptCookies = () => {
    setShowCookieBanner(false);
  };

  const handleEssentialCookies = () => {
    setShowCookieBanner(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProblemsSection />
      <FeaturesSection />
      <ComparisonSection />
      <IndustryAlertSection />
      <HowItWorksSection />
      <ROICalculatorSection />
      <PricingSection />
      <TestimonialsSection />
      <FinalCTASection />
      <Footer />

      {/* Cookie Banner */}
      {showCookieBanner && (
        <div className="fixed inset-x-0 bottom-0 z-50 bg-white border-t border-gray-200 shadow-lg py-3 px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            We use cookies to enhance your experience and analyze site usage.
            <a href="#" className="text-blue-600 hover:underline ml-1">
              Learn more
            </a>
          </p>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={handleEssentialCookies}
            >
              Essential Only
            </Button>
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700"
              onClick={handleAcceptCookies}
            >
              Accept All
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
