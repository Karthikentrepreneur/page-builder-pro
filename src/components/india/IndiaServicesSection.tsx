import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useContent } from "@/hooks/useContent";
import { getIcon } from "@/lib/icons";

interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  image: string;
  link: string;
  badge?: string;
}

export const IndiaServicesSection: React.FC = () => {
  const { title = "Our Services", subtitle = "We offer comprehensive solutions tailored for the freight forwarding and logistics industry.", items = [] } =
    useContent("home_services");

  const defaultItems: ServiceItem[] = [
    { icon: "Shield", title: "Software Solutions", description: "Custom software development following industry best practices.", image: "/13.png", link: "/services/SoftwareSolutions" },
    { icon: "FileCheck", title: "Documentation Services", description: "Expert documentation handling including invoices, credit notes, and job profit statements.", image: "/1.png", link: "/services/documentation" },
    { icon: "Users", title: "Sales Support Desk", description: "Centralized sales support for lead management and customer relationships.", image: "/2.png", link: "/services/salessupport" },
    { icon: "Building2", title: "Financial Management", description: "Professional accounting services for trade and non-trade transactions.", image: "/account.png", link: "/services/FinancialManagement" },
    { icon: "Headset", title: "Customer Service", description: "Dedicated customer service team for bookings and nominations.", image: "/12.png", link: "/services/customerservice" },
  ];

  const serviceList: ServiceItem[] = items.length > 0 ? items : defaultItems;

  return (
    <section className="py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-800 font-semibold px-4 py-1 text-xs uppercase tracking-wider mb-3">
            What We Deliver
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceList.map((service, index) => {
            const Icon = getIcon(service.icon);
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200/80 rounded-2xl flex flex-col h-full bg-white hover:-translate-y-1"
              >
                {/* Image header */}
                <div className="relative h-52 overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-md">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  {service.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                        {service.badge}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-heading font-bold text-xl text-white drop-shadow-sm group-hover:text-blue-200 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <CardContent className="p-6 flex flex-col flex-1 justify-between bg-slate-50/50">
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors rounded-xl flex items-center justify-between"
                    asChild
                  >
                    <Link to={service.link}>
                      <span>Explore Service</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View all services button */}
        <div className="mt-14 text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg px-8" asChild>
            <Link to="/services" className="flex items-center gap-2">
              <span>View All Services & Capabilities</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
