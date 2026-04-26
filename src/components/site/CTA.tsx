import { Button } from "@/components/ui/button";
import ctaBg from "@/assets/cta-bg.jpg";

const CTA = () => (
  <section className="relative py-16 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-cta" />
    <img src={ctaBg} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-overlay" loading="lazy" width={1920} height={512} />
    <div className="container relative grid md:grid-cols-2 gap-8 items-center text-primary-foreground">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Ready to Digitize Your Logistics Business?</h2>
        <p className="text-primary-foreground/90 max-w-xl">
          Join hundreds of forward-thinking companies using Shipsoft to streamline operations, reduce costs, and scale globally.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 md:justify-end">
        <Button variant="secondary" size="xl" className="bg-white text-primary hover:bg-white/90">Request Demo</Button>
        <Button variant="heroOutline" size="xl">Contact Us</Button>
      </div>
    </div>
  </section>
);

export default CTA;
