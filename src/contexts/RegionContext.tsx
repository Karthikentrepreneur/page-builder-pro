import React, { createContext, useContext, useEffect, useState } from "react";
import { Globe } from "lucide-react";

export type Region = "IN" | "global";

interface RegionContextType {
  region: Region;
  isIndia: boolean;
  detectedCountry: string | null;
  isLoading: boolean;
  setRegion: (region: Region) => void;
}

const RegionContext = createContext<RegionContextType>({
  region: "global",
  isIndia: false,
  detectedCountry: null,
  isLoading: true,
  setRegion: () => {},
});

const STORAGE_KEY = "shipsoft_user_region";

export const RegionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [region, setRegionState] = useState<Region>(() => {
    // 1. Check URL query parameters first (?region=in or ?country=in)
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const urlRegion = params.get("region") || params.get("country");
      if (urlRegion) {
        const norm = urlRegion.trim().toUpperCase();
        if (norm === "IN" || norm === "INDIA") return "IN";
        if (norm === "GLOBAL" || norm === "INTL" || norm === "WORLD") return "global";
      }

      // 2. Check localStorage next
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "IN" || stored === "global") {
        return stored;
      }
    }
    return "global";
  });

  const [detectedCountry, setDetectedCountry] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const setRegion = (newRegion: Region) => {
    setRegionState(newRegion);
    try {
      localStorage.setItem(STORAGE_KEY, newRegion);
    } catch (_) {}
  };

  useEffect(() => {
    // Check if user explicitly set via URL parameter
    const params = new URLSearchParams(window.location.search);
    const urlRegion = params.get("region") || params.get("country");
    if (urlRegion) {
      const norm = urlRegion.trim().toUpperCase();
      if (norm === "IN" || norm === "INDIA") {
        setRegion("IN");
        setIsLoading(false);
        return;
      }
      if (norm === "GLOBAL" || norm === "INTL" || norm === "WORLD") {
        setRegion("global");
        setIsLoading(false);
        return;
      }
    }

    // If already stored in localStorage, respect user's manual preference
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "IN" || stored === "global") {
      setRegionState(stored);
      setIsLoading(false);
      return;
    }

    // Otherwise detect by IP
    let cancelled = false;

    async function detectCountry() {
      try {
        // Step 1: Try our backend API endpoint (/api/geo)
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);
        const res = await fetch("/api/geo", { signal: controller.signal });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          if (data.country) {
            if (!cancelled) {
              setDetectedCountry(data.country);
              const isInd = data.isIndia || data.country === "IN";
              setRegionState(isInd ? "IN" : "global");
              setIsLoading(false);
            }
            return;
          }
        }
      } catch (_) {
        // Fall through to public client-side IP lookup
      }

      try {
        // Step 2: Fallback to fast public IP lookup
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2500);
        // api.country.is is fast, CORS-friendly and free
        const res = await fetch("https://api.country.is/", { signal: controller.signal });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          const code = (data.country || "").toUpperCase();
          if (!cancelled) {
            setDetectedCountry(code);
            setRegionState(code === "IN" ? "IN" : "global");
            setIsLoading(false);
          }
          return;
        }
      } catch (_) {}

      try {
        // Step 3: Secondary public fallback
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2500);
        const res = await fetch("https://ipapi.co/json/", { signal: controller.signal });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          const code = (data.country_code || "").toUpperCase();
          if (!cancelled) {
            setDetectedCountry(code);
            setRegionState(code === "IN" ? "IN" : "global");
            setIsLoading(false);
          }
          return;
        }
      } catch (_) {}

      if (!cancelled) {
        setIsLoading(false);
      }
    }

    detectCountry();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <RegionContext.Provider
      value={{
        region,
        isIndia: region === "IN",
        detectedCountry,
        isLoading,
        setRegion,
      }}
    >
      {children}
    </RegionContext.Provider>
  );
};

export const useRegion = () => useContext(RegionContext);

export const RegionSwitcher: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { region, setRegion } = useRegion();

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full p-0.5 border border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-900/90 text-xs font-medium backdrop-blur shadow-sm ${className}`}
    >
      <button
        type="button"
        onClick={() => setRegion("IN")}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-200 ${
          region === "IN"
            ? "bg-primary text-white shadow-sm font-semibold"
            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
        }`}
        title="Switch to Shipsoft Solutions (India)"
      >
        <span>🇮🇳</span>
        <span>India</span>
      </button>

      <button
        type="button"
        onClick={() => setRegion("global")}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full transition-all duration-200 ${
          region === "global"
            ? "bg-primary text-white shadow-sm font-semibold"
            : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
        }`}
        title="Switch to Shipsoft ERP (Global)"
      >
        <Globe className="h-3 w-3" />
        <span>Global</span>
      </button>
    </div>
  );
};
