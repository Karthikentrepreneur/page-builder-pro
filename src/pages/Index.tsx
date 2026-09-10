import React from "react";
import { useRegion } from "@/contexts/RegionContext";
import IndiaHome from "./IndiaHome";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Solutions from "@/components/site/Solutions";
import TrustedBy from "@/components/site/TrustedBy";
import AISection from "@/components/site/AISection";
import Testimonials from "@/components/site/Testimonials";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

export const GlobalHome: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <TrustedBy />
        <AISection />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

const Index: React.FC = () => {
  const { isIndia } = useRegion();

  if (isIndia) {
    return <IndiaHome />;
  }

  return <GlobalHome />;
};

export default Index;
