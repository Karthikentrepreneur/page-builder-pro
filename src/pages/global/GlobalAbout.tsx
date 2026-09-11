import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import {
  Users, Truck, Warehouse, Bus, DollarSign, Package, ShoppingCart,
  Award, Wrench, Settings, Link2, Server, Headphones,
  Calendar, Globe, ShieldCheck, BarChart3, Rocket, Clock, ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  {
    icon: Server,
    value: "ERP",
    label: "Complete web-based",
    sub: "ERP for logistics",
  },
  {
    icon: Users,
    value: "500+",
    label: "Users worldwide",
    sub: "",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Cloud uptime",
    sub: "",
  },
  {
    icon: Package,
    value: "5",
    label: "Core modules",
    sub: "",
  },
];

const services = [
  { icon: Users, title: "Customer Relationship Management", desc: "Build stronger relationships and manage customer interactions seamlessly.", to: "/modules/crm", color: "cat-blue" },
  { icon: Truck, title: "Freight Management System", desc: "Streamline freight operations from booking to delivery with real-time visibility.", to: "/modules/freight", color: "cat-violet" },
  { icon: Warehouse, title: "Warehouse Management System", desc: "Optimize warehouse operations with inventory accuracy and real-time tracking.", to: "/modules/warehouse", color: "cat-green" },
  { icon: Bus, title: "Transport Management System", desc: "Manage fleet, routes, pricing and compliance with ease and efficiency.", to: "/modules/transport", color: "cat-pink" },
  { icon: DollarSign, title: "Accounts Management System", desc: "Automate financial operations and maintain accuracy across all transactions.", to: "/modules/accounts", color: "cat-orange" },
  { icon: Package, title: "Distribution Management System", desc: "Ensure efficient order fulfilment and last-mile delivery with full visibility.", to: "/modules/distribution", color: "cat-purple" },
  { icon: ShoppingCart, title: "e-Commerce", desc: "Connect your online store with logistics operations for seamless order processing.", to: "/modules/distribution", color: "cat-blue" },
];

const consulting = [
  { icon: Settings, title: "Enterprise Implementation", desc: "End-to-end implementation tailored to your business needs." },
  { icon: Link2, title: "System Integration", desc: "Seamless integration with existing systems and third-party tools." },
  { icon: Server, title: "Infrastructure Strategy", desc: "Future-ready infrastructure designed for scalability and security." },
  { icon: Headphones, title: "Outsourcing Support", desc: "Flexible engagement models to support your business growth." },
];

const reasons = [
  { icon: Award, title: "Expertise in Logistics Tech", desc: "Deep industry knowledge built for logistics and supply chain." },
  { icon: BarChart3, title: "Scalable & Cost-Effective", desc: "Solutions that grow with your business without compromising quality." },
  { icon: Clock, title: "Proven Experience", desc: "Reliable systems designed for performance, uptime and consistency." },
  { icon: ShieldCheck, title: "Enterprise-Grade Solutions", desc: "Secure, reliable and high-performance solutions for modern enterprises." },
];

const About = () => (
  <PageShell>
    <PageHero
      eyebrow="ABOUT US"
      title="About Shipsoft"
      subtitle="A Singapore-based IT company specializing in cutting-edge software for logistics and supply chain management. We empower businesses with innovative, scalable and reliable digital solutions."
    />

    <section className="py-20 lg:py-24 bg-surface-soft">
      <div className="container grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">WHO WE ARE</div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">Driving Innovation in Logistics Technology</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Shipsoft Solutions is a Singapore-based IT company focused on building next-generation logistics and supply chain software that drives efficiency, visibility, and growth.
            </p>
            <p>
              Our mission is to deliver innovative, cost-effective digital solutions that empower businesses to optimize operations and stay ahead in a rapidly evolving world.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {stats.map((s) => (
            <div key={s.label} className="bg-card rounded-2xl p-6 shadow-card border border-border/50 text-center">
              <div className="h-12 w-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="text-3xl font-extrabold text-foreground mb-1">{s.value}</div>
              <div className="text-sm font-semibold text-foreground mb-1">{s.label}</div>
              {s.sub && (
                <div className="text-xs text-muted-foreground leading-relaxed">{s.sub}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-24 bg-background">
      <div className="container">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
          <div>
            <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">WHAT WE DO</div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">Our Core Solutions</h2>
          </div>
          <Link to="/features" className="text-sm font-semibold text-primary hover:text-primary-glow inline-flex items-center gap-2">
            Explore All Solutions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <Link
              key={s.title}
              to={s.to}
              className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-float transition-all hover:-translate-y-1 border border-border/50 flex flex-col"
            >
              <div
                className="h-11 w-11 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `hsl(var(--${s.color}) / 0.12)` }}
              >
                <s.icon className="h-5 w-5" style={{ color: `hsl(var(--${s.color}))` }} />
              </div>
              <h3 className="font-bold text-base leading-snug mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{s.desc}</p>
              <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-24 bg-background">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">WHY CHOOSE US</div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">A Partner You Can Rely On</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="text-center px-2">
              <div className="h-14 w-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <r.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-bold text-base mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageShell>
);

export default About;
