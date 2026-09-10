import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GradientBackground } from "@/components/GradientBackground";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import { useContent } from "@/hooks/useContent";
import { getIcon } from "@/lib/icons";
import { SeoHead } from "@/components/SeoHead";

const SoftwareSolutions = () => {
  const { badge, heroTitle, heroSubtitle, overviewTitle, overviewParagraphs, overviewImage, overviewCaptionTitle, overviewCaptionDesc, solutionsTitle, solutionsSubtitle, solutions, processTitle, processSubtitle, steps, featuresTitle, featuresParagraph, features, featuresImage, featuresCaptionTitle, featuresCaptionDesc, ctaTitle, ctaText } = useContent("service_softwaresolutions");

  return <div className="min-h-screen flex flex-col">
      <SeoHead page="service_softwaresolutions" />
      <Header />

      {/* Hero Section */}
    <GradientBackground className="pt-32 pb-20 min-h-[60vh] flex items-center justify-center" variant="primary" intensity="medium" animated={true}>
  <div className="container mx-auto px-4">
    <div className="max-w-3xl mx-auto text-center mt-10">
      <div className="inline-flex items-center gap-2 text-purple-600 mb-6">
        <Shield className="h-8 w-8" />
       <span className="text-xl font-bold">{badge}</span>
      </div>
      <h1 className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl mb-6 animate-fade-in">
        {heroTitle}
      </h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8 animate-fade-in delay-75">
        {heroSubtitle}
      </p>
      <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl px-8 py-3" asChild>
        <Link to="/contact" className="flex items-center gap-2">
          Discuss Your Project
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
                <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600" asChild>
                  <Link to="/contact">Request a Consultation</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img src={overviewImage} alt="Software Development" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{overviewCaptionTitle}</h3>
                <p className="text-white/80">{overviewCaptionDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              {solutionsTitle}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {solutionsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {solutions.map((solution, index) => {
              const Icon = getIcon(solution.icon);
              return <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden bg-white hover:-translate-y-1 rounded-2xl">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-cyan-100 mb-6">
                    <Icon className="h-8 w-8 text-cyan-600" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{solution.title}</h3>
                  <p className="text-gray-600">{solution.description}</p>
                </CardContent>
              </Card>;
            })}
          </div>
        </div>
      </section>

      {/* Development Process */}
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
            <div className="relative">
              {steps.map((step, index) => <div key={index} className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16 items-center">
                  <div className="md:col-span-1 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white text-2xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="md:col-span-4">
                    <h3 className="font-heading font-bold text-xl mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && <div className="hidden md:block md:col-span-5 h-10">
                      <div className="h-full w-px bg-gray-200 mx-auto"></div>
                    </div>}
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6">
                {featuresTitle}
              </h2>
              <p className="text-gray-600 mb-8">
                {featuresParagraph}
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>)}
              </ul>
              <Button className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  Discuss Your Requirements
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img src={featuresImage} alt="Development Team" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"></div>
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{featuresCaptionTitle}</h3>
                <p className="text-white/80">{featuresCaptionDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl mb-6">
              {ctaTitle}
            </h2>
            <p className="text-white/90 mb-8 text-lg">
              {ctaText}
            </p>
            <Button size="lg" className="bg-white text-cyan-600 hover:bg-cyan-50" asChild>
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default SoftwareSolutions;
