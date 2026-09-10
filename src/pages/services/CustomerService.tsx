import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GradientBackground } from "@/components/GradientBackground";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Headset } from "lucide-react";
import { useContent } from "@/hooks/useContent";
import { getIcon } from "@/lib/icons";
import { SeoHead } from "@/components/SeoHead";

const CustomerService = () => {
  const { badge, heroTitle, heroSubtitle, overviewTitle, overviewParagraphs, overviewImage, overviewCaptionTitle, overviewCaptionDesc, servicesTitle, servicesSubtitle, services, processTitle, processSubtitle, steps, benefitsTitle, benefitsSubtitle, benefits, ctaTitle, ctaText } = useContent("service_customerservice");

  return <div className="min-h-screen flex flex-col">
      <SeoHead page="service_customerservice" />
      <Header />

     {/* Hero Section */}
    <GradientBackground className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center" variant="primary" intensity="medium" animated={true}>
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center mt-10">
      <div className="inline-flex items-center gap-2 text-purple-600 mb-6">
        <Headset className="h-8 w-8" />
        <span className="text-xl font-bold">{badge}</span>
      </div>
      <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
        {heroTitle}
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-75">
        {heroSubtitle}
      </p>
      <Button size="lg" className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-8 py-3" asChild>
        <Link to="/contact" className="flex items-center gap-2">
          Explore Our Solutions
          <ArrowRight className="h-5 w-5" />
        </Link>
      </Button>
    </div>
  </div>
    </GradientBackground>


      {/* Service Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                {overviewTitle}
              </h2>
              {overviewParagraphs.map((p, i) => (
                <p key={i} className="text-gray-600 mb-6">{p}</p>
              ))}
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600" asChild>
                  <Link to="/contact">Discuss Your Needs</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img src={overviewImage} alt="Customer Service Team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{overviewCaptionTitle}</h3>
                <p className="text-white/80">{overviewCaptionDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              {servicesTitle}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {servicesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = getIcon(service.icon);
              return <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white hover:-translate-y-1 rounded-2xl">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-100 mb-6">
                    <Icon className="h-8 w-8 text-pink-600" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>;
            })}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              {processTitle}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {processSubtitle}
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, index) => <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-pink-50 to-white group hover:-translate-y-1 rounded-2xl">
                  <CardContent className="p-8">
                    <div className="text-3xl font-bold text-pink-500 mb-4">{step.number}</div>
                    <h3 className="font-heading font-bold text-xl mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              {benefitsTitle}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {benefitsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = getIcon(benefit.icon);
              return <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-pink-100 mb-4">
                  <Icon className="h-7 w-7 text-pink-600" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>;
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pink-500 to-rose-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl mb-6">
              {ctaTitle}
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              {ctaText}
            </p>
            <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default CustomerService;
