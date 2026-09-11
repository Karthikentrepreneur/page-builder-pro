import { useState, useEffect } from "react";

export function useIsIndia(): boolean | null {
  const [isIndia, setIsIndia] = useState<boolean | null>(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const c = (params.get("country") || params.get("region") || "").toUpperCase();
      if (c === "IN" || c === "INDIA") return true;
      if (c === "GLOBAL" || c === "INTL" || c === "WORLD") return false;
      const stored = localStorage.getItem("user_is_india");
      if (stored === "true") return true;
      if (stored === "false") return false;
    }
    return null;
  });

  useEffect(() => {
    if (isIndia !== null) return;

    let cancelled = false;

    async function checkGeo() {
      // 1. Try server geo endpoint
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);
        const res = await fetch("/api/geo", { signal: controller.signal });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          if (data.country && !cancelled) {
            const ind = data.isIndia || data.country === "IN";
            setIsIndia(ind);
            try {
              localStorage.setItem("user_is_india", String(ind));
            } catch (e) {
        void e;
      }
            return;
          }
        }
      } catch (e) {
        void e;
      }

      // 2. Client-side fallback
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 2000);
        const res = await fetch("https://api.country.is/", { signal: controller.signal });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          const country = (data.country || "").toUpperCase();
          if (!cancelled) {
            const ind = country === "IN";
            setIsIndia(ind);
            try {
              localStorage.setItem("user_is_india", String(ind));
            } catch (e) {
        void e;
      }
            return;
          }
        }
      } catch (e) {
        void e;
      }

      if (!cancelled) {
        setIsIndia(false);
      }
    }

    checkGeo();

    return () => {
      cancelled = true;
    };
  }, [isIndia]);

  return isIndia;
}
