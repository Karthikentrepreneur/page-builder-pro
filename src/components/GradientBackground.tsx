import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
interface GradientBackgroundProps {
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "accent";
  animated?: boolean;
  intensity?: "light" | "medium" | "strong";
}
export const GradientBackground = ({
  className,
  children,
  variant = "primary",
  animated = false,
  intensity = "medium"
}: GradientBackgroundProps) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const ref = useRef<HTMLDivElement>(null);

  // Get gradient color based on variant
  const getGradient = () => {
    // Ensure intensity is a valid value
    const validIntensity = ["light", "medium", "strong"].includes(intensity) ? intensity : "medium";
    const intensityMap = {
      light: {
        fromOpacity: "5",
        viaOpacity: "3",
        toOpacity: "1"
      },
      medium: {
        fromOpacity: "10",
        viaOpacity: "5",
        toOpacity: "3"
      },
      strong: {
        fromOpacity: "20",
        viaOpacity: "10",
        toOpacity: "5"
      }
    };
    const {
      fromOpacity,
      viaOpacity,
      toOpacity
    } = intensityMap[validIntensity];
    switch (variant) {
      case "primary":
        return `from-primary/${fromOpacity} via-accent/${viaOpacity} to-background`;
      case "secondary":
        return `from-accent/${fromOpacity} via-primary/${viaOpacity} to-background`;
      case "accent":
        return `from-accent/${fromOpacity} via-background/${viaOpacity} to-primary/${toOpacity}`;
      default:
        return `from-primary/${fromOpacity} via-accent/${viaOpacity} to-background`;
    }
  };

  // Handle mouse move for interactive gradient
  useEffect(() => {
    if (!animated || !ref.current) return;
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width * 100;
      const y = (e.clientY - rect.top) / rect.height * 100;
      setMousePosition({
        x,
        y
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [animated]);

  // Calculate transform styles based on mouse position
  const gradientStyle = animated ? {
    backgroundPosition: `${mousePosition.x}% ${mousePosition.y}%`
  } : {};
  return <div ref={ref} className="">
      <div style={gradientStyle} className="" />
      <div style={gradientStyle} className="py-0 mx-0" />
      <div className="">{children}</div>
    </div>;
};