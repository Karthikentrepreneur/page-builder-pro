import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Solutions from "@/components/site/Solutions";
import TrustedBy from "@/components/site/TrustedBy";
import AISection from "@/components/site/AISection";
import Testimonials from "@/components/site/Testimonials";
import CTA from "@/components/site/CTA";
import Footer from "@/components/site/Footer";

const Index = () => {
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

export default Index;
