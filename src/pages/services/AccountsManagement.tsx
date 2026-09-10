import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GradientBackground } from "@/components/GradientBackground";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useContent } from "@/hooks/useContent";
import { getIcon } from "@/lib/icons";
import { SeoHead } from "@/components/SeoHead";

const AccountsManagement = () => {
  const { heroTitle, heroSubtitle, overviewTitle, overviewParagraphs, overviewImage, servicesTitle, servicesSubtitle, services, whyChooseTitle, whyChooseImage, benefits, whyChooseClosingText, ctaTitle, ctaText } = useContent("service_accountsmanagement");

  return <div className="min-h-screen flex flex-col">
      <SeoHead page="service_accountsmanagement" />
      <Header />

      {/* Hero Section with proper padding and alignment */}
      <GradientBackground className="pt-32 pb-20 flex items-center justify-center" variant="primary" intensity="medium" animated={true}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mt-20">
            <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
              {heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-75">
              {heroSubtitle}
            </p>
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-8 py-3" asChild>
              <Link to="/contact" className="flex items-center gap-2">
                Consult Our Experts
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
            <div className="order-2 lg:order-1">
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                {overviewTitle}
              </h2>
              {overviewParagraphs.map((p, i) => (
                <p key={i} className="text-gray-600 mb-6">{p}</p>
              ))}
              <div className="flex flex-wrap gap-4">
                <Button className="bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600" asChild>
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img alt="Accounts Management" className="w-full h-full object-cover" src={overviewImage} />
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = getIcon(service.icon);
              return <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white hover:-translate-y-1 rounded-2xl">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 mb-6">
                    <Icon className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>;
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-xl relative">
                  <img alt="Financial Growth" className="w-full h-full object-cover" src={whyChooseImage} />
                </div>
              </div>
              <div className="md:col-span-3">
                <h2 className="font-heading font-bold text-3xl mb-6">
                  {whyChooseTitle}
                </h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>)}
                </ul>
                <p className="mt-6 text-gray-600">
                  {whyChooseClosingText}
                </p>
                <Button className="mt-8 bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600" asChild>
                  <Link to="/contact" className="flex items-center gap-2">
                    Contact Us
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-500 to-violet-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl mb-6">
              {ctaTitle}
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              {ctaText}
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50" asChild>
              <Link to="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default AccountsManagement;
