import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Award } from "lucide-react";
import { useContent } from "@/hooks/useContent";
import { getIcon } from "@/lib/icons";

export const IndiaAboutSection: React.FC = () => {
  const {
    title = "Shipsoft Solutions Pvt Ltd",
    paragraphs = [],
    image = "/lovable-uploads/04a753dd-ba7f-4011-8785-b8ca9ae84e26.png",
    badges = [],
    floatingCard = { title: "Always Available", desc: "24/7 technical and operational support" },
    cta = { text: "Learn More About Us", link: "/about" },
  } = useContent("home_about");

  const defaultParagraphs = [
    "Shipsoft Solutions Pvt Ltd is a logistics technology and software solutions company focused on helping freight forwarders, shipping companies, and 3PL businesses digitize, streamline, and scale their operations.",
    "Our core strength is in logistics software and digital transformation—including Freight Management Systems (FMS), Transport Management Systems (TMS), Warehouse Management Systems (WMS), workflow automation, and AI-enabled logistics solutions, backed by specialized operational support.",
  ];

  const displayParagraphs = paragraphs.length > 0 ? paragraphs : defaultParagraphs;

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column with Floating Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Background gradient blur */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-sky-400/20 rounded-3xl filter blur-2xl -z-10" />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img
                  src={image || "/lovable-uploads/04a753dd-ba7f-4011-8785-b8ca9ae84e26.png"}
                  alt={title}
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              {floatingCard && (
                <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl border border-slate-100 max-w-xs animate-fade-in">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">{floatingCard.title}</h4>
                      <p className="text-xs text-slate-500">{floatingCard.desc}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Experience Badge */}
              <div className="absolute -top-4 -left-4 bg-blue-600 text-white px-4 py-2.5 rounded-2xl shadow-lg flex items-center gap-2">
                <Award className="h-5 w-5 text-amber-300" />
                <span className="text-xs font-semibold uppercase tracking-wider">Trusted Technology Partner</span>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 font-semibold px-4 py-1 text-xs uppercase tracking-wider w-fit mb-4">
              About Shipsoft Solutions
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight leading-tight mb-6">
              {title}
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed text-base sm:text-lg mb-8">
              {displayParagraphs.map((paragraph: string, idx: number) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Badges Grid */}
            {badges && badges.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {badges.map((b: { icon: string; title: string; desc: string }, i: number) => {
                  const Icon = getIcon(b.icon);
                  return (
                    <div
                      key={i}
                      className="p-4 rounded-xl border border-slate-200/80 bg-slate-50/50 hover:bg-white hover:border-blue-300 transition-all duration-300 hover:shadow-md"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-blue-600/10 text-blue-600 shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-slate-900 text-sm mb-0.5">{b.title}</h4>
                          <p className="text-xs text-slate-500 leading-snug">{b.desc}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* CTA Link */}
            {cta && (
              <div>
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-md" asChild>
                  <Link to={cta.link || "/about"} className="flex items-center gap-2">
                    <span>{cta.text || "Learn More About Us"}</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
