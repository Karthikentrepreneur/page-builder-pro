import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GradientBackground } from "@/components/GradientBackground";
import { Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useContent } from "@/hooks/useContent";
import { getIcon } from "@/lib/icons";
import { SeoHead } from "@/components/SeoHead";

const SalesSupport = () => {
  const { badge, heroTitle, heroSubtitle, benefitsTitle, benefitsSubtitle, benefits, processTitle, processSubtitle, steps, testimonial, ctaTitle, ctaText } = useContent("service_salessupport");

  return <div className="min-h-screen flex flex-col">
      <SeoHead page="service_salessupport" />
      <Header />

      {/* Hero Section */}
    <GradientBackground className="pt-32 pb-16 min-h-[50vh] flex items-center justify-center" variant="secondary" intensity="medium" animated={true}>
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col items-center gap-8">
        <div className="flex-1 text-center mt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Users className="h-8 w-8" />
            <span className="text-xl font-bold">{badge}</span>
          </div>
          <h1 className="font-heading font-bold text-3xl md:text-5xl mb-6 animate-fade-in">
            {heroTitle}
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            {heroSubtitle}
          </p>
          <Button className="mt-2" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
    </GradientBackground>

    {/* Key Benefits Section */}
    <section className="py-20">
  <div className="container mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">{benefitsTitle}</h2>
      <p className="text-gray-600 max-w-2xl mx-auto">
        {benefitsSubtitle}
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {benefits.map((benefit, index) => {
        const Icon = getIcon(benefit.icon);
        return <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 bg-slate-50">
          <CardContent className="p-8 bg-slate-50">
            <div className="mb-6 inline-block p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <Icon className="h-12 w-12 text-primary" />
            </div>
            <h3 className="font-heading font-bold text-xl mb-4 group-hover:text-primary transition-colors">
              {benefit.title}
            </h3>
            <p className="text-gray-600">
              {benefit.description}
            </p>
          </CardContent>
        </Card>;
      })}
    </div>
  </div>
    </section>


      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">{processTitle}</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {processSubtitle}
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[21px] top-0 bottom-0 w-1 bg-primary/20 hidden md:block"></div>

              {steps.map((item, index) => <div key={index} className="flex gap-6 mb-12 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg z-10">
                    {item.step}
                  </div>
                  <div className="flex-grow pt-1">
                    <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="bg-primary p-10 text-white">
                    <div className="text-5xl mb-6 opacity-80">"</div>
                    <p className="text-lg mb-8 italic">
                      {testimonial.quote}
                    </p>
                    <div>
                      <p className="font-bold text-lg">{testimonial.author}</p>
                      <p className="opacity-80">{testimonial.position}</p>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <img src={testimonial.image} alt="Team collaborating" className="w-full h-full object-cover" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <GradientBackground className="py-20" variant="primary" intensity="strong" animated={true}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6">
              {ctaTitle}
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              {ctaText}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="shadow-lg" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Contact Us Today
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </GradientBackground>

      <Footer />
    </div>;
};
export default SalesSupport;