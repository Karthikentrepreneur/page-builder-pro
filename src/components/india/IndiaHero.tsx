import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight, Shield, Sparkles, CheckCircle2 } from "lucide-react";
import { useContent } from "@/hooks/useContent";

export const IndiaHero: React.FC = () => {
  const { backgroundImages = [], backgroundCaptions = [] } = useContent("hero");
  const [currentIdx, setCurrentIdx] = useState(0);

  const images = backgroundImages.length > 0 ? backgroundImages : ["/1h.png", "/15h.png", "/14h.png", "/16h.png", "/18h.png", "/17h.png"];
  const captions = backgroundCaptions.length > 0 ? backgroundCaptions : [
    "Documentation Services",
    "Sales Support Desk",
    "Finance Management",
    "Software Solutions",
    "Customer Service & Nomination",
  ];

  // Auto-advance slides every 5.5s
  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const currentCaption = captions[currentIdx % captions.length] || captions[0];

  return (
    <section className="relative min-h-[86vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {images.map((img: string, idx: number) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentIdx ? "opacity-45 scale-100" : "opacity-0 scale-105 pointer-events-none"
            }`}
            style={{ transitionProperty: "opacity, transform", transitionDuration: "1200ms" }}
          >
            <img
              src={img}
              alt={captions[idx % captions.length] || "Shipsoft Logistics Solutions"}
              className="h-full w-full object-cover object-center"
            />
          </div>
        ))}
        {/* Layered overlays for crystal-clear readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(59,130,246,0.3),rgba(255,255,255,0))]" />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 lg:py-28 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-md animate-fade-in">
          <Sparkles className="h-4 w-4 text-blue-400 animate-pulse" />
          <span>Premier Logistics Software & KPO Partner in India</span>
        </div>

        {/* Heading */}
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight max-w-5xl leading-[1.12]">
          Intelligent Software & Operations for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-300 to-indigo-300">
            Global Logistics
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed">
          Shipsoft Solutions Pvt Ltd delivers next-generation Freight, Warehouse & Transport Management
          platforms paired with dedicated operational support to scale your logistics operations.
        </p>

        {/* Feature Highlights */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span>Custom FMS, TMS & WMS</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
            <CheckCircle2 className="h-4 w-4 text-blue-400" />
            <span>24/7 Dedicated Support Desk</span>
          </div>
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
            <CheckCircle2 className="h-4 w-4 text-indigo-400" />
            <span>End-to-End Documentation</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-500/25 px-8 py-6 text-base font-semibold rounded-xl" asChild>
            <Link to="/services" className="flex items-center gap-2">
              <span>Explore Services</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md px-8 py-6 text-base font-medium rounded-xl" asChild>
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>

        {/* Active Slide Caption Badge */}
        {currentCaption && (
          <div className="mt-12 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/40 border border-white/10 backdrop-blur-md text-xs sm:text-sm text-slate-300">
            <Shield className="h-4 w-4 text-sky-400" />
            <span>Specialization:</span>
            <span className="font-semibold text-white">{currentCaption}</span>
          </div>
        )}
      </div>

      {/* Carousel Controls */}
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-slate-900/60 hover:bg-slate-800 text-white border border-white/10 backdrop-blur-md transition"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next Slide"
            className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 items-center justify-center rounded-full bg-slate-900/60 hover:bg-slate-800 text-white border border-white/10 backdrop-blur-md transition"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 z-20 flex gap-2">
            {images.map((_: string, idx: number) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIdx(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIdx ? "w-8 bg-blue-400" : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
};
