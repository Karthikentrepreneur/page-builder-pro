import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Award, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useContent } from "@/hooks/useContent";
import { SeoHead } from "@/components/SeoHead";

const About = () => {
  const { heroTitle, heroSubtitle, whoWeAre, coreValues, cta } = useContent("about_page");

  return <div className="min-h-screen flex flex-col">
      <SeoHead page="about" />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 to-blue-50/20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">{heroTitle}</h1>
          <p className="text-xl text-gray-600">{heroSubtitle}</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">{whoWeAre.title}</h2>
            {whoWeAre.paragraphs.map((p, i) => (
              <p key={i} className="text-gray-600 mb-6 last:mb-0 leading-relaxed text-base">{p}</p>
            ))}
          </div>
          <div className="relative flex justify-center lg:justify-end my-[5px]">
            <div className="w-full max-w-md overflow-hidden rounded-2xl shadow-xl border-4 border-white">
              <AspectRatio ratio={1} className="bg-muted">
                <img src={whoWeAre.image} alt="Modern Office" className="w-full h-full object-cover transition-transform hover:scale-105 duration-700" />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-multiply my-0" />
              </AspectRatio>
            </div>
            <div className="absolute -bottom-5 -right-5 bg-white rounded-xl shadow-xl p-3 max-w-xs">
              <div className="flex items-center gap-2">
                <Award className="h-7 w-7 text-amber-500" />
                <p className="font-medium text-gray-800 text-sm">{whoWeAre.badgeText}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHIPSOFT Core Values Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center text-primary mb-12">{coreValues.title}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* Left: SHIPSOFT Acronym Breakdown with Descriptions */}
            <div className="space-y-4">
              {coreValues.items.map((item, index) => <div key={index} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary text-white font-bold rounded flex items-center justify-center text-xl">
                  {item.letter}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </div>)}
            </div>

            {/* Right: Image Section */}
            <div className="relative">
              <div className="rounded-xl overflow-hidden shadow-lg border-4 border-blue-200 my-0">
                <img alt="Team working with data" className="object-cover w-full h-full" src={coreValues.image} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-600 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">{cta.title}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{cta.text}</p>
          <Button size="lg" variant="outline" className="border-white bg-white text-primary">
            <Link to="/contact" className="flex items-center gap-2">
              {cta.buttonText}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>;
};
export default About;
