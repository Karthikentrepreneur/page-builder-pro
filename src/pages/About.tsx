import PageShell from "@/components/site/PageShell";
import PageHero from "@/components/site/PageHero";
import { Phone, Users, Truck, Warehouse, Bus, DollarSign, Package, ShoppingCart, Briefcase, Award, Wrench, Clock, Layers } from "lucide-react";

const services = [
  { icon: Users, title: "Customer Relationship Management", desc: "Complete customer visibility with real-time tracking of shipment status and history.", color: "cat-blue" },
  { icon: Truck, title: "Freight Management System", desc: "Shipsoft Solutions with its best-built freight management software are now pioneers.", color: "cat-violet" },
  { icon: Warehouse, title: "Warehouse Management System", desc: "Shipsoft's WMS is a comprehensive, customizable software solution that offers total visibility.", color: "cat-green" },
  { icon: Bus, title: "Transport Management System", desc: "City Master Price, Zone Master Price - city and zone level pricing you can create and maintain.", color: "cat-pink" },
  { icon: DollarSign, title: "Accounts Management System", desc: "The entire financial requirements of the enterprise can be managed with the module.", color: "cat-orange" },
  { icon: Package, title: "Distribution Management System", desc: "Designed to serve dealers & agency companies with web-based, lightweight access.", color: "cat-purple" },
  { icon: ShoppingCart, title: "e-Commerce", desc: "Operate your own dedicated online shop connected to WMS, freight & transport modules.", color: "cat-blue" },
];

const reasons = [
  { icon: Briefcase, title: "Expert Team in Logistics Software", desc: "A skilled development team adept in creating Logistics and Supply Chain Management Software in Singapore, leading renowned solution applications." },
  { icon: Award, title: "Cost-Effective, Quality IT Consulting", desc: "Our cost-effective solutions enhance client productivity, driven by principles of top-quality IT consulting with a proven track record." },
  { icon: Clock, title: "Decade-Long IT Expertise", desc: "With a decade of expertise, we serve companies relying on Information Technology for success in a competitive environment." },
  { icon: Layers, title: "Advanced, Enterprise-Grade Solutions", desc: "Shipsoft Solutions delivers enterprise-grade software for logistics, combining technological advancements and a passion for excellence." },
];

const About = () => (
  <PageShell>
    <PageHero eyebrow="OUR COMPANY" title="About Shipsoft" subtitle="A Singapore-based IT company specializing in cutting-edge software for logistics and supply chain management." />

    <section className="py-20 lg:py-24 bg-background">
      <div className="container grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">ABOUT THE COMPANY</div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">About Shipsoft Solutions</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Shipsoft Solutions is a Singapore-based IT company specializing in cutting-edge software for logistics and supply chain management. Our mission is to deliver innovative, cost-effective digital solutions that empower businesses to optimize operations and drive growth.
            </p>
            <p>
              We support organizations that rely on technology today, as well as those transitioning toward a fully digital environment, helping them thrive in an increasingly competitive and fast-paced global market.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-br from-primary to-primary-glow rounded-2xl p-8 text-primary-foreground shadow-float h-fit">
          <div className="text-xs font-bold tracking-[0.2em] mb-4 opacity-90">REACH OUT</div>
          <Phone className="h-10 w-10 mb-4 opacity-90" />
          <div className="text-3xl font-bold mb-2">+971 43 704077</div>
          <div className="text-sm opacity-90">Get in touch with our experts today and discover how Shipsoft can transform your logistics operations.</div>
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-24 bg-surface-soft">
      <div className="container">
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">WHAT WE DO</div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">We offer a wide range of services.</h2>
          <p className="text-muted-foreground">
            Shipsoft provides the best logistics software solutions covering every single aspect and operational element involved in logistics.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-float transition-all hover:-translate-y-1 border border-border/50">
              <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: `hsl(var(--${s.color}) / 0.12)` }}>
                <s.icon className="h-6 w-6" style={{ color: `hsl(var(--${s.color}))` }} />
              </div>
              <h3 className="font-bold text-lg leading-snug mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-24 bg-background">
      <div className="container grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">AND THERE'S MORE</div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">IT Consulting Services</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              We also provide integrated IT consulting services from concept to completion stage for various organizations catering to the commercial or public sector of different business sizes.
            </p>
            <p>
              From enterprise-level implementation to requirements gathering and systems integration through to infrastructure strategy, and assistance in finding outsourcing partners, we provide the full range of consultancy services.
            </p>
          </div>
        </div>
        <div className="bg-navy-deep rounded-2xl p-10 text-white shadow-float">
          <Wrench className="h-12 w-12 text-primary-glow mb-6" />
          <h3 className="text-2xl font-bold mb-4">End-to-end consulting</h3>
          <ul className="space-y-3 text-white/80">
            {["Enterprise implementation", "Requirements gathering", "Systems integration", "Infrastructure strategy", "Outsourcing partner sourcing"].map((i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-glow" /> {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    <section className="py-20 lg:py-24 bg-surface-soft">
      <div className="container">
        <div className="max-w-3xl mb-14 text-center mx-auto">
          <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">WHY CHOOSE US?</div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-4">A company built on values & innovation</h2>
          <p className="text-muted-foreground">
            Corporate principles of values, innovation, and dedicated customer attention ensuring utmost quality and customer satisfaction.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <div key={r.title} className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5">
                <r.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-bold text-base leading-snug mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageShell>
);

export default About;
