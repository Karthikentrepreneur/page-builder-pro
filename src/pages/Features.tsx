import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import {
  Cloud, Layers, TrendingUp, FileText, Headphones, CheckCircle2,
  Users, BarChart3, Settings, Shield, Globe, Monitor, Database, ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const overviewFeatures = [
  { icon: Users, title: "Integrated Platform", desc: "All modules work seamlessly together for unified operations." },
  { icon: BarChart3, title: "Actionable Insights", desc: "Real-time data and reporting to make smarter decisions." },
  { icon: Settings, title: "Operational Efficiency", desc: "Automate workflows and reduce manual effort." },
  { icon: TrendingUp, title: "Scalable & Flexible", desc: "Choose what you need today, scale as you grow tomorrow." },
  { icon: Shield, title: "Reliable & Secure", desc: "Enterprise-grade security to keep your data safe and compliant." },
  { icon: Globe, title: "Global Ready", desc: "Designed for global logistics businesses across the world." },
];

const coreFeatures = [
  { icon: Cloud, title: "Cloud Application", desc: "On-demand, web-based model that significantly reduces the need for heavy IT infrastructure. We handle maintenance, upgrades, data security, performance, support, and business continuity, while our cost-effective pay-per-use subscription model lowers total cost of ownership." },
  { icon: Layers, title: "Modular Architecture", desc: "A modular design that enables businesses to select only the functionalities they need, tailored to their specific operational requirements. As needs evolve, customers can easily integrate additional modules without disrupting existing workflows." },
  { icon: TrendingUp, title: "Scalable & Extensible", desc: "Built on a highly scalable and extensible architecture, designed to grow with your organization. Its flexible framework allows the system to evolve and adapt to shifting industry demands with minimal disruption." },
  { icon: FileText, title: "Document Management", desc: "Scan, categorize, and securely store critical documents such as quotations, invoices, and other essential records, directly against their corresponding shipment or client profile — supporting the full shipment lifecycle." },
  { icon: Headphones, title: "Customer Services", desc: "Provides partners with real-time access to critical information such as inventory levels, order status, and shipment tracking. Multi-channel accessibility fosters seamless communication and collaboration." },
];

const techPoints = [
  "PHP Laravel Web Application Stack",
  "Oracle RDBMS as data store",
  "Three-tier architecture: UI, Web, and Data",
  "Accessible via web browsers and smartphones",
  "Designed for scalability, maintainability, performance",
];

const Features = () => (
  <PageShell>
    <PageHero
      eyebrow="OUR PRODUCT"
      title="ShipSoft Features"
      subtitle="A complete ERP software for the logistics industry — trusted by freight forwarders worldwide."
      cta={
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Request Demo <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      }
    />

    <section className="py-20 lg:py-24 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">OVERVIEW</div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">A complete ERP software for logistics industry</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Shipsoft is a comprehensive web-based ERP solution tailored for the logistics industry, trusted by freight forwarders worldwide to streamline operations, gain actionable insights, and drive growth.
            </p>
            <p>
              Built on a modular architecture, Shipsoft allows businesses to choose and implement only the modules they need — ensuring flexibility and scalability.
            </p>
            <p>
              The platform includes integrated systems for Customer Relationship Management, Accounts, Freight, Transport, Warehouse, Distribution, and E-commerce. This modular design optimizes key processes, improves efficiency, and boosts sales and revenue — while adapting to fit their unique operational requirements.
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {overviewFeatures.map((f) => (
            <div key={f.title} className="bg-card rounded-2xl p-5 shadow-card border border-border/50">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <f.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-bold text-sm mb-1.5">{f.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-24 bg-surface-soft">
      <div className="container grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">ARCHITECTURE & TECHNOLOGY</div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">Built on a robust, modern stack</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Shipsoft uses the PHP Laravel Web Application Stack and Oracle as its data store — one of the most widely used Relational Database Management Systems. Shipsoft leverages a robust three-tier architecture, comprising the UI, Web and Data tiers — ensuring scalability, maintainability, and performance.
          </p>
          <ul className="space-y-3">
            {techPoints.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-foreground/80">{p}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-navy-deep rounded-2xl p-8 lg:p-10 text-white shadow-float">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-11 w-11 rounded-lg bg-primary flex items-center justify-center">
              <Layers className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-bold">Three-tier Architecture</h3>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { tier: "UI Tier", icon: Monitor },
              { tier: "Web Tier", icon: Globe },
              { tier: "Data Tier", icon: Database },
            ].map((t, i) => (
              <div key={t.tier} className="relative">
                <div className="bg-white/5 rounded-xl p-4 text-center border border-white/10">
                  <div className="text-[10px] uppercase tracking-wider text-white/50 mb-2">Layer {i + 1}</div>
                  <div className="font-bold text-sm mb-3">{t.tier}</div>
                  <t.icon className="h-6 w-6 mx-auto text-primary-glow" />
                </div>
                {i < 2 && <ArrowRight className="hidden sm:block absolute top-1/2 -right-2 -translate-y-1/2 h-4 w-4 text-white/40 z-10" />}
              </div>
            ))}
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Three-tier architecture for enterprise-grade scalability, maintainability, and performance.
          </p>
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">CORE FEATURES</div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">Everything your logistics business needs</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((f) => (
            <div key={f.title} className="bg-card rounded-2xl p-7 shadow-card hover:shadow-float transition-all hover:-translate-y-1 border border-border/50">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageShell>
);

export default Features;
