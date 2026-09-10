import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { cn } from "@/lib/utils";

interface MapComponentProps {
  className?: string;
  locations?: {
    title: string;
    description: string;
    coordinates: [number, number];
  }[];
  showPopup?: boolean;
}

export const MapComponent = ({
  className,
  locations = [],
  showPopup = false,
}: MapComponentProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainer.current) return;

    // Prevent duplicate map initialization
    if (mapRef.current) {
      mapRef.current.remove();
      mapRef.current = null;
    }

    const defaultLocations = [
      {
        title: "MK Insignia, Kolkata",
        description: "Our main headquarters",
        coordinates: [22.5726, 88.4284] as [number, number],
      },
      {
        title: "MK Tower, New Delhi",
        description: "Our northern India office",
        coordinates: [28.6139, 77.209] as [number, number],
      },
    ];

    const mapLocations =
      locations.length > 0 ? locations : defaultLocations;

    const firstLocation =
      mapLocations[0]?.coordinates || [80.2707, 13.0827];

    // Create map
    const map = L.map(mapContainer.current, {
      center: firstLocation,
      zoom: 10,
      zoomControl: true,
      scrollWheelZoom: true,
    });

    mapRef.current = map;

    // OpenStreetMap tiles
    L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }
    ).addTo(map);

    // Custom marker icon
    const customIcon = L.divIcon({
      className: "custom-map-marker",
      html: `
        <div class="marker-wrapper">
          <div class="marker-pulse"></div>
          <div class="marker-main">
            <div class="marker-dot"></div>
          </div>
        </div>
      `,
      iconSize: [32, 32],
      iconAnchor: [16, 16],
      popupAnchor: [0, -18],
    });

    // Add markers
    mapLocations.forEach((location) => {
      const popupContent = `
        <div class="custom-popup-content">
          <h3>${location.title}</h3>
          <p>${location.description}</p>
        </div>
      `;

      L.marker(location.coordinates, {
        icon: customIcon,
      })
        .addTo(map)
        .bindPopup(popupContent, {
          maxWidth: 300,
          closeButton: true,
        });
    });

    // Fit all markers if multiple locations
    if (mapLocations.length > 1) {
      const bounds = L.latLngBounds(
        mapLocations.map((location) => location.coordinates)
      );

      map.fitBounds(bounds, {
        padding: [50, 50],
      });
    }

    // Custom styling
    const style = document.createElement("style");

    style.textContent = `
      .custom-map-marker {
        background: transparent;
        border: none;
      }

      .marker-wrapper {
        position: relative;
        width: 32px;
        height: 32px;
      }

      .marker-pulse {
        position: absolute;
        inset: 0;
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: rgba(31, 41, 55, 0.25);
        animation: marker-pulse 3s infinite;
      }

      .marker-main {
        position: absolute;
        top: 4px;
        left: 4px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #1f2937;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 3px 10px rgba(0, 0, 0, 0.25);
      }

      .marker-dot {
        width: 10px;
        height: 10px;
        background: white;
        border-radius: 50%;
      }

      @keyframes marker-pulse {
        0% {
          transform: scale(0.8);
          opacity: 0.7;
        }

        70% {
          transform: scale(1.5);
          opacity: 0;
        }

        100% {
          transform: scale(1.5);
          opacity: 0;
        }
      }

      .leaflet-popup-content-wrapper {
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      }

      .leaflet-popup-content {
        margin: 0;
        padding: 0;
      }

      .custom-popup-content {
        padding: 14px 16px;
        min-width: 200px;
      }

      .custom-popup-content h3 {
        margin: 0 0 6px;
        font-size: 17px;
        font-weight: 700;
        color: #1f2937;
      }

      .custom-popup-content p {
        margin: 0;
        font-size: 14px;
        color: #6b7280;
      }

      .leaflet-control-zoom {
        border-radius: 8px !important;
        overflow: hidden;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1) !important;
      }

      .leaflet-control-zoom a {
        width: 36px !important;
        height: 36px !important;
        line-height: 36px !important;
      }

      .leaflet-control-attribution {
        font-size: 10px;
      }
    `;

    document.head.appendChild(style);

    // Fix map sizing after render
    setTimeout(() => {
      map.invalidateSize();
    }, 100);

    return () => {
      map.remove();
      mapRef.current = null;

      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, [locations]);

  return (
    <div
      className={cn(
        "relative w-full h-96 rounded-xl overflow-hidden shadow-lg",
        className
      )}
    >
      <div
        ref={mapContainer}
        className="w-full h-full"
      />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent pointer-events-none z-[400]" />

      {/* Location information */}
      {showPopup && (
        <div className="absolute bottom-4 left-4 z-[500] p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-md max-w-sm">
          <h3 className="font-bold text-gray-800 mb-1">
            Our Locations
          </h3>

          <p className="text-sm text-gray-600">
            Explore our global presence. Click on markers to see
            location details.
          </p>
        </div>
      )}
    </div>
  );
};