import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { GradientBackground } from "@/components/GradientBackground";
import { useContent } from "@/hooks/useContent";
import { getIcon } from "@/lib/icons";
import { SeoHead } from "@/components/SeoHead";

const Services = () => {
  const { heroBadge, heroTitle, heroSubtitle, items, benefits, cta } = useContent("services_page");

  return <div className="min-h-screen flex flex-col">
      <SeoHead page="services" />
      <Header />

      {/* Hero Section with Gradient Background */}
      <GradientBackground className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center" variant="primary" intensity="medium" animated={true}>
        <div className="container mx-auto px-4 py-[36px]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-100 text-cyan-600 mb-6 py-[6px] px-[17px]  mt-20">
              <span className="font-medium">{heroBadge}</span>
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
              {heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-75">
              {heroSubtitle}
            </p>
          </div>
        </div>
      </GradientBackground>


      {/* Services Grid with Enhanced Design */}
      <section className="-mt-10 bg-white relative z-10 my-0 py-[89px]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((service, index) => {
              const Icon = getIcon(service.icon);
              const colors = [
                "from-blue-500/20 to-blue-600/20",
                "from-sky-500/20 to-sky-600/20",
                "from-cyan-500/20 to-cyan-600/20",
                "from-blue-600/20 to-indigo-600/20",
                "from-sky-400/20 to-blue-500/20",
                "from-cyan-500/20 to-blue-400/20",
              ];
              return (
                <Card
                  key={index}
                  className="group hover:shadow-2xl transition-all duration-500 animate-fade-in overflow-hidden border-none flex flex-col h-full bg-white rounded-2xl"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="relative h-56 flex-shrink-0 overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]} opacity-70`}></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    {service.badge && (
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                          {service.badge}
                        </span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6 rounded-b-2xl bg-slate-50 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="font-heading font-bold text-xl mb-3 text-gray-900 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 text-sm md:text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <Button variant="outline" className="w-full group mt-auto hover:bg-primary hover:text-white hover:border-primary transition-colors" asChild>
                      <Link to={service.link} className="flex items-center justify-between">
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-4">
              {benefits.title}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {benefits.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.items.map((benefit, index) => {
              const Icon = getIcon(benefit.icon);
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 flex flex-col h-full justify-between"
                >
                  <div>
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-xl mb-3 text-gray-900">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GradientBackground className="py-16" variant="accent" intensity="strong" animated={true}>
        <div className="container mx-auto px-4 py-[18px]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
              {cta.title}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              {cta.text}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="shadow-lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/about">Learn About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </GradientBackground>

      <Footer />
    </div>;
};
export default Services;
