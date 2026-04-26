import { Button } from "@/components/ui/button";
import ctaBg from "@/assets/cta-bg.jpg";
import { Send, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => (
  <section className="relative py-14 lg:py-16 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-cta" />
    <img src={ctaBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-overlay" loading="lazy" />
    <div className="absolute inset-0" style={{
      backgroundImage: "radial-gradient(circle at 90% 50%, hsl(var(--primary-glow) / 0.4) 0%, transparent 50%)"
    }} />

    <div className="container relative grid md:grid-cols-2 gap-8 items-center text-primary-foreground">
      <div className="flex items-start gap-5">
        <div className="hidden sm:flex h-14 w-14 rounded-full bg-white/15 items-center justify-center shrink-0 border border-white/20">
          <Send className="h-6 w-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">Ready to Digitize Your Logistics Business?</h2>
          <p className="text-primary-foreground/90 text-sm md:text-base max-w-xl">
            Join hundreds of forward-thinking companies using Shipsoft to streamline operations, reduce costs, and scale globally.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 md:justify-end">
        <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
          <Link to="/contact">Request Demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
        <Button variant="heroOutline" size="lg" asChild>
          <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </div>
  </section>
);

export default CTA;
