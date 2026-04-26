import { Button } from "@/components/ui/button";
import { ArrowRight, Cpu, Eye, TrendingUp, MapPin, FileCheck, ShieldCheck, BadgeCheck } from "lucide-react";
import heroBg from "@/assets/hero-port.jpg";
import dashboard from "@/assets/dashboard-mockup.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-white">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Global shipping port at sunset" className="h-full w-full object-cover opacity-60" width={1920} height={1088} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-navy-deep/30" />
      </div>

      <div className="container relative grid lg:grid-cols-2 gap-10 py-20 lg:py-28 items-center">
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            Automated,
            <br />
            <span className="text-primary-glow">AI-Integrated</span>
            <br />
            ERP Logistics Software
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-lg">
            Smarter automation. Faster operations. Built for the future.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            {[
              { icon: Cpu, label: "AI-Powered", sub: "Automation" },
              { icon: Eye, label: "Real-time", sub: "Visibility" },
              { icon: TrendingUp, label: "Scalable &", sub: "Cost-effective" },
            ].map((f) => (
              <div key={f.label} className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <f.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <div className="text-sm leading-tight">
                  <div className="font-semibold">{f.label}</div>
                  <div className="text-white/70">{f.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="hero" size="xl">
              Request Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="heroOutline" size="xl">Free Consultation</Button>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm text-white/80">
            <ShieldCheck className="h-4 w-4 text-primary-glow" />
            Trusted by Global Freight Forwarders & Logistical Leaders
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative">
            <img src={dashboard} alt="Shipsoft logistics dashboard" className="w-full drop-shadow-float" width={1280} height={896} />

            <FloatingCard className="-top-2 right-4" icon={<MapPin className="h-4 w-4 text-primary" />} title="Live Tracking" sub="Real-time Updates" />
            <FloatingCard className="bottom-24 -left-2" icon={<FileCheck className="h-4 w-4 text-primary" />} title="Auto BL Processing" sub="AI-Powered" />
            <FloatingCard className="-bottom-2 right-12" icon={<BadgeCheck className="h-4 w-4" style={{ color: "hsl(var(--cat-green))" }} />} title="Shipment Status" sub="Stay Informed" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FloatingCard = ({ className = "", icon, title, sub }: { className?: string; icon: React.ReactNode; title: string; sub: string }) => (
  <div className={`absolute ${className} bg-card text-card-foreground rounded-xl shadow-float px-4 py-3 flex items-center gap-3 animate-in fade-in zoom-in duration-700`}>
    <div className="h-9 w-9 rounded-lg bg-accent flex items-center justify-center">{icon}</div>
    <div className="leading-tight">
      <div className="text-sm font-semibold">{title}</div>
      <div className="text-xs text-muted-foreground">{sub}</div>
    </div>
  </div>
);

export default Hero;
