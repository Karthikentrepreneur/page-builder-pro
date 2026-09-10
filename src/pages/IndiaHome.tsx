import React from "react";
import { SeoHead } from "@/components/SeoHead";
import { IndiaHeader } from "@/components/india/IndiaHeader";
import { IndiaHero } from "@/components/india/IndiaHero";
import { IndiaAboutSection } from "@/components/india/IndiaAboutSection";
import { IndiaMissionVision } from "@/components/india/IndiaMissionVision";
import { IndiaServicesSection } from "@/components/india/IndiaServicesSection";
import { IndiaTeamSection } from "@/components/india/IndiaTeamSection";
import { GlobalImpact } from "@/components/GlobalImpact";
import LocationsSection from "@/components/LocationsSection";
import { IndiaFooter } from "@/components/india/IndiaFooter";

const IndiaHome: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900">
      <SeoHead page="home" />
      <IndiaHeader />
      <main className="flex-grow">
        <IndiaHero />
        <IndiaAboutSection />
        <IndiaMissionVision />
        <IndiaServicesSection />
        <IndiaTeamSection />
        <GlobalImpact />
        <LocationsSection />
      </main>
      <IndiaFooter />
    </div>
  );
};

export default IndiaHome;
