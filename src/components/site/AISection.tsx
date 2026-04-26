import { Brain, ShieldCheck, Globe, UserCircle, BarChart3 } from "lucide-react";
import aiBg from "@/assets/ai-globe.jpg";

const features = [
  { icon: Brain, color: "cat-blue", title: "AI & Intelligent Automation", desc: "AI-enabled Manifest and BL processing with intelligent field mapping automatically generates shipment records, reducing manual effort and errors." },
  { icon: ShieldCheck, color: "cat-green", title: "Global Compliance & Government EDIs", desc: "Ensures compliance with regional and global standards. Supports tax invoicing, statutory reporting, EDI submissions, and import/export documentation." },
  { icon: Globe, color: "cat-blue", title: "Global Freight Connectivity", desc: "Connects you to the global logistics ecosystem with eAWB EDI (FWB & FHL), real-time track & trace, AMS & AFR codes, and international compliance." },
  { icon: UserCircle, color: "cat-purple", title: "Customer Experience & Visibility", desc: "User-friendly portal with real-time shipment tracking and 3PL inventory visibility. WhatsApp notifications keep customers informed at every step." },
  { icon: BarChart3, color: "cat-orange", title: "Smart Analytics & Insights", desc: "Real-time dashboards and reports provide actionable insights to help you make smarter decisions and accelerate business growth." },
];

const AISection = () => (
  <section className="relative py-20 lg:py-28 bg-navy-deep text-white overflow-hidden">
    <div className="absolute inset-0">
      <img src={aiBg} alt="" className="h-full w-full object-cover opacity-50" loading="lazy" width={1920} height={800} />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/40" />
    </div>
    <div className="container relative">
      <h2 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl mb-16">
        Powering Logistics with <br /> AI, Compliance & Connectivity
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
        {features.map((f) => (
          <div key={f.title}>
            <div
              className="h-14 w-14 rounded-xl flex items-center justify-center mb-5 border border-white/10"
              style={{ backgroundColor: `hsl(var(--${f.color}) / 0.15)` }}
            >
              <f.icon className="h-7 w-7" style={{ color: `hsl(var(--${f.color}))` }} />
            </div>
            <h3 className="font-bold text-base mb-3 leading-snug">{f.title}</h3>
            <p className="text-sm text-white/70 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AISection;
