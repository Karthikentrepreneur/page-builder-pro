import React, { useState } from "react";
import { useContent } from "@/hooks/useContent";

const LocationsSection: React.FC = () => {
  const { title, subtitle, locations } = useContent("locations_section");
  const [locationKey, setLocationKey] = useState<string>(locations[0]?.key ?? "");

  const active = locations.find((l) => l.key === locationKey) ?? locations[0];

  return (
    <section className="py-12 bg-white relative">
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3 text-gray-800">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            {subtitle}
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 max-w-7xl mx-auto px-4">
        {/* Tab Section - 30% */}
        <div className="w-full md:w-[30%] bg-gray-50 p-6 shadow rounded-lg flex flex-col gap-4">
          <h3 className="text-xl font-semibold mb-4 text-gray-700">Select Location</h3>

          {locations.map(({ key, label, caption }) => (
            <button
              key={key}
              onClick={() => setLocationKey(key)}
              className={`p-4 m-2 border rounded text-center flex flex-col items-center transition-all duration-200 ${
                locationKey === key
                  ? "bg-primary border-blue-600 text-white"
                  : "bg-white border-gray-300 text-gray-800"
              }`}
            >
              <span className="text-base font-semibold">{label}</span>
              <span className="text-sm">{caption}</span>
            </button>
          ))}
        </div>

        {/* Map Section - 70% */}
        <div className="w-full md:w-[70%] h-[480px] relative shadow-xl rounded-2xl overflow-hidden border border-gray-200/80 bg-gray-50">
          {active && (
            <iframe
              key={active.key}
              src={active.mapEmbedUrl}
              width="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${active.label} Office Location Map`}
              className="absolute -top-[68px] left-0 w-full h-[calc(100%+68px)]"
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
