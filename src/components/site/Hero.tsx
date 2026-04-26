import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Cpu,
  Eye,
  TrendingUp,
  MapPin,
  FileCheck,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";

import heroBg from "@/assets/hero.png";
import dashboard from "@/assets/laptop.png";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#050816] text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          className="h-full w-full object-cover opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/90 to-[#050816]/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,123,255,0.15),transparent_40%)]" />
      </div>

      {/* CONTENT */}
      <div className="container relative grid lg:grid-cols-2 gap-12 py-24 lg:py-32 items-center">
        {/* LEFT */}
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Automated,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              AI-Integrated
            </span>
            <br />
            ERP Logistics
          </h1>

          <p className="mt-6 text-lg text-white/70 max-w-xl">
            Transform your logistics with intelligent automation, real-time
            tracking, and scalable ERP solutions built for modern supply chains.
          </p>

          {/* FEATURES */}
          <div className="mt-8 flex flex-wrap gap-6">
            {[
              { icon: Cpu, label: "AI Automation" },
              { icon: Eye, label: "Live Visibility" },
              { icon: TrendingUp, label: "Scalable Growth" },
            ].map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 hover:border-blue-400/40 transition"
              >
                <f.icon className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">{f.label}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex gap-4">
            <Button
              size="xl"
              className="bg-blue-500 hover:bg-blue-600 shadow-lg shadow-blue-500/30"
            >
              Request Demo <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              size="xl"
              variant="outline"
              className="border-white/20 text-bg-blue-600 hover:bg-white/10"
            >
              Free Consultation
            </Button>
          </div>

          {/* TRUST */}
          <div className="mt-8 flex items-center gap-2 text-sm text-white/70">
            <ShieldCheck className="h-4 w-4 text-blue-400" />
            Trusted by Global Logistics Leaders
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative hidden lg:block">
          <div className="relative">
            <img
              src={dashboard}
              className="w-full drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)] animate-float"
            />

            <FloatingCard
              className="top-0 right-0"
              icon={<MapPin className="h-4 w-4 text-blue-500" />}
              title="Live Tracking"
              sub="Real-time Updates"
            />

            <FloatingCard
              className="bottom-24 -left-6"
              icon={<FileCheck className="h-4 w-4 text-blue-500" />}
              title="Auto BL"
              sub="AI Processing"
            />

            <FloatingCard
              className="-bottom-4 right-10"
              icon={<BadgeCheck className="h-4 w-4 text-green-400" />}
              title="Shipment Status"
              sub="Instant Alerts"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FloatingCard = ({ className, icon, title, sub }) => (
  <div
    className={`absolute ${className} bg-white/10 backdrop-blur-lg border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl animate-fadeUp`}
  >
    <div className="h-9 w-9 rounded-lg bg-white/20 flex items-center justify-center">
      {icon}
    </div>
    <div>
      <div className="text-sm font-semibold">{title}</div>
      <div className="text-xs text-white/60">{sub}</div>
    </div>
  </div>
);

export default Hero;
