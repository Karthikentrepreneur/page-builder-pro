import React from "react";
import { useContent } from "@/hooks/useContent";
import { getIcon } from "@/lib/icons";

export const IndiaMissionVision: React.FC = () => {
  const {
    title = "Mission & Vision",
    subtitle = "Revolutionizing logistics operations through innovation and expertise",
    mission = {
      image: "/vision.avif",
      icon: "TrendingUp",
      title: "Our Mission",
      text: "To help freight forwarders, shipping companies, and 3PL businesses digitize, streamline, and scale their operations through our expertise in technology and logistics.",
    },
    vision = {
      image: "/lovable-uploads/80922c9b-79f9-4226-8e07-491c1056064e.jpg",
      icon: "HeartHandshake",
      title: "Our Vision",
      text: "To become a trusted technology and business solutions partner for the global logistics industry, helping our clients embrace digital transformation and accelerate sustainable growth.",
    },
  } = useContent("home_mission_vision");

  const MissionIcon = getIcon(mission.icon || "TrendingUp");
  const VisionIcon = getIcon(vision.icon || "HeartHandshake");

  // Fix image path if missing leading slash
  const missionImg = mission.image?.startsWith("/") || mission.image?.startsWith("http")
    ? mission.image
    : `/${mission.image}`;
  const visionImg = vision.image?.startsWith("/") || vision.image?.startsWith("http")
    ? vision.image
    : `/${vision.image}`;

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 text-blue-800 font-semibold px-4 py-1 text-xs uppercase tracking-wider mb-3">
            Core Principles
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            {subtitle}
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Mission Card */}
          <div className="group rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col">
            <div className="relative h-64 overflow-hidden">
              <img
                src={missionImg}
                alt={mission.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-blue-600/90 text-white backdrop-blur-md shadow-lg">
                <MissionIcon className="h-6 w-6" />
              </div>
              <div className="absolute bottom-4 left-6 right-6">
                <h3 className="font-heading font-bold text-2xl text-white drop-shadow-md">
                  {mission.title}
                </h3>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <p className="text-slate-600 leading-relaxed text-base">
                {mission.text}
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group rounded-3xl overflow-hidden bg-white border border-slate-200/80 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col">
            <div className="relative h-64 overflow-hidden">
              <img
                src={visionImg}
                alt={vision.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />
              <div className="absolute top-4 left-4 p-3 rounded-2xl bg-sky-600/90 text-white backdrop-blur-md shadow-lg">
                <VisionIcon className="h-6 w-6" />
              </div>
              <div className="absolute bottom-4 left-6 right-6">
                <h3 className="font-heading font-bold text-2xl text-white drop-shadow-md">
                  {vision.title}
                </h3>
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <p className="text-slate-600 leading-relaxed text-base">
                {vision.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
