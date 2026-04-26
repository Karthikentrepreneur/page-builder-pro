import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const items = [
  { quote: "Shipsoft transformed the way we operate. The automation and visibility have improved our efficiency by 70%.", company: "Nautical Cargo", role: "Operations Director" },
  { quote: "The best logistics ERP we've used. Real-time tracking and AI features are game changers.", company: "Prime Shipping", role: "Managing Director" },
  { quote: "Reduced manual work by 60% and improved customer satisfaction significantly.", company: "EMSTAR", role: "CEO" },
];

const Testimonials = () => (
  <section className="py-20 bg-surface-soft">
    <div className="container grid lg:grid-cols-4 gap-8 items-start">
      <div className="lg:col-span-1">
        <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">WHAT OUR CLIENTS SAY</div>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">Driving Success for Logistics Businesses</h2>
        <div className="h-1 w-16 bg-primary rounded mb-8" />
        <div className="flex gap-2">
          <button className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="lg:col-span-3 grid md:grid-cols-3 gap-5">
        {items.map((t) => (
          <article key={t.company} className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
            <Quote className="h-7 w-7 text-primary/30 mb-3" />
            <p className="text-sm text-foreground/90 leading-relaxed mb-6">{t.quote}</p>
            <div className="border-t border-border pt-4">
              <div className="font-bold text-sm">{t.company}</div>
              <div className="text-xs text-muted-foreground">{t.role}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
