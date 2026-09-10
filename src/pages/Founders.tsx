import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Star, Calendar } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useContent } from "@/hooks/useContent";
import { SeoHead } from "@/components/SeoHead";

const Founders = () => {
  const location = useLocation();
  const { heroTitle, heroSubtitle, director, achievements, milestones, legacy, vision, cto } = useContent("founders_page");

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth"
          });
        }
      }, 100);
    }
  }, [location]);

  return <div className="min-h-screen flex flex-col bg-gradient-to-br from-white to-sky-50">
      <SeoHead page="our_team" />
      <Header />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-12 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4 text-gradient bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent animate-fade-in">{heroTitle}</h1>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">{heroSubtitle}</p>
            </div>

            {/* Director Profile */}
            <div className="max-w-6xl mx-auto mb-16">
              <Card className="border-none shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center gap-8">
                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl border-4 border-primary hover:scale-105 transition-transform duration-300">
                      <img alt={director.name} src={director.image} className="w-full h-full rounded-full object-contain" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900">{director.name}</h3>
                      <p className="text-primary text-xl md:text-2xl font-semibold mb-4">{director.role}</p>
                      <div className="prose max-w-none">
                        {director.bioParagraphs.map((p, i) => (
                          <p key={i} className={i === director.bioParagraphs.length - 1 ? "text-gray-700 mb-6" : "text-gray-700 mb-4"}>{p}</p>
                        ))}
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Areas of Expertise</h3>
                        <div className="flex flex-wrap gap-2 mb-6 justify-center">
                          {director.expertise.map((expertise, index) => <span key={index} className="px-3 py-1 bg-blue-100 text-primary rounded-full text-sm font-medium">
                              {expertise}
                            </span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Journey and Impact */}
            <section className="py-12 bg-gradient-to-br from-blue-50/20 to-white">
              <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                  <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 text-gradient bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
                    Professional Journey & Impact
                  </h2>
                  <p className="text-gray-600 max-w-2xl mx-auto">Decades of expertise and innovation transforming the logistics industry</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                  {/* Achievements */}
                  <Card className="border-none shadow-xl hover:shadow-2xl bg-slate-100 rounded-2xl">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 shadow-lg">
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">Key Achievements</h4>
                        <ul className="space-y-3">
                          {achievements.map((a, i) => <li key={i} className="flex items-center gap-3">
                              <div className="min-w-6 min-h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                <Star className="h-4 w-4 text-blue-500" />
                              </div>
                              <span className="text-gray-700">{a}</span>
                            </li>)}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Milestones */}
                  <Card className="border-none shadow-xl hover:shadow-2xl bg-white/80 rounded-2xl">
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg">
                          <Calendar className="h-6 w-6 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900">Career Milestones</h4>
                        <div className="border-l-2 border-gray-200 pl-6 space-y-6">
                          {milestones.map((m, i) => <div key={i} className="relative">
                              <div className="absolute -left-[30px] w-6 h-6 rounded-full bg-white border-2 border-primary flex items-center justify-center">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                              </div>
                              <div>
                                <div className="bg-blue-100 rounded-full px-3 py-1 text-sm text-primary font-medium inline-block mb-2">
                                  {m.year}
                                </div>
                                <p className="text-gray-700">{m.event}</p>
                              </div>
                            </div>)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Legacy and Vision */}
                <Card className="border-none shadow-xl hover:shadow-2xl bg-gradient-to-br from-blue-50 to-white mt-8 max-w-5xl mx-auto rounded-2xl">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900">{legacy.title}</h3>
                        {legacy.paragraphs.map((p, i) => (
                          <p key={i} className={i === legacy.paragraphs.length - 1 ? "text-gray-700" : "text-gray-700 mb-4"}>{p}</p>
                        ))}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-3 text-gray-900">{vision.title}</h3>
                        {vision.paragraphs.map((p, i) => (
                          <p key={i} className={i === vision.paragraphs.length - 1 ? "text-gray-700" : "text-gray-700 mb-4"}>{p}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* CTO Section */}
            <div id="cto" className="max-w-6xl mx-auto mt-12 scroll-mt-24">
              <Card className="border-none shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden bg-white rounded-3xl">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center gap-8">
                    <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-2xl border-4 border-primary hover:scale-105 transition-transform duration-300">
                      <img alt={cto.name} className="w-full h-full object-cover rounded-full" src={cto.image} />
                    </div>
                    <div className="text-center">
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 text-primary">{cto.name}</h3>
                      <p className="text-xl md:text-2xl mb-4 text-sky-500 font-semibold">{cto.role}</p>
                      <div className="prose max-w-none">
                        {cto.bioParagraphs.map((p, i) => (
                          <p key={i} className="text-gray-700 mb-4">{p}</p>
                        ))}
                        <h3 className="text-xl font-semibold mb-3 text-gray-800">Technological Expertise</h3>
                        <div className="flex flex-wrap gap-2 mb-6 justify-center">
                          {cto.expertise.map((item, index) => <span key={index} className="px-3 py-1 bg-blue-100 rounded-full text-sm font-medium text-primary">
                              {item}
                            </span>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Founders;
