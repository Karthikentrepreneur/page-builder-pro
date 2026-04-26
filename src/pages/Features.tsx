import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import { Cloud, Layers, TrendingUp, FileText, Headphones, Cpu, CheckCircle2 } from "lucide-react";

const features = [
  { icon: Cloud, title: "Cloud Application", desc: "Shipsoft Solutions offers an on-demand, web-based model that significantly reduces the need for heavy IT infrastructure. We handle maintenance, upgrades, data security, performance, support, and business continuity, while our cost-effective pay-per-use subscription model lowers total cost of ownership." },
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
    <PageHero eyebrow="OUR PRODUCT" title="ShipSoft Features" subtitle="A complete ERP software for the logistics industry — trusted by freight forwarders worldwide." />

    <section className="py-20 lg:py-24 bg-background">
      <div className="container max-w-4xl">
        <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">OVERVIEW</div>
        <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">A complete ERP software for logistics industry</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Shipsoft is a comprehensive web-based ERP solution tailored for the logistics industry, trusted by freight forwarders worldwide to streamline operations, gain actionable insights, and drive growth. Built on a modular architecture, Shipsoft allows businesses to choose and implement only the modules they need — ensuring flexibility and scalability.
          </p>
          <p>
            The platform includes integrated systems for Customer Relationship Management, Accounts, Freight, Transport, Warehouse, Distribution, and E-commerce. This modular design enables businesses to optimize key processes, improve efficiency, and boost sales and revenue — while adapting the system to fit their unique operational requirements.
          </p>
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
        <div className="bg-navy-deep rounded-2xl p-10 text-white shadow-float">
          <Cpu className="h-12 w-12 text-primary-glow mb-6" />
          <div className="grid grid-cols-3 gap-4 mb-6">
            {["UI Tier", "Web Tier", "Data Tier"].map((tier, i) => (
              <div key={tier} className="bg-white/10 rounded-xl p-4 text-center border border-white/10">
                <div className="text-xs text-white/60 mb-1">Layer {i + 1}</div>
                <div className="font-bold">{tier}</div>
              </div>
            ))}
          </div>
          <div className="text-sm text-white/70">
            Three-tier architecture for enterprise-grade scalability, maintainability, and performance.
          </div>
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
          {features.map((f) => (
            <div key={f.title} className="bg-card rounded-2xl p-7 shadow-card hover:shadow-float transition-all hover:-translate-y-1 border border-border/50">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5">
                <f.icon className="h-6 w-6 text-primary-foreground" />
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
