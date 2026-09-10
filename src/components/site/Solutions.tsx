import { ArrowRight, Users, Truck, Warehouse, DollarSign, Package, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  { icon: Users, title: "Customer Relationship Management", desc: "Centralizes customer interactions, lead generation, and shipment histories to build stronger, long-term client relationships.", color: "cat-blue", to: "/modules/crm" },
  { icon: Truck, title: "Freight Management System", desc: "Simplifies freight operations from booking to delivery, ensuring every shipment arrives on time.", color: "cat-violet", to: "/modules/freight" },
  { icon: Warehouse, title: "Warehouse Management System", desc: "Keeps your warehouse running smoothly — from stock intake to dispatch, every item in its right place.", color: "cat-green", to: "/modules/warehouse" },
  { icon: DollarSign, title: "Accounts Management System", desc: "Powers your financial operations globally tracking invoices, payments, and expenses with complete accuracy and confidence.", color: "cat-orange", to: "/modules/accounts" },
  { icon: Package, title: "Distribution Management System", desc: "Drives your distribution network globally — managing orders, deliveries, and supply flow with speed and total precision.", color: "cat-purple", to: "/modules/distribution" },
  { icon: ShoppingCart, title: "e-Commerce", desc: "Connects your online business to the world — handling orders, shipments, and returns with effortless speed and reliability.", color: "cat-pink", to: "/modules/distribution" },
];

const Solutions = () => {
  return (
    <section className="py-20 lg:py-28 bg-surface-soft">
      <div className="container grid lg:grid-cols-3 gap-10">
        <div className="lg:pr-8">
          <div className="text-xs font-bold tracking-[0.2em] text-primary mb-4">ONE PLATFORM</div>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            One platform to manage, optimize, and scale your logistics operations.
          </h2>
          <p className="text-muted-foreground mb-4">
            Shipping powers the world's trade, yet many companies still battle with fragmented workflows and outdated systems. That's what Shipsoft wanted to do, be a logistics ERP and supply chain management platform designed to solve these types of problems.
          </p>
          <p className="text-muted-foreground">
            It brings all your operations together in one system integrating processes, and providing real-time visibility so your business can run smarter and more efficiently.
          </p>
        </div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((s) => (
            <Link key={s.title} to={s.to} className="group bg-card rounded-2xl p-6 shadow-card hover:shadow-float transition-all hover:-translate-y-1 border border-border/50 block">
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: `hsl(var(--${s.color}) / 0.12)` }}
              >
                <s.icon className="h-6 w-6" style={{ color: `hsl(var(--${s.color}))` }} />
              </div>
              <h3 className="font-bold text-lg leading-snug mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
              <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
